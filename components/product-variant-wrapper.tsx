"use client"

import { useState } from "react"
import type { Product, ProductVariant } from "@/lib/shopify/types"
import { ProductVariantSelector } from "./product-variant-selector"
import { AddToCartButton } from "./add-to-cart-button"

interface ProductVariantWrapperProps {
  product: Product
}

export function ProductVariantWrapper({ product }: ProductVariantWrapperProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)

  return (
    <div className="space-y-4">
      <ProductVariantSelector 
        product={product}
        onVariantChange={setSelectedVariant}
      />
      <AddToCartButton 
        product={product} 
        selectedVariant={selectedVariant}
      />
    </div>
  )
}

