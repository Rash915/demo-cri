import { hebronLogo } from '../assets/logoData';
import { categoryImages } from '../assets/categoryImages';

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
          <div className="inline-flex items-center gap-2 bg-amber-400 text-gray-950 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full mb-4 sm:mb-6 shadow-md border border-amber-300">
             <img src={hebronLogo} alt="Hebron Logo" className="h-4.5 sm:h-5 w-auto object-contain" />
             <span>HEBRON ENTERPRISES — AUTHORISED DEALER OF C.R.I. PUMPS</span>
           </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Powering Water.<br />
            <span className="text-amber-300">Empowering Life.</span>
          </h1>
          <p className="text-blue-100 text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto sm:mx-0">
            Welcome to <strong className="inline-flex items-center gap-1.5"><img src={hebronLogo} alt="Hebron Logo" className="h-4.5 w-auto inline-block object-contain" />Hebron Enterprises</strong>, the authorised dealer for C.R.I. Pumps — serving 5 million+ farmers, homes, and industries with 100% genuine pumps & factory warranty.
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
            {[
              '5M+ Happy Customers',
              '65+ Years of Experience',
              '40+ Countries Served',
            ].map(badge => (
              <div key={badge} className="flex items-center gap-1.5 text-blue-100 text-xs sm:text-sm bg-white/10 px-2.5 py-1 rounded-md border border-white/10 sm:bg-transparent sm:p-0 sm:border-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right — 5 Category Glass Cards */}
        <div className="w-full lg:w-[420px] xl:w-[460px] shrink-0 animate-fade-in">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Browse 5 Core Categories</span>
            </div>
            <span className="text-[11px] text-blue-200 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
              100% Genuine CRI
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {/* Card 1: Agri Pumps (Wide Hero Card spanning 2 columns) */}
            <button
              type="button"
              onClick={() => onCategorySelect('agri')}
              className="col-span-2 relative group overflow-hidden rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-amber-300 p-2.5 sm:p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer text-left flex items-center gap-3 sm:gap-4"
            >
              <div className="relative w-24 sm:w-28 h-20 sm:h-22 rounded-xl overflow-hidden shrink-0 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d69109853?w=600&auto=format&fit=crop&q=80"
                  alt="Agri Pumps"
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                <span className="absolute top-1 left-1 text-xs bg-gray-900/60 backdrop-blur-xs px-1.5 py-0.5 rounded border border-white/20">
                  🌾
                </span>
              </div>
              <div className="flex-1 min-w-0 pr-1">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400 text-gray-950 text-[10px] font-extrabold uppercase tracking-wide mb-1">
                  ★ Govt. Rate Contract
                </div>
                <h3 className="font-extrabold text-base sm:text-lg tracking-wide text-white group-hover:text-amber-300 transition-colors truncate">
                  Agri Pumps
                </h3>
                <p className="text-[11px] text-blue-100 font-medium truncate mt-0.5">
                  3-Phase Monoblock, Openwell & Submersibles
                </p>
                <div className="flex items-center gap-1 text-[11px] text-amber-300 font-bold mt-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Range</span>
                  <span>→</span>
                </div>
              </div>
            </button>

            {/* Cards 2-5: Residential, Tiny Series, Next Gen, Accessories */}
            {[
              {
                id: 'residential',
                name: 'Residential',
                badge: 'Home & Villa',
                desc: 'Booster & Monoblocks',
                icon: '🏠',
                image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80',
              },
              {
                id: 'tiny',
                name: 'Tiny Series',
                badge: 'Mini Power',
                desc: 'Compact Domestic Pumps',
                icon: '⚡',
                image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80',
              },
              {
                id: 'next-gen',
                name: 'Next Gen',
                badge: 'Smart Tech',
                desc: 'IoT & Solar Inverters',
                icon: '🚀',
                image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80',
              },
              {
                id: 'accessories',
                name: 'Accessories',
                badge: '100% Genuine',
                desc: 'Starters, Panels & Spares',
                icon: '🔧',
                image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&auto=format&fit=crop&q=80',
              },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategorySelect(cat.id)}
                className="relative group overflow-hidden rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-amber-300 p-2.5 sm:p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-left flex flex-col justify-between"
              >
                <div className="relative w-full h-20 sm:h-24 rounded-xl overflow-hidden mb-2 shadow-inner">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="eager"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-950/20 to-transparent" />
                  <span className="absolute top-1.5 left-1.5 text-xs bg-gray-900/60 backdrop-blur-xs px-1.5 py-0.5 rounded border border-white/20 text-white font-bold">
                    {cat.icon}
                  </span>
                  <span className="absolute bottom-1 right-1.5 text-[9px] font-bold text-amber-300 bg-black/50 backdrop-blur-xs px-1.5 py-0.5 rounded">
                    {cat.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base tracking-wide text-white group-hover:text-amber-300 transition-colors truncate">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-blue-100/90 font-medium truncate mt-0.5">
                    {cat.desc}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/10">
                    <span className="text-[10px] text-amber-300 font-bold">Explore</span>
                    <span className="text-xs text-amber-300 font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

{/* Bottom wave */ }
<div className="absolute bottom-0 left-0 right-0">
  <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 12.5C1248 15 1344 35 1392 45L1440 55V60H0Z" fill="var(--background)" />
  </svg>
</div>
    </section >
  );
}
