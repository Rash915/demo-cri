import { useState } from 'react';
import { testimonials } from '../data';
import { StarIcon } from './icons';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-8 sm:py-14 w-full px-4 sm:px-6 md:px-8">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'DM Serif Display, serif' }}>
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Real stories from real users across India</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`rounded-xl p-4 sm:p-5 border cursor-pointer transition-all duration-300 ${
              i === active
                ? 'border-blue-400 shadow-lg'
                : 'border-gray-100 bg-white hover:border-blue-200'
            }`}
            style={{ background: i === active ? 'var(--secondary)' : 'white' }}
            onClick={() => setActive(i)}
          >
            <div className="flex gap-0.5 mb-2.5">
              {[1,2,3,4,5].map(s => <StarIcon key={s} size={13} filled={s <= t.rating} />)}
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3.5 italic">"{t.text}"</p>
            <div className="flex items-center gap-2.5">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 shrink-0"
                style={{ borderColor: 'var(--border)' }}
              />
              <div className="min-w-0">
                <div className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{t.name}</div>
                <div className="text-gray-400 text-[11px] sm:text-xs truncate">{t.role}</div>
                <div className="text-gray-400 text-[11px] sm:text-xs truncate">{t.location}</div>
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
            className={`rounded-full transition-all duration-300 ${
              i === active ? 'w-6 h-2 bg-blue-700' : 'w-2 h-2 bg-gray-300 hover:bg-blue-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
