const reasons = [
  {
    icon: '🏆',
    title: '65 Years of Trust',
    desc: 'Founded in 1961, CRI has been India\'s most reliable pump brand for over six decades, trusted by millions.',
  },
  {
    icon: '⚡',
    title: 'Energy Efficient',
    desc: 'BEE 5-Star rated motors with IE3 efficiency class — save up to 30% on electricity compared to standard pumps.',
  },
  {
    icon: '🔬',
    title: 'R&D Innovation',
    desc: 'State-of-the-art R&D facilities with 200+ engineers constantly developing next-generation pumping solutions.',
  },
  {
    icon: '🌍',
    title: 'Global Presence',
    desc: 'Exported to 40+ countries across Asia, Africa, Europe, and the Americas. Trusted internationally.',
  },
  {
    icon: '🛠️',
    title: 'After-Sales Network',
    desc: '12,000+ dealers and 500+ service centers across India — help is always close by.',
  },
  {
    icon: '✅',
    title: 'Certified Quality',
    desc: 'ISI certified, ISO 9001:2015, and BIS compliant products with rigorous quality control at every stage.',
  },
];

export default function WhyCRI() {
  return (
    <section className="py-10 sm:py-16 w-full" style={{ background: 'var(--secondary)' }}>
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Why Choose CRI Pumps?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm font-medium">
            At <strong>Hebron Enterprises</strong>, we deliver six decades of CRI engineering precision, customer trust, and 100% genuine guaranteed products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 sm:p-6 border hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                style={{ background: 'var(--secondary)' }}
              >
                {r.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5">{r.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust quote */}
        <div
          className="mt-8 sm:mt-12 rounded-2xl p-5 sm:p-8 text-center relative overflow-hidden"
          style={{ background: 'var(--primary)' }}
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%)' }} />
          <p className="text-white text-base sm:text-xl md:text-2xl font-medium italic relative z-10 max-w-2xl mx-auto leading-snug" style={{ fontFamily: 'DM Serif Display, serif' }}>
            "Water is life's most essential resource. At CRI, we make every drop count — for every farm, every home, every industry."
          </p>
          <p className="text-blue-200 text-xs sm:text-sm mt-3 sm:mt-4 relative z-10">— CRI Pumps, Coimbatore, India</p>
        </div>
      </div>
    </section>
  );
}
