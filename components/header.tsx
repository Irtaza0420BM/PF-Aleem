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
      <header className="border-b-4 bg-black border-[#fdfe06] sticky top-0 z-50 shadow-xl">
        <div className="w-full px-3 sm:px-4 py-3 mx-auto">
          
          {/* 📱 MOBILE LAYOUT (up to md) - Hamburger | Logo | Cart */}
          <div className="flex md:hidden items-center justify-between gap-2">
            {/* Left: Hamburger Menu */}
            <div className="flex-shrink-0">
              <MobileMenu collections={collections} />
            </div>
            
            {/* Center: Logo (responsive width) */}
            <Link href="/" className="flex items-center justify-center flex-1 min-w-0">
              <Image
                src="/images/pickleball-logo.webp"
                alt="Moment Pickleball"
                width={120}
                height={24}
                className="h-4 w-auto"
                priority
              />
            </Link>
            
            {/* Right: Cart Icon */}
            <div className="flex-shrink-0">
              <HeaderCart />
            </div>
          </div>

          
          {/* <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 w-full"> */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2 w-full">

            {/* Left: Logo - 40% */}
            <div className="flex items-center justify-start" style={{ width: '40%' }}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/pickleball-logo.webp"
                  alt="Moment Pickleball"
                  width={180}
                  height={32}
                  className="h-5 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Center: Navigation - 50% */}
            <div className="flex items-center justify-start" style={{ width: '50%' }}>
              <HeaderNavigation collections={collections} />
            </div>

            {/* Right: Cart - 10% */}
            <div className="flex justify-end" style={{ width: '10%' }}>
              <HeaderCart />
            </div>
          </div>

        </div>
      </header>
    </>
  )
}