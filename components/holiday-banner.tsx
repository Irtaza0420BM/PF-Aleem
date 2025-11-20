import Link from "next/link"

export function HolidayBanner() {
  return (
    <div className="bg-black text-white py-6 px-6 text-center relative">
      <p className="text-xl md:text-2xl font-medium">
        <span className="hidden md:inline">Holiday Special: </span>
        Free Shipping on Orders Over $50
      </p>
    </div>
  )
}
