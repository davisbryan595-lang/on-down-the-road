import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "On Down The Road Productions - Honest Reviews, Zero BS",
  description: "Real reviews. Real riders. No corporate sponsors. Just honest takes on bikes and trucks.",
  generator: "v0.app",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect fill="%23DC2626" width="32" height="32"/><text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold">R</text></svg>',
  },
  openGraph: {
    title: "On Down The Road Productions",
    description: "Real reviews. Real riders. No corporate sponsors.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "On Down The Road Productions",
              url: "https://ondowntheroad.com",
              description: "Honest automotive and motorcycle reviews",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
