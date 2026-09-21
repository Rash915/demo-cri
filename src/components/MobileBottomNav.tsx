import { HeartIcon, CartIcon, UserIcon } from './icons';

interface MobileBottomNavProps {
  cartCount: number;
  wishlistCount: number;
  onHomeClick: () => void;
  onCategoryClick: () => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onAccountClick?: () => void;
  isLoggedIn?: boolean;
}

export default function MobileBottomNav({
  cartCount,
  wishlistCount,
  onHomeClick,
  onCategoryClick,
  onCartClick,
  onWishlistClick,
  onAccountClick,
  isLoggedIn
}: MobileBottomNavProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-2 py-1.5">
      <div className="flex items-center justify-around">
        <button
          onClick={onHomeClick}
          className="flex flex-col items-center justify-center p-1 text-gray-600 hover:text-blue-700 active:text-blue-800 transition-colors"
        >
          <span className="text-lg leading-none">🏠</span>
          <span className="text-[10px] font-medium mt-1">Home</span>
        </button>

        <button
          onClick={onCategoryClick}
          className="flex flex-col items-center justify-center p-1 text-gray-600 hover:text-blue-700 active:text-blue-800 transition-colors"
        >
          <span className="text-lg leading-none">⚡</span>
          <span className="text-[10px] font-medium mt-1">Categories</span>
        </button>

        <button
          onClick={onWishlistClick}
          className="relative flex flex-col items-center justify-center p-1 text-gray-600 hover:text-blue-700 active:text-blue-800 transition-colors"
        >
          <div className="relative">
            <HeartIcon size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-2xs">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium mt-1">Wishlist</span>
        </button>

        <button
          onClick={onCartClick}
          className="relative flex flex-col items-center justify-center p-1 text-gray-600 hover:text-blue-700 active:text-blue-800 transition-colors"
        >
          <div className="relative">
            <CartIcon size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-amber-500 text-gray-900 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-2xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium mt-1">Cart</span>
        </button>

        <button
          onClick={onAccountClick}
          className="flex flex-col items-center justify-center p-1 text-gray-600 hover:text-blue-700 active:text-blue-800 transition-colors"
        >
          <div className="relative">
            <UserIcon size={20} />
            {isLoggedIn && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 rounded-full w-2.5 h-2.5 border-2 border-white"></span>
            )}
          </div>
          <span className="text-[10px] font-medium mt-1">{isLoggedIn ? 'Account' : 'Login'}</span>
        </button>
      </div>
    </div>
  );
}

