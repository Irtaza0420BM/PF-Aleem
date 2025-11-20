/**
 * Environment variable validation
 * Validates required environment variables on startup
 */

const requiredEnvVars = {
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  SHOPIFY_WEBHOOK_SECRET: process.env.SHOPIFY_WEBHOOK_SECRET,
} as const

const optionalEnvVars = {
  KLAVIYO_API_KEY: process.env.KLAVIYO_API_KEY,
  KLAVIYO_LIST_ID: process.env.KLAVIYO_LIST_ID,
  SHOPIFY_ADMIN_API_ACCESS_TOKEN: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
} as const

export function validateEnv() {
  const missing: string[] = []

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value || value.trim() === "") {
      missing.push(key)
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}\n` +
      "Please check your .env.local file or environment configuration."
    )
  }

  // Log warnings for optional but recommended variables
  const warnings: string[] = []
  
  if (!optionalEnvVars.KLAVIYO_API_KEY) {
    warnings.push("KLAVIYO_API_KEY (optional but required for newsletter)")
  }
  if (!optionalEnvVars.KLAVIYO_LIST_ID) {
    warnings.push("KLAVIYO_LIST_ID (optional but required for newsletter)")
  }

  if (warnings.length > 0 && process.env.NODE_ENV !== "production") {
    console.warn("[Env] Missing optional environment variables:", warnings.join(", "))
  }
}

// Validate on module load (only in server-side code)
if (typeof window === "undefined") {
  try {
    validateEnv()
  } catch (error) {
    // In development, log the error but don't crash
    if (process.env.NODE_ENV === "development") {
      console.error("[Env Validation Error]:", error)
    } else {
      // In production, throw to prevent deployment with missing vars
      throw error
    }
  }
}

export const env = {
  // Required
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: requiredEnvVars.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  SHOPIFY_WEBHOOK_SECRET: requiredEnvVars.SHOPIFY_WEBHOOK_SECRET!,
  
  // Optional
  KLAVIYO_API_KEY: optionalEnvVars.KLAVIYO_API_KEY,
  KLAVIYO_LIST_ID: optionalEnvVars.KLAVIYO_LIST_ID,
  SHOPIFY_ADMIN_API_ACCESS_TOKEN: optionalEnvVars.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
  NEXT_PUBLIC_SITE_URL: optionalEnvVars.NEXT_PUBLIC_SITE_URL,
} as const

