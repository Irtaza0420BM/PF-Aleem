"use client"

import { useState } from "react"
import { ShoppingCart, Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Loader } from "@/components/ui/loader"
import Image from "next/image"

export function CartDrawer() {
  const { cart, updateItem, removeItem, isLoading } = useCart()
  const [updatingItems, setUpdatingItems] = useState<Set<string>>(new Set())

  const itemCount = cart?.lines.edges.reduce((total, { node }) => total + node.quantity, 0) || 0

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-transparent">
          <ShoppingCart className="h-5 w-5 text-white" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col max-h-[90vh]">
        <div className="mx-auto w-full max-w-sm flex flex-col flex-1 min-h-0">
          <DrawerHeader className="flex-shrink-0">
            <DrawerTitle>Shopping Cart</DrawerTitle>
            <DrawerDescription>
              {itemCount === 0 ? "Your cart is empty" : `${itemCount} item${itemCount > 1 ? "s" : ""} in cart`}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4 overflow-y-auto flex-1 min-h-0">
            {cart?.lines.edges.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>Your cart is empty</p>
              </div>
            ) : (
              cart?.lines.edges.map(({ node }) => (
                <div key={node.id} className="flex gap-4 items-start pb-4 border-b last:border-b-0">
                  {node.merchandise.product.images.edges[0] && (
                    <Image
                      src={node.merchandise.product.images.edges[0].node.url || "/placeholder.svg"}
                      alt={node.merchandise.product.images.edges[0].node.altText || node.merchandise.product.title}
                      width={80}
                      height={80}
                      className="rounded-md object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-tight">{node.merchandise.product.title}</h4>
                    {node.merchandise.title !== "Default Title" && (
                      <p className="text-xs text-muted-foreground mt-1">{node.merchandise.title}</p>
                    )}
                    <p className="text-sm font-medium mt-1">
                      ${Number.parseFloat(node.merchandise.price.amount).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={async () => {
                          setUpdatingItems(prev => new Set(prev).add(node.id))
                          try {
                            if (node.quantity === 1) {
                              await removeItem(node.id)
                            } else {
                              await updateItem(node.id, node.quantity - 1)
                            }
                          } finally {
                            setUpdatingItems(prev => {
                              const next = new Set(prev)
                              next.delete(node.id)
                              return next
                            })
                          }
                        }}
                        disabled={isLoading || updatingItems.has(node.id)}
                        className="h-7 w-7"
                      >
                        {updatingItems.has(node.id) ? (
                          <Loader size="sm" />
                        ) : (
                          <Minus className="h-3 w-3" />
                        )}
                      </Button>
                      <span className="w-8 text-center text-sm">{node.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon-sm" 
                        onClick={async () => {
                          setUpdatingItems(prev => new Set(prev).add(node.id))
                          try {
                            await updateItem(node.id, node.quantity + 1)
                          } finally {
                            setUpdatingItems(prev => {
                              const next = new Set(prev)
                              next.delete(node.id)
                              return next
                            })
                          }
                        }}
                        disabled={isLoading || updatingItems.has(node.id)}
                        className="h-7 w-7"
                      >
                        {updatingItems.has(node.id) ? (
                          <Loader size="sm" />
                        ) : (
                          <Plus className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon-sm" 
                    onClick={async () => {
                      setUpdatingItems(prev => new Set(prev).add(node.id))
                      try {
                        await removeItem(node.id)
                      } finally {
                        setUpdatingItems(prev => {
                          const next = new Set(prev)
                          next.delete(node.id)
                          return next
                        })
                      }
                    }}
                    disabled={isLoading || updatingItems.has(node.id)}
                    className="flex-shrink-0 h-7 w-7"
                  >
                    {updatingItems.has(node.id) ? (
                      <Loader size="sm" />
                    ) : (
                      <X className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))
            )}
          </div>
          {cart && cart.lines.edges.length > 0 && (
            <DrawerFooter className="flex-shrink-0 border-t pt-4 mt-auto">
              <div className="flex justify-between mb-4 text-lg font-semibold">
                <span>Total:</span>
                <span>${Number.parseFloat(cart.cost.totalAmount.amount).toFixed(2)}</span>
              </div>
              <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                <a href={cart.checkoutUrl} rel="noopener noreferrer">
                  Checkout
                </a>
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">Continue Shopping</Button>
              </DrawerClose>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
