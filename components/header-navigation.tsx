// 

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
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const contactDropdownRef = useRef<HTMLDivElement>(null)

  const filteredCollections = collections.filter(
    (collection) =>
      !collection.title.toLowerCase().includes("home page") &&
      !collection.title.toLowerCase().includes("carro brand") &&
      !collection.title.toLowerCase().includes("masonry grid") &&
      collection.handle !== "frontpage" &&
      collection.handle !== "carro-brand-partnerships" &&
      collection.handle !== "masonry-grid",
  )

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setContactDropdownOpen(false)
      }
    }

    if (dropdownOpen || contactDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen, contactDropdownOpen])

  return (
    <nav className="flex items-center justify-start gap-2 lg:gap-3 xl:gap-4 flex-wrap">

      {/* Home Link */}
      <Link 
        href="/" 
        className="relative z-10 px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded transition-all group inline-block whitespace-nowrap"
      >
        <span className="relative z-10 group-hover:text-white transition-colors">Home</span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
      </Link>

      {/* Shop By Collection - HOVER TO OPEN */}
      <div 
        className="relative z-50" 
        ref={dropdownRef}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button
          className="px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded transition-all group whitespace-nowrap flex items-center gap-1"
        >
          <span className="relative z-10 group-hover:text-white transition-colors">Shop By Collection</span>
          {dropdownOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>

        {dropdownOpen && filteredCollections.length > 0 && (
          <div className="absolute left-0 mt-0 w-72 bg-black rounded-lg shadow-2xl overflow-hidden">
            <div className="py-2">
              {filteredCollections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-3 hover:bg-[#fdfe06]/10 transition-colors"
                >
                  <div className="font-semibold text-[#fdfe06] text-sm">
                    {collection.title}
                  </div>
                  <div className="text-xs text-[#fdfe06]/60 mt-0.5 line-clamp-1">
                    {collection.description || collectionDescriptions[collection.handle] || "Explore our collection"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Magic Pickleball */}
      <Link
        href="/magic-pickleball"
        className="relative z-10 px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-bold bg-green-700 text-white rounded hover:bg-green-800 transition-colors shadow-lg whitespace-nowrap"
      >
        The Magic Pickleball
      </Link>

      {/* About */}
      <Link 
        href="/pages/about" 
        className="relative px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded transition-all group whitespace-nowrap"
      >
        About
      </Link>

      {/* Contact with dropdown - HOVER TO OPEN, NO BORDER */}
      <div 
        className="relative z-50" 
        ref={contactDropdownRef}
        onMouseEnter={() => setContactDropdownOpen(true)}
        onMouseLeave={() => setContactDropdownOpen(false)}
      >
        <div className="px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded flex items-center gap-1 cursor-pointer group">
          Contact
          <ChevronDown className="h-3 w-3" />
        </div>

        {contactDropdownOpen && (
          <div className="absolute top-full left-0 mt-0 bg-black rounded shadow-xl min-w-[200px] z-50">
            <Link
              href="/pages/sponsorship-ambassadors"
              className="block px-4 py-3 text-[#fdfe06] hover:text-white hover:bg-gray-900 transition-colors text-xs lg:text-sm"
            >
              Sponsorship / Ambassadors
            </Link>
            <Link
              href="/pages/reseller-wholesale"
              className="block px-4 py-3 text-[#fdfe06] hover:text-white hover:bg-gray-900 transition-colors text-xs lg:text-sm"
            >
              Reseller / Wholesale
            </Link>
          </div>
        )}
      </div>

    </nav>
  )
}

export default HeaderNavigation