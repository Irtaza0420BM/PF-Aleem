"use server"

import { redirect } from "next/navigation"
import { z } from "zod"
import {
  createCustomer,
  customerAccessTokenCreate,
  customerAccessTokenDelete,
  customerRecover,
} from "@/lib/shopify/customer"
import { setCustomerToken, deleteCustomerToken, getCustomerToken } from "@/lib/auth/session"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  acceptsMarketing: z.boolean().optional(),
})

/**
 * Login customer
 */
export async function login(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Validate input
    const validated = loginSchema.parse({ email, password })

    // Create access token
    const result = await customerAccessTokenCreate(validated.email, validated.password)

    if (result.userErrors.length > 0) {
      return {
        success: false,
        error: result.userErrors[0].message || "Invalid email or password",
      }
    }

    if (!result.customerAccessToken) {
      return {
        success: false,
        error: "Failed to create access token",
      }
    }

    // Set session cookie
    await setCustomerToken(result.customerAccessToken.accessToken)

    return {
      success: true,
      message: "Successfully logged in",
    }
  } catch (error) {
    console.error("[Auth] Login error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred during login",
    }
  }
}

/**
 * Register new customer
 */
export async function register(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const firstName = formData.get("firstName") as string | null
    const lastName = formData.get("lastName") as string | null
    const acceptsMarketing = formData.get("acceptsMarketing") === "on"

    // Validate input
    const validated = registerSchema.parse({
      email,
      password,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      acceptsMarketing,
    })

    // Create customer
    const result = await createCustomer(validated)

    if (result.userErrors.length > 0) {
      return {
        success: false,
        error: result.userErrors[0].message || "Failed to create account",
      }
    }

    if (!result.customerAccessToken) {
      return {
        success: false,
        error: "Account created but failed to log in automatically",
      }
    }

    // Set session cookie
    await setCustomerToken(result.customerAccessToken.accessToken)

    return {
      success: true,
      message: "Account created successfully",
    }
  } catch (error) {
    console.error("[Auth] Register error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred during registration",
    }
  }
}

/**
 * Logout customer
 */
export async function logout() {
  try {
    const token = await getCustomerToken()
    if (token) {
      // Delete token from Shopify
      await customerAccessTokenDelete(token)
    }
    // Delete session cookie
    await deleteCustomerToken()
    redirect("/login")
  } catch (error) {
    console.error("[Auth] Logout error:", error)
    // Still delete cookie even if Shopify call fails
    await deleteCustomerToken()
    redirect("/login")
  }
}

/**
 * Request password reset
 */
export async function requestPasswordReset(formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email || !z.string().email().safeParse(email).success) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    const result = await customerRecover(email)

    // Always return success to prevent email enumeration
    // Shopify will send email if account exists
    return {
      success: true,
      message: "If an account exists with this email, you will receive a password reset link.",
    }
  } catch (error) {
    console.error("[Auth] Password reset error:", error)
    return {
      success: true, // Still return success to prevent email enumeration
      message: "If an account exists with this email, you will receive a password reset link.",
    }
  }
}

