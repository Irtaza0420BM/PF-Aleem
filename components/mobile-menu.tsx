

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "./ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"

interface MobileMenuProps {
  collections: Array<{
    id: string
    title: string
    handle: string
    description?: string
  }>
}

const collectionDescriptions: Record<string, string> = {
  hoodies: "Stay warm and stylish with our premium pickleball hoodies",
  "training-playing-products": "Essential gear to elevate your training and gameplay",
  tops: "Comfortable performance apparel for on and off the court",
  bundles: "Improve stability, coordination, and core strength",
  "off-court-accessories": "Everything you need beyond the court",
}

export function MobileMenu({ collections }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false) // Collections expand/collapse state

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
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 -ml-2"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Drawer */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="bg-black border-yellow-400 h-[85vh]">
          <DrawerHeader className="border-b border-yellow-400/20">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-yellow-400 text-xl font-bold">
                Menu
              </DrawerTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-yellow-400 hover:bg-yellow-400/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </DrawerHeader>

          <nav className="flex flex-col p-4 space-y-2 overflow-y-auto">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-colors"
            >
               Home
            </Link>

            {/* Shop By Collection - Collapsible */}
            {filteredCollections.length > 0 && (
              <div className="space-y-1">
                {/* Toggle Button */}
                <button
                  onClick={() => setCollectionsOpen(!collectionsOpen)}
                  className="w-full flex items-center justify-between text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <span> Shop By Collection</span>
                  {collectionsOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>

                {/* Expandable Collections List */}
                {collectionsOpen && (
                  <div className="ml-4 space-y-1 border-l-2 border-yellow-400/20 pl-2">
                    {filteredCollections.map((collection) => (
                      <Link
                        key={collection.id}
                        href={`/collections/${collection.handle}`}
                        onClick={() => setOpen(false)}
                        className="block text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 px-4 py-2.5 rounded-lg transition-colors"
                      >
                        <div className="font-medium text-sm">{collection.title}</div>
                        <div className="text-xs text-yellow-400/60 mt-0.5 line-clamp-1">
                          {collection.description || 
                           collectionDescriptions[collection.handle] || 
                           "Explore our collection"}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Magic Pickleball - Special */}
            <Link
              href="/magic-pickleball"
              onClick={() => setOpen(false)}
              className="bg-green-700 text-white hover:bg-green-800 px-4 py-3 rounded-lg font-bold transition-colors shadow-lg"
            >
               The Magic Pickleball
            </Link>

            {/* About & Contact */}
            <div className="border-t border-yellow-400/20 mt-4 pt-4 space-y-2">
              <Link
                href="/pages/about"
                onClick={() => setOpen(false)}
                className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-colors block"
              >
                 About
              </Link>
              <Link
                href="/pages/contact"
                onClick={() => setOpen(false)}
                className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-colors block"
              >
                Contact
              </Link>
            </div>
          </nav>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileMenu