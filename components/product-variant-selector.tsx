"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import type { Product, ProductVariant, ProductOption } from "@/lib/shopify/types"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface ProductVariantSelectorProps {
  product: Product
  onVariantChange?: (variant: ProductVariant | null) => void
}

export function ProductVariantSelector({ product, onVariantChange }: ProductVariantSelectorProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})

  // Ensure variants is an array
  const variantsArray = Array.isArray(product.variants) ? product.variants : []

  // Find the matching variant based on selected options
  const selectedVariant = useMemo(() => {
    if (variantsArray.length === 0) return null
    if (product.options.length === 0) return variantsArray[0]

    // If no options are selected yet, return first available variant
    const hasAllSelections = product.options.every((option) => selectedOptions[option.name])
    if (!hasAllSelections) {
      // Return first available variant as default
      const availableVariant = variantsArray.find((v) => v.availableForSale)
      return availableVariant || variantsArray[0]
    }

    // Find variant that matches all selected options
    return variantsArray.find((variant) => {
      return product.options.every((option) => {
        const selectedValue = selectedOptions[option.name]
        return variant.selectedOptions.some(
          (opt) => opt.name === option.name && opt.value === selectedValue
        )
      })
    }) || null
  }, [product, selectedOptions, variantsArray])

  // Update parent when variant changes (use useEffect to avoid render-time state updates)
  useEffect(() => {
    if (onVariantChange) {
      onVariantChange(selectedVariant)
    }
  }, [selectedVariant, onVariantChange])

  // Check if an option value is available (exists) and in stock
  const getOptionStatus = (optionName: string, optionValue: string) => {
    // If this option is already selected, check its status based on other selections
    // But for the button state, we want to know if selecting this *would* result in a valid variant

    const tempSelections = { ...selectedOptions, [optionName]: optionValue }

    let exists = false
    let inStock = false

    // Check if any variant matches this combination
    variantsArray.forEach((variant) => {
      const matches = product.options.every((option) => {
        const valueToCheck = tempSelections[option.name]
        if (!valueToCheck) return true // Option not selected yet, skip check
        return variant.selectedOptions.some(
          (opt) => opt.name === option.name && opt.value === valueToCheck
        )
      })

      if (matches) {
        exists = true
        if (variant.availableForSale) {
          inStock = true
        }
      }
    })

    return { exists, inStock }
  }

  const handleOptionChange = (optionName: string, optionValue: string) => {
    setSelectedOptions((prev: Record<string, string>) => ({
      ...prev,
      [optionName]: optionValue,
    }))
  }

  // If product has no options, don't render selector
  if (product.options.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {product.options.map((option) => (
        <div key={option.id} className="space-y-2">
          <Label className="text-white font-medium">
            {option.name}: <span className="text-yellow-400">{selectedOptions[option.name] || "Select"}</span>
          </Label>
          <div className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const isSelected = selectedOptions[option.name] === value
              const { exists, inStock } = getOptionStatus(option.name, value)

              return (
                <Button
                  key={value}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleOptionChange(option.name, value)}
                  disabled={!exists}
                  className={cn(
                    "transition-all duration-200",
                    isSelected
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400 font-semibold"
                      : "border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:text-white",
                    !exists && "opacity-30 cursor-not-allowed",
                    !inStock && !isSelected && "opacity-50 decoration-slice", // Visual cue for OOS but selectable
                    !inStock && isSelected && "bg-yellow-400/80" // Slightly different style for selected OOS?
                  )}
                >
                  {value}
                  {!inStock && exists && <span className="ml-1 text-xs opacity-70">(OOS)</span>}
                </Button>
              )
            })}
          </div>
        </div>
      ))}

      {selectedVariant && (
        <div className="pt-2">
          <p className="text-sm text-gray-300">
            {selectedVariant.availableForSale ? (
              <span className="text-green-400 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
                In Stock
              </span>
            ) : (
              <span className="text-red-400 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-400 inline-block" />
                Out of Stock
              </span>
            )}
          </p>
          {selectedVariant.price && (
            <p className="text-lg font-semibold text-white mt-1">
              ${Number.parseFloat(selectedVariant.price.amount).toFixed(2)} {selectedVariant.price.currencyCode}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

