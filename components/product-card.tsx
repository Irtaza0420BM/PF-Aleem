import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/shopify/types"
import { AddToCartButton } from "./add-to-cart-button"

export function ProductCard({ product }: { product: Product }) {
  const image = product.images.edges[0]?.node
  const price = Number.parseFloat(product.priceRange.minVariantPrice.amount)

  return (
    <div className="group bg-white border border-yellow-400 rounded hover:shadow-sm hover:border-yellow-500 transition-all duration-300 p-1">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="aspect-square relative overflow-hidden rounded bg-muted mb-1">
          {image && (
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.altText || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          )}
        </div>
        <h3 className="font-medium mb-0.5 text-xs leading-tight">{product.title}</h3>
        <p className="text-[10px] text-muted-foreground mb-1">
          ${price.toFixed(2)} {product.priceRange.minVariantPrice.currencyCode}
        </p>
      </Link>
      <AddToCartButton product={product} />
    </div>
  )
}
