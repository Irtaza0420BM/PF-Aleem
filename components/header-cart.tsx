"use client"

import { CartDrawer } from "./cart/cart-drawer"

/**
 * Client component wrapper for CartDrawer
 * This allows CartDrawer to be used in server components
 * while still having access to CartProvider context
 */
export function HeaderCart() {
  return <CartDrawer />
}

