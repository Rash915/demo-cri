import agriCatalogueRaw from './data/agriCatalogue.json';
import { tinyCatalogueProducts } from './data/tinyCatalogue';

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
    description: 'Next-Gen intelligent smart pumping solutions featuring IoT smartphone monitoring, BLDC motors, variable frequency inverters, and automatic sensor control.',
    subcategories: ['Smart IoT Pumps', 'BLDC Inverter Pumps', 'Smart Digital Boosters', 'Solar Variable Inverters', 'Smart Telemetry Units'],
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

  // Next Gen Pumps
  {
    id: 'p032',
    name: 'CRI NextGen Smart BLDC Booster Pump 1HP',
    category: 'next-gen',
    subcategory: 'BLDC Inverter Pumps',
    price: 14500,
    originalPrice: 17500,
    rating: 4.9,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=400&fit=crop&auto=format',
    specs: ['BLDC Permanent Magnet Motor', 'Constant Water Pressure', 'Mobile App Enabled', 'Super Silent 45dB'],
    badge: 'NextGen Tech',
    inStock: true,
  },
  {
    id: 'p033',
    name: 'CRI NextGen IoT Smart Submersible Controller Kit',
    category: 'next-gen',
    subcategory: 'Smart IoT Pumps',
    price: 21900,
    originalPrice: 24900,
    rating: 4.9,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=400&h=400&fit=crop&auto=format',
    specs: ['WiFi & 4G IoT Telemetry', 'Remote Smartphone Control', 'Dry Run & Voltage Protection', 'Live Water Flow Data'],
    badge: 'Smart Pick',
    inStock: true,
  },
  {
    id: 'p034',
    name: 'CRI NextGen Variable Speed Inverter Pump 1.5HP',
    category: 'next-gen',
    subcategory: 'BLDC Inverter Pumps',
    price: 18200,
    rating: 4.8,
    reviews: 39,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&auto=format',
    specs: ['Intelligent VFD Inverter', 'Saves Up to 60% Energy', 'Soft Start/Stop', 'Integrated LCD Touchscreen'],
    inStock: true,
  },
  {
    id: 'p035',
    name: 'CRI NextGen Auto Smart Digital Booster',
    category: 'next-gen',
    subcategory: 'Smart Digital Boosters',
    price: 11800,
    rating: 4.7,
    reviews: 43,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&auto=format',
    specs: ['Intelligent Flow Sensor', 'Auto Fault Diagnosis', 'Leakage Detection', 'Compact Wall Mount'],
    inStock: true,
  },

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

// All verified Agri and Tiny products from official Rate Contract Price List (Tamil Nadu) + other category items
export const products: Product[] = [
  ...(agriCatalogueRaw as unknown as Product[]),
  ...tinyCatalogueProducts,
  ...otherProducts,
];

// Featured products showcasing bestsellers from Agri, Tiny, and other categories
export const featuredProducts = products.filter(p =>
  ['cri-632635', 'p002', 'cri-627163', 'cri-636388', 'cri-641525', 'p032', 'cri-671403', 'cri-675781', 'p005'].includes(p.id)
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
