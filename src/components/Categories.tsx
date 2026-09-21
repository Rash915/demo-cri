import { categories } from '../data';

interface CategoriesProps {
  onSelect: (id: string) => void;
}

export default function Categories({ onSelect }: CategoriesProps) {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <div className="flex items-baseline justify-between mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Shop by Category
          </h2>
          <p className="text-gray-500 mt-0.5 sm:mt-1 text-xs sm:text-sm">15 categories, 1000+ products</p>
        </div>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 sm:gap-3">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="group flex flex-col items-center p-3 sm:p-4 rounded-xl border hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white text-center"
            style={{
              borderColor: 'var(--border)',
              animationDelay: `${i * 40}ms`,
            }}
          >
            <div
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300"
              style={{ background: cat.bgColor }}
            >
              {cat.icon}
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-gray-700 group-hover:text-blue-700 transition-colors leading-tight text-center line-clamp-2">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
