import { NextResponse } from "next/server"
import {
  storefrontFetch,
  adminFetch,
  fetchAllPages as fetchAllShopifyPages,
  ADMIN_ACCESS_TOKEN,
} from "@/lib/shopify-client"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

interface AuditResult {
  totals: {
    products: number
    collections: number
    pages: number
    blogs: number
    articles: number
  }
  adminCounts?: {
    products?: number
    collections?: number
  }
  diffs?: {
    products?: number
    collections?: number
  }
  sampleData: {
    products: Array<{ id: string; handle: string; title: string }>
    collections: Array<{ id: string; handle: string; title: string }>
    pages: Array<{ id: string; handle: string; title: string }>
  }
  startedAt: string
  endedAt: string
  durationMs: number
}

export async function GET(request: Request) {
  const startedAt = new Date().toISOString()
  const startTime = Date.now()

  console.log("[Shopify Audit] Starting full data audit...")

  try {
    // Fetch all products
    const products = await fetchAllProducts()
    console.log(`[Shopify Audit] Fetched ${products.length} products`)

    // Fetch all collections
    const collections = await fetchAllCollections()
    console.log(`[Shopify Audit] Fetched ${collections.length} collections`)

    // Fetch all pages
    const pages = await fetchAllShopifyPages()
    console.log(`[Shopify Audit] Fetched ${pages.length} pages`)

    // Fetch blogs and articles
    const { blogs, articles } = await fetchAllBlogsAndArticles()
    console.log(`[Shopify Audit] Fetched ${blogs.length} blogs, ${articles.length} articles`)

    const endedAt = new Date().toISOString()
    const durationMs = Date.now() - startTime

    const result: AuditResult = {
      totals: {
        products: products.length,
        collections: collections.length,
        pages: pages.length,
        blogs: blogs.length,
        articles: articles.length,
      },
      sampleData: {
        products: products.slice(0, 5).map((p) => ({
          id: p.id,
          handle: p.handle,
          title: p.title,
        })),
        collections: collections.slice(0, 5).map((c) => ({
          id: c.id,
          handle: c.handle,
          title: c.title,
        })),
        pages: pages.slice(0, 5).map((p) => ({
          id: p.id,
          handle: p.handle,
          title: p.title,
        })),
      },
      startedAt,
      endedAt,
      durationMs,
    }

    // If Admin API is available, get authoritative counts
    if (ADMIN_ACCESS_TOKEN) {
      try {
        const counts = await getAdminCounts()
        result.adminCounts = counts

        // Calculate diffs
        result.diffs = {
          products: counts.products ? counts.products - products.length : undefined,
          collections: counts.collections ? counts.collections - collections.length : undefined,
        }

        console.log("[Shopify Audit] Admin counts:", counts)
        if (result.diffs.products !== 0 || result.diffs.collections !== 0) {
          console.warn("[Shopify Audit] ⚠️  Count mismatches detected:", result.diffs)
        }
      } catch (error) {
        console.error("[Shopify Audit] Failed to fetch admin counts:", error)
      }
    }

    // Log summary
    console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SHOPIFY AUDIT COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Products:     ${result.totals.products}${result.adminCounts?.products ? ` (Admin: ${result.adminCounts.products})` : ""}
  Collections:  ${result.totals.collections}${result.adminCounts?.collections ? ` (Admin: ${result.adminCounts.collections})` : ""}
  Pages:        ${result.totals.pages}
  Blogs:        ${result.totals.blogs}
  Articles:     ${result.totals.articles}
  Duration:     ${durationMs}ms
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `)

    return NextResponse.json(result)
  } catch (error) {
    console.error("[Shopify Audit] Error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
        startedAt,
        endedAt: new Date().toISOString(),
        durationMs: Date.now() - startTime,
      },
      { status: 500 },
    )
  }
}

// Fetch all products with cursor pagination
async function fetchAllProducts() {
  return fetchAllShopifyPages(async (cursor) => {
    const query = `
      query($cursor: String) {
        products(first: 50, after: $cursor) {
          edges {
            cursor
            node {
              id
              handle
              title
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `

    const { data } = await storefrontFetch<{
      products: {
        edges: Array<{ cursor: string; node: any }>
        pageInfo: { hasNextPage: boolean; endCursor: string }
      }
    }>({ query, variables: { cursor } })

    return data.products
  })
}

// Fetch all collections with cursor pagination
async function fetchAllCollections() {
  return fetchAllShopifyPages(async (cursor) => {
    const query = `
      query($cursor: String) {
        collections(first: 50, after: $cursor) {
          edges {
            cursor
            node {
              id
              handle
              title
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `

    const { data } = await storefrontFetch<{
      collections: {
        edges: Array<{ cursor: string; node: any }>
        pageInfo: { hasNextPage: boolean; endCursor: string }
      }
    }>({ query, variables: { cursor } })

    return data.collections
  })
}

// Fetch all blogs and articles
async function fetchAllBlogsAndArticles() {
  const query = `
    query {
      blogs(first: 10) {
        edges {
          node {
            id
            handle
            title
          }
        }
      }
      articles(first: 250) {
        edges {
          node {
            id
            handle
            title
          }
        }
      }
    }
  `

  try {
    const { data } = await storefrontFetch<{
      blogs: { edges: Array<{ node: any }> }
      articles: { edges: Array<{ node: any }> }
    }>({ query })

    return {
      blogs: data.blogs.edges.map((e) => e.node),
      articles: data.articles.edges.map((e) => e.node),
    }
  } catch (error) {
    // Blogs might not be available via Storefront API
    console.warn("[Shopify Audit] Could not fetch blogs/articles:", error)
    return { blogs: [], articles: [] }
  }
}

// Get authoritative counts from Admin API
async function getAdminCounts() {
  const query = `
    query {
      productsCount {
        count
      }
      collectionsCount {
        count
      }
    }
  `

  const { data } = await adminFetch<{
    productsCount: { count: number }
    collectionsCount: { count: number }
  }>({ query })

  return {
    products: data.productsCount.count,
    collections: data.collectionsCount.count,
  }
}
