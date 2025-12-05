"use client"

import { Youtube, Instagram, Music2, Mail, Heart, DollarSign } from "lucide-react"

const socialLinks = [
  {
    name: "YouTube",
    url: "https://youtube.com/channel/UCXcx5CtfZ2mtL3L5GnwwMwA/?sub_confirmation=1",
    icon: Youtube,
    color: "text-red-500 hover:text-red-400",
    description: "Subscribe for real reviews and honest takes on bikes and trucks.",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/on.down.the.road.productions/?hl=en",
    icon: Instagram,
    color: "text-pink-500 hover:text-pink-400",
    description: "Follow for behind-the-scenes content and daily moto adventures.",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@on.down.the.road",
    icon: Music2,
    color: "text-gray-300 hover:text-white",
    description: "Catch short-form content and quick reviews on the go.",
  },
  {
    name: "Newsletter",
    url: "https://mailchi.mp/5d978a2b211f/untitled-page",
    icon: Mail,
    color: "text-blue-400 hover:text-blue-300",
    description: "Get exclusive updates and early access to new content.",
  },
  {
    name: "Buy Me A Coffee",
    url: "https://coff.ee/odtrp",
    icon: Heart,
    color: "text-orange-500 hover:text-orange-400",
    description: "Support the mission with a cup of coffee.",
  },
  {
    name: "PayPal",
    url: "https://paypal.com/paypalme/burningdowntheroad",
    icon: DollarSign,
    color: "text-blue-600 hover:text-blue-500",
    description: "Help fuel the next adventure and keep the content coming.",
  },
  {
    name: "Cash App",
    url: "https://cash.app/$ODTRP",
    icon: DollarSign,
    color: "text-green-500 hover:text-green-400",
    description: "Quick and easy way to support the community.",
  },
]

interface SocialLinksProps {
  layout?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  showLabels?: boolean
  showDescriptions?: boolean
}

export default function SocialLinks({
  layout = "horizontal",
  size = "md",
  showLabels = false,
  showDescriptions = false,
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const containerClass =
    layout === "horizontal"
      ? "flex items-center justify-center space-x-4"
      : "flex flex-col items-start space-y-4"

  if (showDescriptions) {
    return (
      <div className="space-y-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <div key={social.name} className="flex items-start gap-3">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`transition-all duration-300 flex-shrink-0 ${social.color}`}
              >
                <Icon className={sizeClasses[size]} />
              </a>
              <div>
                <h4 className="font-semibold text-white text-sm">{social.name}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{social.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

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
            title={social.description || social.name}
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
