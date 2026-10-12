import { categories } from '../data';

interface CategoriesProps {
  onSelect: (id: string) => void;
}

export default function Categories({ onSelect }: CategoriesProps) {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>💧</span> Certified C.R.I. Ranges
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'DM Serif Display, serif' }}>
              Shop by Category
            </h2>
            <p className="text-gray-500 mt-0.5 sm:mt-1 text-xs sm:text-sm">
              5 core pumping solutions — engineered for durability, efficiency & peak performance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="group relative flex flex-col items-center p-4 sm:p-5 rounded-2xl border border-gray-200/90 bg-white hover:border-blue-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center overflow-hidden cursor-pointer"
              style={{
                animationDelay: `${i * 50}ms`,
              }}
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs"
                style={{ background: cat.bgColor }}
              >
                {cat.icon}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                {cat.name}
              </h3>

              <p className="mt-1 text-[11px] sm:text-xs text-gray-500 line-clamp-1">
                {cat.subcategories.length} product ranges
              </p>

              <span className="mt-3 text-[11px] font-semibold text-blue-600 group-hover:text-blue-800 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-all">
                Explore <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
