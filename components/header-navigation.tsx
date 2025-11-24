
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

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
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredCollections = collections.filter(
    (collection) =>
      !collection.title.toLowerCase().includes("home page") &&
      !collection.title.toLowerCase().includes("carro brand") &&
      !collection.title.toLowerCase().includes("masonry grid") &&
      collection.handle !== "frontpage" &&
      collection.handle !== "carro-brand-partnerships" &&
      collection.handle !== "masonry-grid",
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen])

  return (
    <nav className="flex items-center justify-center gap-3 lg:gap-4">
      {/* Home Link */}
      <Link 
        href="/" 
        className="relative z-10 px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
        style={{ cursor: 'pointer' }}
      >
        Home
      </Link>

      {/* Shop By Collection - Click Dropdown */}
      <div className="relative z-50" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors whitespace-nowrap flex items-center gap-1"
          style={{ cursor: 'pointer' }}
        >
          Shop By Collection
          {dropdownOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        
        {/* Dropdown Menu */}
        {dropdownOpen && (
          <>
            {/* Backdrop to prevent interference */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setDropdownOpen(false)}
            />
            <div className="absolute top-full left-0 mt-2 w-[400px] bg-white border-2 border-gray-200 rounded-lg shadow-2xl z-50 max-h-[500px] overflow-y-auto">
              <div className="p-2">
                {filteredCollections.length > 0 ? (
                  filteredCollections.map((collection) => (
                    <Link
                      key={collection.id}
                      href={`/collections/${collection.handle}`}
                      onClick={() => setDropdownOpen(false)}
                      className="block p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="text-sm font-semibold text-black">
                        {collection.title}
                      </div>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {collection.description ||
                          collectionDescriptions[collection.handle] ||
                          "Explore our curated collection"}
                      </p>
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-sm text-gray-500">
                    No collections available
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Magic Pickleball */}
      <Link
        href="/magic-pickleball"
        className="relative z-10 px-3 py-1.5 text-sm font-bold bg-green-700 text-white rounded hover:bg-green-800 transition-colors shadow-lg whitespace-nowrap"
        style={{ cursor: 'pointer' }}
      >
        The Magic Pickleball
      </Link>

      {/* About */}
      <Link 
        href="/pages/about" 
        className="relative z-10 px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
        style={{ cursor: 'pointer' }}
      >
        About
      </Link>
      
      {/* Contact */}
      <Link 
        href="/pages/contact" 
        className="relative z-10 px-3 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
        style={{ cursor: 'pointer' }}
      >
        Contact
      </Link>
    </nav>
  )
}

export default HeaderNavigation





