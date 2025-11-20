import { storefrontFetch } from "@/lib/shopify-client"
import type { ShopifyProduct } from "@/lib/shopify/types"

export async function fetchProductsList(): Promise<ShopifyProduct[]> {
  const query = `
    query {
      products(first: 50) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `

  const { data } = await storefrontFetch<{
    products: {
      edges: Array<{ node: ShopifyProduct }>
    }
  }>({
    query,
    tags: ["products"],
  })

  return data.products.edges.map((e) => e.node)
}

export async function fetchProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    query($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
      }
    }
  `

  const { data } = await storefrontFetch<{
    product: ShopifyProduct | null
  }>({
    query,
    variables: { handle },
    tags: ["products", `product:${handle}`],
  })

  return data.product
}
