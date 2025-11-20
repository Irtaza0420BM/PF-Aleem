/**
 * Shopify Customer Account API
 * Handles customer authentication and account management
 */

const SHOPIFY_STORE_DOMAIN = "momentpickleball.myshopify.com"
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

interface CustomerAccessToken {
  accessToken: string
  expiresAt: string
}

interface Customer {
  id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  acceptsMarketing: boolean
  createdAt: string
  updatedAt: string
}

/**
 * Create a customer account
 */
export async function createCustomer(input: {
  email: string
  password: string
  firstName?: string
  lastName?: string
  phone?: string
  acceptsMarketing?: boolean
}): Promise<{ customer: Customer; customerAccessToken: CustomerAccessToken; userErrors: any[] }> {
  const mutation = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          email
          firstName
          lastName
          phone
          acceptsMarketing
          createdAt
          updatedAt
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
        userErrors {
          field
          message
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
      query: mutation,
      variables: {
        input: {
          email: input.email,
          password: input.password,
          firstName: input.firstName,
          lastName: input.lastName,
          phone: input.phone,
          acceptsMarketing: input.acceptsMarketing || false,
        },
      },
    }),
  })

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.customerCreate
}

/**
 * Login customer and get access token
 */
export async function customerAccessTokenCreate(email: string, password: string): Promise<{
  customerAccessToken: CustomerAccessToken | null
  userErrors: any[]
}> {
  const mutation = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        userErrors {
          field
          message
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
      query: mutation,
      variables: {
        input: {
          email,
          password,
        },
      },
    }),
  })

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.customerAccessTokenCreate
}

/**
 * Get customer by access token
 */
export async function getCustomer(accessToken: string): Promise<Customer | null> {
  const query = `
    query getCustomer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        email
        firstName
        lastName
        phone
        acceptsMarketing
        createdAt
        updatedAt
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
      },
    }),
  })

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.customer || null
}

/**
 * Delete customer access token (logout)
 */
export async function customerAccessTokenDelete(accessToken: string): Promise<{ deletedAccessToken: string; deletedCustomerAccessTokenId: string; userErrors: any[] }> {
  const mutation = `
    mutation customerAccessTokenDelete($customerAccessToken: String!) {
      customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
        deletedAccessToken
        deletedCustomerAccessTokenId
        userErrors {
          field
          message
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
      query: mutation,
      variables: {
        customerAccessToken: accessToken,
      },
    }),
  })

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.customerAccessTokenDelete
}

/**
 * Recover customer password (send reset email)
 */
export async function customerRecover(email: string): Promise<{ userErrors: any[] }> {
  const mutation = `
    mutation customerRecover($email: String!) {
      customerRecover(email: $email) {
        userErrors {
          field
          message
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
      query: mutation,
      variables: {
        email,
      },
    }),
  })

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.customerRecover
}

