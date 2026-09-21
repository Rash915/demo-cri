import { featuredProducts, Product } from '../data';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  wishlist: string[];
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  onProductClick: (p: Product) => void;
}

export default function FeaturedProducts({ wishlist, onAddToCart, onToggleWishlist, onProductClick }: FeaturedProductsProps) {
  return (
    <section style={{ background: 'var(--secondary)' }} className="py-8 sm:py-14 w-full">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'DM Serif Display, serif' }}>
              Featured Products
            </h2>
            <p className="text-gray-500 mt-1 text-xs sm:text-sm">Handpicked bestsellers and new arrivals</p>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1">
            {['All', 'Pumps', 'Irrigation', 'Pipes'].map(tab => (
              <button
                key={tab}
                className={`text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium transition-colors shrink-0 ${
                  tab === 'All'
                    ? 'bg-blue-700 text-white shadow-2xs'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
