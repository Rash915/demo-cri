import { useState, useMemo } from 'react';
import { Product, agriSubcategoriesMeta, AgriSubcategoryInfo } from '../data';
import { SearchIcon } from './icons';

interface AgriCatalogOverviewProps {
  subcategories: string[];
  products: Product[];
  onSelectSubcategory: (subcat: string) => void;
  onBackToHome?: () => void;
  onViewAllModels?: () => void;
}

export default function AgriCatalogOverview({
  subcategories,
  products,
  onSelectSubcategory,
  onBackToHome,
  onViewAllModels,
}: AgriCatalogOverviewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Compute live subcategory card data
  const subcategoryCardsData = useMemo(() => {
    return subcategories.map(subcat => {
      const models = products.filter(p => p.subcategory === subcat);
      const meta: AgriSubcategoryInfo = agriSubcategoriesMeta[subcat] || {
        name: subcat,
        tag: 'Agricultural Series',
        description: 'Verified C.R.I. agricultural pump series engineered for farm irrigation and heavy duty water lifting.',
        icon: '🌾',
        hpRange: '3.0 – 20.0 HP',
        pipeRange: '50 – 100 mm',
        application: 'Agricultural & Farm Irrigation',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
        badge: 'Official C.R.I.',
      };

      const prices = models.map(m => m.price).filter(Boolean);
      const minPrice = prices.length ? Math.min(...prices) : 0;

      return {
        name: subcat,
        meta,
        modelCount: models.length,
        models,
        minPrice,
      };
    });
  }, [subcategories, products]);

  // Filter cards by search query
  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return subcategoryCardsData;

    const q = searchQuery.toLowerCase().trim();
    return subcategoryCardsData.filter(item => {
      const matchName = item.name.toLowerCase().includes(q);
      const matchTag = item.meta.tag.toLowerCase().includes(q);
      const matchDesc = item.meta.description.toLowerCase().includes(q);
      const matchModel = item.models.some(
        m =>
          m.name.toLowerCase().includes(q) ||
          (m.productCode && m.productCode.toLowerCase().includes(q)) ||
          (m.hp && m.hp.toLowerCase().includes(q)) ||
          (m.model && m.model.toLowerCase().includes(q))
      );

      return matchName || matchTag || matchDesc || matchModel;
    });
  }, [subcategoryCardsData, searchQuery]);

  return (
    <div className="w-full">
      {/* 1. TOP BREADCRUMB & DEALER BANNER */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-3 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap py-0.5 scrollbar-none touch-pan-x">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-gray-100 text-gray-800 font-semibold transition-all border border-gray-300 shadow-2xs cursor-pointer mr-1"
              >
                <span>←</span>
                <span>Home Store</span>
              </button>
            )}
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Categories</span>
            <span className="text-gray-400">/</span>
            <span className="text-blue-700 font-bold">Agri</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-gray-600 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-gray-700">Hebron Enterprises — Authorised C.R.I. Dealer</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-14">
        {/* 2. AGRI HERO BANNER */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-slate-950 to-indigo-950 text-white p-5 sm:p-7 md:p-8 mb-6 sm:mb-8 shadow-md border border-blue-900/60">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              <span>🌾</span> Official C.R.I. Agricultural Price Catalogue (Tamil Nadu)
            </div>
            <h1
              className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              C.R.I. Agricultural Pumping Systems
            </h1>
            <p className="text-blue-100/90 text-xs sm:text-sm md:text-base leading-relaxed">
              Explore all 21 official agricultural & irrigation subcategories in one continuous catalogue. Heavy-duty 3-phase monoblocks, horizontal & vertical openwells, 4″, 5″/4″, 6″, and 6″/7″ deep borewell submersibles with genuine factory warranty.
            </p>

            {/* Quick stats pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-4 sm:mt-5 text-[11px] sm:text-xs font-semibold">
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 backdrop-blur-xs text-white border border-white/20">
                21 Subcategories
              </span>
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-400 text-gray-950 font-bold shadow-xs">
                {products.length} Verified Models
              </span>
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 backdrop-blur-xs text-sky-200 border border-white/20">
                W.E.F. 01.08.2026
              </span>
            </div>
          </div>
        </div>

        {/* 3. SEARCH & CONTROLS TOOLBAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-slate-50 p-3 sm:p-4 rounded-xl border border-gray-200 shadow-2xs">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <SearchIcon size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search subcategories or models (e.g. JUMBO, RYKER, CSM, CV, GENIE, STEELIX, NILE, DELMA, CONGO)..."
              className="w-full pl-9 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-600 transition-all text-gray-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-2 self-stretch sm:self-auto text-xs text-gray-600 font-medium">
            <span>
              Showing <strong className="text-gray-900">{filteredCards.length}</strong> of 21 subcategories
            </span>
            {onViewAllModels && (
              <button
                onClick={onViewAllModels}
                className="ml-auto sm:ml-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 font-bold transition-colors cursor-pointer border border-blue-200 text-xs"
              >
                📦 Browse All 369 Models
              </button>
            )}
          </div>
        </div>

        {/* 4. SUBCATEGORY CARDS UNIFIED GRID */}
        {filteredCards.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-2xs">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-sm font-bold text-gray-800">No subcategories match "{searchQuery}"</h3>
            <p className="text-xs text-gray-500 mt-1">Try searching for JUMBO, RYKER, CSM, CV, GENIE, STEELIX, NILE, DELMA NXT, or CONGO.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 px-3.5 py-1.5 bg-blue-700 text-white rounded-lg text-xs font-semibold hover:bg-blue-800 cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
            {filteredCards.map(item => {
              const { name, meta, modelCount, minPrice } = item;

              return (
                <div
                  key={name}
                  onClick={() => onSelectSubcategory(name)}
                  className="group relative flex flex-col justify-between h-full bg-white rounded-2xl border-2 border-gray-200/90 hover:border-blue-600 shadow-xs hover:shadow-xl transition-all duration-300 p-4 sm:p-5 cursor-pointer overflow-hidden transform hover:-translate-y-1"
                >
                  {/* Top accent badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 flex items-center justify-center text-xl shadow-2xs group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {meta.icon}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {modelCount} {modelCount === 1 ? 'Model' : 'Models'}
                    </span>
                  </div>

                  {/* Subcategory Heading & Description */}
                  <div className="flex-1 flex flex-col">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md inline-block mb-1.5 self-start">
                      {meta.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {meta.description}
                    </p>
                  </div>

                  {/* Specs & Pricing Details */}
                  <div className="mt-4 pt-3.5 border-t border-gray-100 flex flex-col gap-2 text-xs">
                    <div className="flex items-center justify-between text-gray-600 text-[11px]">
                      <span className="text-gray-400 font-medium">Power Range:</span>
                      <span className="font-bold text-gray-800 truncate max-w-[140px] text-right">{meta.hpRange}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600 text-[11px]">
                      <span className="text-gray-400 font-medium">Pipe Sizes:</span>
                      <span className="font-semibold text-gray-800">{meta.pipeRange}</span>
                    </div>

                    <div className="mt-1 flex items-baseline justify-between pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                          Starting List Price
                        </span>
                        <span className="text-sm font-extrabold text-blue-900">
                          ₹{minPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Official C.R.I.
                      </span>
                    </div>

                    {/* Explore CTA Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSubcategory(name);
                      }}
                      className="mt-2 w-full py-2 px-3 rounded-xl bg-slate-100 group-hover:bg-blue-700 text-gray-800 group-hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                    >
                      <span>View Models</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
