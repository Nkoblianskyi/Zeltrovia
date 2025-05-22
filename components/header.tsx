"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Anchor } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Anchor className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-blue-900">Zeltrovia</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Főoldal
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Szabályzatok</button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Felhasználási feltételek
                </Link>
                <Link href="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Adatvédelmi irányelvek
                </Link>
                <Link href="/cookies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Cookie szabályzat
                </Link>
                <Link href="/disclaimer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Felelősségkizárás
                </Link>
              </div>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Főoldal
            </Link>
            <div className="px-3 py-2">
              <p className="text-base font-medium text-gray-700 mb-2">Szabályzatok</p>
              <div className="pl-4 space-y-1">
                <Link
                  href="/terms"
                  className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Felhasználási feltételek
                </Link>
                <Link
                  href="/privacy"
                  className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Adatvédelmi irányelvek
                </Link>
                <Link
                  href="/cookies"
                  className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cookie szabályzat
                </Link>
                <Link
                  href="/disclaimer"
                  className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Felelősségkizárás
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
