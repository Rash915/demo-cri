import agriCatalogueRaw from './data/agriCatalogue.json';
import { tinyCatalogueProducts } from './data/tinyCatalogue';
import { nextGenCatalogueProducts } from './data/nextGenCatalogue';

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
      '3 Phase Monoblock - JUMBO',
      '3 Phase Horizontal Openwell - RYKER',
      '3 Phase Horizontal Openwell - CSM',
      '3 Phase Vertical Openwell - RYKER',
      '3 Phase Vertical Openwell - CV',
      '4" Submersible - GENIE (Tube Type W6)',
      '4" Submersible - GENIE (Tube Type PR)',
      '4" Submersible - GENIE (Split Type)',
      '4" Stainless Steel Submersible - STEELIX',
      '5"/4" Submersible - NILE Series',
      '6" Submersible - DELMA NXT (Mixed Flow CR3+/R3+)',
      '6" Submersible - DELMA NXT (Mixed Flow DR3+/PR3+)',
      '6" Submersible - DELMA NXT (Radial Flow CR3+/R3+)',
      '6" Submersible - DELMA NXT (Radial Flow DR3+/PR3+)',
      '6" Submersible - DELMA NXT (Radial Flow High HP)',
    ],
    bgColor: '#EFF6FF',
  },
  {
    id: 'residential',
    name: 'Residential',
    icon: '🏠',
    image: '/home_pump_category.png',
    description: 'High-performance residential domestic pumps for homes, apartments, and villas. Whisper-quiet, rust-resistant, and built for steady high water pressure.',
    subcategories: ['Booster Pumps', 'Pressure Pumps', 'Mini Monoblock', 'Self-Priming Pumps', 'Submersible Borewell'],
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
    description: '100% genuine C.R.I. accessories including digital motor starters, heavy brass foot valves, submersible cables, pressure switches, and maintenance spares.',
    subcategories: ['Control Panels & Starters', 'Foot Valves & Check Valves', 'Submersible Cables', 'Pressure Switches & Gauges', 'Capacitors & Spares'],
    bgColor: '#FFF7ED',
  },
];

// Preserved products for Residential, Next Gen, and Accessories (All dummy Tiny records removed)
const otherProducts: Product[] = [
  // Residential Pumps
  {
    id: 'p002',
    name: 'CRI Monoblock House Booster Pump 1HP',
    category: 'residential',
    subcategory: 'Booster Pumps',
    price: 4800,
    originalPrice: 5500,
    rating: 4.5,
    reviews: 218,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=400&fit=crop&auto=format',
    specs: ['1 HP Motor', 'Cast Iron Body', '30 LPM Flow', '1200 W'],
    badge: '20% Off',
    inStock: true,
  },
  {
    id: 'p008',
    name: 'CRI Booster Pump 0.5 HP Automatic',
    category: 'residential',
    subcategory: 'Pressure Pumps',
    price: 3100,
    originalPrice: 3600,
    rating: 4.3,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop&auto=format',
    specs: ['0.5 HP', 'Automatic Pressure', '18 LPM', 'Compact Design'],
    inStock: true,
  },
  {
    id: 'p025',
    name: 'CRI Domestic Self-Priming Regenerative Pump 0.5HP',
    category: 'residential',
    subcategory: 'Self-Priming Pumps',
    price: 3450,
    originalPrice: 3990,
    rating: 4.6,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=400&h=400&fit=crop&auto=format',
    specs: ['0.5 HP Motor', 'Thermal Protector', 'Brass Impeller', '28 LPM Flow'],
    inStock: true,
  },
  {
    id: 'p026',
    name: 'CRI Automatic Home Pressure Booster System',
    category: 'residential',
    subcategory: 'Booster Pumps',
    price: 7900,
    originalPrice: 9200,
    rating: 4.8,
    reviews: 132,
    image: '/home_pump_category.png',
    specs: ['Constant Pressure', '24L Pressure Tank', 'Silent Running', 'Anti-Dry Run'],
    badge: 'Top Rated',
    inStock: true,
  },
  {
    id: 'p027',
    name: 'CRI Mini Domestic Monoblock 1HP',
    category: 'residential',
    subcategory: 'Mini Monoblock',
    price: 4200,
    rating: 4.5,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&auto=format',
    specs: ['1 HP 230V', 'High Suction', 'Copper Winding', 'BEE 5-Star'],
    inStock: true,
  },

  // All dummy Next Gen records removed (replaced by genuine verified nextGenCatalogue models)

  // Accessories
  {
    id: 'p005',
    name: 'CRI DOL Motor Starter 5HP Panel',
    category: 'accessories',
    subcategory: 'Control Panels & Starters',
    price: 1850,
    rating: 4.7,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&auto=format',
    specs: ['5 HP Rated', 'IP54 Rating', 'Overload Protection', '415V AC'],
    badge: 'Popular',
    inStock: true,
  },
  {
    id: 'p013',
    name: 'CRI Star Delta Starter Panel 15HP',
    category: 'accessories',
    subcategory: 'Control Panels & Starters',
    price: 6400,
    originalPrice: 7200,
    rating: 4.8,
    reviews: 84,
    image: '/motor_starter_category.png',
    specs: ['15 HP Capacity', 'Digital Ammeter', 'Phase Preventer', 'Heavy Duty Relays'],
    inStock: true,
  },
  {
    id: 'p018',
    name: 'CRI 3-Core Submersible Flat Cable (100m)',
    category: 'accessories',
    subcategory: 'Submersible Cables',
    price: 4800,
    originalPrice: 5400,
    rating: 4.8,
    reviews: 230,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&auto=format',
    specs: ['2.5 sq mm Wire', 'Pure Copper', 'Waterproof PVC', 'ISI Certified'],
    inStock: true,
  },
  {
    id: 'p020',
    name: 'CRI Heavy Brass Foot Valve 2"',
    category: 'accessories',
    subcategory: 'Foot Valves & Check Valves',
    price: 550,
    rating: 4.6,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=400&fit=crop&auto=format',
    specs: ['2 inch Thread', 'Heavy Brass Body', 'SS Strainer Mesh', 'Zero Leakage'],
    inStock: true,
  },
  {
    id: 'p036',
    name: 'CRI Digital Pressure Control Switch with Gauge',
    category: 'accessories',
    subcategory: 'Pressure Switches & Gauges',
    price: 1650,
    originalPrice: 1950,
    rating: 4.6,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=400&fit=crop&auto=format',
    specs: ['Digital Pressure Display', 'Adjustable Cut-in/Cut-out', 'Dry-Run Sensor', 'Universal 1" NPT'],
    inStock: true,
  },
  {
    id: 'p037',
    name: 'CRI Motor Heavy Duty Run Capacitor 50uF',
    category: 'accessories',
    subcategory: 'Capacitors & Spares',
    price: 320,
    rating: 4.7,
    reviews: 115,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=400&fit=crop&auto=format',
    specs: ['50 MFD / 440V AC', 'Flame Retardant Plastic Can', 'Long Working Life', 'Genuine C.R.I. Spare'],
    inStock: true,
  },
];

// All verified Agri, Tiny, and Next Gen products from official Rate Contract Price List (Tamil Nadu) + other category items
export const products: Product[] = [
  ...(agriCatalogueRaw as unknown as Product[]),
  ...tinyCatalogueProducts,
  ...nextGenCatalogueProducts,
  ...otherProducts,
];

// Featured products showcasing bestsellers from Agri, Tiny, Next Gen, and other categories
export const featuredProducts = products.filter(p =>
  ['cri-632635', 'p002', 'cri-627163', 'cri-636388', 'cri-641525', 'cri-630093', 'cri-634651', 'cri-671403', 'cri-675781', 'p005'].includes(p.id)
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

