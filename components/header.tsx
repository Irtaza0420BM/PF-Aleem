



import Link from "next/link"
import Image from "next/image"
import { HeaderCart } from "./header-cart"
import { HeaderNavigation } from "./header-navigation"
import { MobileMenu } from "./mobile-menu"
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
  }

  return (
    <>
      <HolidayBanner />
      <header className="border-b-4 bg-black border-yellow-400 sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto px-4 py-3">
          
          {/* 📱 MOBILE LAYOUT */}
          <div className="flex md:hidden items-center justify-between">
            <MobileMenu collections={collections} />
            
            <Link href="/" className="flex items-center">
              <Image
                src="/images/moment-pickleball-logo.png"
                alt="Moment Pickleball"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            
            <HeaderCart />
          </div>

          {/* 🖥️ DESKTOP LAYOUT - 3 Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 md:items-center md:gap-4">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center justify-start">
              <Image
                src="/images/moment-pickleball-logo.png"
                alt="Moment Pickleball"
                width={144}
                height={48}
                className="h-10 w-auto"
              />
            </Link>

            {/* Center: Navigation */}
            <div className="flex justify-center">
              <HeaderNavigation collections={collections} />
            </div>

            {/* Right: Cart */}
            <div className="flex justify-end">
              <HeaderCart />
            </div>
          </div>

        </div>
      </header>
    </>
  )
}