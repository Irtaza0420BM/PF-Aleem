"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

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
  const [collectionsOpen, setCollectionsOpen] = useState(false)

  // Prevent body scroll when menu opens
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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
      <button
        onClick={() => setOpen(true)}
        className="text-yellow-400 hover:text-white hover:bg-yellow-400/10 -ml-2 p-2 bg-transparent border-none cursor-pointer rounded"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Backdrop Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/80 z-[60] transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu Sliding from Top */}
      <div
        className={`fixed top-0 left-0 right-0 w-full bg-black border-b-4 border-yellow-400 z-[70] transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ maxHeight: '90vh' }}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-yellow-400/20">
          <h2 className="text-yellow-400 text-xl font-bold">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-yellow-400 hover:bg-yellow-400/10 hover:text-white rounded-full p-2 bg-transparent border-none cursor-pointer"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 70px)' }}>
          {/* Home Link */}
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-all no-underline"
          >
            Home
          </a>

          {/* Shop By Collection - Collapsible */}
          {filteredCollections.length > 0 && (
            <div className="space-y-1">
              {/* Toggle Button */}
              <button
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                className="w-full flex items-center justify-between text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-all bg-transparent border-none cursor-pointer"
              >
                <span>Shop By Collection</span>
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
                    <a
                      key={collection.id}
                      href={`/collections/${collection.handle}`}
                      onClick={() => setOpen(false)}
                      className="block text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-2.5 rounded-lg transition-all no-underline"
                    >
                      <div className="font-medium text-sm">{collection.title}</div>
                      <div className="text-xs text-yellow-400/60 hover:text-white/60 mt-0.5 line-clamp-1 transition-colors">
                        {collection.description || 
                         collectionDescriptions[collection.handle] || 
                         "Explore our collection"}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Magic Pickleball - Special */}
          <a
            href="/magic-pickleball"
            onClick={() => setOpen(false)}
            className="bg-green-700 text-white hover:bg-green-800 px-4 py-3 rounded-lg font-bold transition-colors shadow-lg no-underline block"
          >
            The Magic Pickleball
          </a>

          {/* About & Contact */}
          <div className="border-t border-yellow-400/20 mt-4 pt-4 space-y-2">
            <a
              href="/pages/about"
              onClick={() => setOpen(false)}
              className="text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-all block no-underline"
            >
              About
            </a>
            <a
              href="/pages/contact"
              onClick={() => setOpen(false)}
              className="text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-all block no-underline"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu