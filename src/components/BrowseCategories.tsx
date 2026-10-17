import { useState, useMemo } from 'react';
import { categories, products } from '../data';

interface BrowseCategoriesProps {
  onCategorySelect: (categoryId: string, subcategory?: string) => void;
  initialCategoryId?: string;
  isDrawer?: boolean;
  onClose?: () => void;
}

export default function BrowseCategories({
  onCategorySelect,
  initialCategoryId = 'agri',
  isDrawer = false,
  onClose,
}: BrowseCategoriesProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(() => {
    if (!initialCategoryId || initialCategoryId === 'all') return 'agri';
    return initialCategoryId;
  });

  // Calculate live product counts for each category
  const departmentTabs = useMemo(() => {
    return categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      icon: cat.icon,
      image: cat.image,
      description: cat.description,
      subcategories: cat.subcategories,
      count: products.filter(p => p.category === cat.id).length,
    }));
  }, []);

  const activeCategory = useMemo(() => {
    return departmentTabs.find(c => c.id === activeCategoryId) || departmentTabs[0];
  }, [departmentTabs, activeCategoryId]);

  // Model count per subcategory in active category
  const subcategoryCounts = useMemo(() => {
    const relevant = products.filter(p => p.category === activeCategory.id);
    const map: Record<string, number> = {};
    relevant.forEach(p => {
      if (p.subcategory) {
        map[p.subcategory] = (map[p.subcategory] || 0) + 1;
      }
    });
    return map;
  }, [activeCategory]);

  return (
    <section
      aria-label="Interactive Split-Pane Department Explorer"
      className="w-full bg-slate-50/70 py-8 sm:py-12 border-y border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span>💧</span> Interactive Department Explorer
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Browse C.R.I. Pumping Solutions
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-2xl">
              Select a department on the left to explore specialized ranges, verified Tamil Nadu RCP models, and exact engineering specifications.
            </p>
          </div>

          <a href="file:///C:/Users/Rashmi/Downloads/Untitled-2.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/hebron-logo.png" alt="Hebron Logo" className="h-4.5 w-auto object-contain" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-gray-600">
              Hebron Enterprises — Authorised C.R.I. Dealer
            </span>
          </a>
        </div>

        {/* SPLIT-PANE EXPLORER CONTAINER */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden flex flex-col md:flex-row min-h-[560px]">
          {/* LEFT SIDEBAR (28% WIDTH): VERTICAL DEPARTMENT LIST */}
          <aside
            aria-label="Departments Sidebar"
            className="w-full md:w-[28%] shrink-0 bg-slate-50/90 border-b md:border-b-0 md:border-r border-gray-200 p-3 sm:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto scrollbar-thin"
          >
            <div className="hidden md:block pb-2 px-2 border-b border-gray-200 mb-1">
              <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider">
                Select Department
              </span>
            </div>

            {departmentTabs.map(dept => {
              const isActive = activeCategoryId === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveCategoryId(dept.id)}
                  className={`w-full text-left flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md border-blue-800 font-bold -translate-r-1'
                      : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-800 border-gray-200/80 hover:border-blue-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xl shrink-0">{dept.icon}</span>
                    <div className="truncate">
                      <p className="text-xs sm:text-sm font-bold truncate leading-snug">
                        {dept.name}
                      </p>
                      <p
                        className={`text-[10px] hidden sm:block truncate ${
                          isActive ? 'text-blue-100' : 'text-gray-400'
                        }`}
                      >
                        {dept.subcategories.length} Specialized Ranges
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ml-2 ${
                      isActive
                        ? 'bg-amber-400 text-gray-950 shadow-xs'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {dept.count}
                  </span>
                </button>
              );
            })}

            {/* Quick All Products Link at Bottom of Sidebar */}
            <div className="pt-2 mt-auto hidden md:block border-t border-gray-200">
              <button
                onClick={() => onCategorySelect('all', 'All')}
                className="w-full text-left flex items-center justify-between p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>💧</span>
                  <span>View All Store Products</span>
                </div>
                <span className="text-[10px] bg-sky-200 text-sky-950 px-2 py-0.5 rounded-full font-extrabold">
                  {products.length}
                </span>
              </button>
            </div>
          </aside>

          {/* RIGHT SHOWCASE PANE (72% WIDTH): DEPARTMENT OVERVIEW + SUBCATEGORY TILES */}
          <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 bg-white flex flex-col justify-between">
            <div>
              {/* DEPARTMENT SHOWCASE HERO STRIP */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-sky-900 text-white p-5 sm:p-6 mb-6 shadow-md border border-blue-900">
                <div
                  className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
                  style={{ backgroundImage: `url(${activeCategory.image})` }}
                />

                <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-gray-950 font-black text-xs uppercase tracking-wider mb-2.5 shadow-xs">
                      <span>{activeCategory.icon}</span> Official {activeCategory.name} Catalogue
                    </div>
                    <h3
                      className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-2"
                      style={{ fontFamily: 'DM Serif Display, serif' }}
                    >
                      C.R.I. {activeCategory.name} Pumps & Systems
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-lg">
                      {activeCategory.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col gap-2 self-start sm:self-center">
                    <button
                      onClick={() => onCategorySelect(activeCategory.id, 'All')}
                      className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-950 font-black text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>⚡ View All {activeCategory.name} Models</span>
                      <span>({activeCategory.count}) →</span>
                    </button>
                    <span className="text-[10px] text-center text-sky-200">
                      Official TN Rate Contract w.e.f. 01.08.2026
                    </span>
                  </div>
                </div>
              </div>

              {/* SUBCATEGORY TILES GRID */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase text-gray-800 tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-700" />
                    Specialized Product Ranges ({activeCategory.subcategories.length})
                  </h4>
                  <span className="text-xs text-gray-400 font-medium hidden sm:inline">
                    Click any range to view verified models & rates
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
                  {activeCategory.subcategories.map(subcat => {
                    const count = subcategoryCounts[subcat] || 0;
                    return (
                      <button
                        key={subcat}
                        onClick={() => onCategorySelect(activeCategory.id, subcat)}
                        className="group flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border border-gray-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 text-left cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                            💧
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                            {count > 0 ? `${count} Models` : 'Verified Range'}
                          </span>
                        </div>

                        <h5 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                          {subcat}
                        </h5>

                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-blue-600 font-semibold group-hover:text-blue-800">
                          <span>Explore Models</span>
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* BOTTOM TRUST STRIP */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-gray-700 font-semibold">
                  <span className="text-emerald-500">✓</span> 100% Genuine C.R.I. Factory Warranty
                </span>
                <span className="flex items-center gap-1.5 text-gray-700 font-semibold hidden sm:flex">
                  <span className="text-amber-500">★</span> Authorised Main Dealer Support
                </span>
              </div>

              <button
                onClick={() => onCategorySelect(activeCategory.id, 'All')}
                className="text-xs text-blue-700 hover:text-blue-900 font-bold underline cursor-pointer"
              >
                Browse all {activeCategory.count} models in {activeCategory.name} Department →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}