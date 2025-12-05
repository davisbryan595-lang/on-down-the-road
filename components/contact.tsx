"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-600/3 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-slide-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-400">Have questions or want to collaborate? We'd love to hear from you.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-lg border border-red-600/20 backdrop-blur-sm hover:border-red-600/40 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-white mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:glow-red transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:glow-red transition-all duration-300"
                placeholder="Your phone"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:glow-red transition-all duration-300"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:glow-red transition-all duration-300 resize-none"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 hover:glow-red-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {submitted ? "✓ Message Sent!" : "Send Message"}
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-center animate-scale-in">
            Thank you! We'll get back to you soon.
          </div>
        )}
      </div>
    </section>
  )
}
