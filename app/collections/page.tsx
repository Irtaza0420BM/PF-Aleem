import { getCollections } from "@/lib/shopify"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default async function CollectionsPage() {
  const collections = await getCollections(20)

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Shop By Collection</h1>

        {collections.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-white mb-4">No collections found</p>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.handle}`}
                className="group border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {collection.image && (
                  <div className="aspect-square relative bg-gray-100">
                    <Image
                      src={collection.image.url || "/placeholder.svg"}
                      alt={collection.image.altText || collection.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="p-6 bg-black">
                  <h2 className="text-2xl font-bold mb-2 text-white">{collection.title}</h2>
                  {collection.description && <p className="text-gray-400 line-clamp-2">{collection.description}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
