import { offers } from '../data';
import { useState } from 'react';

export default function LatestOffers() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (code: string) => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2" style={{ fontFamily: 'DM Serif Display, serif' }}>
        Latest Offers
      </h2>
      <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">Exclusive deals — use the code at checkout</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {offers.map(offer => (
          <div
            key={offer.id}
            className={`relative overflow-hidden rounded-xl p-5 sm:p-6 bg-gradient-to-br ${offer.bg} text-white`}
          >
            {/* Decorative circle */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>{offer.title}</h3>
              <p className="text-white/90 text-xs sm:text-sm mb-4">{offer.subtitle}</p>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 border border-dashed border-white/50 rounded-lg px-3 py-1.5 font-mono text-xs sm:text-sm tracking-wider">
                  {offer.code}
                </div>
                <button
                  onClick={() => copy(offer.code)}
                  className="text-xs bg-white text-blue-700 font-bold px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
                >
                  {copied === offer.code ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-white/60 text-[11px] sm:text-xs mt-3">{offer.expires}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
