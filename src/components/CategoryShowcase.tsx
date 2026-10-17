import React, { useState } from 'react';
import { categories, products } from '../data';
import { hebronLogo } from '../assets/logoData';

interface CategoryShowcaseProps {
  onCategorySelect: (categoryId: string, subcategory?: string) => void;
}

export default function CategoryShowcase({ onCategorySelect }: CategoryShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Compute product counts dynamically
  const categoryCounts: Record<string, number> = {};
  products.forEach(p => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2.5 border border-sky-200">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
              C.R.I. Product Applications & Range
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'DM Serif Display, serif' }}>
              Explore Pumping Solutions
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Engineered for farmers, households, and industries. Select a category or specific subcategory to view Tamil Nadu Rate Contract prices and specifications.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'all'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                  activeTab === c.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* INTERACTIVE CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredCategories.map(cat => {
            const count = categoryCounts[cat.id] || 0;
            return (
              <div
                key={cat.id}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Stripe */}
                <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-amber-400 to-sky-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-xs">
                        {cat.icon}
                      </div>
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 shadow-xs">
                        {count > 0 ? `${count} Verified Models` : 'Complete Range'}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-sky-700 transition-colors flex items-center gap-2">
                      {cat.name} Pumps & Systems
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Subcategories Clickable Pills */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Popular Subcategories:
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-thin">
                      {cat.subcategories.slice(0, 5).map(sub => (
                        <button
                          key={sub}
                          onClick={(e) => {
                            e.stopPropagation();
                            onCategorySelect(cat.id, sub);
                          }}
                          className="text-[11px] font-medium bg-slate-50 hover:bg-sky-50 text-gray-700 hover:text-sky-800 px-2.5 py-1 rounded-md border border-gray-200 hover:border-sky-300 transition-all text-left"
                          title={`View ${sub}`}
                        >
                          {sub}
                        </button>
                      ))}
                      {cat.subcategories.length > 5 && (
                        <button
                          onClick={() => onCategorySelect(cat.id)}
                          className="text-[10px] font-bold text-sky-600 hover:text-sky-800 px-2 py-1 underline"
                        >
                          +{cat.subcategories.length - 5} more
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-gray-100 flex items-center justify-between group-hover:bg-sky-50/50 transition-colors">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 group-hover:text-sky-900">
                    <img src={hebronLogo} alt="Hebron" className="h-3.5 w-auto object-contain" />
                    <span>Hebron Authorised Pricing</span>
                  </span>
                  <button
                    onClick={() => onCategorySelect(cat.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-sky-800 group-hover:translate-x-1 transition-all"
                  >
                    <span>Browse All</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM BANNER / HELPER */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-sky-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-gray-950 font-black flex items-center justify-center text-lg shrink-0">
              📋
            </div>
            <div>
              <p className="text-sm font-bold text-white">Need pump selection assistance or Tamil Nadu Rate Contract price sheet?</p>
              <p className="text-xs text-sky-200">Our pump engineers help you calculate exact head, HP, and stage requirements.</p>
            </div>
          </div>
          <button
            onClick={() => onCategorySelect('agri')}
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-lg text-xs sm:text-sm whitespace-nowrap transition-transform hover:scale-105 shadow-md"
          >
            Open Agri Rate Contract List →
          </button>
        </div>

      </div>
    </section>
  );
}
