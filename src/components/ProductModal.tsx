import { useState } from 'react';
import { Product } from '../data';
import { CloseIcon, HeartIcon, CartIcon, StarIcon, CheckIcon, ShieldIcon, TruckIcon } from './icons';

interface ProductModalProps {
  product: Product | null;
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, qty: number) => void;
  onToggleWishlist: (id: string) => void;
}

export default function ProductModal({
  product,
  isWishlisted,
  onClose,
  onAddToCart,
  onToggleWishlist,
}: ProductModalProps) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 my-auto border border-gray-100 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 text-gray-700 hover:text-gray-900 flex items-center justify-center transition-colors backdrop-blur-md"
          aria-label="Close detail modal"
        >
          <CloseIcon size={20} />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 bg-gray-50 relative min-h-[260px] md:min-h-[380px] flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl shadow-xs max-h-[340px]"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-amber-400 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="absolute top-4 right-14 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-5 sm:p-6 flex flex-col overflow-y-auto">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-0.5 text-amber-400">
              {[1, 2, 3, 4, 5].map(i => (
                <StarIcon key={i} size={14} filled={i <= Math.floor(product.rating)} />
              ))}
            </div>
            <span className="text-xs font-medium text-gray-500">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-2" style={{ fontFamily: 'DM Serif Display, serif' }}>
            {product.name}
          </h2>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-700">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">In Stock</span>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
            Heavy-duty CRI engineering design suited for high efficiency performance and long-lasting durability across varied water flow conditions.
          </p>

          {/* Specs */}
          <div className="mb-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Key Specifications</h4>
            <div className="flex flex-wrap gap-1.5">
              {product.specs.map(spec => (
                <span key={spec} className="text-xs bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg font-medium border border-blue-100 flex items-center gap-1">
                  <CheckIcon size={12} /> {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Delivery & Guarantee strip */}
          <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 rounded-xl mb-5 text-xs text-gray-600 border border-gray-100">
            <div className="flex items-center gap-2">
              <TruckIcon size={16} /> Free Home Delivery
            </div>
            <div className="flex items-center gap-2">
              <ShieldIcon size={16} /> 2-Year CRI Warranty
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="mt-auto space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center border rounded-lg overflow-hidden border-gray-300">
                <button
                  type="button"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-bold transition-colors"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-gray-800">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(q => q + 1)}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3 px-4 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 shadow-md flex items-center justify-center gap-2"
                style={{ background: 'var(--primary)' }}
              >
                <CartIcon size={16} /> Add to Cart (₹{(product.price * qty).toLocaleString('en-IN')})
              </button>
              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                className={`p-3 rounded-xl border transition-colors flex items-center justify-center ${
                  isWishlisted ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-300 text-gray-500 hover:text-red-500'
                }`}
                aria-label="Wishlist"
              >
                <HeartIcon size={20} filled={isWishlisted} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
