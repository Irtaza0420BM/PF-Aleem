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
  const [contactOpen, setContactOpen] = useState(false)

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
        className={`fixed top-0 left-0 right-0 w-full bg-black z-[70] transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ maxHeight: '95vh' }}
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
        <nav className="flex flex-col p-4 space-y-2 overflow-y-auto overflow-x-hidden" style={{ maxHeight: 'calc(95vh - 70px)' }}>
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
                className="w-full flex items-center justify-between text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-all bg-transparent cursor-pointer"
                style={{ border: 'none', outline: 'none' }}
              >
                <span>Shop By Collection</span>
                {collectionsOpen ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>

              {/* Expandable Collections List */}
              {collectionsOpen && (
                <div className="ml-4 space-y-1 pl-2">
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

          {/* About */}
          <a
            href="/pages/about"
            onClick={() => setOpen(false)}
            className="text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-all block no-underline"
          >
            About
          </a>

          {/* Contact - Collapsible with main Contact page + 2 sub-pages */}
          <div className="border-t border-yellow-400/20 pt-4 space-y-2">
            <div className="space-y-1">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="w-full flex items-center justify-between text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-4 py-3 rounded-lg font-semibold transition-all bg-transparent cursor-pointer"
                style={{ border: 'none', outline: 'none' }}
              >
                <a
                  href="/pages/contact"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpen(false)
                  }}
                  className="text-yellow-400 hover:text-white no-underline flex-1 text-left"
                >
                  Contact
                </a>
                {contactOpen ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>

              {/* Expandable Contact Pages */}
              {contactOpen && (
                <div className="ml-2 space-y-1 pl-2">
                  <a
                    href="/pages/sponsorship-ambassadors"
                    onClick={() => setOpen(false)}
                    className="block text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-3 py-2.5 rounded-lg transition-all no-underline text-sm break-words"
                  >
                    Sponsorship / Ambassadors
                  </a>
                  <a
                    href="/pages/reseller-wholesale"
                    onClick={() => setOpen(false)}
                    className="block text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-3 py-2.5 rounded-lg transition-all no-underline text-sm break-words"
                  >
                    Reseller / Wholesale
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu