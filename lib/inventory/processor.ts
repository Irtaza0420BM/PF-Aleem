/**
 * Inventory Processing Utilities
 * Handles inventory webhook events from Shopify
 */

import { revalidateProduct } from "@/lib/shopify-client"

interface ShopifyInventoryLevel {
  inventory_item_id: string
  location_id: string
  available: number
  updated_at: string
}

interface ShopifyInventoryItem {
  id: string
  sku: string
  variant_id?: string
  product_id?: string
}

/**
 * Process inventory level updates
 * Revalidates products that use the updated inventory item
 */
export async function processInventoryUpdate(payload: ShopifyInventoryLevel) {
  console.log(`[Inventory] Processing inventory update:`, {
    inventoryItemId: payload.inventory_item_id,
    locationId: payload.location_id,
    available: payload.available,
    updatedAt: payload.updated_at,
  })

  try {
    // Note: The inventory_levels/update webhook doesn't include product/variant info
    // We need to fetch the inventory item to get the associated variant/product
    // For now, we'll revalidate all products to ensure inventory is up to date
    // In a production system, you'd want to:
    // 1. Query Shopify Admin API to get the variant/product associated with inventory_item_id
    // 2. Revalidate only those specific products
    
    console.log(`[Inventory] Revalidating products to reflect inventory changes`)
    
    // Revalidate all products (this ensures inventory is updated across the site)
    // In production, you might want to be more selective and only revalidate affected products
    revalidateProduct("all", undefined)
    
    // TODO: If you have access to Admin API, fetch the variant/product for this inventory item
    // and revalidate only those specific products for better performance
    
    return {
      success: true,
      inventoryItemId: payload.inventory_item_id,
      available: payload.available,
    }
  } catch (error) {
    console.error(`[Inventory] Error processing inventory update:`, error)
    throw error
  }
}

/**
 * Get product/variant IDs from inventory item ID
 * This requires Admin API access
 */
export async function getInventoryItemDetails(inventoryItemId: string) {
  // TODO: Implement Admin API call to get variant/product info
  // This would allow us to revalidate only specific products instead of all products
  // Example query:
  // query {
  //   inventoryItem(id: $inventoryItemId) {
  //     id
  //     variant {
  //       id
  //       product {
  //         id
  //         handle
  //       }
  //     }
  //   }
  // }
  
  return null
}

