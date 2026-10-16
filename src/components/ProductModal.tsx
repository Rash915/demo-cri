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

  const isTiny = product.category === 'tiny';
  const discount =
    !isTiny && product.originalPrice && product.originalPrice > product.price
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
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 my-auto border border-gray-100 max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
          aria-label="Close detail modal"
        >
          <CloseIcon size={18} />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 bg-gray-50 relative h-48 sm:h-64 md:h-auto md:min-h-[380px] flex items-center justify-center p-3 sm:p-4 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl shadow-xs max-h-[190px] sm:max-h-[250px] md:max-h-[340px]"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blue-700 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs">
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="absolute top-3 right-12 sm:top-4 sm:right-14 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-3.5 sm:p-5 md:p-6 flex flex-col overflow-y-auto">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-0.5 text-amber-400">
              {[1, 2, 3, 4, 5].map(i => (
                <StarIcon key={i} size={14} filled={i <= Math.floor(product.rating || 4.5)} />
              ))}
            </div>
            <span className="text-xs font-medium text-gray-500">{product.rating || 4.5} ({product.reviews || 28} reviews)</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-2" style={{ fontFamily: 'DM Serif Display, serif' }}>
            {product.name}
          </h2>

          {product.productCode && (
            <div className="flex items-center gap-2 mb-2 text-xs">
              <span className="font-mono bg-slate-900 text-amber-300 px-2 py-0.5 rounded font-bold border border-slate-700">
                Code: #{product.productCode}
              </span>
              <span className="text-gray-500">• {product.subcategory}</span>
            </div>
          )}

          {/* Price Container */}
          <div className="flex items-baseline justify-between gap-3 mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex-wrap">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Official List Price</span>
              <span className="text-2xl font-extrabold text-blue-900">₹{product.price.toLocaleString('en-IN')}</span>
            </div>
            {product.rcp && (
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">Rate Contract (RCP)</span>
                <span className="text-xl font-bold text-sky-800">₹{product.rcp.toLocaleString('en-IN')}</span>
              </div>
            )}
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 ml-auto">
              In Stock • 100% Genuine C.R.I.
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
            Official C.R.I. high-efficiency pumping system engineered for domestic, agricultural & commercial installations with precision factory calibration.
          </p>

          {/* Technical Specs Matrix */}
          {(product.hp || product.pipeSize || product.head || product.discharge || product.powerWatts || product.maxPressure || product.cableLength || product.solidHandling) && (
            <div className="bg-blue-50/50 rounded-xl p-3 mb-4 border border-blue-100 text-xs">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-900 mb-2">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {(product.stageTank || product.hp || product.powerWatts) && (
                  <div className="flex justify-between border-b border-blue-100/60 pb-1">
                    <span className="text-gray-500">Power:</span>
                    <span className="font-bold text-gray-900">
                      {product.stageTank || product.powerWatts || product.hp}
                    </span>
                  </div>
                )}
                {(product.pipeSize || product.inletOutletSize) && (
                  <div className="flex justify-between border-b border-blue-100/60 pb-1">
                    <span className="text-gray-500">{product.inletOutletSize ? 'Inlet/Outlet:' : 'Pipe Size:'}</span>
                    <span className="font-semibold text-gray-900">
                      {product.inletOutletSize || `${product.pipeSize} mm`}
                    </span>
                  </div>
                )}
                {product.phase && (
                  <div className="flex justify-between border-b border-blue-100/60 pb-1">
                    <span className="text-gray-500">Phase/Type:</span>
                    <span className="font-semibold text-gray-900">{product.phase}</span>
                  </div>
                )}
                {(product.head || product.maxPressure) && (
                  <div className="flex justify-between border-b border-blue-100/60 pb-1">
                    <span className="text-gray-500">{product.maxPressure ? 'Pressure:' : 'Head:'}</span>
                    <span className="font-semibold text-gray-900">{product.maxPressure || product.head}</span>
                  </div>
                )}
                {product.solidHandling && (
                  <div className="flex justify-between border-b border-blue-100/60 pb-1">
                    <span className="text-gray-500">Solid Handling:</span>
                    <span className="font-semibold text-gray-900">{product.solidHandling} mm</span>
                  </div>
                )}
                {product.cableLength && (
                  <div className="flex justify-between border-b border-blue-100/60 pb-1">
                    <span className="text-gray-500">Cable Length:</span>
                    <span className="font-semibold text-gray-900">{product.cableLength} m</span>
                  </div>
                )}
                {(product.discharge || product.flowRate) && (
                  <div className="col-span-2 flex justify-between pt-0.5">
                    <span className="text-gray-500">{product.flowRate ? 'Flow Rate:' : 'Discharge Flow:'}</span>
                    <span className="font-bold text-blue-700">{product.flowRate || product.discharge}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Extra Specs Tags */}
          <div className="mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Model Highlights</h4>
            <div className="flex flex-wrap gap-1.5">
              {product.specs.map(spec => (
                <span key={spec} className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
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
