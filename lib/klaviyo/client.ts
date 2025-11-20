/**
 * Klaviyo API Client
 * 
 * Documentation: https://developers.klaviyo.com/en/reference/api-overview
 */

const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID

interface KlaviyoProfile {
  email: string
  first_name?: string
  last_name?: string
  phone_number?: string
  [key: string]: any
}

interface KlaviyoSubscribeResponse {
  success: boolean
  message?: string
  error?: string
}

/**
 * Subscribe an email to a Klaviyo list
 * Uses Klaviyo Profiles API v3
 */
export async function subscribeToList(email: string, additionalData?: Partial<KlaviyoProfile>): Promise<KlaviyoSubscribeResponse> {
  if (!KLAVIYO_API_KEY) {
    console.error("[Klaviyo] Missing KLAVIYO_API_KEY environment variable")
    return {
      success: false,
      error: "Klaviyo API key not configured"
    }
  }

  if (!KLAVIYO_LIST_ID) {
    console.error("[Klaviyo] Missing KLAVIYO_LIST_ID environment variable")
    return {
      success: false,
      error: "Klaviyo list ID not configured"
    }
  }

  try {
    // Klaviyo API v3 endpoint for subscribing to a list
    const url = `https://a.klaviyo.com/api/list-subscriptions`
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        "revision": "2024-10-15",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes: {
                    email,
                    ...additionalData,
                  },
                },
              ],
            },
            custom_source: "Website Newsletter Form",
          },
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("[Klaviyo] API error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      })

      // Handle specific error cases
      if (response.status === 400) {
        return {
          success: false,
          error: "Invalid email address or request format",
        }
      }

      if (response.status === 401 || response.status === 403) {
        return {
          success: false,
          error: "Klaviyo API authentication failed. Please check your API key.",
        }
      }

      return {
        success: false,
        error: `Klaviyo API error: ${response.status} ${response.statusText}`,
      }
    }

    const data = await response.json()
    console.log("[Klaviyo] Successfully subscribed:", email)

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    }
  } catch (error) {
    console.error("[Klaviyo] Network error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error occurred",
    }
  }
}

/**
 * Alternative method using Klaviyo API v2 (if v3 doesn't work)
 * This uses the older list subscription endpoint
 */
export async function subscribeToListV2(email: string): Promise<KlaviyoSubscribeResponse> {
  if (!KLAVIYO_API_KEY) {
    return {
      success: false,
      error: "Klaviyo API key not configured"
    }
  }

  if (!KLAVIYO_LIST_ID) {
    return {
      success: false,
      error: "Klaviyo list ID not configured"
    }
  }

  try {
    // Klaviyo API v2 endpoint
    const url = `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/subscribe`
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: KLAVIYO_API_KEY,
        profiles: [
          {
            email,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[Klaviyo] API v2 error:", {
        status: response.status,
        error: errorText,
      })

      return {
        success: false,
        error: `Failed to subscribe: ${response.status}`,
      }
    }

    console.log("[Klaviyo] Successfully subscribed (v2):", email)

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    }
  } catch (error) {
    console.error("[Klaviyo] Network error (v2):", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error occurred",
    }
  }
}

/**
 * Check if Klaviyo is properly configured
 */
export function isKlaviyoConfigured(): boolean {
  return !!(KLAVIYO_API_KEY && KLAVIYO_LIST_ID)
}

