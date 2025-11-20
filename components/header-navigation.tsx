"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { HeaderCart } from "./header-cart"

interface HeaderNavigationProps {
  collections: Array<{
    id: string
    title: string
    handle: string
    description: string
  }>
}

const collectionDescriptions: Record<string, string> = {
  hoodies: "Stay warm and stylish with our premium pickleball hoodies",
  "training-playing-products": "Essential gear to elevate your training and gameplay",
  tops: "Comfortable performance apparel for on and off the court",
  bundles: "Improve stability, coordination, and core strength",
  "off-court-accessories": "Everything you need beyond the court",
}

export function HeaderNavigation({ collections }: HeaderNavigationProps) {
  const filteredCollections = collections.filter(
    (collection) =>
      !collection.title.toLowerCase().includes("home page") &&
      !collection.title.toLowerCase().includes("carro brand") &&
      !collection.title.toLowerCase().includes("masonry grid") &&
      collection.handle !== "frontpage" &&
      collection.handle !== "carro-brand-partnerships" &&
      collection.handle !== "masonry-grid",
  )

  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link href="/" className="px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
        Home
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
              Shop By Collection
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {filteredCollections.length > 0 ? (
                  filteredCollections.map((collection) => (
                    <li key={collection.id}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/collections/${collection.handle}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{collection.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {collection.description ||
                              collectionDescriptions[collection.handle] ||
                              "Explore our curated collection"}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))
                ) : (
                  <li className="p-3 text-sm text-muted-foreground">No collections available</li>
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/magic-pickleball"
        className="px-3 py-1.5 text-sm font-bold bg-green-700 text-white rounded hover:bg-green-800 transition-colors shadow-lg"
      >
        The Magic Pickleball
      </Link>

      <Link href="/pages/about" className="px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
        About
      </Link>
      <Link href="/pages/contact" className="px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
        Contact
      </Link>
      <HeaderCart />
    </nav>
  )
}

