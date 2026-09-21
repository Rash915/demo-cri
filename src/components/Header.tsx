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
    <header className="sticky top-0 z-50 shadow-md" style={{ background: 'var(--primary)' }}>
      {/* Top bar */}
      <div className="border-b border-blue-700 w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={onHome} className="flex items-center gap-3 shrink-0 focus:outline-none group text-left">
            <div className="bg-white px-2.5 py-1.5 rounded-lg shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src="https://www.crifluidsystems.com/za/wp-content/uploads/2021/02/cri-logo-new.png" 
                alt="C.R.I. Pumps Logo" 
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
          </button>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl hidden md:flex">
            <div className="flex w-full rounded-lg overflow-hidden border-2 border-sky-300 focus-within:border-white transition-colors">
              <input
                type="text"
                placeholder="Search for pumps, pipes, irrigation..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 text-sm outline-none bg-white text-gray-800"
              />
              <button type="submit" className="px-4 bg-amber-400 hover:bg-amber-500 transition-colors text-gray-900 flex items-center gap-1">
                <SearchIcon size={18} />
              </button>
            </div>
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Language */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-white hover:text-blue-200 text-sm px-2 py-2 rounded transition-colors"
              >
                <GlobeIcon size={16} />
                <span className="hidden lg:inline">{languages.find(l => l.code === language)?.label}</span>
                <ChevronDownIcon size={12} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl py-1 min-w-[120px] border border-gray-100 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { onLanguageChange(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${language === lang.code ? 'text-blue-700 font-medium' : 'text-gray-700'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login / User Account */}
            <div className="relative hidden sm:block">
              {user ? (
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 bg-blue-900/60 hover:bg-blue-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-blue-500/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-gray-900 font-bold flex items-center justify-center text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left hidden lg:block">
                    <p className="font-bold leading-tight line-clamp-1">{user.name.split(' ')[0]}</p>
                    <p className="text-[9px] text-blue-200">
                      My Account
                    </p>
                  </div>
                  <ChevronDownIcon size={12} />
                </button>
              ) : (
                <button
                  onClick={() => onAuthOpen('login')}
                  className="flex items-center gap-1.5 text-white hover:text-blue-200 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-800/50 hover:bg-blue-800 border border-blue-600 transition-colors"
                >
                  <UserIcon size={16} />
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
            <button onClick={onWishlistOpen} className="relative flex items-center gap-1 text-white hover:text-blue-200 px-2 py-2 rounded transition-colors">
              <HeartIcon size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button onClick={onCartOpen} className="relative flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-medium px-3 py-2 rounded-lg transition-colors">
              <CartIcon size={18} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search bar & category quick strip */}
      <div className="md:hidden bg-blue-900 border-b border-blue-800 px-3 py-2">
        <form onSubmit={handleSearch} className="flex rounded-lg overflow-hidden border border-blue-600 bg-white">
          <input
            type="text"
            placeholder="Search pumps, pipes, motors..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-1.5 text-xs text-gray-800 outline-none placeholder-gray-400"
          />
          <button type="submit" className="px-3 bg-amber-400 text-gray-900 flex items-center justify-center">
            <SearchIcon size={14} />
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2 pt-0.5 pb-0.5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className="text-[10px] text-blue-100 hover:text-white bg-blue-800/80 hover:bg-blue-700 px-2 py-0.5 rounded-full whitespace-nowrap transition-colors flex items-center gap-1 font-semibold uppercase"
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Category nav (desktop) - All 15 categories fully displayed without sliding or dropdown */}
      <div className="border-b border-blue-700 hidden md:block bg-blue-950/40 py-2 w-full">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 lg:gap-x-6">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="text-blue-100 hover:text-amber-300 text-[11px] lg:text-xs font-bold tracking-wider py-1 px-1.5 whitespace-nowrap transition-colors uppercase border-b-2 border-transparent hover:border-amber-300"
              >
                {cat.name}
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
