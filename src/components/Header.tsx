import { useState } from 'react';
import { SearchIcon, CartIcon, HeartIcon, UserIcon, GlobeIcon, ChevronDownIcon, MenuIcon, CloseIcon, LogoutIcon, HomeIcon } from './icons';
import { categories } from '../data';
import { UserProfile } from './AuthModal';
import AwardBanner from './AwardBanner';
import { hebronLogo, criLogo } from '../assets/logoData';

interface HeaderProps {
  currentPage?: string;
  activeCategory?: string;
  cartCount: number;
  wishlistCount: number;
  onCartOpen: () => void;
  onWishlistOpen: () => void;
  onCategorySelect: (id: string, subcategory?: string) => void;
  onSearch: (q: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
  onHome: () => void;
  user: UserProfile | null;
  onAuthOpen: (mode?: 'login' | 'signup') => void;
  onLogout: () => void;
  onShowOrders?: () => void;
}

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'hi', label: 'हिंदी' },
];

export default function Header({
  currentPage = 'home',
  activeCategory,
  cartCount, wishlistCount, onCartOpen, onWishlistOpen,
  onCategorySelect, onSearch, language, onLanguageChange, onHome,
  user, onAuthOpen, onLogout, onShowOrders
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categorySidebarOpen, setCategorySidebarOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('agri');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      {/* 1. TOPMOST BANNER: HEBRON ENTERPRISE - AUTHORIZED DEALER */}
      <div className="w-full bg-blue-700 sm:bg-blue-800 border-b-2 border-blue-900 py-3 sm:py-4 px-3 sm:px-4 text-center shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3.5 text-red-500 font-black text-sm sm:text-xl md:text-2xl lg:text-3xl tracking-wider sm:tracking-widest uppercase"
            style={{
              fontWeight: 900,
              WebkitTextStroke: '0.5px currentColor',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.45)',
            }}
            title="Hebron Enterprise — Authorized Dealer"
          >
            <img src={hebronLogo} alt="Hebron Logo" className="h-6 sm:h-8 md:h-9 lg:h-10 w-auto inline-block object-contain drop-shadow-sm" />
            <span>HEBRON ENTERPRISE - AUTHORIZED DEALER</span>
          </div>
        </div>
      </div>

      {/* 2. ONLY THE C.R.I. PUMPS LOGO CARD IS STICKY AT TOP:0 WITH Z-INDEX 50 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-3 sm:px-6 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Left Column: C.R.I. PUMP LOGO + SIDE TOGGLE BAR */}
          <div className="flex items-center justify-between w-full md:w-auto shrink-0 gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* SIDE TOGGLE BAR BUTTON */}
              <button
                type="button"
                onClick={() => setCategorySidebarOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-sky-50 hover:bg-sky-100 text-sky-950 border border-sky-200 hover:border-sky-300 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer group shrink-0"
                title="Browse All Categories & Ranges"
                aria-label="Toggle Categories Sidebar"
              >
                <span className="text-base sm:text-lg group-hover:scale-110 transition-transform">☰</span>
                <span className="font-extrabold tracking-wide hidden sm:inline">View Categories</span>
              </button>

              {/* C.R.I. PUMPS LOGO + HOME ICON INDICATION */}
              <button 
                onClick={onHome} 
                className="flex flex-col items-start group focus:outline-none cursor-pointer relative"
                title="Return to Home Page"
                aria-label="C.R.I. Pumps - Return to Home"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <img 
                    src={criLogo} 
                    alt="C.R.I. Pumps Logo" 
                    className="h-8 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                  <span 
                    className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white shadow-xs group-hover:bg-amber-400 group-hover:text-gray-950 transition-all border border-blue-700 group-hover:border-amber-400 group-hover:scale-110" 
                    title="Return to Home"
                  >
                    <HomeIcon size={14} className="shrink-0" />
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-red-700 font-extrabold italic tracking-tight">
                  Pumping trust... Worldwide.
                </span>
              </button>
            </div>

            {/* Mobile Actions Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={onWishlistOpen} className="relative p-1.5 text-gray-700">
                <HeartIcon size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button onClick={onCartOpen} className="relative flex items-center gap-1 bg-amber-400 text-gray-950 text-xs font-bold px-2 py-1 rounded">
                <CartIcon size={16} />
                {cartCount > 0 && (
                  <span className="bg-red-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1 text-gray-700">
                {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>

          {/* Center Column: SEARCH BAR DIRECTLY IN C.R.I. PUMPS COLUMN */}
          <div className="flex-1 w-full max-w-2xl mx-auto md:mx-0">
            <form onSubmit={handleSearch} className="w-full flex">
              <div className="flex w-full rounded-xl overflow-hidden border-2 border-sky-500 focus-within:border-amber-400 transition-colors shadow-sm">
                <input
                  type="text"
                  placeholder="Search Hebron Enterprises for C.R.I. pumps, motors, pipes..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 text-xs sm:text-sm outline-none bg-slate-50 text-gray-900 placeholder-gray-500 focus:bg-white transition-colors"
                />
                <button type="submit" className="px-5 bg-amber-400 hover:bg-amber-500 transition-colors text-gray-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shrink-0">
                  <SearchIcon size={18} />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: User & Cart Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button onClick={onWishlistOpen} className="relative p-2 text-gray-700 hover:text-red-600 transition-colors" title="Wishlist">
              <HeartIcon size={22} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button onClick={onCartOpen} className="relative flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-950 text-xs sm:text-sm font-bold px-3 py-2 rounded-lg transition-colors shadow-md">
              <CartIcon size={18} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-red-600 text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {user ? (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 bg-blue-50 text-blue-900 text-xs font-bold px-2.5 py-1.5 rounded-lg border border-blue-200"
              >
                <div className="w-5 h-5 rounded-full bg-amber-400 text-gray-900 font-bold flex items-center justify-center text-[10px]">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span>{user.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={() => onAuthOpen?.('login')}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors"
              >
                <UserIcon size={14} />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl z-50 max-h-[80vh] overflow-y-auto animate-fade-in">
              <div className="p-4 space-y-1">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-3 rounded-xl text-gray-950 font-extrabold flex flex-col items-center justify-center mb-3 shadow-sm">
                     <div className="flex items-center gap-2 mb-1">
                       <img src={hebronLogo} alt="Hebron Logo" className="h-6 w-auto object-contain" />
                       <p className="text-sm tracking-wider uppercase font-black">HEBRON ENTERPRISES</p>
                     </div>
                     <p className="text-[10px] font-bold text-gray-900 tracking-widest uppercase mt-0.5 text-center">Authorised Main Dealer — C.R.I. Pumps</p>
                   </div>
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
                  {user ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-400 text-gray-900 font-bold flex items-center justify-center text-sm shadow-xs">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 line-clamp-1">{user.name}</p>
                        <button onClick={() => { setMobileMenuOpen(false); onLogout(); }} className="text-[10px] text-red-600 font-semibold underline">
                          Log out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => { setMobileMenuOpen(false); onAuthOpen('login'); }}
                      className="flex items-center gap-2 text-blue-700 font-bold text-sm bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
                    >
                      <UserIcon size={18} /> Login / Register
                    </button>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 flex items-center"><GlobeIcon size={16} /></span>
                    <select
                      value={language}
                      onChange={e => onLanguageChange(e.target.value)}
                      className="text-xs bg-gray-100 rounded px-2 py-1 text-gray-700 outline-none"
                    >
                      {languages.map(l => (
                        <option key={l.code} value={l.code}>{l.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pt-2 pb-1">All Categories</p>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { onCategorySelect(cat.id); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 text-sm text-left transition-colors"
                  >
                    <span className="text-lg">{cat.icon}</span>
                    <span className="font-medium">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </header>

      {/* AWARD PHOTO BANNER - PROMINENTLY RESTORED AT TOP ON HOME PAGE */}
      {currentPage === 'home' && <AwardBanner />}

      {/* CATEGORIES SIDEBAR DRAWER (SLIDE-OUT FROM LEFT) */}
      {categorySidebarOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 z-[99] backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setCategorySidebarOpen(false)}
          />

          {/* Slide-out Sidebar Panel */}
          <aside
            className="fixed top-0 left-0 bottom-0 w-[300px] sm:w-[380px] bg-white z-[100] shadow-2xl flex flex-col overflow-hidden animate-slide-right"
            aria-label="Categories Sidebar Navigation"
          >
            {/* Drawer Header */}
            <div className="bg-[#0284c7] text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-lg">
                  🗂️
                </span>
                <div>
                  <h2 className="text-sm sm:text-base font-extrabold tracking-wide text-white uppercase">
                    Product Categories
                  </h2>
                  <p className="text-[11px] text-sky-100 font-medium">
                    C.R.I. Pumps & Engineering Solutions
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCategorySidebarOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close categories sidebar"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Quick Actions Shortcuts */}
            <div className="p-3 bg-slate-50 border-b border-gray-200 flex items-center gap-2">
              <button
                onClick={() => {
                  onCategorySelect('all');
                  setCategorySidebarOpen(false);
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-white hover:bg-sky-50 text-sky-900 border border-gray-200 hover:border-sky-300 text-xs font-bold text-center transition-all shadow-2xs"
              >
                ⚡ View All Products
              </button>
              <button
                onClick={() => {
                  onCategorySelect('agri');
                  setCategorySidebarOpen(false);
                }}
                className="py-2 px-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-gray-950 text-xs font-bold transition-all shadow-2xs"
              >
                📜 TN Rate Contract
              </button>
            </div>

            {/* Category List with Nested Subcategories Accordion */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5 scrollbar-thin">
              {categories.map(cat => {
                const isExpanded = expandedCategory === cat.id;
                const isActive = activeCategory === cat.id;
                return (
                  <div
                    key={cat.id}
                    className={`rounded-xl border transition-all overflow-hidden ${
                      isActive
                        ? 'border-sky-400 bg-sky-50/50 shadow-xs'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    {/* Category Item Main Row */}
                    <div className="p-3 flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          onCategorySelect(cat.id);
                          setCategorySidebarOpen(false);
                        }}
                        className="flex items-center gap-2.5 text-left flex-1 group/item cursor-pointer"
                      >
                        <span className="text-2xl shrink-0 group-hover/item:scale-110 transition-transform">
                          {cat.icon}
                        </span>
                        <div>
                          <p className={`text-xs sm:text-sm font-bold transition-colors ${
                            isActive ? 'text-sky-900' : 'text-gray-900 group-hover/item:text-sky-700'
                          }`}>
                            {cat.name} Pumps
                          </p>
                          <p className="text-[10px] text-gray-500 font-medium">
                            {cat.subcategories.length} ranges available
                          </p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setExpandedCategory(prev => prev === cat.id ? null : cat.id)}
                        className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
                        title={isExpanded ? 'Collapse subcategories' : 'Expand subcategories'}
                      >
                        <span className={`text-[10px] transform transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}>
                          ▼
                        </span>
                      </button>
                    </div>

                    {/* Subcategories Accordion Content */}
                    {isExpanded && (
                      <div className="bg-slate-50/80 px-3 py-2 border-t border-gray-100 space-y-1">
                        <button
                          onClick={() => {
                            onCategorySelect(cat.id, 'All');
                            setCategorySidebarOpen(false);
                          }}
                          className="w-full text-left py-1.5 px-2.5 rounded-md text-[11px] font-bold text-sky-700 hover:bg-sky-100 transition-colors flex items-center justify-between"
                        >
                          <span>All {cat.name} Models</span>
                          <span>→</span>
                        </button>
                        {cat.subcategories.map(sub => (
                          <button
                            key={sub}
                            onClick={() => {
                              onCategorySelect(cat.id, sub);
                              setCategorySidebarOpen(false);
                            }}
                            className="w-full text-left py-1.5 px-2.5 rounded-md text-[11px] text-gray-700 hover:text-sky-900 hover:bg-white transition-all font-medium flex items-center gap-1.5 border border-transparent hover:border-gray-200 cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="p-3.5 bg-slate-100 border-t border-gray-200 flex items-center justify-center gap-2.5 text-center text-xs text-gray-600">
               <img src={hebronLogo} alt="Hebron Logo" className="h-7 w-auto object-contain" />
               <div className="text-left">
                 <p className="font-bold text-gray-900">Hebron Enterprises</p>
                 <p className="text-[11px] text-gray-500 mt-0.5">Authorised Main Dealer • 100% Factory Warranty</p>
               </div>
             </div>
          </aside>
        </>
      )}
    </>
  );
}
