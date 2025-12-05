import SocialLinks from "./social-links"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-blue-900/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="font-bold text-white">ODTR</span>
            </div>
            <p className="text-gray-500 text-sm">Real reviews. Zero BS. Always.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Videos", "Gallery", "About"].map((link, j) => (
                <li key={j}>
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-all duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              {[
                { name: "YouTube", url: "https://youtube.com/channel/UCXcx5CtfZ2mtL3L5GnwwMwA/?sub_confirmation=1" },
                { name: "Instagram", url: "https://instagram.com/on.down.the.road.productions/?hl=en" },
                { name: "TikTok", url: "https://tiktok.com/@on.down.the.road" },
                { name: "Newsletter", url: "https://mailchi.mp/5d978a2b211f/untitled-page" },
              ].map((link, j) => (
                <li key={j}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-all duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                { name: "Buy Me A Coffee", url: "https://coff.ee/odtrp" },
                { name: "PayPal", url: "https://paypal.com/paypalme/burningdowntheroad" },
                { name: "Cash App", url: "https://cash.app/$ODTRP" },
              ].map((link, j) => (
                <li key={j}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-all duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/20 pt-8">
          <p className="text-gray-600 text-sm text-center">© {currentYear} On Down The Road Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
