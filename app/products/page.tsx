import { getProducts } from "@/lib/shopify"
import { ProductCard } from "@/components/product-card"

export default async function ProductsPage() {
  const products = await getProducts({ first: 20 })

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
