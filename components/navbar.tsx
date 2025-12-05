"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-2xl bg-gradient-to-r from-blue-950/20 via-black/30 to-blue-950/20 border-b border-blue-500/30 shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#" className="flex items-center space-x-2 group transition-all duration-300">
            <div className="w-16 h-16 relative">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F7a295dc46e8b4a67abfb83f4af920060?format=webp&width=800"
                alt="On Down The Road Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Videos", "Sponsors", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium text-sm relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:5869144693"
            className="hidden sm:flex items-center space-x-2 px-4 py-2 glass-sm bg-blue-900/20 text-white rounded-full font-bold hover:bg-blue-900/40 hover:glow-red transition-all duration-300 text-sm"
          >
            <span>📞 586-914-4693</span>
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass bg-black/40 border-t border-blue-900/20 py-4 animate-slide-in-up">
            {["Home", "Videos", "Sponsors", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-900/10 transition-all duration-300"
              >
                {item}
              </button>
            ))}
            <a
              href="tel:5869144693"
              className="block w-full text-left px-4 py-2 text-blue-400 font-bold hover:bg-blue-900/20 transition-all duration-300"
            >
              📞 Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
