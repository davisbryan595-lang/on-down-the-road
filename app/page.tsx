"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Videos from "@/components/videos"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Shop from "@/components/shop"
import Sponsors from "@/components/sponsors"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-x-hidden">
      <ParticleBackground />
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Videos />
      <Gallery />
      <About />
      <Shop />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  )
}
