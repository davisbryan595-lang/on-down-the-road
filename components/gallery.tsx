"use client"

import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    url: "https://img.youtube.com/vi/B0MCTNDwFJ8/maxresdefault.jpg",
    alt: "4Runner Snow Storm Demo",
  },
  {
    id: 2,
    url: "https://img.youtube.com/vi/MvxsVuOP_WI/maxresdefault.jpg",
    alt: "2024 4Runner Review",
  },
  {
    id: 3,
    url: "https://img.youtube.com/vi/AanqQ7tqAcI/maxresdefault.jpg",
    alt: "Goldwing DCT Review",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-900/3 rounded-full blur-3xl bottom-0 left-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-16 text-center animate-slide-in-up">
          Featured <span className="text-blue-500">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.url)}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer bg-gray-900 border-2 border-blue-900/30 hover:border-blue-900 transition-all duration-300"
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-all duration-300">
                  {image.alt}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl shadow-lg glow-red">
                  🔍
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-blue-400 transition-all duration-300"
            >
              ✕
            </button>
            <div className="border-4 border-blue-900 rounded-lg overflow-hidden glow-red-lg">
              <img src={selectedImage || "/placeholder.svg"} alt="Gallery preview" className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
