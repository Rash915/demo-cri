import { useState } from 'react';
import { SearchIcon, CartIcon, HeartIcon, UserIcon, GlobeIcon, ChevronDownIcon, MenuIcon, CloseIcon, LogoutIcon } from './icons';
import { categories } from '../data';
import { UserProfile } from './AuthModal';

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
    <header className="sticky top-0 z-50 shadow-xl" style={{ background: 'var(--primary)' }}>
      {/* Top announcement strip */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-blue-800 text-amber-300 py-1 px-3 text-[10px] sm:text-xs text-center font-medium flex items-center justify-between gap-2 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-1.5 mx-auto">
          <span className="bg-amber-400 text-gray-950 text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase tracking-wider">OFFICIAL</span>
          <span><strong>HEBRON ENTERPRISES</strong> — Authorised Main Dealer & Stockist of C.R.I. Pumps</span>
          <span className="hidden md:inline text-blue-300">|</span>
          <span className="hidden md:inline text-blue-200">📞 Sales & Support: +91 98765 43210</span>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="border-b border-blue-700/80 w-full">
        {/* MOBILE VIEW (< md) */}
        <div className="md:hidden w-full px-3 py-2 flex flex-col gap-2">
          {/* Mobile Top Row: Logo on Left, Actions on Right */}
          <div className="flex items-center justify-between gap-2">
            <button onClick={onHome} className="flex items-center gap-2 focus:outline-none shrink-0">
              <div className="bg-white px-2 py-1 rounded-lg shadow-sm flex items-center border border-blue-200">
                <img 
                  src="https://www.crifluidsystems.com/za/wp-content/uploads/2021/02/cri-logo-new.png" 
                  alt="C.R.I. Pumps Logo" 
                  className="h-6 w-auto object-contain"
                />
              </div>
            </button>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Wishlist button */}
              <button onClick={onWishlistOpen} className="relative p-1.5 text-white hover:text-amber-300 rounded transition-colors" title="Wishlist">
                <HeartIcon size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart button */}
              <button onClick={onCartOpen} className="relative flex items-center gap-1 bg-amber-400 text-gray-950 text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-sm">
                <CartIcon size={16} />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="bg-red-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-1 text-gray-200">
                {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Centered Highlight Banner: HEBRON ENTERPRISES */}
          <div 
            onClick={onHome}
            className="w-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400/80 rounded-lg px-3 py-1.5 text-center cursor-pointer shadow-sm backdrop-blur-xs flex flex-col items-center justify-center"
          >
            <h1 className="text-sm font-black tracking-wider uppercase text-amber-300 leading-tight">
              HEBRON ENTERPRISES
            </h1>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <span className="text-amber-400 text-[8px]">★</span>
              <span className="text-white text-[9px] font-bold tracking-widest uppercase text-blue-100">
                AUTHORISED MAIN DEALER — C.R.I. PUMPS
              </span>
              <span className="text-amber-400 text-[8px]">★</span>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (>= md): Clean 3-Column Grid */}
        <div className="hidden md:grid w-full px-6 lg:px-8 py-2.5 grid-cols-3 items-center gap-4">
          {/* Left Column: CRI Pumps Brand Logo */}
          <div className="flex items-center justify-start">
            <button onClick={onHome} className="flex items-center gap-2 focus:outline-none group text-left">
              <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 transition-transform group-hover:scale-105 border border-blue-200">
                <img 
                  src="https://www.crifluidsystems.com/za/wp-content/uploads/2021/02/cri-logo-new.png" 
                  alt="C.R.I. Pumps Logo" 
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </div>
            </button>
          </div>

          {/* Center Column: HEBRON ENTERPRISES (DEAD CENTER) */}
          <div 
            onClick={onHome}
            className="flex flex-col items-center justify-center cursor-pointer group text-center"
          >
            <div className="bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border-2 border-amber-400/80 hover:border-amber-300 rounded-xl px-4 lg:px-6 py-1 shadow-lg backdrop-blur-md transition-all group-hover:scale-[1.02]">
              <h1 className="text-lg md:text-2xl lg:text-3xl font-black tracking-wider uppercase text-amber-300 drop-shadow-md leading-none py-0.5 font-sans whitespace-nowrap">
                HEBRON ENTERPRISES
              </h1>
              <div className="flex items-center justify-center gap-1.5 mt-0.5">
                <span className="text-amber-400 text-[9px] md:text-[10px]">★</span>
                <span className="text-white text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-blue-100 whitespace-nowrap">
                  AUTHORISED MAIN DEALER
                </span>
                <span className="text-amber-400 text-[9px] md:text-[10px]">★</span>
              </div>
            </div>
          </div>

          {/* Right Column: Actions */}
          <div className="flex items-center justify-end gap-2">
            {/* Language */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-white hover:text-amber-300 text-xs px-2 py-1.5 rounded transition-colors"
              >
                <GlobeIcon size={16} />
                <span>{languages.find(l => l.code === language)?.label}</span>
                <ChevronDownIcon size={12} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl py-1 min-w-[120px] border border-gray-100 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { onLanguageChange(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-blue-50 transition-colors ${language === lang.code ? 'text-blue-700 font-bold' : 'text-gray-700'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login / User Account */}
            <div className="relative">
              {user ? (
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 bg-blue-900/80 hover:bg-blue-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-blue-500/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-gray-900 font-bold flex items-center justify-center text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left hidden xl:block">
                    <p className="font-bold leading-tight line-clamp-1">{user.name.split(' ')[0]}</p>
                    <p className="text-[9px] text-amber-300">My Account</p>
                  </div>
                  <ChevronDownIcon size={12} />
                </button>
              ) : (
                <button
                  onClick={() => onAuthOpen('login')}
                  className="flex items-center gap-1.5 text-white hover:text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 border border-blue-600 transition-colors"
                >
                  <UserIcon size={15} />
                  <span>Login / Register</span>
                </button>
              )}

              {/* Logged in User Menu Dropdown */}
              {user && userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-in text-gray-800">
                  <div className="px-4 py-3 bg-blue-50/70 border-b border-gray-100 mb-1">
                    <p className="text-xs font-bold text-gray-900">{user.name}</p>
                    <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
                  </div>

                  <button
                    onClick={() => { setUserMenuOpen(false); onShowOrders?.(); }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-blue-50 flex items-center gap-2.5"
                  >
                    <span>📦</span> My Orders & Active Shipments
                  </button>

                  <button
                    onClick={() => { setUserMenuOpen(false); onWishlistOpen(); }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-blue-50 flex items-center gap-2.5"
                  >
                    <span>❤️</span> My Wishlist Items
                  </button>

                  <button
                    onClick={() => { setUserMenuOpen(false); onShowOrders?.(); }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-blue-50 flex items-center gap-2.5"
                  >
                    <span>📜</span> Registered Product Warranties
                  </button>

                  <div className="border-t border-gray-100 my-1"></div>

                  <button
                    onClick={() => { setUserMenuOpen(false); onLogout(); }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2.5"
                  >
                    <LogoutIcon size={14} /> Log Out Account
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button onClick={onWishlistOpen} className="relative flex items-center justify-center p-2 text-white hover:text-amber-300 rounded transition-colors" title="Wishlist">
              <HeartIcon size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button onClick={onCartOpen} className="relative flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-950 text-xs sm:text-sm font-bold px-3 py-1.5 sm:py-2 rounded-lg transition-colors shadow-md">
              <CartIcon size={18} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-red-600 text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Search Bar */}
      <div className="bg-blue-900/60 border-b border-blue-700/60 px-3 sm:px-4 py-2 flex items-center justify-center">
        <form onSubmit={handleSearch} className="w-full max-w-3xl flex">
          <div className="flex w-full rounded-xl overflow-hidden border-2 border-sky-300/80 focus-within:border-amber-400 transition-colors shadow-md">
            <input
              type="text"
              placeholder="Search Hebron Enterprises for C.R.I. pumps, motors, pipes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 text-xs sm:text-sm outline-none bg-white text-gray-900 placeholder-gray-500"
            />
            <button type="submit" className="px-5 bg-amber-400 hover:bg-amber-500 transition-colors text-gray-950 font-bold text-xs sm:text-sm flex items-center gap-1.5">
              <SearchIcon size={18} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </form>
      </div>

      {/* Category Navigation (Desktop) */}
      <div className="border-b border-blue-700/60 hidden md:block bg-blue-950/70 py-1.5 w-full">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:gap-x-6">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="text-blue-100 hover:text-amber-300 text-[11px] lg:text-xs font-bold tracking-wider py-1 px-1 whitespace-nowrap transition-colors uppercase border-b-2 border-transparent hover:border-amber-300 flex items-center gap-1"
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
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
  );
}
