import { useState } from 'react';
import { SearchIcon, CartIcon, HeartIcon, UserIcon, GlobeIcon, ChevronDownIcon, MenuIcon, CloseIcon, LogoutIcon } from './icons';
import { categories } from '../data';
import { UserProfile } from './AuthModal';
import AwardBanner from './AwardBanner';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onCartOpen: () => void;
  onWishlistOpen: () => void;
  onCategorySelect: (id: string) => void;
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
  cartCount, wishlistCount, onCartOpen, onWishlistOpen,
  onCategorySelect, onSearch, language, onLanguageChange, onHome,
  user, onAuthOpen, onLogout, onShowOrders
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      {/* 1. TOPMOST BLUE PART: ONLY "HEBRON ENTERPRISES — AUTHORISED DEALER" (SCROLLS NORMALLY) */}
      <div className="bg-[#0284c7] text-white border-b border-sky-600 py-3 sm:py-3.5 px-4 text-center shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="text-amber-300 text-sm sm:text-lg lg:text-xl font-black tracking-widest uppercase font-sans drop-shadow-xs">
            HEBRON ENTERPRISES — AUTHORISED DEALER
          </span>
        </div>
      </div>

      {/* 2. ONLY THE C.R.I. PUMPS LOGO CARD IS STICKY AT TOP:0 WITH Z-INDEX 50 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-3 sm:px-6 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Left Column: C.R.I. PUMP LOGO */}
          <div className="flex items-center justify-between w-full md:w-auto shrink-0">
            <button onClick={onHome} className="flex flex-col items-start group focus:outline-none">
              <img 
                src="https://www.crifluidsystems.com/za/wp-content/uploads/2021/02/cri-logo-new.png" 
                alt="C.R.I. Pumps Logo" 
                className="h-8 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-[9px] sm:text-[10px] text-red-700 font-extrabold italic tracking-tight">
                Pumping trust... Worldwide.
              </span>
            </button>

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
                <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-3 rounded-xl text-gray-950 font-extrabold text-center mb-3 shadow-sm">
                  <p className="text-sm tracking-wider uppercase">HEBRON ENTERPRISES</p>
                  <p className="text-[10px] font-bold text-gray-900 tracking-widest uppercase mt-0.5">Authorised Main Dealer — C.R.I. Pumps</p>
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

      {/* 3. AWARD PHOTO BANNER */}
      <AwardBanner />

      {/* 4. CATEGORIES NAVIGATION BAR (FULLY RESPONSIVE TOUCH SCROLL) */}
      <div className="border-b border-blue-800 bg-[#0284c7] py-2 w-full shadow-inner">
        <div className="w-full px-2 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 justify-start md:justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="text-white hover:text-amber-300 text-[11px] sm:text-xs font-bold tracking-wider py-1 px-2.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors uppercase flex items-center gap-1.5 shrink-0 border border-white/10"
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
