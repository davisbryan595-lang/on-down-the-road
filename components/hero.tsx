"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/motorcycle-hero.jpg"
          alt="Professional motorcycle on highway"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-900/5 rounded-full blur-3xl top-20 -right-20 animate-pulse" />
        <div className="absolute w-80 h-80 bg-blue-900/5 rounded-full blur-3xl bottom-32 -left-20 animate-pulse" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Text with glass effect */}
        <div
          className={`text-center transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="glass-dark px-8 py-12 mb-8 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-7xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl">
              ON DOWN THE ROAD
            </h1>
            <p className="text-lg sm:text-2xl text-gray-100 mb-4 font-bold drop-shadow-lg">
              Zero Bull Shit • Zero Shill • We Are On Your Side
            </p>
            <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto italic drop-shadow-md">
              Real reviews from real riders. No corporate sponsors. Just honest takes on bikes and trucks.
            </p>
          </div>

          {/* CTA Button with glass effect */}
          <button
            onClick={() => document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-block px-8 py-4 glass-light bg-blue-900/30 text-white font-bold rounded-xl hover:bg-blue-900/50 hover:glow-red-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-2xl"
          >
            ▶ Watch Latest Video
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce`}>
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
