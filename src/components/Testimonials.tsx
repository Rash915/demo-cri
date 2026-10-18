import { useState } from 'react';
import { testimonials } from '../data';
import { StarIcon } from './icons';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-8 sm:py-14 w-full px-4 sm:px-6 md:px-8">
      <div className="text-center mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-2xs mb-2.5">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="text-xs font-bold text-gray-700">Verified Google Reviews</span>
          <span className="text-amber-500 font-extrabold text-xs">★★★★★ 5.0</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'DM Serif Display, serif' }}>
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Genuine Google reviews from Hebron<sup className="text-[0.6em] font-bold align-super ml-0.5">®</sup> Enterprises & C.R.I. Pumps customers</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`rounded-2xl p-4 sm:p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between relative ${
              i === active
                ? 'border-blue-400 shadow-xl ring-2 ring-blue-400/20'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
            }`}
            style={{ background: i === active ? 'var(--secondary)' : 'white' }}
            onClick={() => setActive(i)}
          >
            {/* Top row: stars + Google icon / date */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} size={14} filled={s <= t.rating} />)}
                </div>
                <div className="flex items-center gap-1.5">
                  {t.date && (
                    <span className="text-[10px] text-gray-400 font-medium">{t.date}</span>
                  )}
                  <svg className="w-3 h-3 opacity-70 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
            </div>

            {/* Author details */}
            <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100/80">
              <div className="relative shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 shadow-xs"
                  style={{ borderColor: 'var(--border)' }}
                />
                {t.badge && (
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center text-[9px] text-gray-900 font-bold shadow-xs" title="Google Local Guide">
                    ★
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-gray-900 text-xs sm:text-sm truncate">
                  {t.name}
                </div>
                <div className="text-gray-500 text-[11px] truncate">{t.role}</div>
                {t.location && (
                  <div className="text-blue-700 text-[10px] font-semibold truncate flex items-center gap-1 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>{t.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === active ? 'w-6 h-2 bg-blue-700' : 'w-2 h-2 bg-gray-300 hover:bg-blue-400'
            }`}
            aria-label={`Select testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
