import { agriCatalogueProducts } from './data/agriCatalogue';
import { tinyCatalogueProducts } from './data/tinyCatalogue';
import { nextGenCatalogueProducts } from './data/nextGenCatalogue';
import { residentialCatalogueProducts } from './data/residentialCatalogue';
import { accessoriesCatalogueProducts } from './data/accessoriesCatalogue';

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  specs: string[];
  badge?: string;
  inStock: boolean;
  productCode?: string;
  rcpPrice?: number;
  rcp?: number;
  hp?: string;
  stages?: string;
  pipeSize?: string;
  phase?: string;
  head?: string;
  discharge?: string;
  page?: number;
  model?: string;
  group?: string;
  stageTank?: string;
  maxPressure?: string;
  flowRate?: string;
  solidHandling?: string;
  powerWatts?: string | number;
  inletOutletSize?: string;
  cableLength?: string;
  relayRange?: string;
  recommendedHp?: string;
  valveType?: string;
  sizeMm?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  subcategories: string[];
  bgColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export const categories: Category[] = [
  {
    id: 'agri',
    name: 'Agri',
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1200&h=600&fit=crop&auto=format',
    description: 'Complete verified C.R.I. Agricultural pump range from official Rate Contract Price List (Tamil Nadu). Featuring 3-Phase Monoblocks, Horizontal & Vertical Openwells, and 4", 5"/4", 6" Submersibles.',
    subcategories: [
      '3 Phase Monoblock Pumps – JUMBO',
      '3 Phase Horizontal Openwell Submersible Pumpsets – RYKER (Copper Rotor)',
      '3 Phase Horizontal Openwell Submersible Pumpsets – RYKER (Aluminium Rotor)',
      '3 Phase Horizontal Openwell Submersible Pumpsets – CSM (Aluminium Rotor)',
      '3 Phase Horizontal Openwell Submersible Pumpsets – CSM (Copper Rotor)',
      '3 Phase Horizontal Openwell Submersible Pumpsets – CSM-J (Jacket Type)',
      '3 Phase Vertical Openwell Submersible Pumpsets – RYKER (Aluminium Rotor)',
      '3 Phase Vertical Openwell Submersible Pumpsets – RYKER (Copper Rotor)',
      '3 Phase Vertical Openwell Submersible Pumpsets – CV',
      '3 Phase Vertical Openwell Submersible Pumpsets – CVH (High Head Vertical)',
      '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – W6 Models)',
      '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – S2 Models)',
      '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – PR Models)',
      '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Split Type)',
      '4″ Submersible Pumpset – GENIE Series – SS IP & SS NRV',
      '4″ Fully Stainless Steel Submersible Pumpset (From 3 HP) – STEELIX Series',
      '5″/4″ Submersible Pumpset – NILE Series (Tube Type Models)',
      '5″/4″ Submersible Pumpset – NILE Series (Split Type Models)',
      '6″ Submersible Pumpset – DELMA NXT Series (Mixed Flow) – CR3+ / R3+ / DR3+ / PR3+ Models (Copper Rotor)',
      '6″ Submersible Pumpset – DELMA NXT Series (Radial Flow) – CR3+ / R3+ / DR3+ / PR3+ Models (Copper Rotor)',
      '6″/7″ Submersible Pumpset – CONGO Series – PR3+ Models (Copper Rotor)',
    ],
    bgColor: '#EFF6FF',
  },
  {
    id: 'residential',
    name: 'Residential',
    icon: '🏠',
    image: '/home_pump_category.png',
    description: 'High-performance residential domestic pumps for homes, apartments, and villas. Whisper-quiet, rust-resistant, and built for steady high water pressure.',
    subcategories: [
      '3″ Submersible Pumpset – Lena Series',
      '3½″ Submersible Pumpset – Lena Plus Series',
      '4″ Submersible Pumpset (Up to 2 HP) – Zuno Series',
      '4″ Submersible Pumpset (Up to 2 HP) – Genie Series (Aluminium Rotor)',
      '4″ Submersible Pumpset (Up to 2 HP) – Copper Rotor',
      '4″ Fully Stainless Steel Submersible Pumpset (Up to 2 HP) – Steelix Series',
      'Monoblock Pumps – ACM (Up to 3 HP)',
      '1 Phase Monoblock Pumps – Virat (Up to 2 HP)',
      'Jet Pumps',
      'Borewell Mono Compressor',
      'Borewell Belt Compressor',
    ],
    bgColor: '#F0FDF4',
  },
  {
    id: 'tiny',
    name: 'Tiny',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=1200&h=600&fit=crop&auto=format',
    description: 'C.R.I. Tiny series pumps are ultra-compact mini powerhouses engineered for tight spaces, household overhead tanks, gardens, and light utility.',
    subcategories: [
      'PLANO',
      'PLANO I-SMART',
      'CSS',
      'Vertical Open Well Submersible Pumps',
      'Vertical/Horizontal Open Well Submersible Pumps',
      'SELFY – High Speed',
      'SELFY MAX – Slow Speed',
      'Engine Pumpset',
      'Mini Pumps 1HP',
      'Mini Pumps 0.5HP',
      'I-SMART Pumps',
      'ClaRO',
      'CJS Series',
      'PREZJET – Car Washer Pumps',
    ],
    bgColor: '#FEFCE8',
  },
  {
    id: 'next-gen',
    name: 'Next Gen',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format',
    description: 'C.R.I. NEXT GEN series features advanced stainless steel monoblock special application pumps, hydro-pneumatic & smart inverter boosters, and heavy-duty sewage & drainage pumpsets.',
    subcategories: [
      // A. JTS / CTSS Series
      'SS Monoblock Pumpsets Special Application – JTS',
      'SS Monoblock Pumpsets Special Application – CTSS',

      // B. Booster Pumps
      'Mini Booster Pumps – TINY FORCE',
      'Booster Pumps – BRISK',
      'Booster Pumps – MHBS',
      'Booster Pumps – I PREZ',
      'Booster Pumps – I PREZ (Encloser Type)',
      'Booster Pumps – MHS (Multistage Horizontal Pumps)',
      'Automatic Pump Controller',
      'Mini Circulatory Pumps',
      'Float Switch',

      // C. Submersible and Surface Sewage / Drainage Pumps
      'Surface Sewage / Drainage Monoblock Pumpsets',
      'Mini Plastic Drainage Submersible Pumpsets',
      'Mini SS Sewage & Drainage Pumpsets',
      'Submersible Drainage Pumpsets',
      'Submersible Drainage / Sewage Pumpsets',
      'Submersible Sewage Pumpsets',
      'Submersible Sewage Cutter Pumpsets',
      'Submersible & Central Delivery Sewage/Drainage Pumpsets',
      'Submersible Heavy Sewage Pumps',
    ],
    bgColor: '#F5F3FF',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: '🔧',
    image: '/motor_pump_accessories_category.png',
    description: '100% genuine C.R.I. motor control panel boxes, heavy-duty air break starters, and ISI certified foot valves & check valves from the official price catalogue.',
    subcategories: [
      'NYRA Single Phase Panel Box (Upto 2HP)',
      'NYRA Three Phase Panel Box',
      'Air Break Starters',
      'Foot Valve',
      'Check Valve',
    ],
    bgColor: '#FFF7ED',
  },
];

// Preserved products for Accessories (All dummy items removed; populated by genuine verified accessoriesCatalogue)
const otherProducts: Product[] = [];

// All verified Agri, Tiny, Next Gen, Residential, and Accessories products from official Rate Contract Price List (Tamil Nadu)
export const products: Product[] = [
  ...agriCatalogueProducts,
  ...tinyCatalogueProducts,
  ...nextGenCatalogueProducts,
  ...residentialCatalogueProducts,
  ...accessoriesCatalogueProducts,
  ...otherProducts,
];

// Featured products showcasing bestsellers from Agri, Tiny, Next Gen, Residential, and Accessories
export const featuredProducts = products.filter(p =>
  ['cri-632635', 'cri-634670', 'cri-627163', 'cri-636388', 'cri-641525', 'cri-630093', 'cri-634651', 'cri-671403', 'cri-675781', 'cri-640228', 'cri-236834', 'cri-RM1PABO4361', 'cri-641365'].includes(p.id)
);

export interface TinySubcategoryInfo {
  name: string;
  tag: string;
  description: string;
  icon: string;
  hpRange: string;
  pipeRange: string;
  application: string;
  image: string;
}

export const tinySubcategoriesMeta: Record<string, TinySubcategoryInfo> = {
  'PLANO': {
    name: 'PLANO',
    tag: 'Open Well Submersible (Up to 2 HP)',
    description: 'Stainless steel open well submersible pumpsets. Energy efficient, panel box not required for Ultra series.',
    icon: '💧',
    hpRange: '0.5 HP – 2.0 HP',
    pipeRange: '25 × 25 to 50 × 50 mm',
    application: 'Sump, Tank & Open Well Domestic Water Supply',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
  },
  'PLANO I-SMART': {
    name: 'PLANO I-SMART',
    tag: 'Smart Open Well Submersibles',
    description: 'Smart-enabled stainless steel openwell pumps with integrated sensor logic and high-flow discharge.',
    icon: '⚡',
    hpRange: '0.5 HP – 1.0 HP',
    pipeRange: '25 × 25 mm',
    application: 'Smart Homes, Residential Underground Sumps',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format',
  },
  'CSS': {
    name: 'CSS',
    tag: 'Open Well Submersible (Up to 2 HP)',
    description: 'Rugged mild steel & stainless steel openwell submersibles engineered for high head and high volume lifting.',
    icon: '🌀',
    hpRange: '1.0 HP – 2.0 HP',
    pipeRange: '25 to 50 mm',
    application: 'Farm sumps, Wells, Residential Apartments',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
  },
  'Vertical Open Well Submersible Pumps': {
    name: 'Vertical Open Well Submersible Pumps',
    tag: 'Vertical Multistage (Up to 2 HP)',
    description: 'Space-saving vertical openwell submersible pumpsets including dry-type CVS and multistage LTK series up to 11 stages.',
    icon: '🏗️',
    hpRange: '1.0 HP – 1.5 HP',
    pipeRange: '25 to 32 mm',
    application: 'Narrow sumps, High-head water distribution',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
  },
  'Vertical/Horizontal Open Well Submersible Pumps': {
    name: 'Vertical/Horizontal Open Well Submersible Pumps',
    tag: 'Dual-Mount Open Well Submersible',
    description: 'Versatile PLANO VH series adaptable for either vertical or horizontal immersion according to pit dimensions.',
    icon: '🔄',
    hpRange: '0.5 HP – 1.5 HP',
    pipeRange: '32 mm',
    application: 'Low-water sumps, Flexible pit installations',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
  },
  'SELFY – High Speed': {
    name: 'SELFY – High Speed',
    tag: 'High Speed Self-Priming Monoblock',
    description: 'High-speed quick self-priming monoblocks available in aluminium and cast iron bodies for instantaneous priming.',
    icon: '⚡',
    hpRange: '0.5 HP – 1.5 HP',
    pipeRange: '25 × 25 mm',
    application: 'Rapid suction from municipal lines & sumps',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&h=400&fit=crop&auto=format',
  },
  'SELFY MAX – Slow Speed': {
    name: 'SELFY MAX – Slow Speed',
    tag: 'Slow Speed Heavy Duty Self-Priming',
    description: 'Slow-speed cast-iron self-priming pumps with low vibration, reduced wear, long lifespan, and steady high head.',
    icon: '🛡️',
    hpRange: '0.5 HP – 1.0 HP',
    pipeRange: '25 × 25 mm',
    application: 'Continuous residential duty, Low-noise installations',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format',
  },
  'Engine Pumpset': {
    name: 'Engine Pumpset',
    tag: 'Petrol Driven Portable Pumpset',
    description: 'Powerful 7 HP 4-stroke petrol-driven portable pumpsets delivering up to 60,000 LPH without electric power supply.',
    icon: '⛽',
    hpRange: '7.0 HP',
    pipeRange: '50 × 50 to 80 × 80 mm',
    application: 'Construction dewatering, Remote agricultural fields',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format',
  },
  'Mini Pumps 1HP': {
    name: 'Mini Pumps 1HP',
    tag: '1 HP Regenerative Domestic Monoblock',
    description: '100% copper-wound 1 HP mini monoblocks (GLAD, ELSA, MIKI, SHINE, ROYALE, STEELIX) for multi-storey overhead tanks.',
    icon: '🏠',
    hpRange: '1.0 HP',
    pipeRange: '25 × 25 mm',
    application: 'Multi-storey buildings, High-suction water transfer',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&h=400&fit=crop&auto=format',
  },
  'Mini Pumps 0.5HP': {
    name: 'Mini Pumps 0.5HP',
    tag: '0.5 HP Compact Household Monoblock',
    description: 'Whisper-quiet, low power consumption 0.5 HP mini domestic pumps designed for independent homes and gardens.',
    icon: '🏡',
    hpRange: '0.5 HP',
    pipeRange: '15 × 15 to 25 × 25 mm',
    application: 'Independent houses, Overhead tanks, Domestic gardens',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format',
  },
  'I-SMART Pumps': {
    name: 'I-SMART Pumps',
    tag: 'Intelligent Monoblock Pumpsets',
    description: 'Advanced self-priming smart pumps with thermal overload protector and voltage stabilizer tolerance.',
    icon: '💡',
    hpRange: '0.5 HP – 1.0 HP',
    pipeRange: '25 × 25 mm',
    application: 'Modern residences, Automated overhead tank filling',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format',
  },
  'ClaRO': {
    name: 'ClaRO',
    tag: 'Ultra High-Head Peripheral Pump',
    description: 'Peripheral high-pressure pumps generating massive head up to 90 meters with minimum energy consumption.',
    icon: '🎯',
    hpRange: '0.5 HP – 1.0 HP',
    pipeRange: '15 × 15 mm',
    application: 'High-rise residential pressure, Long-distance line boost',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
  },
  'CJS Series': {
    name: 'CJS Series',
    tag: 'Centrifugal Jet & Shallow Well Pumps',
    description: 'High-lift shallow well pumps and CJS jet pumpsets (SHALO series) engineered for deep suction lift up to 39 meters.',
    icon: '🌊',
    hpRange: '0.5 HP – 1.5 HP',
    pipeRange: '25 × 25 mm',
    application: 'Shallow borewells, Underground sumps with high lift',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&h=400&fit=crop&auto=format',
  },
  'PREZJET – Car Washer Pumps': {
    name: 'PREZJET – Car Washer Pumps',
    tag: 'High Pressure Vehicle Washer Systems',
    description: 'Heavy duty pressure washer pumpsets (60 to 140 BAR) with trolley and hose accessories for commercial vehicle washing.',
    icon: '🚿',
    hpRange: '1.0 HP – 2.0 HP',
    pipeRange: '15 × 15 mm',
    application: 'Automotive service centers, Commercial washing',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format',
  },
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    location: 'Coimbatore, Tamil Nadu',
    role: 'Farmer, 12 acres',
    text: 'CRI submersible pumps have transformed my farming. Running non-stop for 3 years without a single breakdown. The JUMBO monoblock delivers high discharge with low power consumption.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
  },
  {
    id: 't2',
    name: 'Priya Venkatesh',
    location: 'Madurai, Tamil Nadu',
    role: 'Home Owner',
    text: 'The booster pump solved our low water pressure issues completely. Installation was easy, and the after-sales service from CRI was excellent. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
  },
  {
    id: 't3',
    name: 'Mohammed Shareef',
    location: 'Tiruchirappalli, Tamil Nadu',
    role: 'Irrigation Contractor',
    text: "I've been installing CRI products for 15 years across Thanjavur and Trichy. The DELMA NXT mixed flow and RYKER openwells never fail. Truly top-tier engineering.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
  },
  {
    id: 't4',
    name: 'Anitha Subramaniam',
    location: 'Salem, Tamil Nadu',
    role: 'Dairy Farm Owner',
    text: 'The solar and agricultural pumps are outstanding. Continuous reliable water supply with genuine warranty support from Hebron Enterprises.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
  },
];

export const stats = [
  { label: 'Happy Customers', value: '5M+', icon: '👥' },
  { label: 'Dealer Network', value: '12,000+', icon: '🏪' },
  { label: 'Countries Served', value: '40+', icon: '🌍' },
  { label: 'Years of Excellence', value: '65+', icon: '🏆' },
];

export const offers = [
  {
    id: 'o1',
    title: 'Tamil Nadu Monsoon Special',
    subtitle: 'Up to 25% off on all Agri & Borewell Pumps',
    code: 'MONSOON25',
    bg: 'from-blue-600 to-sky-400',
    expires: 'Valid till 30 Sep 2026',
  },
  {
    id: 'o2',
    title: 'Home Essentials',
    subtitle: 'Buy any Residential Pump, get Free Installation Kit',
    code: 'HOMEKIT',
    bg: 'from-teal-600 to-emerald-400',
    expires: 'Limited Period Offer',
  },
  {
    id: 'o3',
    title: 'Bulk Farm Order Discount',
    subtitle: '15% off on agricultural orders above ₹50,000',
    code: 'BULK15',
    bg: 'from-indigo-600 to-blue-400',
    expires: 'Valid till 31 Oct 2026',
  },
];

export interface NextGenSubcategoryInfo {
  name: string;
  group: 'JTS / CTSS Series' | 'Booster Pumps' | 'Submersible and Surface Sewage / Drainage Pumps';
  tag: string;
  description: string;
  icon: string;
  hpRange: string;
  pipeRange: string;
  application: string;
  image: string;
}

export const nextGenSubcategoriesMeta: Record<string, NextGenSubcategoryInfo> = {
  // A. JTS / CTSS Series
  'SS Monoblock Pumpsets Special Application – JTS': {
    name: 'SS Monoblock Pumpsets Special Application – JTS',
    group: 'JTS / CTSS Series',
    tag: 'SS Monoblock Special Application',
    description: 'All-stainless-steel monoblock pumpsets engineered for corrosive fluids, hygienic transfer, and industrial chemical duty.',
    icon: '🛡️',
    hpRange: '0.5 HP – 1.5 HP',
    pipeRange: '25 × 25 mm',
    application: 'Special Industrial, RO & Chemical Transfer',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
  },
  'SS Monoblock Pumpsets Special Application – CTSS': {
    name: 'SS Monoblock Pumpsets Special Application – CTSS',
    group: 'JTS / CTSS Series',
    tag: 'High Flow SS Monoblock',
    description: 'Heavy-duty stainless steel monoblock pumps delivering high flow rates up to 12,000 LPH and pressure up to 30 bar.',
    icon: '⚙️',
    hpRange: '0.5 HP – 2.0 HP',
    pipeRange: '32 × 25 mm',
    application: 'Commercial RO Systems, Dairy & Food Processing',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
  },

  // B. Booster Pumps
  'Mini Booster Pumps – TINY FORCE': {
    name: 'Mini Booster Pumps – TINY FORCE',
    group: 'Booster Pumps',
    tag: 'Automatic Compact Booster',
    description: 'Compact household pressure boosting pumps with automatic flow sensing for constant pressure across showers and taps.',
    icon: '⚡',
    hpRange: '0.5 HP – 1.0 HP',
    pipeRange: '25 × 25 mm',
    application: 'Villas, Multi-Bathrooms, Solar Water Heaters',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&h=400&fit=crop&auto=format',
  },
  'Booster Pumps – BRISK': {
    name: 'Booster Pumps – BRISK',
    group: 'Booster Pumps',
    tag: 'Hydro-Pneumatic System (24L)',
    description: 'Pre-assembled booster pumpsets with 24 Ltr pressure tank providing ripple-free water pressure for modern homes.',
    icon: '🚀',
    hpRange: '0.5 HP – 1.5 HP',
    pipeRange: '25 × 25 mm',
    application: 'Residential Buildings, High Pressure Showers',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format',
  },
  'Booster Pumps – MHBS': {
    name: 'Booster Pumps – MHBS',
    group: 'Booster Pumps',
    tag: 'Multistage Horizontal Booster',
    description: 'High-pressure horizontal multistage pumps coupled with 24L or 35L pressure tanks for multi-storey residential water demand.',
    icon: '🏗️',
    hpRange: '0.5 HP – 1.5 HP',
    pipeRange: '25 × 25 mm',
    application: 'Hotels, Apartments, Commercial Complexes',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format',
  },
  'Booster Pumps – I PREZ': {
    name: 'Booster Pumps – I PREZ',
    group: 'Booster Pumps',
    tag: 'Smart Variable Inverter Booster',
    description: 'Intelligent frequency-driven booster pumps delivering whisper-quiet operation and constant water pressure on demand.',
    icon: '💡',
    hpRange: '1.0 HP – 3.0 HP',
    pipeRange: '25 × 25 to 40 × 40 mm',
    application: 'Luxury Residences, Modern Bungalows, Hospitals',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format',
  },
  'Booster Pumps – I PREZ (Encloser Type)': {
    name: 'Booster Pumps – I PREZ (Encloser Type)',
    group: 'Booster Pumps',
    tag: 'Soundproof Enclosed Booster',
    description: 'Acoustically insulated enclosed smart booster systems engineered for ultra-quiet indoor or terrace installation.',
    icon: '🔇',
    hpRange: '0.67 HP – 1.0 HP',
    pipeRange: '25 × 25 mm',
    application: 'Whisper-Quiet Residential Installations, Penthouses',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format',
  },
  'Booster Pumps – MHS (Multistage Horizontal Pumps)': {
    name: 'Booster Pumps – MHS (Multistage Horizontal Pumps)',
    group: 'Booster Pumps',
    tag: 'Multistage Horizontal Monoblock',
    description: 'Horizontal multistage centrifugal pumps with stainless steel impellers for boiler feeds, RO filtration, and boosting.',
    icon: '🔄',
    hpRange: '0.6 HP – 1.0 HP',
    pipeRange: '25 × 25 to 32 × 25 mm',
    application: 'Industrial RO, Boiler Feed, Commercial Washing',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
  },
  'Automatic Pump Controller': {
    name: 'Automatic Pump Controller',
    group: 'Booster Pumps',
    tag: 'Electronic Pressure Switch & Controller',
    description: 'Intelligent electronic pump controller preventing dry running and automating start/stop based on water tap usage.',
    icon: '🎛️',
    hpRange: 'Universal (up to 1.5 HP)',
    pipeRange: '1" NPT / Universal',
    application: 'Automating Overhead & Sump Monoblocks',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&auto=format',
  },
  'Mini Circulatory Pumps': {
    name: 'Mini Circulatory Pumps',
    group: 'Booster Pumps',
    tag: 'Hot Water Circulation',
    description: 'Ultra-quiet 3-speed glandless circulation pumps designed for solar water heater loops and domestic heating.',
    icon: '🔥',
    hpRange: '150W – 275W',
    pipeRange: '15 to 25 mm',
    application: 'Solar Water Heaters, Hydronic Heating',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&h=400&fit=crop&auto=format',
  },
  'Float Switch': {
    name: 'Float Switch',
    group: 'Booster Pumps',
    tag: 'Tank Level Automation',
    description: 'Double chamber microswitch float sensors for dual filling and emptying automation with counterweight.',
    icon: '🎚️',
    hpRange: 'Universal Sensor',
    pipeRange: '2m, 3m, 5m Cable',
    application: 'Sump & Overhead Tank Automation',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&auto=format',
  },

  // C. Submersible and Surface Sewage / Drainage Pumps
  'Surface Sewage / Drainage Monoblock Pumpsets': {
    name: 'Surface Sewage / Drainage Monoblock Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Surface Sewage Self-Priming',
    description: 'Non-clog surface monoblocks handling up to 15.5mm solids and flow up to 63,000 LPH for drainage and waste.',
    icon: '🚜',
    hpRange: '0.5 HP – 5.0 HP',
    pipeRange: '40 × 40 to 80 × 80 mm',
    application: 'STP Plants, Factory Effluents, Sewage Transfer',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
  },
  'Mini Plastic Drainage Submersible Pumpsets': {
    name: 'Mini Plastic Drainage Submersible Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Corrosion-Free Plastic Submersible',
    description: 'Lightweight corrosion-proof submersible sump pumps with integrated float switches for basement dewatering.',
    icon: '🪣',
    hpRange: '0.5 HP – 1.0 HP',
    pipeRange: '40 mm',
    application: 'Basement Dewatering, Garden Drainage, Pit Emptying',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
  },
  'Mini SS Sewage & Drainage Pumpsets': {
    name: 'Mini SS Sewage & Drainage Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Stainless Steel Sewage Submersible',
    description: 'Grade 304 stainless steel submersible drainage pumps handling up to 25mm solids with auto float operation.',
    icon: '✨',
    hpRange: '0.75 HP – 1.0 HP',
    pipeRange: '32 to 40 mm',
    application: 'Kitchen Waste, Sump Pit Dewatering, Grey Water',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
  },
  'Submersible Drainage Pumpsets': {
    name: 'Submersible Drainage Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Heavy Cast Iron Drainage',
    description: 'Rugged submersible drainage pumpsets featuring semi-open impellers for storm water and basement flooding.',
    icon: '🌊',
    hpRange: '0.5 HP – 2.0 HP',
    pipeRange: '40 to 80 mm',
    application: 'Stormwater Dewatering, Construction Pits',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
  },
  'Submersible Drainage / Sewage Pumpsets': {
    name: 'Submersible Drainage / Sewage Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Vortex Impeller Sewage Pumps',
    description: 'Submersible pumpsets with vortex impellers (CDL/CDRF series) passing solid-laden fluids without clogging.',
    icon: '🌀',
    hpRange: '0.5 HP – 1.0 HP',
    pipeRange: '50 to 80 mm',
    application: 'Domestic Sewage, Hotel Kitchen Drain, Septic Tanks',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
  },
  'Submersible Sewage Pumpsets': {
    name: 'Submersible Sewage Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Heavy Duty Non-Clog Sewage',
    description: 'High-performance submersible sewage pumps handling solids up to 35mm and discharge up to 42,000 LPH.',
    icon: '🏭',
    hpRange: '1.0 HP – 3.0 HP',
    pipeRange: '40 to 65 mm',
    application: 'Municipal Sewage, Apartments, Industrial Effluents',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
  },
  'Submersible Sewage Cutter Pumpsets': {
    name: 'Submersible Sewage Cutter Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Tungsten Carbide Cutter Submersible',
    description: 'High-torque grinder pumps with tungsten carbide shredder cutters reducing fibrous waste, cloth, and plastics.',
    icon: '✂️',
    hpRange: '1.0 HP – 10.0 HP',
    pipeRange: '50 to 100 mm',
    application: 'Hospital Waste, Commercial Kitchens, Heavy Sewage',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
  },
  'Submersible & Central Delivery Sewage/Drainage Pumpsets': {
    name: 'Submersible & Central Delivery Sewage/Drainage Pumpsets',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Central Top Discharge Submersible',
    description: 'Massive central-delivery pumpsets up to 35 HP delivering up to 3,90,000 LPH for large-scale sewage lifting.',
    icon: '🏛️',
    hpRange: '1.0 HP – 35.0 HP',
    pipeRange: '40 to 150 mm',
    application: 'Municipal Sewage Treatment Plants, Flood Control',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
  },
  'Submersible Heavy Sewage Pumps': {
    name: 'Submersible Heavy Sewage Pumps',
    group: 'Submersible and Surface Sewage / Drainage Pumps',
    tag: 'Heavy Industrial Sewage',
    description: 'Extra heavy-duty submersible sewage pumps handling up to 30mm solids and 15 HP high head up to 52.5 meters.',
    icon: '🏗️',
    hpRange: '2.0 HP – 15.0 HP',
    pipeRange: '50 to 100 mm',
    application: 'Industrial Processing, Chemical Effluent, Mine Drainage',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
  },
};

export interface ResidentialSubcategoryInfo {
  name: string;
  tag: string;
  description: string;
  icon: string;
  hpRange: string;
  pipeRange: string;
  application: string;
  image: string;
  badge?: string;
}

export const residentialSubcategoriesMeta: Record<string, ResidentialSubcategoryInfo> = {
  '3″ Submersible Pumpset – Lena Series': {
    name: '3″ Submersible Pumpset – Lena Series',
    tag: '3" Borewell Submersible',
    description: 'High-efficiency 3-inch submersible pumpsets designed for narrow borewells, domestic water supply, and overhead tanks.',
    icon: '🌊',
    hpRange: '1.0 – 1.5 HP',
    pipeRange: '32 mm',
    application: 'Narrow Borewells, Domestic Water Supply, Overhead Tanks',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
    badge: '3" Borewell Specialist',
  },
  '3½″ Submersible Pumpset – Lena Plus Series': {
    name: '3½″ Submersible Pumpset – Lena Plus Series',
    tag: '3.5" Borewell Submersible',
    description: 'Advanced 3.5-inch water-filled submersible pumpsets (WCFBK series) engineered for higher head up to 208 meters and deep water supply.',
    icon: '💧',
    hpRange: '1.0 – 2.0 HP',
    pipeRange: '32 mm',
    application: 'Deep Residential Borewells & High Head Delivery',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
    badge: 'High Head Series',
  },
  '4″ Submersible Pumpset (Up to 2 HP) – Zuno Series': {
    name: '4″ Submersible Pumpset (Up to 2 HP) – Zuno Series',
    tag: '4" Eco Borewell Submersible',
    description: 'Reliable 4-inch water-filled submersible pumpsets for residential homes, offering balanced flow rate and economical energy consumption.',
    icon: '⚡',
    hpRange: '1.0 HP',
    pipeRange: '32 mm',
    application: 'Domestic Borewells, Farmhouses & Garden Watering',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
    badge: 'Zuno Series',
  },
  '4″ Submersible Pumpset (Up to 2 HP) – Genie Series (Aluminium Rotor)': {
    name: '4″ Submersible Pumpset (Up to 2 HP) – Genie Series (Aluminium Rotor)',
    tag: '4" Borewell Aluminium Rotor',
    description: 'Comprehensive 4-inch Genie series with lightweight precision aluminium rotors, catering to head ranges up to 236 meters across 45 models.',
    icon: '🚀',
    hpRange: '1.0 – 2.0 HP',
    pipeRange: '32 – 65 mm',
    application: 'Residential Multi-Storey Buildings & Deep Wells',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
    badge: 'Genie Series',
  },
  '4″ Submersible Pumpset (Up to 2 HP) – Copper Rotor': {
    name: '4″ Submersible Pumpset (Up to 2 HP) – Copper Rotor',
    tag: '4" Borewell Copper Rotor',
    description: 'Heavy-duty 4-inch submersible pumpsets featuring 100% pure copper rotors for superior electrical conductivity, durability, and cooler operation.',
    icon: '⚙️',
    hpRange: '1.0 – 2.0 HP',
    pipeRange: '32 – 40 mm',
    application: 'Heavy Continuous Duty Domestic & Community Borewells',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop&auto=format',
    badge: '100% Copper Rotor',
  },
  '4″ Fully Stainless Steel Submersible Pumpset (Up to 2 HP) – Steelix Series': {
    name: '4″ Fully Stainless Steel Submersible Pumpset (Up to 2 HP) – Steelix Series',
    tag: '4" All-Stainless Steel Submersible',
    description: 'Premium corrosion-resistant Grade 304 all-stainless-steel submersible pumpsets designed for sand resistance and crystal clear drinking water.',
    icon: '🛡️',
    hpRange: '0.5 – 2.0 HP',
    pipeRange: '32 – 40 mm',
    application: 'Corrosion-Prone Areas, Coastal Zones & Drinking Water',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=500&h=500&fit=crop&auto=format',
    badge: 'All-Stainless Steel',
  },
  'Monoblock Pumps – ACM (Up to 3 HP)': {
    name: 'Monoblock Pumps – ACM (Up to 3 HP)',
    tag: 'Centrifugal Monoblock Pumps',
    description: 'Versatile domestic centrifugal monoblock pumpsets available in Cast Iron (CI) and Aluminium Frame (AF) constructions for flow up to 61,200 LPH.',
    icon: '🏠',
    hpRange: '0.5 – 3.0 HP',
    pipeRange: '25 – 100 mm',
    application: 'Sump-to-Overhead Tank, Civil Water Supply, Bungalows',
    image: '/home_pump_category.png',
    badge: 'High Discharge Monoblock',
  },
  '1 Phase Monoblock Pumps – Virat (Up to 2 HP)': {
    name: '1 Phase Monoblock Pumps – Virat (Up to 2 HP)',
    tag: '1 Phase Domestic Monoblock',
    description: 'Trusted domestic monoblock pump series engineered for high suction lift, quiet running, and steady delivery for residential bungalows and sumps.',
    icon: '🔋',
    hpRange: '0.5 – 1.5 HP',
    pipeRange: '25 – 50 mm',
    application: 'Residential Sumps, Domestic Overhead Tanks & Gardens',
    image: '/home_pump_category.png',
    badge: 'Virat Series',
  },
  'Jet Pumps': {
    name: 'Jet Pumps',
    tag: 'Deep Well Jet Pumps',
    description: 'Single and double stage self-priming jet pumps coupled with ejector units for deep borewells and ground level suction applications.',
    icon: '🚰',
    hpRange: '0.5 – 2.0 HP',
    pipeRange: '32 × 25 × 25 mm',
    application: 'Deep Suction Wells, Open Wells & Low Water Tables',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&h=500&fit=crop&auto=format',
    badge: 'High Suction Jet',
  },
  'Borewell Mono Compressor': {
    name: 'Borewell Mono Compressor',
    tag: 'Air Injector Mono Compressor',
    description: 'Monoblock air compressors for water lifting from deep and sandy borewells where conventional submersible pumps cannot be installed.',
    icon: '💨',
    hpRange: '1.0 – 2.0 HP',
    pipeRange: '25 × 15 mm',
    application: 'Sandy Borewells, Muddy Water & Low Yield Wells',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop&auto=format',
    badge: 'Mono Compressor',
  },
  'Borewell Belt Compressor': {
    name: 'Borewell Belt Compressor',
    tag: 'Heavy Duty Belt Compressor',
    description: 'High-endurance belt-driven borewell compressor pumpsets built for deep borewells, muddy water extraction, and prolonged continuous operation.',
    icon: '🏭',
    hpRange: '1.0 – 2.0 HP',
    pipeRange: '25 × 15 mm',
    application: 'Deepest Sandy Borewells & Continuous Irrigation',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop&auto=format',
    badge: 'Belt Driven Compressor',
  },
};

export interface AgriSubcategoryInfo {
  name: string;
  tag: string;
  description: string;
  icon: string;
  hpRange: string;
  pipeRange: string;
  application: string;
  image: string;
  badge?: string;
}

export const agriSubcategoriesMeta: Record<string, AgriSubcategoryInfo> = {
  '3 Phase Monoblock Pumps – JUMBO': {
    name: '3 Phase Monoblock Pumps – JUMBO',
    tag: '3 Phase High Discharge Monoblock',
    description: 'Heavy-duty agricultural centrifugal monoblock pumpsets engineered for canals, rivers, open wells, and flood irrigation with flow rates up to 1,32,000 LPH.',
    icon: '🌾',
    hpRange: '3.0 – 20.0 HP',
    pipeRange: '50 – 100 mm',
    application: 'Flood Irrigation, River Lifting, Canals & Farm Water Supply',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
    badge: 'JUMBO Series',
  },
  '3 Phase Horizontal Openwell Submersible Pumpsets – RYKER (Copper Rotor)': {
    name: '3 Phase Horizontal Openwell Submersible Pumpsets – RYKER (Copper Rotor)',
    tag: 'Horizontal Openwell Copper Rotor',
    description: 'Premium horizontal openwell pumpsets with 100% pure copper rotors for superior electrical efficiency, maximum durability, and cool continuous running.',
    icon: '⚙️',
    hpRange: '3.0 – 10.0 HP',
    pipeRange: '50 – 75 mm',
    application: 'Agricultural Open Wells, Farm Ponds & Continuous Irrigation',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: '100% Copper Rotor',
  },
  '3 Phase Horizontal Openwell Submersible Pumpsets – RYKER (Aluminium Rotor)': {
    name: '3 Phase Horizontal Openwell Submersible Pumpsets – RYKER (Aluminium Rotor)',
    tag: 'Horizontal Openwell Aluminium Rotor',
    description: 'Economical high-torque horizontal openwell pumpsets with precision dynamically balanced aluminium rotors for agricultural sumps and deep open wells.',
    icon: '🚀',
    hpRange: '3.0 – 20.0 HP',
    pipeRange: '50 – 75 mm',
    application: 'Open Wells, Farm Reservoirs & High-Lift Irrigation',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'Aluminium Rotor',
  },
  '3 Phase Horizontal Openwell Submersible Pumpsets – CSM (Aluminium Rotor)': {
    name: '3 Phase Horizontal Openwell Submersible Pumpsets – CSM (Aluminium Rotor)',
    tag: 'CSM Horizontal Openwell Aluminium',
    description: 'High-discharge cast iron horizontal openwell pumps with aluminium rotors designed for water lifting from rivers, open wells, and canals up to 1,32,000 LPH.',
    icon: '🌊',
    hpRange: '3.0 – 10.0 HP',
    pipeRange: '50 – 100 mm',
    application: 'Canal Lifting, Farm Sumps & Heavy Agriculture',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'High Discharge CSM',
  },
  '3 Phase Horizontal Openwell Submersible Pumpsets – CSM (Copper Rotor)': {
    name: '3 Phase Horizontal Openwell Submersible Pumpsets – CSM (Copper Rotor)',
    tag: 'CSM Horizontal Openwell Copper',
    description: 'Heavy continuous duty horizontal openwell pumps featuring electrolytic copper rotors, cast iron casings, and high delivery capacities up to 20 HP.',
    icon: '⚡',
    hpRange: '3.0 – 20.0 HP',
    pipeRange: '50 – 100 mm',
    application: 'Large-scale Agricultural Irrigation & River Basin Lifting',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: '100% Copper Rotor',
  },
  '3 Phase Horizontal Openwell Submersible Pumpsets – CSM-J (Jacket Type)': {
    name: '3 Phase Horizontal Openwell Submersible Pumpsets – CSM-J (Jacket Type)',
    tag: 'Dual Submersible & Surface Jacket Type',
    description: 'Special jacketed design enabling both submerged underwater operation and surface installation without overheating, up to 1,37,000 LPH flow rate.',
    icon: '🔄',
    hpRange: '5.0 – 7.5 HP',
    pipeRange: '100 × 100 mm',
    application: 'Dual Submersible & Surface Duty, River Banks & Ponds',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'Dual Submerged/Surface',
  },
  '3 Phase Vertical Openwell Submersible Pumpsets – RYKER (Aluminium Rotor)': {
    name: '3 Phase Vertical Openwell Submersible Pumpsets – RYKER (Aluminium Rotor)',
    tag: 'Vertical Openwell Aluminium Rotor',
    description: 'Space-saving vertical multistage openwell pumpsets engineered for narrow deep open wells, sumps, and high head water delivery up to 160 meters.',
    icon: '⬆️',
    hpRange: '3.0 – 20.0 HP',
    pipeRange: '65 mm',
    application: 'Deep Narrow Open Wells & High Head Agricultural Delivery',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
    badge: 'Vertical Multistage',
  },
  '3 Phase Vertical Openwell Submersible Pumpsets – RYKER (Copper Rotor)': {
    name: '3 Phase Vertical Openwell Submersible Pumpsets – RYKER (Copper Rotor)',
    tag: 'Vertical Openwell Copper Rotor',
    description: 'Heavy-duty vertical multistage openwell pumps with 100% copper rotors delivering unyielding reliability for continuous farm irrigation.',
    icon: '⚙️',
    hpRange: '3.0 – 7.5 HP',
    pipeRange: '65 mm',
    application: 'Continuous Deep Well Pumping & Commercial Farming',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
    badge: '100% Copper Rotor',
  },
  '3 Phase Vertical Openwell Submersible Pumpsets – CV': {
    name: '3 Phase Vertical Openwell Submersible Pumpsets – CV',
    tag: 'CV Heavy Vertical Openwell',
    description: 'Time-tested heavy cast iron vertical openwell submersible pumpsets handling high heads and high volumes up to 30 HP and 100mm discharge.',
    icon: '🏛️',
    hpRange: '3.0 – 30.0 HP',
    pipeRange: '65 – 100 mm',
    application: 'Deep Irrigation Wells, Agricultural Estates & High Lift Pumping',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
    badge: 'Heavy CV Series',
  },
  '3 Phase Vertical Openwell Submersible Pumpsets – CVH (High Head Vertical)': {
    name: '3 Phase Vertical Openwell Submersible Pumpsets – CVH (High Head Vertical)',
    tag: 'CVH High Head Vertical Openwell',
    description: 'Special high-head vertical openwell pumpsets delivering up to 330 meters head for hill slope farming, stepped plantations, and elevated tanks.',
    icon: '🏔️',
    hpRange: '4.0 – 15.0 HP',
    pipeRange: '50 mm',
    application: 'Hill Agriculture, High Head Estates & Elevated Irrigation',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
    badge: 'High Head Specialist',
  },
  '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – W6 Models)': {
    name: '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – W6 Models)',
    tag: '4" Deep Borewell W6 Tube Type',
    description: 'Precision-engineered 4-inch water-cooled submersible pumpsets (W6 motor type) for deep agricultural borewells up to 216 meters head.',
    icon: '🚀',
    hpRange: '3.0 HP',
    pipeRange: '32 – 65 mm',
    application: '4" Agricultural Borewells, Sprinkler & Drip Systems',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'W6 Tube Type',
  },
  '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – S2 Models)': {
    name: '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – S2 Models)',
    tag: '4" Deep Borewell S2 Tube Type',
    description: 'High-performance 4-inch S2 motor series submersible pumpsets engineered for deeper water levels, steady discharge, and high hydraulic thrust.',
    icon: '💧',
    hpRange: '3.0 HP',
    pipeRange: '40 – 65 mm',
    application: 'Deep Agricultural Borewells & Continuous Farm Supply',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'S2 Tube Type',
  },
  '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – PR Models)': {
    name: '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Tube Type – PR Models)',
    tag: '4" Deep Borewell PR Tube Type',
    description: 'Extended horsepower 4-inch tube-type pumpsets from 3 HP to 7.5 HP with heads reaching up to 430 meters for demanding deep groundwater extraction.',
    icon: '⚡',
    hpRange: '3.0 – 7.5 HP',
    pipeRange: '32 – 50 mm',
    application: 'Ultra Deep Borewells, Commercial Agriculture & Drip Networks',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'Up to 7.5 HP PR',
  },
  '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Split Type)': {
    name: '4″ Submersible Pumpset (From 3 HP) – GENIE Series (Split Type)',
    tag: '4" Split Type Submersible',
    description: 'Modular split-construction 4-inch submersible pumpsets allowing independent pump and motor servicing, with heads up to 345 meters.',
    icon: '🔧',
    hpRange: '3.0 – 6.0 HP',
    pipeRange: '40 – 50 mm',
    application: 'Easy-Maintenance Deep Borewells & Irrigation Farms',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'Split Type Modular',
  },
  '4″ Submersible Pumpset – GENIE Series – SS IP & SS NRV': {
    name: '4″ Submersible Pumpset – GENIE Series – SS IP & SS NRV',
    tag: 'Stainless Steel Impeller & NRV',
    description: 'Specialized 4-inch borewell pumpsets equipped with Grade 304 Stainless Steel intermediate pieces and non-return valves for abrasive and sandy borewells.',
    icon: '🛡️',
    hpRange: '5.0 – 6.0 HP',
    pipeRange: '40 mm',
    application: 'Sandy Borewells, High Pressure Delivery & Mineral Rich Water',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
    badge: 'SS Impeller & NRV',
  },
  '4″ Fully Stainless Steel Submersible Pumpset (From 3 HP) – STEELIX Series': {
    name: '4″ Fully Stainless Steel Submersible Pumpset (From 3 HP) – STEELIX Series',
    tag: '4" All-Stainless Steel Submersible',
    description: 'All-stainless-steel 304 construction offering maximum resistance to corrosion, sand erosion, and delivering head ranges up to 442 meters.',
    icon: '✨',
    hpRange: '3.0 – 7.5 HP',
    pipeRange: '32 – 50 mm',
    application: 'Deep Agricultural Wells, Corrosive Ground Water & High Head',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&h=400&fit=crop&auto=format',
    badge: '100% Stainless Steel',
  },
  '5″/4″ Submersible Pumpset – NILE Series (Tube Type Models)': {
    name: '5″/4″ Submersible Pumpset – NILE Series (Tube Type Models)',
    tag: '5"/4" Deep Borewell Tube Type',
    description: 'High-volume 5"/4" submersible pumpsets featuring high-capacity hydraulic stages for enhanced flow rates and deep well performance.',
    icon: '💧',
    hpRange: '5.0 – 7.5 HP',
    pipeRange: '40 mm',
    application: '5" & 6" Borewells, Large Orchards & Farm Supply',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'NILE Series',
  },
  '5″/4″ Submersible Pumpset – NILE Series (Split Type Models)': {
    name: '5″/4″ Submersible Pumpset – NILE Series (Split Type Models)',
    tag: '5"/4" Deep Borewell Split Type',
    description: 'Robust split-type 5"/4" and 5" submersible pumpsets delivering flow rates up to 50,400 LPH and heads up to 284 meters for large-scale agriculture.',
    icon: '🌊',
    hpRange: '5.0 – 10.0 HP',
    pipeRange: '40 – 80 mm',
    application: '5" Borewells, Multi-Acre Irrigation & Heavy Discharge',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'High Flow Split Type',
  },
  '6″ Submersible Pumpset – DELMA NXT Series (Mixed Flow) – CR3+ / R3+ / DR3+ / PR3+ Models (Copper Rotor)': {
    name: '6″ Submersible Pumpset – DELMA NXT Series (Mixed Flow) – CR3+ / R3+ / DR3+ / PR3+ Models (Copper Rotor)',
    tag: '6" Mixed Flow High Discharge',
    description: 'Flagship 6-inch mixed-flow deep borewell pumpsets delivering massive water volumes up to 90,000 LPH for extensive agricultural fields, sugarcane, and paddy crops.',
    icon: '🌊',
    hpRange: '3.0 – 20.0 HP',
    pipeRange: '50 – 80 mm',
    application: 'Large Agricultural Land, Sugarcane & Paddy Flood Irrigation',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'Mixed Flow Flagship',
  },
  '6″ Submersible Pumpset – DELMA NXT Series (Radial Flow) – CR3+ / R3+ / DR3+ / PR3+ Models (Copper Rotor)': {
    name: '6″ Submersible Pumpset – DELMA NXT Series (Radial Flow) – CR3+ / R3+ / DR3+ / PR3+ Models (Copper Rotor)',
    tag: '6" Radial Flow High Head',
    description: 'Superior 6-inch radial-flow deep borewell pumpsets delivering high head delivery up to 442 meters across 79 precision models for deep aquifers.',
    icon: '🏔️',
    hpRange: '3.0 – 20.0 HP',
    pipeRange: '40 – 65 mm',
    application: 'Deep Aquifer Borewells, High Head Farming & Multi-Zone Irrigation',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'Radial Flow Specialist',
  },
  '6″/7″ Submersible Pumpset – CONGO Series – PR3+ Models (Copper Rotor)': {
    name: '6″/7″ Submersible Pumpset – CONGO Series – PR3+ Models (Copper Rotor)',
    tag: '6"/7" Ultra High Discharge Borewell',
    description: 'Extra heavy-duty 6"/7" CONGO series submersible pumpsets engineered for 100mm (4 inch) delivery pipe and massive discharge up to 90,000 LPH.',
    icon: '🐘',
    hpRange: '7.5 – 15.0 HP',
    pipeRange: '100 mm',
    application: 'Commercial Agro-Farms, Massive Discharge & River Basins',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&auto=format',
    badge: 'CONGO Heavy Duty',
  },
};

export interface AccessoriesSubcategoryInfo {
  name: string;
  tag: string;
  description: string;
  icon: string;
  hpRange?: string;
  relayRange?: string;
  pipeRange?: string;
  sizeRange?: string;
  typePhase?: string;
  valveType?: string;
  application: string;
  image: string;
  badge?: string;
}

export const accessoriesSubcategoriesMeta: Record<string, AccessoriesSubcategoryInfo> = {
  'NYRA Single Phase Panel Box (Upto 2HP)': {
    name: 'NYRA Single Phase Panel Box (Upto 2HP)',
    tag: 'Single Phase Submersible Control',
    description: 'CSCR motor control panels engineered for up to 2.0 HP single-phase borewell and openwell pumps with capacitor start/run & overload protection.',
    icon: '🎛️',
    hpRange: '1.0 – 2.0 HP',
    relayRange: '5A – 12A',
    typePhase: '1 Φ (Single Phase)',
    application: 'Single Phase Borewell & Openwell Pumps',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&auto=format',
    badge: 'Single Phase CSCR',
  },
  'NYRA Three Phase Panel Box': {
    name: 'NYRA Three Phase Panel Box',
    tag: 'Three Phase DOL & Star Delta Control',
    description: 'Heavy-duty 3-phase motor control panels (DV & AV series) engineered for agricultural and industrial pumps with DOL and Star-Delta starting.',
    icon: '⚡',
    hpRange: '5.0 – 10.0 HP',
    relayRange: '16A – 25A',
    typePhase: '3 Φ-DOL / 3 Φ-SD',
    application: 'Heavy 3-Phase Agricultural & Commercial Pumps',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&auto=format',
    badge: 'Three Phase Heavy Duty',
  },
  'Air Break Starters': {
    name: 'Air Break Starters',
    tag: 'Direct-on-Line & Star Delta Starters',
    description: 'Robust air break motor starters (AD, AD+ & ASF series) with precision thermal overload relays, under-voltage protection, and rugged contactors.',
    icon: '🛡️',
    hpRange: '3.0 – 20.0 HP',
    relayRange: '4A – 32A',
    typePhase: '3 Φ-DOL / 3 Φ-SD',
    application: 'Agricultural, Industrial & Commercial Motor Protection',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&auto=format',
    badge: 'Air Break Precision',
  },
  'Foot Valve': {
    name: 'Foot Valve',
    tag: 'ISI Screw Type Foot Valves',
    description: 'Genuine C.R.I. ISI certified screw type foot valves with precision cast iron bodies and high-flow non-return sealing for suction lines.',
    icon: '🚰',
    sizeRange: '50 – 100 mm',
    pipeRange: '50 – 100 mm',
    valveType: 'ISI Screw Type',
    application: 'Pump Suction Line Priming & Zero Backflow',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop&auto=format',
    badge: 'ISI Certified',
  },
  'Check Valve': {
    name: 'Check Valve',
    tag: 'ISI Square Type Check Valves',
    description: 'High-strength ISI certified square type non-return check valves ensuring zero backflow and water hammer protection in delivery pipes.',
    icon: '🔄',
    sizeRange: '32 – 100 mm',
    pipeRange: '32 – 100 mm',
    valveType: 'ISI Square Type',
    application: 'Delivery Pipe Backflow Prevention & Water Hammer Suppression',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop&auto=format',
    badge: 'ISI Certified',
  },
};

