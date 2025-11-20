"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { ProductVariant, ShopifyCart, Product } from "@/lib/shopify/types"
import { createCart, addToCart, updateCartItem, removeFromCart, getCart } from "@/lib/shopify/actions"
import { toast } from "sonner"

type CartContextType = {
  cart: ShopifyCart | null
  isLoading: boolean
  addItem: (variant: ProductVariant, product: Product) => Promise<void>
  updateItem: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const cartId = localStorage.getItem("shopify-cart-id")
    if (cartId) {
      getCart(cartId).then((existingCart) => {
        if (existingCart) {
          setCart(existingCart)
        } else {
          localStorage.removeItem("shopify-cart-id")
        }
      })
    }
  }, [])

  const addItem = useCallback(
    async (variant: ProductVariant, product: Product) => {
      setIsLoading(true)
      try {
        let currentCart = cart

        if (!currentCart) {
          currentCart = await createCart()
          localStorage.setItem("shopify-cart-id", currentCart.id)
        }

        const updatedCart = await addToCart(currentCart.id, variant.id, 1)

        setCart(updatedCart)
        toast.success(`${product.title} added to cart`)
      } catch (error) {
        console.error("Error adding to cart:", error)
        toast.error("Failed to add item to cart")
      } finally {
        setIsLoading(false)
      }
    },
    [cart],
  )

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return

      setIsLoading(true)
      try {
        const updatedCart = await updateCartItem(cart.id, lineId, quantity)
        setCart(updatedCart)
        toast.success("Cart updated")
      } catch (error) {
        console.error("Error updating cart:", error)
        toast.error("Failed to update cart")
      } finally {
        setIsLoading(false)
      }
    },
    [cart],
  )

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return

      setIsLoading(true)
      try {
        const updatedCart = await removeFromCart(cart.id, [lineId])
        setCart(updatedCart)
        toast.success("Item removed from cart")
      } catch (error) {
        console.error("Error removing from cart:", error)
        toast.error("Failed to remove item")
      } finally {
        setIsLoading(false)
      }
    },
    [cart],
  )

  return (
    <CartContext.Provider value={{ cart, isLoading, addItem, updateItem, removeItem }}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
