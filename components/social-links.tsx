"use client"

import { Youtube, Instagram, Music2, Mail, Heart, DollarSign } from "lucide-react"

const socialLinks = [
  {
    name: "YouTube",
    url: "https://youtube.com/channel/UCXcx5CtfZ2mtL3L5GnwwMwA/?sub_confirmation=1",
    icon: Youtube,
    color: "text-red-500 hover:text-red-400",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/on.down.the.road.productions/?hl=en",
    icon: Instagram,
    color: "text-pink-500 hover:text-pink-400",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@on.down.the.road",
    icon: Music2,
    color: "text-gray-300 hover:text-white",
  },
  {
    name: "Newsletter",
    url: "https://mailchi.mp/5d978a2b211f/untitled-page",
    icon: Mail,
    color: "text-blue-400 hover:text-blue-300",
  },
  {
    name: "Buy Me A Coffee",
    url: "https://coff.ee/odtrp",
    icon: Heart,
    color: "text-orange-500 hover:text-orange-400",
  },
  {
    name: "PayPal",
    url: "https://paypal.com/paypalme/burningdowntheroad",
    icon: DollarSign,
    color: "text-blue-600 hover:text-blue-500",
  },
  {
    name: "Cash App",
    url: "https://cash.app/$ODTRP",
    icon: DollarSign,
    color: "text-green-500 hover:text-green-400",
  },
]

interface SocialLinksProps {
  layout?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  showLabels?: boolean
}

export default function SocialLinks({
  layout = "horizontal",
  size = "md",
  showLabels = false,
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const containerClass =
    layout === "horizontal"
      ? "flex items-center justify-center space-x-4"
      : "flex flex-col items-center space-y-4"

  return (
    <div className={containerClass}>
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className={`transition-all duration-300 ${social.color}`}
          >
            <Icon className={sizeClasses[size]} />
            {showLabels && <span className="text-xs mt-1 block text-center">{social.name}</span>}
          </a>
        )
      })}
    </div>
  )
}
