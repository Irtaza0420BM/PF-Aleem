"use server"

import { z } from "zod"
import { subscribeToList, subscribeToListV2, isKlaviyoConfigured } from "@/lib/klaviyo/client"

const emailSchema = z.string().email("Please enter a valid email address")

export async function subscribeToNewsletter(email: string) {
  try {
    // Validate email
    const validatedEmail = emailSchema.parse(email)

    // Check if Klaviyo is configured
    if (!isKlaviyoConfigured()) {
      console.warn("[Newsletter] Klaviyo not configured, logging subscription only")
      console.log("[Newsletter] Subscription request:", validatedEmail)
      
      return { 
        success: true, 
        message: "Thanks for subscribing! (Note: Klaviyo not configured - subscription logged only)" 
      }
    }

    // Try Klaviyo API v3 first, fallback to v2 if needed
    let result = await subscribeToList(validatedEmail)
    
    // If v3 fails, try v2 as fallback
    if (!result.success) {
      console.log("[Newsletter] Trying Klaviyo API v2 as fallback...")
      result = await subscribeToListV2(validatedEmail)
    }

    if (result.success) {
      return { 
        success: true, 
        message: result.message || "Thanks for subscribing!" 
      }
    } else {
      return { 
        success: false, 
        message: result.error || "Failed to subscribe. Please try again later." 
      }
    }
  } catch (error) {
    console.error("[Newsletter] Error:", error)
    
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    
    return { 
      success: false, 
      message: "Something went wrong. Please try again." 
    }
  }
}
