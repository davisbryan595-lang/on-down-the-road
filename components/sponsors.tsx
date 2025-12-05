export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Partner <span className="text-red-600">With Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Want to sponsor honest content? We don't shill – we tell the truth. Our audience values authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Authentic Reach", desc: "Connect with viewers who value real, unbiased opinions" },
            { title: "High Engagement", desc: "Dedicated community that truly cares about quality content" },
            { title: "Trust Factor", desc: "Associated with honest, transparent content creation" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border border-red-600/20 hover:border-red-600/60 rounded-lg transition-all duration-300 hover:glow-red group cursor-pointer transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:contact@ondowntheroad.com"
            className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 hover:glow-red-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}
