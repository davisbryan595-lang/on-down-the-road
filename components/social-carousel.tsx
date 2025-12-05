"use client"

import { useState, useEffect } from "react"
import { Youtube, Instagram, Music2, Mail, Heart, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "YouTube",
    url: "https://youtube.com/channel/UCXcx5CtfZ2mtL3L5GnwwMwA/?sub_confirmation=1",
    icon: Youtube,
    color: "text-red-500",
    bgColor: "bg-red-900/20",
    borderColor: "border-red-900/50",
    description: "Subscribe for real reviews and honest takes on bikes and trucks.",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/on.down.the.road.productions/?hl=en",
    icon: Instagram,
    color: "text-pink-500",
    bgColor: "bg-pink-900/20",
    borderColor: "border-pink-900/50",
    description: "Follow for behind-the-scenes content and daily moto adventures.",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@on.down.the.road",
    icon: Music2,
    color: "text-gray-300",
    bgColor: "bg-gray-900/20",
    borderColor: "border-gray-900/50",
    description: "Catch short-form content and quick reviews on the go.",
  },
  {
    name: "Newsletter",
    url: "https://mailchi.mp/5d978a2b211f/untitled-page",
    icon: Mail,
    color: "text-blue-400",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-900/50",
    description: "Get exclusive updates and early access to new content.",
  },
  {
    name: "Buy Me A Coffee",
    url: "https://coff.ee/odtrp",
    icon: Heart,
    color: "text-orange-500",
    bgColor: "bg-orange-900/20",
    borderColor: "border-orange-900/50",
    description: "Support the mission with a cup of coffee.",
  },
  {
    name: "PayPal",
    url: "https://paypal.com/paypalme/burningdowntheroad",
    icon: DollarSign,
    color: "text-blue-600",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-900/50",
    description: "Help fuel the next adventure and keep the content coming.",
  },
  {
    name: "Cash App",
    url: "https://cash.app/$ODTRP",
    icon: DollarSign,
    color: "text-green-500",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-900/50",
    description: "Quick and easy way to support the community.",
  },
]

export default function SocialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % socialLinks.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + socialLinks.length) % socialLinks.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % socialLinks.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const currentSlide = socialLinks[currentIndex]
  const CurrentIcon = currentSlide.icon

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-900/3 rounded-full blur-3xl bottom-0 left-1/3" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 text-center animate-slide-in-up">
          Connect With <span className="text-blue-500">Us</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Join our community and stay updated across all platforms
        </p>

        {/* Main Carousel Slide */}
        <div className={`relative ${currentSlide.bgColor} border-2 ${currentSlide.borderColor} rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500`}>
          <div className="px-8 py-16 sm:py-20 flex flex-col items-center justify-center min-h-96">
            {/* Icon */}
            <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full ${currentSlide.bgColor} border-2 ${currentSlide.borderColor} flex items-center justify-center mb-8 transition-all duration-500`}>
              <CurrentIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${currentSlide.color}`} />
            </div>

            {/* Content */}
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">{currentSlide.name}</h3>
            <p className="text-gray-300 text-center mb-8 text-lg max-w-2xl">{currentSlide.description}</p>

            {/* CTA Button */}
            <a href={currentSlide.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Visit {currentSlide.name} →
              </Button>
            </a>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full bg-blue-900/30 hover:bg-blue-900/60 text-white transition-all duration-300 border border-blue-900/50 hover:border-blue-900"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2 flex-wrap justify-center">
            {socialLinks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-gray-600 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-blue-900/30 hover:bg-blue-900/60 text-white transition-all duration-300 border border-blue-900/50 hover:border-blue-900"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Auto-play toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            {isAutoPlay ? "⏸ Auto-playing" : "▶ Click to resume auto-play"}
          </button>
        </div>
      </div>
    </section>
  )
}
