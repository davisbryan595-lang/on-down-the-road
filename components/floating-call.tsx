"use client"

import { useState, useEffect } from "react"

export default function FloatingCall() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    isVisible && (
      <a
        href="tel:5869144693"
        className="fixed right-4 bottom-6 sm:right-6 sm:bottom-8 z-40 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg glow-red animate-red-pulse hover:scale-110 transition-all duration-300 transform cursor-pointer"
        title="Call us"
      >
        📞
      </a>
    )
  )
}
