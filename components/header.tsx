import Link from "next/link"
import Image from "next/image"
import { HeaderCart } from "./header-cart"
import { HeaderNavigation } from "./header-navigation"
import { getCollections } from "@/lib/shopify"
import { HolidayBanner } from "./holiday-banner"

export async function Header() {
  let collections: any[] = []
  try {
    collections = await Promise.race([
      getCollections(10),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Collections fetch timeout')), 8000)
      )
    ])
  } catch (error) {
    console.error("[v0] Failed to load collections in header:", error)
    // Continue rendering with empty collections - site will still work
  }

  return (
    <>
      <HolidayBanner />
      <header className="border-b-4 bg-black border-yellow-400 sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-8 relative">
          <div className="flex items-center gap-3 absolute left-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/moment-pickleball-logo.png"
                alt="Moment Pickleball"
                width={144}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <HeaderNavigation collections={collections} />

          <div className="md:hidden flex items-center gap-4 absolute right-4">
            <HeaderCart />
          </div>
        </div>
      </header>
    </>
  )
}
