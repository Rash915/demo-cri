import { useState } from 'react';
import { categories, products, Product } from '../data';
import ProductCard from './ProductCard';
import { FilterIcon, ChevronRightIcon, CheckIcon } from './icons';

interface CategoryPageProps {
  categoryId: string;
  wishlist: string[];
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  onProductClick: (p: Product) => void;
  searchQuery?: string;
}

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated', 'Newest'];

export default function CategoryPage({
  categoryId, wishlist, onAddToCart, onToggleWishlist, onProductClick, searchQuery,
}: CategoryPageProps) {
  const category = categories.find(c => c.id === categoryId);
  const [selectedSubcat, setSelectedSubcat] = useState<string>('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [requestType, setRequestType] = useState<'order' | 'service'>('order');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    pincode: '',
    productName: '',
    quantity: '1',
    serviceType: 'Maintenance & Repair',
    issue: '',
    notes: '',
    submitted: false,
    submittedType: 'order' as 'order' | 'service',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(f => ({ ...f, submitted: true, submittedType: requestType }));
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        pincode: '',
        productName: '',
        quantity: '1',
        serviceType: 'Maintenance & Repair',
        issue: '',
        notes: '',
        submitted: false,
        submittedType: 'order',
      });
    }, 5000);
  };

  const allProducts = searchQuery
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : products.filter(p => p.category === categoryId);

  const filtered = selectedSubcat === 'All'
    ? allProducts
    : allProducts.filter(p => p.subcategory === selectedSubcat);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Top Rated') return b.rating - a.rating;
    return 0;
  });

  if (searchQuery) {
    return (
      <div className="w-full px-4 sm:px-6 md:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Search Results for "{searchQuery}"
        </h2>
        <p className="text-gray-500 text-sm mb-6">{sorted.length} products found</p>
        {sorted.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm mt-1">Try different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sorted.map(p => (
              <ProductCard key={p.id} product={p} isWishlisted={wishlist.includes(p.id)} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} onClick={onProductClick} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (!category) return null;

  return (
    <div className="animate-fade-in">
      {/* Banner with 100% full-width category background photo */}
      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden shadow-lg bg-gray-900">
        {/* Full-bleed category background photo covering 100% of the entire banner */}
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-700"
        />
        {/* Balanced dark overlay covering entire background for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/70 to-slate-950/60" />

        {/* Content */}
        <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-8 text-white flex items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-amber-300 font-semibold mb-3 border border-white/30 shadow-sm">
              <span>{category.icon}</span> Genuine CRI Products
            </div>
            <div className="text-blue-200 text-xs sm:text-sm mb-1.5 font-medium">Home → {category.name}</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white drop-shadow-md" style={{ fontFamily: 'DM Serif Display, serif' }}>
              {category.name}
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg drop-shadow-xs">{category.description}</p>
          </div>

          {/* Relevant Category Product Photo Card */}
          <div className="hidden md:flex items-center gap-3.5 bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-3 shadow-2xl shrink-0 w-72">
            <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-white bg-white flex items-center justify-center p-0.5">
              <img
                src={allProducts[0]?.image || category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="min-w-0">
              <div className="inline-block bg-amber-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 shadow-2xs">
                Featured Product
              </div>
              <div className="font-bold text-white text-xs lg:text-sm leading-tight truncate">{category.name}</div>
              <div className="text-amber-300 text-xs mt-1 font-medium">{allProducts.length} Items Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        {/* Subcategory pills */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
          {['All', ...category.subcategories].map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubcat(sub)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                selectedSubcat === sub
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Mobile filter drawer modal */}
        {filterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setFilterOpen(false)} />
            <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-in">
              <div className="flex items-center justify-between p-4 border-b bg-blue-900 text-white">
                <h3 className="font-semibold text-base flex items-center gap-2">
                  <FilterIcon size={16} /> Filters
                </h3>
                <button onClick={() => setFilterOpen(false)} className="text-white/80 hover:text-white text-xl font-bold px-2">
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Price Range</h4>
                  <div className="space-y-2">
                    {['Under ₹1,000', '₹1,000–₹5,000', '₹5,000–₹15,000', 'Above ₹15,000'].map(range => (
                      <label key={range} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded accent-blue-700" /> {range}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Rating</h4>
                  {[4, 3, 2].map(r => (
                    <label key={r} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer mb-2">
                      <input type="checkbox" className="w-4 h-4 rounded accent-blue-700" />
                      {'★'.repeat(r)}{'☆'.repeat(5 - r)} & above
                    </label>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Availability</h4>
                  <label className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded accent-blue-700" defaultChecked /> In Stock Only
                  </label>
                </div>
              </div>
              <div className="p-4 border-t bg-gray-50 flex gap-2">
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full py-2.5 bg-blue-700 text-white rounded-lg font-semibold text-sm hover:bg-blue-800 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-6">
          {/* Sidebar filter (desktop) */}
          <aside className="hidden lg:block w-52 shrink-0 space-y-4">
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Price Range</h3>
              <div className="space-y-2">
                {['Under ₹1,000', '₹1,000–₹5,000', '₹5,000–₹15,000', 'Above ₹15,000'].map(range => (
                  <label key={range} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-700">
                    <input type="checkbox" className="rounded accent-blue-700" /> {range}
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border p-4" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Rating</h3>
              {[4, 3, 2].map(r => (
                <label key={r} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-700 mb-2">
                  <input type="checkbox" className="rounded accent-blue-700" />
                  {'★'.repeat(r)}{'☆'.repeat(5 - r)} & above
                </label>
              ))}
            </div>

            <div className="bg-white rounded-xl border p-4" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Availability</h3>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded accent-blue-700" defaultChecked /> In Stock Only
              </label>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <p className="text-gray-500 text-xs sm:text-sm">{sorted.length} products</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs sm:text-sm text-gray-700 bg-white hover:border-blue-400 shadow-2xs"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <FilterIcon size={14} /> Filters
                </button>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="px-2.5 py-1.5 border rounded-lg text-xs sm:text-sm text-gray-700 bg-white focus:outline-none focus:border-blue-500 shadow-2xs"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {sortOptions.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {sorted.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <div className="text-4xl mb-3">📦</div>
                <p className="font-medium">No products in this subcategory yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {sorted.map(p => (
                  <ProductCard key={p.id} product={p} isWishlisted={wishlist.includes(p.id)} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} onClick={onProductClick} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Why Choose CRI for this category */}
        <div className="mt-10 sm:mt-14 rounded-2xl p-5 sm:p-8 border" style={{ background: 'var(--secondary)', borderColor: 'var(--border)' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Why Choose CRI {category.name}?
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            CRI's {category.name.toLowerCase()} are engineered for India's diverse conditions — from scorching summers to monsoon flooding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {['ISI & BIS Certified Quality', '1–5 Year Product Warranty', '12,000+ Service Touchpoints'].map(pt => (
              <div key={pt} className="flex items-center gap-3 bg-white rounded-xl p-3.5 sm:p-4 border" style={{ borderColor: 'var(--border)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--primary)' }}>
                  <CheckIcon size={14} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Placement & Service Request Form */}
        <div className="mt-8 sm:mt-10 bg-white rounded-2xl border p-5 sm:p-8 shadow-sm" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b pb-5" style={{ borderColor: 'var(--border)' }}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: 'DM Serif Display, serif' }}>
                {requestType === 'order' ? `Place an Order / Inquiry` : `Request a Service & Technical Support`}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                {requestType === 'order'
                  ? `Direct order placement or quotation request for ${category.name}.`
                  : `Schedule certified technician visit for installation, repair, or maintenance.`}
              </p>
            </div>

            {/* Request Type Switcher Tabs */}
            <div className="flex bg-gray-100 p-1.5 rounded-xl border border-gray-200 shrink-0 self-start sm:self-center">
              <button
                type="button"
                onClick={() => setRequestType('order')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  requestType === 'order'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>📦</span> Order Placement
              </button>
              <button
                type="button"
                onClick={() => setRequestType('service')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  requestType === 'service'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>🔧</span> Request a Service
              </button>
            </div>
          </div>

          {formData.submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-green-800 font-bold text-base sm:text-lg">
                {formData.submittedType === 'order'
                  ? 'Order Placement Request Received!'
                  : 'Service Request Submitted Successfully!'}
              </p>
              <p className="text-green-700 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                {formData.submittedType === 'order'
                  ? 'Thank you! Our CRI sales representative will call you within 2 hours to confirm stock, pricing, and dispatch details.'
                  : 'Thank you! Our technical support executive will get in touch shortly to confirm your service slot.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Contact Information */}
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">City / Town *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={e => setFormData(f => ({ ...f, city: e.target.value }))}
                  placeholder="e.g. Coimbatore, Tamil Nadu"
                  className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Pincode</label>
                <input
                  type="text"
                  value={formData.pincode}
                  onChange={e => setFormData(f => ({ ...f, pincode: e.target.value }))}
                  placeholder="641001"
                  className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                />
              </div>

              {/* Order Specific Fields */}
              {requestType === 'order' && (
                <>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Select Product / Model</label>
                    <select
                      value={formData.productName}
                      onChange={e => setFormData(f => ({ ...f, productName: e.target.value }))}
                      className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors bg-white text-gray-800"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <option value="">Any {category.name} Product</option>
                      {allProducts.map(p => (
                        <option key={p.id} value={p.name}>{p.name} - ₹{p.price.toLocaleString('en-IN')}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Order Quantity / Type</label>
                    <select
                      value={formData.quantity}
                      onChange={e => setFormData(f => ({ ...f, quantity: e.target.value }))}
                      className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors bg-white text-gray-800"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <option value="1">1 Unit (Standard Order)</option>
                      <option value="2-5">2 to 5 Units</option>
                      <option value="5-20">5 to 20 Units (Agri / Business)</option>
                      <option value="Bulk">Bulk Commercial Requirement (20+ Units)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Delivery Address / Special Notes</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={e => setFormData(f => ({ ...f, notes: e.target.value }))}
                      placeholder="Specify delivery address, special requirements, or questions..."
                      className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      style={{ borderColor: 'var(--border)' }}
                    />
                  </div>
                </>
              )}

              {/* Service Specific Fields */}
              {requestType === 'service' && (
                <>
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Service Type *</label>
                    <select
                      value={formData.serviceType}
                      onChange={e => setFormData(f => ({ ...f, serviceType: e.target.value }))}
                      className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors bg-white text-gray-800"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <option value="New Installation">New Installation & Setup</option>
                      <option value="Maintenance & Repair">Routine Maintenance & Repair</option>
                      <option value="Warranty Claim">Warranty Claim / Part Replacement</option>
                      <option value="Inspection">On-Site Technical Inspection</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">Issue / Service Details</label>
                    <textarea
                      rows={2}
                      value={formData.issue}
                      onChange={e => setFormData(f => ({ ...f, issue: e.target.value }))}
                      placeholder="Describe pump model, error symptoms, or service requirements..."
                      className="w-full px-3.5 py-2.5 border rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      style={{ borderColor: 'var(--border)' }}
                    />
                  </div>
                </>
              )}

              <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 shadow-sm flex items-center justify-center gap-2"
                  style={{ background: 'var(--primary)' }}
                >
                  <span>{requestType === 'order' ? '🛒 Submit Order Placement' : '🔧 Submit Service Request'}</span>
                </button>
                <span className="text-[11px] text-gray-400">⚡ Fast response guaranteed within 2–4 business hours</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
