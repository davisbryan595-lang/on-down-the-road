export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-red-600/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="font-bold text-white">ODTR</span>
            </div>
            <p className="text-gray-500 text-sm">Real reviews. Zero BS. Always.</p>
          </div>

          {/* Links */}
          {[
            { title: "Navigation", links: ["Home", "Videos", "Gallery", "About"] },
            { title: "Connect", links: ["YouTube", "Instagram", "Twitter"] },
            { title: "Info", links: ["Privacy", "Terms", "Contact"] },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-500 hover:text-red-600 transition-all duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-red-600/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">© {currentYear} On Down The Road Productions. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="tel:5869144693"
                className="text-red-600 hover:text-red-500 font-bold transition-all duration-300"
              >
                📞 586-914-4693
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
