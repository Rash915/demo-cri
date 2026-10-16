import { useState, useMemo } from 'react';
import { Product, nextGenSubcategoriesMeta, NextGenSubcategoryInfo } from '../data';
import { SearchIcon } from './icons';

interface NextGenCatalogOverviewProps {
  subcategories: string[];
  products: Product[];
  onSelectSubcategory: (subcat: string) => void;
  onBackToHome?: () => void;
  onViewAllModels?: () => void;
}

const GROUPS = [
  'All Groups',
  'JTS / CTSS Series',
  'Booster Pumps',
  'Submersible and Surface Sewage / Drainage Pumps',
] as const;

export default function NextGenCatalogOverview({
  subcategories,
  products,
  onSelectSubcategory,
  onBackToHome,
  onViewAllModels,
}: NextGenCatalogOverviewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<string>('All Groups');

  // Compute live subcategory data
  const subcategoryCardsData = useMemo(() => {
    return subcategories.map(subcat => {
      const models = products.filter(p => p.subcategory === subcat);
      const meta: NextGenSubcategoryInfo = nextGenSubcategoriesMeta[subcat] || {
        name: subcat,
        group: 'Booster Pumps',
        tag: 'Next Gen Series',
        description: 'Verified C.R.I. engineering series for advanced applications.',
        icon: '🚀',
        hpRange: '0.5 – 10.0 HP',
        pipeRange: '25 – 100 mm',
        application: 'Industrial & Domestic Pumping',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format',
      };

      const prices = models.map(m => m.price).filter(Boolean);
      const minPrice = prices.length ? Math.min(...prices) : 0;

      return {
        name: subcat,
        group: meta.group,
        meta,
        modelCount: models.length,
        models,
        minPrice,
      };
    });
  }, [subcategories, products]);

  // Filter cards by active group and search query
  const filteredCards = useMemo(() => {
    return subcategoryCardsData.filter(item => {
      const matchGroup =
        activeGroup === 'All Groups' || item.group === activeGroup;

      if (!searchQuery.trim()) return matchGroup;

      const q = searchQuery.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchTag = item.meta.tag.toLowerCase().includes(q);
      const matchDesc = item.meta.description.toLowerCase().includes(q);
      const matchGroupText = item.group.toLowerCase().includes(q);
      const matchModel = item.models.some(
        m =>
          m.name.toLowerCase().includes(q) ||
          (m.productCode && m.productCode.toLowerCase().includes(q)) ||
          (m.hp && m.hp.toLowerCase().includes(q))
      );

      return matchGroup && (matchName || matchTag || matchDesc || matchGroupText || matchModel);
    });
  }, [subcategoryCardsData, activeGroup, searchQuery]);

  // Grouped cards for structured display
  const groupedCards = useMemo(() => {
    const map: Record<string, typeof filteredCards> = {
      'JTS / CTSS Series': [],
      'Booster Pumps': [],
      'Submersible and Surface Sewage / Drainage Pumps': [],
    };

    filteredCards.forEach(card => {
      if (map[card.group]) {
        map[card.group].push(card);
      } else {
        map['Booster Pumps'].push(card);
      }
    });

    return map;
  }, [filteredCards]);

  const groupBadges = {
    'JTS / CTSS Series': {
      title: 'A. JTS / CTSS Series',
      subtitle: 'Stainless Steel Monoblock Pumpsets Special Application',
      icon: '🛡️',
      color: 'from-blue-700 to-indigo-800',
    },
    'Booster Pumps': {
      title: 'B. Booster Pumps & Systems',
      subtitle: 'Hydro-Pneumatic, Smart Inverter & Circulation Solutions',
      icon: '⚡',
      color: 'from-indigo-700 to-purple-800',
    },
    'Submersible and Surface Sewage / Drainage Pumps': {
      title: 'C. Submersible & Surface Sewage / Drainage Pumps',
      subtitle: 'Heavy-Duty Effluent, Vortex, Cutter & Central Delivery Pumps',
      icon: '🌊',
      color: 'from-sky-700 to-cyan-800',
    },
  };

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
            <span className="text-blue-700 font-bold">NEXT GEN</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-gray-600 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-gray-700">Hebron Enterprises — Authorised C.R.I. Dealer</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-14">
        {/* 2. NEXT GEN HERO BANNER */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white p-5 sm:p-7 md:p-8 mb-6 sm:mb-8 shadow-md border border-indigo-900/60">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              <span>🚀</span> Official C.R.I. NEXT GEN Price Catalogue (Tamil Nadu)
            </div>
            <h1
              className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              C.R.I. NEXT GEN Pumping Systems
            </h1>
            <p className="text-indigo-100 text-xs sm:text-sm md:text-base leading-relaxed">
              Explore the 3 major groups and 20 specialized subcategories under C.R.I. NEXT GEN. From stainless steel chemical monoblocks and hydro-pneumatic boosters to heavy sewage cutter pumpsets.
            </p>

            {/* Quick stats pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-4 sm:mt-5 text-[11px] sm:text-xs font-semibold">
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 backdrop-blur-xs text-white border border-white/20">
                3 Major Groups
              </span>
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 backdrop-blur-xs text-white border border-white/20">
                20 Subcategories
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

        {/* 3. GROUP TABS & SEARCH CONTROLS */}
        <div className="flex flex-col gap-3 mb-6 bg-slate-50 p-3 sm:p-4 rounded-xl border border-gray-200 shadow-2xs">
          {/* Major Groups Navigation Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none">
            {GROUPS.map(grp => {
              const count =
                grp === 'All Groups'
                  ? subcategoryCardsData.length
                  : subcategoryCardsData.filter(c => c.group === grp).length;
              const isSelected = activeGroup === grp;

              return (
                <button
                  key={grp}
                  onClick={() => setActiveGroup(grp)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>{grp}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search box & View All Models */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-gray-200">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <SearchIcon size={16} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search subcategories or models (e.g. JTS, BRISK, I PREZ, Cutter, Sewage)..."
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
                Showing <strong className="text-gray-900">{filteredCards.length}</strong> of 20 subcategories
              </span>
              {onViewAllModels && (
                <button
                  onClick={onViewAllModels}
                  className="ml-auto sm:ml-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold transition-colors cursor-pointer border border-blue-200 text-xs"
                >
                  📦 View All Next Gen Models Table
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 4. SUBCATEGORY CARDS ORGANIZED BY GROUP */}
        {filteredCards.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-2xs">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-sm font-bold text-gray-800">No subcategories match "{searchQuery}"</h3>
            <p className="text-xs text-gray-500 mt-1">Try searching for JTS, CTSS, BRISK, I PREZ, Cutter, or Float Switch.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveGroup('All Groups');
              }}
              className="mt-3 px-3.5 py-1.5 bg-blue-700 text-white rounded-lg text-xs font-semibold hover:bg-blue-800 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-10">
            {Object.entries(groupedCards).map(([groupName, cards]) => {
              if (cards.length === 0) return null;
              const badgeInfo = groupBadges[groupName as keyof typeof groupBadges];

              return (
                <div key={groupName} className="space-y-4">
                  {/* Group Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b-2 border-blue-600">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{badgeInfo.icon}</span>
                      <div>
                        <h2 className="text-sm sm:text-base font-extrabold text-gray-900 tracking-tight">
                          {badgeInfo.title}
                        </h2>
                        <p className="text-[11px] text-gray-500">{badgeInfo.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 self-start sm:self-auto">
                      {cards.length} {cards.length === 1 ? 'Subcategory' : 'Subcategories'}
                    </span>
                  </div>

                  {/* Subcategory Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
                    {cards.map(item => {
                      const { name, meta, modelCount, minPrice } = item;

                      return (
                        <div
                          key={name}
                          onClick={() => onSelectSubcategory(name)}
                          className="group relative flex flex-col justify-between bg-white rounded-2xl border-2 border-gray-200/90 hover:border-blue-600 shadow-xs hover:shadow-xl transition-all duration-300 p-4 sm:p-5 cursor-pointer overflow-hidden transform hover:-translate-y-1"
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

                          {/* Dark-Blue Subcategory Heading */}
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md inline-block mb-1.5">
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
                              <span className="text-gray-400 font-medium">Power / Specs:</span>
                              <span className="font-bold text-gray-800 truncate max-w-[140px] text-right">{meta.hpRange}</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-600 text-[11px]">
                              <span className="text-gray-400 font-medium">Pipe / Ports:</span>
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
                              className="mt-2 w-full py-2 px-3 rounded-xl bg-slate-100 group-hover:bg-blue-700 text-gray-800 group-hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                            >
                              <span>View Models</span>
                              <span className="transition-transform group-hover:translate-x-1">→</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
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
