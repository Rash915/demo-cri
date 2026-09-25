interface HeroProps {
  onShopNow: () => void;
  onCategorySelect: (id: string) => void;
}

export default function Hero({ onShopNow, onCategorySelect }: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[440px] sm:min-h-[520px] w-full">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=1600&h=700&fit=crop&auto=format')`,
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(3,105,161,0.92) 0%, rgba(14,165,233,0.75) 60%, rgba(3,105,161,0.45) 100%)' }} />

      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[360px] h-[360px] rounded-full border border-white/10 pointer-events-none hidden sm:block" />
      <div className="absolute top-[-40px] right-[-40px] w-[240px] h-[240px] rounded-full border border-white/10 pointer-events-none hidden sm:block" />

      <div className="relative w-full px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left content */}
        <div className="flex-1 text-white animate-fade-in text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-400/90 text-gray-950 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full mb-4 sm:mb-6 shadow-md border border-amber-300">
            <span className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></span>
            HEBRON ENTERPRISES — AUTHORISED DEALER OF C.R.I. PUMPS
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Powering Water.<br />
            <span className="text-amber-300">Empowering Life.</span>
          </h1>
          <p className="text-blue-100 text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto sm:mx-0">
            Welcome to <strong>Hebron Enterprises</strong>, the authorised dealer for C.R.I. Pumps — serving 5 million+ farmers, homes, and industries with 100% genuine pumps & factory warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
            <button
              onClick={onShopNow}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base text-center"
            >
              Shop Now
            </button>
            <button
              onClick={() => onCategorySelect('agri-pumps')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white font-medium rounded-lg transition-all border border-white/40 text-sm sm:text-base backdrop-blur-sm text-center"
            >
              Explore Pumps
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 mt-8">
            {['ISI Certified', 'BEE 5-Star', 'ISO 9001:2015', '5M+ Customers'].map(badge => (
              <div key={badge} className="flex items-center gap-1.5 text-blue-100 text-xs sm:text-sm bg-white/10 px-2.5 py-1 rounded-md border border-white/10 sm:bg-transparent sm:p-0 sm:border-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300 shrink-0">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right — stats card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 w-full lg:w-72 shrink-0">
          {[
            { value: '5M+', label: 'Customers' },
            { value: '12K+', label: 'Dealers' },
            { value: '40+', label: 'Countries' },
            { value: '65+', label: 'Years' },
          ].map(stat => (
            <div key={stat.label} className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl p-3 sm:p-4 text-white text-center">
              <div className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'DM Serif Display, serif' }}>{stat.value}</div>
              <div className="text-blue-100 text-[11px] sm:text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 12.5C1248 15 1344 35 1392 45L1440 55V60H0Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
