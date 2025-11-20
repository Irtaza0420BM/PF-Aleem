import { getProduct, getProducts } from "@/lib/shopify"
import Image from "next/image"
import { notFound } from 'next/navigation'
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { ProductVariantWrapper } from "@/components/product-variant-wrapper"

export async function generateStaticParams() {
  const products = await getProducts({ first: 50 })
  return products.map((product) => ({
    handle: product.handle,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  
  if (!handle) {
    console.error("[v0] Product handle is missing")
    notFound()
  }
  
  console.log("[v0] Loading product with handle:", handle)

  const product = await getProduct(handle)

  if (!product) {
    console.log("[v0] Product not found:", handle)
    notFound()
  }

  console.log("[v0] Product loaded successfully:", product.title)

  const images = product.images.edges.map(edge => ({
    url: edge.node.url,
    altText: edge.node.altText
  }))
  
  const price = Number.parseFloat(product.priceRange.minVariantPrice.amount)

  return (
    <div className="container mx-auto px-4 py-12 bg-black min-h-screen">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <ProductImageCarousel images={images} productTitle={product.title} />
        
        <div className="text-white space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight">{product.title}</h1>
          <p className="text-3xl font-semibold text-white">
            ${price.toFixed(2)} {product.priceRange.minVariantPrice.currencyCode}
          </p>
          <div 
            className="text-white text-base leading-relaxed space-y-4 [&_*]:text-white [&_p]:text-white [&_p]:mb-4 [&_ul]:text-white [&_ul]:space-y-2 [&_li]:text-white [&_strong]:text-white" 
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} 
          />
          
          {/* Product Variant Selector and Add to Cart */}
          <div className="pt-4">
            <ProductVariantWrapper product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
