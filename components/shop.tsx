export default function Shop() {
  const shops = [
    {
      name: "ODTR Spreadshop",
      description: "Exclusive ODTRP merchandise including apparel and gear",
      url: "https://odtrp.myspreadshop.com/all",
      icon: "🛒",
    },
    {
      name: "Creator Spring Store",
      description: "On Down The Road Productions apparel and accessories",
      url: "https://ondowntheroadproductions.creator-spring.com/listing/on-down-the-productions-riding",
      icon: "👕",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-900/3 rounded-full blur-3xl bottom-0 left-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ODTR <span className="text-blue-500">Shop</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Support the channel with exclusive ODTRP merchandise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {shops.map((shop, i) => (
            <a
              key={i}
              href={shop.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-black" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-blue-900/10 to-transparent" />

              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="text-6xl mb-4">{shop.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">
                  {shop.name}
                </h3>
                <p className="text-gray-400 mb-6">{shop.description}</p>
                <button className="px-6 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-300 group-hover:glow-red-lg">
                  Shop Now →
                </button>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">Every purchase supports the channel and helps us create more content!</p>
        </div>
      </div>
    </section>
  )
}
