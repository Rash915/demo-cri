import { StarIcon, HeartIcon, CartIcon } from './icons';
import { Product } from '../data';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (id: string) => void;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, isWishlisted, onAddToCart, onToggleWishlist, onClick }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div
      className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 cursor-pointer h-36 xs:h-44 sm:h-52 shrink-0" onClick={() => onClick(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-amber-400 text-gray-900 text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs">
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-8 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs">
            -{discount}%
          </span>
        )}
        {/* Wishlist */}
        <button
          onClick={e => { e.stopPropagation(); onToggleWishlist(product.id); }}
          className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center transition-colors shadow-xs ${
            isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-400 hover:text-red-500'
          }`}
          aria-label="Wishlist"
        >
          <HeartIcon size={14} filled={isWishlisted} />
        </button>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-3.5 flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-1">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <StarIcon key={i} size={11} filled={i <= Math.floor(product.rating)} />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500">({product.reviews})</span>
        </div>

        <h3
          className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 leading-snug cursor-pointer hover:text-blue-700 transition-colors"
          onClick={() => onClick(product)}
        >
          {product.name}
        </h3>

        {/* Specs chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.specs.slice(0, 2).map(spec => (
            <span key={spec} className="text-[9px] sm:text-[10px] bg-blue-50 text-blue-700 px-1.5 sm:px-2 py-0.5 rounded-full font-medium border border-blue-100 truncate max-w-full">
              {spec}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-1">
          <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
            <span className="text-base sm:text-lg font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2 rounded-lg text-xs sm:text-sm font-medium transition-all hover:shadow-md"
            style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
          >
            <CartIcon size={14} /> <span className="truncate">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
