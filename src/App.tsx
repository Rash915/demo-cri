import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AwardBanner from './components/AwardBanner';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import LatestOffers from './components/LatestOffers';
import WhyCRI from './components/WhyCRI';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import CartSidebar, { CartItem } from './components/CartSidebar';
import WishlistSidebar from './components/WishlistSidebar';
import ProductModal from './components/ProductModal';
import MobileBottomNav from './components/MobileBottomNav';
import AuthModal, { UserProfile } from './components/AuthModal';
import { Product } from './data';

type Page = 'home' | 'category' | 'search';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('agri-pumps');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [language, setLanguage] = useState('en');

  // Auth & User Session State
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('cri_user_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleOpenAuth = (mode: 'login' | 'signup' = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (newProfile: UserProfile) => {
    setUser(newProfile);
    try {
      localStorage.setItem('cri_user_profile', JSON.stringify(newProfile));
    } catch {
      // ignore
    }
    showToast(`Welcome ${newProfile.name}! Logged in successfully 🎉`);
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('cri_user_profile');
    } catch {
      // ignore
    }
    showToast('Logged out successfully');
  };

  const handleAddToCart = (product: Product, qtyToAdd: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + qtyToAdd } : i);
      return [...prev, { product, qty: qtyToAdd }];
    });
    showToast(`${product.name.slice(0, 30)}... added to cart`);
  };

  const handleUpdateQty = (id: string, qty: number) => {
    setCartItems(prev => prev.map(i => i.product.id === id ? { ...i, qty } : i));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.product.id !== id));
  };

  const handleToggleWishlist = (id: string) => {
    setWishlist(prev => {
      if (prev.includes(id)) { showToast('Removed from wishlist'); return prev.filter(i => i !== id); }
      showToast('Added to wishlist ❤️');
      return [...prev, id];
    });
  };

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    setSearchQuery('');
    setPage('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setPage('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleHome = () => {
    setPage('home');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="w-full min-h-screen m-0 p-0 pb-14 md:pb-0 relative overflow-x-clip" style={{ background: 'var(--background)' }}>
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartOpen={() => setCartOpen(true)}
        onWishlistOpen={() => setWishlistOpen(true)}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
        language={language}
        onLanguageChange={setLanguage}
        onHome={handleHome}
        user={user}
        onAuthOpen={handleOpenAuth}
        onLogout={handleLogout}
        onShowOrders={() => showToast('My Orders module: All active shipments & invoices loaded')}
      />

      {/* Toast notification */}
      {toast && (
        <div
          className="fixed bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-xs sm:text-sm font-medium px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-2xl animate-fade-in max-w-xs text-center border border-gray-700 flex items-center justify-between gap-3"
        >
          <span>{toast}</span>
        </div>
      )}

      <main>
        {page === 'home' && (
          <>
            <Hero onShopNow={() => handleCategorySelect('agri-pumps')} onCategorySelect={handleCategorySelect} />
            <Stats />
            <Categories onSelect={handleCategorySelect} />
            <FeaturedProducts
              wishlist={wishlist}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onProductClick={handleProductClick}
            />
            <LatestOffers />
            <WhyCRI />
            <Testimonials />
          </>
        )}

        {page === 'category' && (
          <CategoryPage
            categoryId={selectedCategory}
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onProductClick={handleProductClick}
          />
        )}

        {page === 'search' && (
          <CategoryPage
            categoryId=""
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onProductClick={handleProductClick}
            searchQuery={searchQuery}
          />
        )}
      </main>

      <Footer onCategorySelect={handleCategorySelect} />

      {/* Mobile bottom quick nav bar */}
      <MobileBottomNav
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onHomeClick={handleHome}
        onCategoryClick={() => handleCategorySelect('agri-pumps')}
        onCartClick={() => setCartOpen(true)}
        onWishlistClick={() => setWishlistOpen(true)}
        onAccountClick={() => {
          if (user) {
            showToast(`Logged in as ${user.name}`);
          } else {
            handleOpenAuth('login');
          }
        }}
        isLoggedIn={!!user}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Auth Signup / Login Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      <CartSidebar
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveFromCart}
      />

      <WishlistSidebar
        open={wishlistOpen}
        wishlist={wishlist}
        onClose={() => setWishlistOpen(false)}
        onRemove={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

