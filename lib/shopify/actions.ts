"use server"

import {
  createCart as createCartAPI,
  addCartLines as addCartLinesAPI,
  updateCartLines as updateCartLinesAPI,
  removeCartLines as removeCartLinesAPI,
  getCart as getCartAPI,
} from "./index"
import type { ShopifyCart } from "./types"

export async function createCart(): Promise<ShopifyCart> {
  return await createCartAPI()
}

export async function addToCart(cartId: string, merchandiseId: string, quantity = 1): Promise<ShopifyCart> {
  return await addCartLinesAPI(cartId, [{ merchandiseId, quantity }])
}

export async function updateCartItem(cartId: string, lineId: string, quantity: number): Promise<ShopifyCart> {
  return await updateCartLinesAPI(cartId, [{ id: lineId, quantity }])
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
  return await removeCartLinesAPI(cartId, lineIds)
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  return await getCartAPI(cartId)
}
