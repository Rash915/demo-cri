import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, CartIcon } from './icons';
import { Product } from '../data';

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartSidebarProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export default function CartSidebar({ open, items, onClose, onUpdateQty, onRemove }: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const savings = items.reduce((sum, item) => {
    const orig = item.product.originalPrice || item.product.price;
    return sum + (orig - item.product.price) * item.qty;
  }, 0);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--border)', background: 'var(--primary)' }}>
          <div className="flex items-center gap-2 text-white">
            <CartIcon size={20} />
            <h2 className="font-semibold text-base">Your Cart ({items.length})</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <CartIcon size={56} />
              <p className="mt-4 text-base font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add products to get started</p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-lg text-white text-sm font-medium"
                style={{ background: 'var(--primary)' }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-3 p-3 rounded-xl border bg-gray-50" style={{ borderColor: 'var(--border)' }}>
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg shrink-0 bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">{product.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{product.specs[0]}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-gray-900 text-sm">₹{(product.price * qty).toLocaleString('en-IN')}</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => qty > 1 ? onUpdateQty(product.id, qty - 1) : onRemove(product.id)}
                        className="w-6 h-6 rounded-md flex items-center justify-center border border-gray-300 hover:border-blue-500 transition-colors text-gray-600 hover:text-blue-700"
                      >
                        <MinusIcon size={12} />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{qty}</span>
                      <button
                        onClick={() => onUpdateQty(product.id, qty + 1)}
                        className="w-6 h-6 rounded-md flex items-center justify-center border border-gray-300 hover:border-blue-500 transition-colors text-gray-600 hover:text-blue-700"
                      >
                        <PlusIcon size={12} />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(product.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors self-start shrink-0"
                >
                  <TrashIcon size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-3" style={{ borderColor: 'var(--border)' }}>
            {savings > 0 && (
              <div className="flex justify-between text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                <span>You save</span>
                <span className="font-semibold">₹{savings.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between items-baseline">
              <span className="text-gray-500 text-sm">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <p className="text-xs text-gray-400">Free delivery on this order</p>
            <button
              className="w-full py-3 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'var(--primary)' }}
            >
              Proceed to Checkout
            </button>
            <button onClick={onClose} className="w-full py-2.5 rounded-xl text-blue-700 font-medium text-sm border border-blue-200 hover:bg-blue-50 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
