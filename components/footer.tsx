import Link from "next/link"
import { Snowflake } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="bg-gradient-to-r from-red-900/20 to-green-900/20 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Snowflake className="w-4 h-4 text-blue-400 animate-pulse" />
            <p className="text-sm text-gray-200 font-medium">Happy Holidays from Moment Pickleball</p>
            <Snowflake className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>
          <p className="text-xs text-gray-400">Order by December 20th for holiday delivery</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Column */}
          <div className="flex flex-col items-start justify-start">
            <Link href="/" className="inline-block">
              <Image
                src="/images/moment-logo-yellow.png"
                alt="Moment Pickleball"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Products/Social Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Products/Social</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/collections/training-playing-products" className="hover:text-yellow-400 transition-colors inline-block">
                  Training Products
                </Link>
              </li>
              <li>
                <Link href="/magic-pickleball" className="hover:text-yellow-400 transition-colors inline-block">
                  The Magic Pickleball
                </Link>
              </li>
              <li>
                <Link href="/collections/all" className="hover:text-yellow-400 transition-colors inline-block">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/momentpickleball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors inline-block"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://tiktok.com/@momentpickleball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors inline-block"
                >
                  TikTok
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pages/about" className="hover:text-yellow-400 transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pages/contact" className="hover:text-yellow-400 transition-colors inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pages/affiliate" className="hover:text-yellow-400 transition-colors inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pages/ambassadors" className="hover:text-yellow-400 transition-colors inline-block">
                  Ambassador Program
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.pickleflowmindset.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors inline-block"
                >
                  PickleFlow Mindset Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pages/shipping" className="hover:text-yellow-400 transition-colors inline-block">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/pages/refund" className="hover:text-yellow-400 transition-colors inline-block">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/pages/privacy" className="hover:text-yellow-400 transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/pages/terms" className="hover:text-yellow-400 transition-colors inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Moment Pickleball. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
