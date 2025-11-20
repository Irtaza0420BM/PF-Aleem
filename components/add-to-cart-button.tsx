"use client"

import { useState } from "react"
import type { Product, ProductVariant } from "@/lib/shopify/types"
import { Button } from "./ui/button"
import { useCart } from "./cart/cart-context"
import { ShoppingCart, Check } from "lucide-react"
import { Loader } from "./ui/loader"
import { cn } from "@/lib/utils"

interface AddToCartButtonProps {
  product: Product
  selectedVariant?: ProductVariant | null
}

export function AddToCartButton({ product, selectedVariant }: AddToCartButtonProps) {
  const { addItem, isLoading } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  const handleAddToCart = async () => {
    // Ensure variants is an array
    if (!product.variants || !Array.isArray(product.variants) || product.variants.length === 0) {
      console.error("[AddToCart] No variants available for product:", product.id)
      return
    }

    // Use selected variant if provided, otherwise fall back to first available variant
    const variant = selectedVariant || product.variants.find((v) => v.availableForSale) || product.variants[0]
    
    if (variant && variant.availableForSale) {
      setIsAdding(true)
      try {
        await addItem(variant, product)
        setJustAdded(true)
        // Reset the "just added" state after 2 seconds
        setTimeout(() => {
          setJustAdded(false)
        }, 2000)
      } catch (error) {
        console.error("[AddToCart] Error:", error)
      } finally {
        setIsAdding(false)
      }
    }
  }

  // Ensure variants is an array before checking
  const variantsArray = Array.isArray(product.variants) ? product.variants : []

  // Determine availability based on selected variant or if ANY variant is available
  // Note: We check variant availability rather than product-level availability
  // because a product might be marked unavailable but still have available variants
  const isAvailable = selectedVariant 
    ? selectedVariant.availableForSale 
    : variantsArray.some((v) => v.availableForSale)

  const variant = selectedVariant || variantsArray.find((v) => v.availableForSale) || variantsArray[0]
  const hasVariant = !!variant && variantsArray.length > 0

  const isDisabled = !isAvailable || !hasVariant || isLoading || isAdding

  return (
    <Button 
      onClick={handleAddToCart} 
      disabled={isDisabled} 
      className={cn(
        "w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-all duration-200",
        justAdded && "bg-green-500 hover:bg-green-600",
        (isLoading || isAdding) && "opacity-75 cursor-wait"
      )}
    >
      {isLoading || isAdding ? (
        <>
          <Loader size="sm" className="mr-2" />
          Adding...
        </>
      ) : justAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {!hasVariant 
            ? "No Variants Available" 
            : !isAvailable 
            ? "Out of Stock" 
            : "Add to Cart"}
        </>
      )}
    </Button>
  )
}
