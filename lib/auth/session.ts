/**
 * Session Management
 * Handles customer session using cookies
 */

import { cookies } from "next/headers"
import { getCustomer } from "@/lib/shopify/customer"

const COOKIE_NAME = "shopify-customer-access-token"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

/**
 * Set customer access token in cookie
 */
export async function setCustomerToken(accessToken: string) {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  })
}

/**
 * Get customer access token from cookie
 */
export async function getCustomerToken(): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get(COOKIE_NAME)?.value || null
}

/**
 * Delete customer access token (logout)
 */
export async function deleteCustomerToken() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

/**
 * Get current customer from session
 */
export async function getCurrentCustomer() {
  const token = await getCustomerToken()
  if (!token) {
    return null
  }

  try {
    const customer = await getCustomer(token)
    return customer
  } catch (error) {
    console.error("[Auth] Error getting customer:", error)
    // If token is invalid, delete it
    await deleteCustomerToken()
    return null
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const customer = await getCurrentCustomer()
  return !!customer
}

