

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
    <nav className="flex items-center justify-start gap-2 lg:gap-3 xl:gap-4 flex-wrap">
  {/* Home Link */}
  <Link 
    href="/" 
    className="relative z-10 px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded transition-all group inline-block whitespace-nowrap"
    style={{ cursor: 'pointer' }}
  >
    <span className="relative z-10 group-hover:text-white transition-colors inline-block">Home</span>
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
  </Link>

  {/* Shop By Collection */}
  <div className="relative z-50" ref={dropdownRef}>
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded transition-all group whitespace-nowrap flex items-center gap-1"
      style={{ cursor: 'pointer' }}
    >
      <span className="relative z-10 group-hover:text-white transition-colors">Shop By Collection</span>
      {dropdownOpen ? (
        <ChevronUp className="h-3 w-3 lg:h-4 lg:w-4 relative z-10 group-hover:text-white transition-colors" />
      ) : (
        <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 relative z-10 group-hover:text-white transition-colors" />
      )}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
    </button>
    {/* Dropdown remains same */}
  </div>

  {/* Magic Pickleball — unchanged */}
  <Link
    href="/magic-pickleball"
    className="relative z-10 px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-bold bg-green-700 text-white rounded hover:bg-green-800 transition-colors shadow-lg whitespace-nowrap"
    style={{ cursor: 'pointer' }}
  >
    The Magic Pickleball
  </Link>

  {/* About */}
  <Link 
    href="/pages/about" 
    className="relative z-10 px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded transition-all group inline-block whitespace-nowrap"
    style={{ cursor: 'pointer' }}
  >
    <span className="relative z-10 group-hover:text-white transition-colors inline-block">About</span>
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
  </Link>

  {/* Contact */}
  <Link 
    href="/pages/contact" 
    className="relative z-10 px-2 lg:px-3 py-1.5 text-xs lg:text-sm bg-black text-[#fdfe06] font-semibold rounded transition-all group inline-block whitespace-nowrap"
    style={{ cursor: 'pointer' }}
  >
    <span className="relative z-10 group-hover:text-white transition-colors inline-block">Contact</span>
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
  </Link>
</nav>

  )
}

export default HeaderNavigation