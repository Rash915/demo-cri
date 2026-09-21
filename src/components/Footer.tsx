import { useState } from 'react';
import { TruckIcon, ShieldIcon, LockIcon, PhoneIcon, MailIcon, MapPinIcon } from './icons';
import { categories } from '../data';

interface FooterProps {
  onCategorySelect: (id: string) => void;
}

export default function Footer({ onCategorySelect }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust strip */}
      <div className="bg-blue-800 py-5 sm:py-6">
        <div className="w-full px-4 sm:px-6 md:px-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: <TruckIcon size={22} />, title: 'Free Delivery', sub: 'On orders above ₹999' },
            { icon: <ShieldIcon size={22} />, title: 'Warranty', sub: '1–5 Year Warranty' },
            { icon: <LockIcon size={22} />, title: 'Secure Payments', sub: '100% Safe & Encrypted' },
            { icon: <PhoneIcon size={22} />, title: 'Customer Support', sub: '9 AM – 6 PM, Mon–Sat' },
          ].map(item => (
            <div key={item.title} className="flex items-center gap-3 text-white">
              <div className="text-blue-300 shrink-0">{item.icon}</div>
              <div>
                <div className="font-semibold text-xs sm:text-sm">{item.title}</div>
                <div className="text-blue-200 text-[11px] sm:text-xs">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <div className="bg-white px-3 py-2 rounded-lg shadow-sm inline-block">
              <img 
                src="https://www.crifluidsystems.com/za/wp-content/uploads/2021/02/cri-logo-new.png" 
                alt="C.R.I. Pumps Logo" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
            India's leading pump manufacturer since 1961. Trusted by 5 million+ customers across agriculture, domestic, and industrial sectors.
          </p>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2"><span className="text-blue-400 shrink-0 mt-0.5"><MapPinIcon size={16} /></span><span>1/2, CRI Road, Ukkadam, Coimbatore – 641 001, Tamil Nadu, India</span></div>
            <div className="flex items-center gap-2"><span className="text-blue-400 shrink-0"><PhoneIcon size={16} /></span><span>+91 422 456 7890</span></div>
            <div className="flex items-center gap-2"><span className="text-blue-400 shrink-0"><MailIcon size={16} /></span><span>support@cripumps.com</span></div>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            {['About CRI', 'Dealer Locator', 'Service Centers', 'Careers', 'Press & Media', 'CSR Initiatives', 'Contact Us', 'FAQs'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block text-gray-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Categories</h3>
          <ul className="space-y-1.5 text-xs sm:text-sm max-h-60 overflow-y-auto pr-2 scrollbar-hide">
            {categories.map(cat => (
              <li key={cat.id}>
                <button
                  onClick={() => onCategorySelect(cat.id)}
                  className="hover:text-white transition-colors text-gray-400 text-left"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Newsletter</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-4">
            Get exclusive offers, product updates, and farming tips delivered to your inbox.
          </p>
          {subscribed ? (
            <div className="bg-green-900/40 border border-green-700 rounded-lg p-3 text-green-400 text-xs sm:text-sm">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors hover:opacity-90"
                style={{ background: 'var(--primary)', color: 'white' }}
              >
                Subscribe
              </button>
            </form>
          )}

          {/* Social */}
          <div className="mt-6">
            <h4 className="text-white text-xs sm:text-sm font-medium mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { label: 'FB', color: '#1877F2' },
                { label: 'TW', color: '#1DA1F2' },
                { label: 'YT', color: '#FF0000' },
                { label: 'IN', color: '#0A66C2' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity"
                  style={{ background: s.color }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="w-full px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-gray-500">
          <p>© 2026 CRI Pumps India Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Use', 'Return Policy', 'Sitemap'].map(link => (
              <a key={link} href="#" className="hover:text-gray-300 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
