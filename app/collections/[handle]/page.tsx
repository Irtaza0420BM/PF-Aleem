import { getCollectionProducts, getProducts } from "@/lib/shopify"
import { ProductCard } from "@/components/product-card"

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>
}) {
  const { handle } = await params

  const products =
    handle === "all"
      ? await getProducts({ first: 100 })
      : await getCollectionProducts({ collection: handle, limit: 50 })

  const collectionTitles: Record<string, string> = {
    hoodies: "Hoodies",
    "training-playing-products": "Training & Playing Products",
    tops: "T-Shirts / Tops",
    bundles: "Balance Boards",
    "off-court-accessories": "Off Court Accessories",
    all: "All Products",
  }

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          {collectionTitles[handle] || handle.charAt(0).toUpperCase() + handle.slice(1).replace(/-/g, " ")}
        </h1>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-white mb-4">No products found in this collection.</p>
            <p className="text-gray-400">Check back soon for new arrivals!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
