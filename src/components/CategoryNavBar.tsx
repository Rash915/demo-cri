import React, { useState } from 'react';
import { categories } from '../data';

interface CategoryNavBarProps {
  onCategorySelect: (categoryId: string, subcategory?: string) => void;
  activeCategory?: string;
}

export default function CategoryNavBar({
  onCategorySelect,
  activeCategory,
}: CategoryNavBarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <nav
      aria-label="C.R.I. Pump Categories"
      className="w-full bg-white border-y-2 border-amber-400 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-2 sm:gap-3 py-3 overflow-x-auto scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const isHovered = hoveredId === cat.id;

          return (
            <div
              key={cat.id}
              className="relative flex-shrink-0"
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Category Pill Button */}
              <button
                type="button"
                onClick={() => onCategorySelect(cat.id)}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold rounded-lg border-2 transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  isActive
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                    : 'bg-white text-sky-800 border-sky-200 hover:border-sky-500 hover:bg-sky-50'
                }`}
              >
                {cat.name}

                {/* Dropdown chevron */}
                {cat.subcategories.length > 0 && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isHovered ? 'rotate-180' : ''
                    } ${isActive ? 'text-white/80' : 'text-sky-400'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Dropdown subcategories */}
              {isHovered && cat.subcategories.length > 0 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[280px] bg-white border border-sky-100 shadow-2xl z-50 py-2 rounded-b-xl overflow-hidden">
                  {/* Dropdown header */}
                  <div className="px-4 py-2 border-b border-gray-100 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">{cat.name} Ranges</span>
                  </div>
                  {cat.subcategories.slice(0, 6).map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => {
                        onCategorySelect(cat.id, sub);
                        setHoveredId(null);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:text-sky-900 hover:bg-sky-50 transition-colors cursor-pointer flex items-center gap-2 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {sub}
                    </button>
                  ))}
                  {cat.subcategories.length > 6 && (
                    <button
                      type="button"
                      onClick={() => {
                        onCategorySelect(cat.id);
                        setHoveredId(null);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-sky-700 hover:text-sky-900 transition-colors cursor-pointer font-bold border-t border-gray-100 mt-1"
                    >
                      View all {cat.subcategories.length} models →
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
