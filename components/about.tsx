"use client"

import Image from "next/image"
import { Youtube } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-900/4 rounded-full blur-3xl top-1/3 right-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              About <span className="text-blue-500">ODTRP</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Welcome to On Down The Road Productions – Where the Road Never Ends and the Reviews Never Stop!
              </p>

              <p>
                I'm a proud <span className="text-blue-400 font-semibold">USAF Veteran</span>, FSA survivor and advocate, and a lifelong explorer fueled by a passion for Detroit, Motown, motorcycles, trucks, travel, and all things automotive.
              </p>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">What We Offer:</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✅</span>
                    <span>Honest car & truck reviews</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✅</span>
                    <span>Motorcycle adventures & reviews</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✅</span>
                    <span>Moto camping gear & travel vlogs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✅</span>
                    <span>DIY repairs, part installs, and garage insights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold mt-1">✅</span>
                    <span>Live Q&As and community chats</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm flex items-center gap-2">
                Subscribe now to join a growing community of riders, wrenchers, and road warriors who crave the real story behind the ride.
                <a
                  href="https://youtube.com/channel/UCXcx5CtfZ2mtL3L5GnwwMwA/?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-all duration-300 flex-shrink-0"
                  title="Subscribe on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/20 rounded-lg p-8 border border-blue-900/30 hover:border-blue-900/60 transition-all duration-300">
              <div className="relative rounded-lg h-96 overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F98a3bf12d3fd43d6afbc24b607fa1ca0%2Fab64b417171148699301d9ce10fb5a0a?format=webp&width=800"
                  alt="Terrence Flynn - Content Creator & Reviewer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
