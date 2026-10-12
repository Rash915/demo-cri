import React, { useState } from 'react';
import { categories } from '../data';

interface InnovativeCategoryBarProps {
  onCategorySelect: (categoryId: string, subcategory?: string) => void;
  activeCategory?: string;
}

// Clean, professional SVG icons
function CategoryIcon({ id, active }: { id: string; active?: boolean }) {
  const iconColor = active ? 'text-sky-700' : 'text-slate-600';
  switch (id) {
    case 'agri':
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M12 12.75a4.5 4.5 0 00-4.5-4.5H6a4.5 4.5 0 00-4.5 4.5v.75A4.5 4.5 0 006 18h1.5m4.5-5.25a4.5 4.5 0 014.5-4.5H18a4.5 4.5 0 014.5 4.5v.75A4.5 4.5 0 0118 18h-1.5" />
        </svg>
      );
    case 'residential':
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case 'tiny':
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case 'next-gen':
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894a9.75 9.75 0 010-13.788m13.788 0a9.75 9.75 0 010 13.788M12 12h.008v.008H12V12z" />
        </svg>
      );
    case 'accessories':
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.07a4.5 4.5 0 004.486-6.32l-3.27 3.27-2.553-.426-.426-2.553 3.27-3.27a4.5 4.5 0 00-6.32 4.486c.118.58.094 1.193-.07 1.742" />
        </svg>
      );
    default:
      return null;
  }
}

export default function InnovativeCategoryBar({
  onCategorySelect,
  activeCategory = 'agri',
}: InnovativeCategoryBarProps) {
  const [activeTab, setActiveTab] = useState<string>(activeCategory || 'agri');

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  const handleTabClick = (catId: string) => {
    setActiveTab(catId);
  };

  return (
    <nav
      aria-label="C.R.I. Product Categories Navigation"
      className="w-full bg-white border-y-2 sm:border-y-4 border-sky-600 shadow-sm relative z-20"
    >
      {/* TIER 1: THE 5 PRIMARY DEPARTMENTS HEADER TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-stretch overflow-x-auto scrollbar-none border-b border-gray-200">
          {/* Department Label Column */}
          <div className="hidden lg:flex items-center gap-2 pr-6 border-r border-gray-200 shrink-0 text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600 shrink-0" />
            <div className="text-left">
              <span className="text-[10px] font-black tracking-widest uppercase text-sky-800 block">
                Departments
              </span>
              <span className="text-xs font-bold text-gray-900 block whitespace-nowrap">
                C.R.I. Solutions
              </span>
            </div>
          </div>

          {/* Department Tabs */}
          <div className="flex-1 flex items-stretch gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabClick(cat.id)}
                  className={`flex-1 min-w-[140px] sm:min-w-[160px] py-2.5 px-3 flex items-center justify-center gap-2.5 transition-all cursor-pointer rounded-lg relative ${
                    isSelected
                      ? 'bg-sky-50 text-sky-950 font-bold'
                      : 'hover:bg-slate-50 text-gray-700 hover:text-gray-950'
                  }`}
                >
                  {/* Bottom Active Accent Line */}
                  {isSelected && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-600 rounded-full" />
                  )}

                  <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-sky-200/60' : 'bg-slate-100'
                  }`}>
                    <CategoryIcon id={cat.id} active={isSelected} />
                  </div>

                  <div className="text-left leading-tight truncate">
                    <span className={`text-xs sm:text-sm tracking-tight block truncate ${
                      isSelected ? 'font-bold text-sky-950' : 'font-semibold text-gray-800'
                    }`}>
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium block truncate">
                      {cat.subcategories.length} Models
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick All-Products Action */}
          <div className="hidden xl:flex items-center pl-4 border-l border-gray-200 shrink-0">
            <button
              onClick={() => onCategorySelect('all')}
              className="text-xs font-bold text-sky-700 hover:text-sky-900 underline whitespace-nowrap cursor-pointer"
            >
              All Products →
            </button>
          </div>
        </div>
      </div>

      {/* TIER 2: ORGANIZED SUBCATEGORIES STRIP FOR THE SELECTED DEPARTMENT */}
      <div className="bg-slate-50/90 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Subcategories list */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
              {currentCategory.name} Ranges:
            </span>

            {/* Clickable Subcategory Pills */}
            {currentCategory.subcategories.slice(0, 5).map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => onCategorySelect(currentCategory.id, sub)}
                className="text-xs font-medium bg-white hover:bg-sky-50 text-gray-700 hover:text-sky-900 px-3 py-1.5 rounded-full border border-gray-200 hover:border-sky-300 transition-all shrink-0 shadow-2xs cursor-pointer"
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Direct Category Page CTA */}
          <button
            type="button"
            onClick={() => onCategorySelect(currentCategory.id)}
            className="self-end sm:self-auto text-xs font-bold text-sky-700 hover:text-sky-900 shrink-0 flex items-center gap-1 cursor-pointer hover:underline"
          >
            <span>Explore All {currentCategory.name} Pumps</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
