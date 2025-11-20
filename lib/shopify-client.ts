import { revalidateTag } from "next/cache"
import { env } from "@/lib/env"

const SHOPIFY_STORE_DOMAIN = "momentpickleball.myshopify.com"
const SHOPIFY_STOREFRONT_API_VERSION = "2025-01"
const SHOPIFY_ADMIN_API_VERSION = "2025-01"

// Storefront API
export const STOREFRONT_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`
export const STOREFRONT_ACCESS_TOKEN = env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

// Admin API (optional, for counts)
export const ADMIN_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${SHOPIFY_ADMIN_API_VERSION}/graphql.json`
export const ADMIN_ACCESS_TOKEN = env.SHOPIFY_ADMIN_API_ACCESS_TOKEN

export const WEBHOOK_SECRET = env.SHOPIFY_WEBHOOK_SECRET

interface GraphQLResponse<T> {
  data: T
  errors?: Array<{ message: string; extensions?: any }>
}

interface PageInfo {
  hasNextPage: boolean
  endCursor: string | null
}

// Retry helper with exponential backoff
async function fetchWithRetry(url: string, options: RequestInit, maxRetries = 3): Promise<Response> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options)

      if (response.status === 429) {
        const retryAfter = Number.parseInt(response.headers.get("Retry-After") || "2", 10)
        console.log(`[Shopify] Rate limited. Waiting ${retryAfter}s before retry ${attempt + 1}/${maxRetries}`)
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000))
        continue
      }

      return response
    } catch (error) {
      if (attempt === maxRetries) throw error
      const backoff = Math.pow(2, attempt) * 1000
      console.log(`[Shopify] Fetch error. Retrying in ${backoff}ms...`)
      await new Promise((resolve) => setTimeout(resolve, backoff))
    }
  }
  throw new Error("Max retries exceeded")
}

// Storefront GraphQL client
export async function storefrontFetch<T>({
  query,
  variables = {},
  tags,
}: {
  query: string
  variables?: Record<string, any>
  tags?: string[]
}): Promise<GraphQLResponse<T>> {
  if (!STOREFRONT_ACCESS_TOKEN) {
    throw new Error("Missing SHOPIFY_STOREFRONT_ACCESS_TOKEN")
  }

  const response = await fetchWithRetry(STOREFRONT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: tags ? { tags } : { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(`Storefront API error: ${response.status}`)
  }

  const json = await response.json()

  if (json.errors) {
    console.error("[Shopify Storefront] GraphQL errors:", json.errors)
  }

  return json
}

// Admin GraphQL client (optional, for counts)
export async function adminFetch<T>({
  query,
  variables = {},
}: {
  query: string
  variables?: Record<string, any>
}): Promise<GraphQLResponse<T>> {
  if (!ADMIN_ACCESS_TOKEN) {
    throw new Error("Missing SHOPIFY_ADMIN_API_ACCESS_TOKEN")
  }

  const response = await fetchWithRetry(ADMIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": ADMIN_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Admin API error: ${response.status}`)
  }

  const json = await response.json()

  if (json.errors) {
    console.error("[Shopify Admin] GraphQL errors:", json.errors)
  }

  return json
}

// Cursor-based pagination helper
export async function fetchAllPages<TNode, TEdge extends { node: TNode; cursor: string }>(
  queryFn: (cursor: string | null) => Promise<{
    edges: TEdge[]
    pageInfo: PageInfo
  }>,
  maxPages = 100,
): Promise<TNode[]> {
  const allNodes: TNode[] = []
  let cursor: string | null = null
  let page = 0

  while (page < maxPages) {
    const { edges, pageInfo } = await queryFn(cursor)
    allNodes.push(...edges.map((e) => e.node))

    if (!pageInfo.hasNextPage || !pageInfo.endCursor) break

    cursor = pageInfo.endCursor
    page++

    // Small delay to avoid rate limits
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  return allNodes
}

// Revalidation helpers
// Revalidation helpers
export function revalidateProduct(id: string, handle?: string) {
  revalidateTag("products", "layout")
  revalidateTag(`product:${id}`, "layout")
  if (handle) revalidateTag(`product:${handle}`, "layout")
}

export function revalidateCollection(id: string, handle?: string) {
  revalidateTag("collections", "layout")
  revalidateTag(`collection:${id}`, "layout")
  if (handle) revalidateTag(`collection:${handle}`, "layout")
}

export function revalidatePage(id: string, handle?: string) {
  revalidateTag("pages", "layout")
  revalidateTag(`page:${id}`, "layout")
  if (handle) revalidateTag(`page:${handle}`, "layout")
}

export function revalidateMetaobject(type: string, id: string) {
  revalidateTag("metaobjects", "layout")
  revalidateTag(`metaobject:${type}`, "layout")
  revalidateTag(`metaobject:${type}:${id}`, "layout")
}
