import { CloseIcon, HeartIcon, CartIcon, TrashIcon } from './icons';
import { Product, products } from '../data';

interface WishlistSidebarProps {
  open: boolean;
  wishlist: string[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onAddToCart: (p: Product) => void;
}

export default function WishlistSidebar({ open, wishlist, onClose, onRemove, onAddToCart }: WishlistSidebarProps) {
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={onClose} />}
      <div className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--border)', background: '#EF4444' }}>
          <div className="flex items-center gap-2 text-white">
            <HeartIcon size={20} filled />
            <h2 className="font-semibold text-base">Wishlist ({wishlistProducts.length})</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <HeartIcon size={56} />
              <p className="mt-4 text-base font-medium">Your wishlist is empty</p>
              <p className="text-sm mt-1">Save products you love</p>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <div key={product.id} className="flex gap-3 p-3 rounded-xl border bg-gray-50" style={{ borderColor: 'var(--border)' }}>
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg shrink-0 bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">{product.name}</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">₹{product.price.toLocaleString('en-IN')}</p>
                  <button
                    onClick={() => { onAddToCart(product); onRemove(product.id); }}
                    className="mt-2 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-white transition-colors"
                    style={{ background: 'var(--primary)' }}
                  >
                    <CartIcon size={12} /> Move to Cart
                  </button>
                </div>
                <button onClick={() => onRemove(product.id)} className="text-gray-300 hover:text-red-500 transition-colors self-start shrink-0">
                  <TrashIcon size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
