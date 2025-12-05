"use client"

import { useState } from "react"

const videos = [
  {
    id: "B0MCTNDwFJ8",
    title: "TRD ORP 4Runner in A Snow Storm 4X4 Demo",
    views: "12.5K",
    date: "2 weeks ago",
  },
  {
    id: "MvxsVuOP_WI",
    title: "2024 4Runner Eight Things to Know 5th Gen",
    views: "28.3K",
    date: "1 month ago",
  },
  {
    id: "AanqQ7tqAcI",
    title: "STOP your 2024 and 2025 Goldwing DCT Purchase Before Seeing this",
    views: "45.2K",
    date: "3 weeks ago",
  },
]

export default function Videos() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)
  const [autoPlayId, setAutoPlayId] = useState<string | null>(null)

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-600/3 rounded-full blur-3xl top-1/2 -right-48" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 animate-slide-in-up">
            Latest <span className="text-red-600">Videos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Real reviews, real content, no corporate BS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              className="group rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-red-600/20 hover:border-red-600/60 transition-all duration-300 hover:shadow-lg hover:glow-red cursor-pointer transform hover:scale-105"
            >
              {/* Video Thumbnail */}
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?${hoveredVideo === video.id ? "autoplay=1&mute=1" : "autoplay=0"}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />

                {/* Overlay with video info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="w-full p-4">
                    <p className="text-xs text-gray-400">
                      {video.views} views • {video.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-bold text-white group-hover:text-red-600 transition-all duration-300 line-clamp-2 text-sm">
                  {video.title}
                </h3>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    R
                  </div>
                  <div className="text-xs text-gray-500">ODTR Productions</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JSON-LD for video schema */}
        {videos.map((video) => (
          <script
            key={video.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "VideoObject",
                name: video.title,
                description: "On Down The Road Productions - " + video.title,
                thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
                uploadDate: new Date().toISOString(),
                duration: "PT10M",
                contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
                embedUrl: `https://www.youtube.com/embed/${video.id}`,
              }),
            }}
          />
        ))}
      </div>
    </section>
  )
}
