import SocialLinks from "./social-links"

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
              Meet <span className="text-blue-500">Terrence Flynn</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Real rider. Real reviews. No corporate sponsors. Just honest takes on bikes and trucks.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Terrence Flynn is dedicated to bringing authentic, unbiased reviews to the automotive and motorcycle
              community. With years of hands-on experience and a no-nonsense approach, he cuts through the marketing
              noise to give you the truth about the vehicles you're interested in.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "🏍️ Expert motorcycle reviews",
                "🚗 Detailed vehicle analysis",
                "💯 100% honest, unbiased opinions",
                "🤝 Real community engagement",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-white">
                  <span className="text-blue-500 font-bold text-lg">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-4">Connect with Terrence</p>
              <SocialLinks layout="horizontal" size="md" />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/20 rounded-lg p-8 border border-blue-900/30 hover:border-blue-900/60 transition-all duration-300">
              <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg h-96 flex items-center justify-center text-gray-500 font-bold text-xl glow-red">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p>Terrence Flynn</p>
                  <p className="text-sm text-gray-600 mt-2">Content Creator & Reviewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
