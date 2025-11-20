/**
 * Shopify Customer Orders API
 * Fetches customer orders using Storefront API
 */

const SHOPIFY_STORE_DOMAIN = "momentpickleball.myshopify.com"
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

export interface OrderLineItem {
  id: string
  title: string
  quantity: number
  variantTitle?: string
  product: {
    id: string
    title: string
    handle: string
    images: {
      edges: Array<{
        node: {
          url: string
          altText: string | null
        }
      }>
    }
  }
  variant: {
    id: string
    title: string
    price: {
      amount: string
      currencyCode: string
    }
  }
}

export interface Order {
  id: string
  name: string
  orderNumber: number
  email: string
  createdAt: string
  updatedAt: string
  cancelledAt: string | null
  cancelReason: string | null
  financialStatus: string
  fulfillmentStatus: string | null
  totalPrice: {
    amount: string
    currencyCode: string
  }
  subtotalPrice: {
    amount: string
    currencyCode: string
  }
  totalTax: {
    amount: string
    currencyCode: string
  }
  totalShippingPrice: {
    amount: string
    currencyCode: string
  }
  lineItems: {
    edges: Array<{
      node: OrderLineItem
    }>
  }
  shippingAddress?: {
    firstName: string
    lastName: string
    address1: string
    address2?: string
    city: string
    province: string
    country: string
    zip: string
    phone?: string
  }
  billingAddress?: {
    firstName: string
    lastName: string
    address1: string
    address2?: string
    city: string
    province: string
    country: string
    zip: string
    phone?: string
  }
}

/**
 * Get customer orders
 * Note: Storefront API has limited order access
 * For full order details, you may need to use Admin API or Customer Account API
 */
export async function getCustomerOrders(accessToken: string, first = 10): Promise<Order[]> {
  const query = `
    query getCustomerOrders($customerAccessToken: String!, $first: Int!) {
      customer(customerAccessToken: $customerAccessToken) {
        orders(first: $first) {
          edges {
            node {
              id
              name
              orderNumber
              email
              createdAt
              updatedAt
              cancelledAt
              cancelReason
              financialStatus
              fulfillmentStatus
              totalPrice {
                amount
                currencyCode
              }
              subtotalPrice {
                amount
                currencyCode
              }
              totalTax {
                amount
                currencyCode
              }
              totalShippingPrice {
                amount
                currencyCode
              }
              lineItems(first: 50) {
                edges {
                  node {
                    id
                    title
                    quantity
                    variantTitle
                    product {
                      id
                      title
                      handle
                      images(first: 1) {
                        edges {
                          node {
                            url
                            altText
                          }
                        }
                      }
                    }
                    variant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
              shippingAddress {
                firstName
                lastName
                address1
                address2
                city
                province
                country
                zip
                phone
              }
              billingAddress {
                firstName
                lastName
                address1
                address2
                city
                province
                country
                zip
                phone
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query,
      variables: {
        customerAccessToken: accessToken,
        first,
      },
    }),
  })

  const json = await response.json()

  if (json.errors) {
    console.error("[Orders] GraphQL errors:", json.errors)
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  if (!json.data?.customer?.orders) {
    return []
  }

  return json.data.customer.orders.edges.map((edge: { node: Order }) => edge.node)
}

/**
 * Get single order by ID
 */
export async function getCustomerOrder(accessToken: string, orderId: string): Promise<Order | null> {
  // First get all orders and find the one we need
  // Storefront API doesn't support querying single order by ID directly
  const orders = await getCustomerOrders(accessToken, 50)
  return orders.find((order) => order.id === orderId || order.name === orderId) || null
}

