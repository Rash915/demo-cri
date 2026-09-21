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
    id: 'agri-fittings',
    name: 'Agri Fittings',
    icon: '🔩',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=600&fit=crop&auto=format',
    description: 'Premium agricultural fittings designed for long-lasting connections in irrigation and water distribution systems.',
    subcategories: ['Ball Valves', 'Gate Valves', 'Check Valves', 'Couplings', 'Elbows', 'Tees', 'Reducers'],
    bgColor: '#EFF6FF',
  },
  {
    id: 'agri-machinery',
    name: 'Agri Machinery',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&h=600&fit=crop&auto=format',
    description: 'State-of-the-art agricultural machinery built for precision farming and maximum crop yield.',
    subcategories: ['Sprayers', 'Tillers', 'Seeders', 'Harvesters', 'Tractors Accessories'],
    bgColor: '#F0FDF4',
  },
  {
    id: 'irrigation',
    name: 'Irrigations',
    icon: '💧',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=1200&h=600&fit=crop&auto=format',
    description: 'Complete irrigation solutions for efficient water management across all types of farmland.',
    subcategories: ['Drip Irrigation', 'Sprinkler Systems', 'Micro Irrigation', 'Fertigation Units', 'Rain Guns'],
    bgColor: '#E0F2FE',
  },
  {
    id: 'agri-pipes',
    name: 'Agri Pipes',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=1200&h=600&fit=crop&auto=format',
    description: 'High-grade agricultural pipes engineered for durability in all soil and climate conditions.',
    subcategories: ['HDPE Pipes', 'PVC Pipes', 'GI Pipes', 'Polypipe', 'Lay Flat Hose'],
    bgColor: '#FFF7ED',
  },
  {
    id: 'agri-pumps',
    name: 'Agri Pumps',
    icon: '🚿',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1200&h=600&fit=crop&auto=format',
    description: 'Powerful agricultural pumps delivering reliable water supply for every farming need.',
    subcategories: ['Submersible Pumps', 'Centrifugal Pumps', 'Self-Priming Pumps', 'Turbine Pumps', 'Monoblock Pumps'],
    bgColor: '#F0F9FF',
  },
  {
    id: 'domestic-column-pipes',
    name: 'Domestic Column Pipes',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=600&fit=crop&auto=format',
    description: 'Reliable column pipes for domestic water supply systems, ensuring consistent water flow.',
    subcategories: ['PVC Column Pipes', 'MS Column Pipes', 'GI Column Pipes', 'Riser Pipes'],
    bgColor: '#FFF1F2',
  },
  {
    id: 'electricals',
    name: 'Electricals',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format',
    description: 'Complete electrical solutions for pump systems including cables, panels, and control equipment.',
    subcategories: ['Control Panels', 'Cables', 'Switches', 'Circuit Breakers', 'Wiring Accessories'],
    bgColor: '#FEFCE8',
  },
  {
    id: 'home-pumps',
    name: 'Home Pumps',
    icon: '🏡',
    image: '/home_pump_category.png',
    description: 'Efficient home water pumps for domestic use, providing consistent pressure and reliable performance.',
    subcategories: ['Booster Pumps', 'Pressure Pumps', 'Jet Pumps', 'Water Tank Pumps', 'Shower Pumps'],
    bgColor: '#F0FDF4',
  },
  {
    id: 'industrial',
    name: 'Industrial Equipments & Accessories',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop&auto=format',
    description: 'Heavy-duty industrial pumps and accessories built to handle demanding commercial and industrial applications.',
    subcategories: ['Chemical Pumps', 'Slurry Pumps', 'Process Pumps', 'Gear Pumps', 'Diaphragm Pumps'],
    bgColor: '#F8FAFC',
  },
  {
    id: 'motor-pump-accessories',
    name: 'Motor Pump Accessories',
    icon: '🔌',
    image: '/motor_pump_accessories_category.png',
    description: 'Genuine accessories for motor pumps ensuring optimal performance and extended lifespan.',
    subcategories: ['Capacitors', 'Foot Valves', 'Pressure Gauges', 'Strainers', 'Couplings'],
    bgColor: '#FFF7ED',
  },
  {
    id: 'motor-starters',
    name: 'Motor Starters',
    icon: '🔋',
    image: '/motor_starter_category.png',
    description: 'Advanced motor starters providing smooth start-up and protection for all pump motors.',
    subcategories: ['DOL Starters', 'Star Delta Starters', 'Auto Transformers', 'Soft Starters', 'VFD Drives'],
    bgColor: '#ECFDF5',
  },
  {
    id: 'paints',
    name: 'Paints',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=600&fit=crop&auto=format',
    description: 'High-quality protective and decorative paints for all surfaces, formulated for Indian climate conditions.',
    subcategories: ['Exterior Paints', 'Interior Paints', 'Enamel Paints', 'Primer', 'Waterproofing Coatings'],
    bgColor: '#FFF1F2',
  },
  {
    id: 'plumbing',
    name: 'Plumbing & Construction',
    icon: '🔨',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&auto=format',
    description: 'Complete plumbing and construction solutions for residential and commercial projects.',
    subcategories: ['CPVC Pipes', 'uPVC Fittings', 'Bathroom Fittings', 'Tank Fittings', 'Sealants'],
    bgColor: '#F0F7FF',
  },
  {
    id: 'lightings',
    name: 'Lightings',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=1200&h=600&fit=crop&auto=format',
    description: 'Energy-efficient LED lighting solutions for farms, homes, and industrial applications.',
    subcategories: ['LED Bulbs', 'Solar Lights', 'Flood Lights', 'Street Lights', 'Panel Lights'],
    bgColor: '#FEFCE8',
  },
  {
    id: 'adhesives',
    name: 'Adhesives',
    icon: '🧴',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&h=600&fit=crop&auto=format',
    description: 'Industrial-grade adhesives and sealants for pipe joints, construction, and agricultural applications.',
    subcategories: ['PVC Solvent Cement', 'CPVC Solvent Cement', 'Epoxy Adhesives', 'Thread Sealants', 'Instant Adhesives'],
    bgColor: '#F8FAFC',
  },
];

export const products: Product[] = [
  // Agri Pumps
  {
    id: 'p001',
    name: 'CRI SPCK 6-Stage Submersible Pump',
    category: 'agri-pumps',
    subcategory: 'Submersible Pumps',
    price: 12500,
    originalPrice: 15000,
    rating: 4.7,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=400&h=400&fit=crop&auto=format',
    specs: ['2 HP Motor', '6 Stage', '50 m Head', 'SS Body'],
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'p004',
    name: 'CRI Centrifugal Agricultural Pump',
    category: 'agri-pumps',
    subcategory: 'Centrifugal Pumps',
    price: 8900,
    originalPrice: 10200,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&auto=format',
    specs: ['3 HP Motor', '2500 LPH', '35 m Head', 'IE3 Efficiency'],
    inStock: true,
  },
  {
    id: 'p009',
    name: 'CRI Solar Surface Pump 1 HP',
    category: 'agri-pumps',
    subcategory: 'Submersible Pumps',
    price: 18500,
    rating: 4.9,
    reviews: 44,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=400&h=400&fit=crop&auto=format',
    specs: ['Solar Powered', '1 HP DC Motor', '45 m Head', 'MPPT Controller'],
    badge: 'Eco Choice',
    inStock: true,
  },

  // Home Pumps
  {
    id: 'p002',
    name: 'CRI Monoblock House Booster Pump 1HP',
    category: 'home-pumps',
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
    category: 'home-pumps',
    subcategory: 'Pressure Pumps',
    price: 3100,
    originalPrice: 3600,
    rating: 4.3,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop&auto=format',
    specs: ['0.5 HP', 'Automatic Pressure', '18 LPM', 'Compact Design'],
    inStock: true,
  },

  // Irrigations
  {
    id: 'p003',
    name: 'CRI Drip Irrigation Complete Kit',
    category: 'irrigation',
    subcategory: 'Drip Irrigation',
    price: 3200,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&h=400&fit=crop&auto=format',
    specs: ['1 Acre Coverage', 'HDPE Lateral', '16mm Mainline', 'Timer Included'],
    badge: 'New',
    inStock: true,
  },
  {
    id: 'p007',
    name: 'CRI Rain Gun Sprinkler System',
    category: 'irrigation',
    subcategory: 'Rain Guns',
    price: 5600,
    rating: 4.7,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&h=400&fit=crop&auto=format',
    specs: ['36m Throw Radius', '360° Rotation', 'Brass Nozzle', '60 LPM'],
    badge: 'Top Rated',
    inStock: true,
  },

  // Motor Starters
  {
    id: 'p005',
    name: 'CRI DOL Motor Starter 5HP Panel',
    category: 'motor-starters',
    subcategory: 'DOL Starters',
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
    category: 'motor-starters',
    subcategory: 'Star Delta Starters',
    price: 6400,
    originalPrice: 7200,
    rating: 4.8,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&auto=format',
    specs: ['15 HP Capacity', 'Digital Ammeter', 'Phase Preventer', 'Heavy Duty Relays'],
    inStock: true,
  },

  // Agri Pipes
  {
    id: 'p006',
    name: 'CRI HDPE Agri Pipe 63mm (100m)',
    category: 'agri-pipes',
    subcategory: 'HDPE Pipes',
    price: 2400,
    originalPrice: 2800,
    rating: 4.5,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=400&h=400&fit=crop&auto=format',
    specs: ['63mm Diameter', '6 kg/cm² Pressure', '100m Coil', 'ISI Marked'],
    inStock: true,
  },
  {
    id: 'p014',
    name: 'CRI Heavy Rigid PVC Pipe 75mm',
    category: 'agri-pipes',
    subcategory: 'PVC Pipes',
    price: 850,
    rating: 4.4,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=400&fit=crop&auto=format',
    specs: ['75mm Outer Dia', '6 Meter Length', 'UV Stabilized', 'Pressure Rated'],
    inStock: true,
  },

  // Agri Fittings
  {
    id: 'p010',
    name: 'CRI PVC Ball Valve 1 inch',
    category: 'agri-fittings',
    subcategory: 'Ball Valves',
    price: 180,
    rating: 4.4,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=400&fit=crop&auto=format',
    specs: ['1 inch Size', 'PVC Body', '10 kg/cm²', 'Full Bore'],
    inStock: true,
  },
  {
    id: 'p015',
    name: 'CRI Heavy Brass Check Valve 2"',
    category: 'agri-fittings',
    subcategory: 'Check Valves',
    price: 650,
    rating: 4.7,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=400&fit=crop&auto=format',
    specs: ['2 inch Threads', 'Forged Brass', 'Non-Return System', 'High Pressure'],
    inStock: true,
  },

  // Agri Machinery
  {
    id: 'p016',
    name: 'CRI High-Pressure Power Sprayer 16L',
    category: 'agri-machinery',
    subcategory: 'Sprayers',
    price: 4500,
    originalPrice: 5200,
    rating: 4.6,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=400&fit=crop&auto=format',
    specs: ['16 Litre Tank', '12V Battery', 'Dual Nozzle', 'Comfort Strap'],
    badge: 'Hot Seller',
    inStock: true,
  },

  // Domestic Column Pipes
  {
    id: 'p017',
    name: 'CRI uPVC Column Pipe 33mm (3m)',
    category: 'domestic-column-pipes',
    subcategory: 'PVC Column Pipes',
    price: 680,
    rating: 4.5,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=400&fit=crop&auto=format',
    specs: ['33mm Outer Dia', '3 Meter Length', 'Square Threads', 'Thick Wall'],
    inStock: true,
  },

  // Electricals
  {
    id: 'p018',
    name: 'CRI 3-Core Submersible Cable (100m)',
    category: 'electricals',
    subcategory: 'Cables',
    price: 4800,
    originalPrice: 5400,
    rating: 4.8,
    reviews: 230,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&auto=format',
    specs: ['2.5 sq mm Wire', 'Pure Copper', 'Waterproof PVC', 'ISI Certified'],
    inStock: true,
  },

  // Industrial Equipments & Accessories
  {
    id: 'p019',
    name: 'CRI Heavy Industrial Centrifugal Pump 10HP',
    category: 'industrial',
    subcategory: 'Process Pumps',
    price: 42000,
    rating: 4.9,
    reviews: 31,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&auto=format',
    specs: ['10 HP Industrial Motor', 'SS316 Impeller', '70m Head', 'Continuous Duty'],
    inStock: true,
  },

  // Motor Pump Accessories
  {
    id: 'p020',
    name: 'CRI Heavy Brass Foot Valve 2"',
    category: 'motor-pump-accessories',
    subcategory: 'Foot Valves',
    price: 550,
    rating: 4.6,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&auto=format',
    specs: ['2 inch Thread', 'Heavy Brass Body', 'SS Strainer Mesh', 'Zero Leakage'],
    inStock: true,
  },

  // Paints
  {
    id: 'p021',
    name: 'CRI Anti-Rust Protective Paint 4L',
    category: 'paints',
    subcategory: 'Primer',
    price: 1100,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop&auto=format',
    specs: ['4 Litre Pack', 'Quick Drying', 'Anti-Corrosion', 'For Metal & Pumps'],
    inStock: true,
  },

  // Plumbing & Construction
  {
    id: 'p022',
    name: 'CRI CPVC Pipe 1 inch Heavy (3m)',
    category: 'plumbing',
    subcategory: 'CPVC Pipes',
    price: 340,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=400&fit=crop&auto=format',
    specs: ['SDR 11 Class', 'Hot & Cold Water', 'Lead Free', '3 Meter Length'],
    inStock: true,
  },

  // Lightings
  {
    id: 'p011',
    name: 'CRI LED Flood Light 50W Outdoor',
    category: 'lightings',
    subcategory: 'Flood Lights',
    price: 1200,
    originalPrice: 1500,
    rating: 4.6,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=400&h=400&fit=crop&auto=format',
    specs: ['50W Power', '5000 Lumens', 'IP65 Rating', '5 Year Warranty'],
    inStock: true,
  },

  // Adhesives
  {
    id: 'p012',
    name: 'CRI PVC Solvent Cement 1 Litre',
    category: 'adhesives',
    subcategory: 'PVC Solvent Cement',
    price: 320,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop&auto=format',
    specs: ['1 Litre Pack', 'Fast Setting', 'For PVC Pipes', 'ISI Certified'],
    inStock: true,
  },
];

export const featuredProducts = products.filter(p =>
  ['p001', 'p002', 'p003', 'p004', 'p007', 'p009'].includes(p.id)
);

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    location: 'Coimbatore, Tamil Nadu',
    role: 'Farmer, 12 acres',
    text: 'CRI submersible pumps have transformed my farming. Running non-stop for 3 years without a single breakdown. The drip irrigation kit saved 40% of my water usage.',
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
    text: "I've been installing CRI products for 15 years. The quality is consistent and clients never complain. The motor starters are particularly impressive for longevity.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
  },
  {
    id: 't4',
    name: 'Anitha Subramaniam',
    location: 'Salem, Tamil Nadu',
    role: 'Dairy Farm Owner',
    text: 'The solar pump is outstanding. No electricity bills for our water supply. CRI technical team was very supportive during installation. Great investment!',
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
    title: 'Monsoon Special',
    subtitle: 'Up to 25% off on all Agri Pumps',
    code: 'MONSOON25',
    bg: 'from-blue-600 to-sky-400',
    expires: 'Valid till 30 Sep 2026',
  },
  {
    id: 'o2',
    title: 'Home Essentials',
    subtitle: 'Buy any Home Pump, get Free Installation Kit',
    code: 'HOMEKIT',
    bg: 'from-teal-600 to-emerald-400',
    expires: 'Limited Period Offer',
  },
  {
    id: 'o3',
    title: 'Bulk Order Discount',
    subtitle: '15% off on orders above ₹50,000',
    code: 'BULK15',
    bg: 'from-indigo-600 to-blue-400',
    expires: 'Valid till 31 Oct 2026',
  },
];
