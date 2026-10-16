import { StarIcon, HeartIcon, CartIcon } from './icons';
import { Product } from '../data';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (id: string) => void;
  onClick: (product: Product) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
  onClick,
}: ProductCardProps) {
  const isTiny = product.category === 'tiny';

  // Only calculate discount if not tiny and originalPrice is genuinely set
  const discount =
    !isTiny && product.originalPrice && product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : null;

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
    >
      {/* Top Image & Badge Container */}
      <div
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-gray-100 cursor-pointer h-40 xs:h-44 sm:h-48 shrink-0 flex items-center justify-center p-2.5 sm:p-3"
        onClick={() => onClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-2xs"
          loading="lazy"
        />

        {/* Model Code Pill - Top Left */}
        {product.productCode && (
          <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-slate-900/90 backdrop-blur-xs text-amber-300 font-mono text-[10px] sm:text-[11px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md shadow-xs border border-slate-700/80">
            #{product.productCode}
          </span>
        )}

        {/* Secondary Category / Feature Badge - Bottom Left over image */}
        {product.badge && (
          <span className="absolute bottom-2 left-2.5 sm:bottom-2.5 sm:left-3 bg-blue-700/90 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
            {product.badge}
          </span>
        )}

        {/* Non-Tiny Discount Badge (if any) */}
        {discount && (
          <span className="absolute top-2.5 right-11 sm:top-3 sm:right-12 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md shadow-xs">
            -{discount}%
          </span>
        )}

        {/* Wishlist Button - Top Right */}
        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/95 text-gray-400 hover:text-red-500 hover:bg-white'
          }`}
          aria-label="Wishlist"
        >
          <HeartIcon size={14} filled={isWishlisted} />
        </button>
      </div>

      {/* Main Content Details */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 min-w-0">
        {/* Rating & Subcategory Tag */}
        <div className="flex items-center justify-between gap-1 mb-1.5 flex-wrap">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded truncate max-w-[150px] sm:max-w-none">
            {product.subcategory || 'C.R.I. Pump'}
          </span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 text-amber-400">
              {[1, 2, 3, 4, 5].map(i => (
                <StarIcon key={i} size={10} filled={i <= Math.floor(product.rating || 4.5)} />
              ))}
            </div>
            <span className="text-[10px] text-gray-400 font-medium">({product.reviews || 28})</span>
          </div>
        </div>

        {/* Model Title */}
        <h3
          className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 mb-2 sm:mb-2.5 leading-snug cursor-pointer group-hover:text-blue-700 transition-colors"
          onClick={() => onClick(product)}
        >
          {product.name}
        </h3>

        {/* Technical Specification Matrix for Pumps */}
        {isTiny || product.hp ? (
          <div className="bg-slate-50/90 rounded-xl p-2 sm:p-2.5 mb-2.5 sm:mb-3 border border-slate-200/70 text-[10px] sm:text-[11px] flex flex-col gap-1 sm:gap-1.5">
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Power:</span>
                <span className="font-bold text-gray-900 truncate ml-1">{product.hp || '-'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Pipe:</span>
                <span className="font-semibold text-gray-900 truncate ml-1">{product.pipeSize ? `${product.pipeSize} mm` : '-'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Head:</span>
                <span className="font-semibold text-gray-800 truncate ml-1">{product.head || '-'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Type:</span>
                <span className="font-semibold text-gray-800 truncate ml-1" title={product.phase}>
                  {product.phase || '-'}
                </span>
              </div>
            </div>

            {product.discharge && (
              <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[9px] sm:text-[10px]">
                <span className="text-gray-500 font-medium">Discharge:</span>
                <span className="font-semibold text-blue-800 truncate ml-1" title={product.discharge}>
                  {product.discharge}
                </span>
              </div>
            )}
          </div>
        ) : (
          /* Standard fallback spec chips */
          <div className="flex flex-wrap gap-1 mb-3">
            {product.specs.slice(0, 3).map(spec => (
              <span
                key={spec}
                className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium border border-blue-100"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* Price & Action Button Area */}
        <div className="mt-auto pt-2 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-2.5 sm:mb-3 flex-wrap gap-1">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                List Price
              </span>
              <span className="text-base sm:text-lg md:text-xl font-extrabold text-blue-950 tracking-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            </div>
            {!isTiny && product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 sm:px-2 py-0.5 rounded-full self-center">
              Genuine C.R.I.
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => onClick(product)}
              className="py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl border border-gray-300 hover:border-blue-600 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-bold text-[11px] sm:text-xs transition-colors cursor-pointer text-center truncate"
            >
              Specifications
            </button>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-[11px] sm:text-xs transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-w-0"
            >
              <CartIcon size={12} className="shrink-0" />
              <span className="truncate">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
