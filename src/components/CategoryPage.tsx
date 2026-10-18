import { useState, useEffect, useMemo } from 'react';
import { categories, products, Product, Category, tinySubcategoriesMeta, nextGenSubcategoriesMeta, residentialSubcategoriesMeta, agriSubcategoriesMeta, accessoriesSubcategoriesMeta } from '../data';
import ProductCard from './ProductCard';
import { SearchIcon, CartIcon } from './icons';
import TinyCatalogOverview from './TinyCatalogOverview';
import NextGenCatalogOverview from './NextGenCatalogOverview';
import ResidentialCatalogOverview from './ResidentialCatalogOverview';
import AgriCatalogOverview from './AgriCatalogOverview';
import AccessoriesCatalogOverview from './AccessoriesCatalogOverview';
import { hebronLogo } from '../assets/logoData';

interface CategoryPageProps {
  categoryId: string;
  initialSubcategory?: string;
  wishlist: string[];
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  onProductClick: (p: Product) => void;
  onBackToHome?: () => void;
  onCategoryChange?: (categoryId: string, subcategory?: string) => void;
  searchQuery?: string;
}

const sortOptions = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Top Rated',
  'Model Name (A-Z)',
];

const NEXT_GEN_GROUPS = [
  { id: 'All', name: 'All Groups', shortName: 'All Next Gen', icon: '🚀' },
  { id: 'JTS / CTSS Series', name: 'JTS / CTSS Series', shortName: 'JTS / CTSS', icon: '🛡️' },
  { id: 'Booster Pumps', name: 'Booster Pumps & Systems', shortName: 'Booster Pumps', icon: '⚡' },
  { id: 'Submersible and Surface Sewage / Drainage Pumps', name: 'Sewage & Drainage Pumps', shortName: 'Sewage & Drainage', icon: '🌊' },
] as const;

const nextGenSubcategoryShortLabels: Record<string, string> = {
  'SS Monoblock Pumpsets Special Application – JTS': 'JTS Models',
  'SS Monoblock Pumpsets Special Application – CTSS': 'CTSS Models',
  'Mini Booster Pumps – TINY FORCE': 'TINY FORCE',
  'Booster Pumps – BRISK': 'BRISK',
  'Booster Pumps – MHBS': 'MHBS',
  'Booster Pumps – I PREZ': 'I PREZ',
  'Booster Pumps – I PREZ (Encloser Type)': 'I PREZ (Encloser)',
  'Booster Pumps – MHS (Multistage Horizontal Pumps)': 'MHS',
  'Automatic Pump Controller': 'Pump Controller',
  'Mini Circulatory Pumps': 'Mini Circulatory',
  'Float Switch': 'Float Switch',
  'Surface Sewage / Drainage Monoblock Pumpsets': 'Surface Sewage',
  'Mini Plastic Drainage Submersible Pumpsets': 'Mini Plastic Drainage',
  'Mini SS Sewage & Drainage Pumpsets': 'Mini SS Sewage',
  'Submersible Drainage Pumpsets': 'Drainage',
  'Submersible Drainage / Sewage Pumpsets': 'Drainage / Sewage',
  'Submersible Sewage Pumpsets': 'Sewage',
  'Submersible Sewage Cutter Pumpsets': 'Sewage Cutter',
  'Submersible & Central Delivery Sewage/Drainage Pumpsets': 'Central Delivery SS',
  'Submersible Heavy Sewage Pumps': 'Heavy Sewage',
};

export default function CategoryPage({
  categoryId,
  initialSubcategory = 'All',
  wishlist,
  onAddToCart,
  onToggleWishlist,
  onProductClick,
  onBackToHome,
  onCategoryChange,
  searchQuery,
}: CategoryPageProps) {
  // Normalize incoming categoryId
  const getNormalizedId = (id: string) => {
    if (!id || id === 'all') return 'all';
    if (id === 'agri-pumps') return 'agri';
    if (id === 'home-pumps') return 'residential';
    return id;
  };

  // Tier 1: Selected main category state ('all' | 'agri' | 'residential' | 'tiny' | 'next-gen' | 'accessories')
  const [activeCategory, setActiveCategory] = useState<string>(() => getNormalizedId(categoryId));

  // Tier 2: Selected subcategory state ('All' | string)
  const [selectedSubcat, setSelectedSubcat] = useState<string>(initialSubcategory || 'All');

  // Next Gen Group filter state ('All' | 'JTS / CTSS Series' | 'Booster Pumps' | 'Submersible and Surface Sewage / Drainage Pumps')
  const [nextGenGroup, setNextGenGroup] = useState<string>(() => {
    if (initialSubcategory && initialSubcategory !== 'All' && nextGenSubcategoriesMeta[initialSubcategory]) {
      return nextGenSubcategoriesMeta[initialSubcategory].group;
    }
    return 'All';
  });

  // Secondary filters & controls
  const [modelSearch, setModelSearch] = useState<string>('');
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [selectedHpRange, setSelectedHpRange] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 36;

  // Order & Service Inquiry Form State
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

  // Sync with prop changes from external router/header
  useEffect(() => {
    const nextCat = getNormalizedId(categoryId);
    setActiveCategory(nextCat);
    setViewMode('grid');
  }, [categoryId]);

  useEffect(() => {
    if (initialSubcategory) {
      setSelectedSubcat(initialSubcategory);
      if (initialSubcategory !== 'All' && nextGenSubcategoriesMeta[initialSubcategory]) {
        setNextGenGroup(nextGenSubcategoriesMeta[initialSubcategory].group);
      }
    }
  }, [initialSubcategory]);

  // Reset pagination when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, selectedSubcat, nextGenGroup, modelSearch, selectedPhase, selectedHpRange, sortBy]);

  // Category objects list with 'All Products' prepended for Tier 1
  const tier1Categories = useMemo(() => {
    const allTab: { id: string; name: string; icon: string; count: number } = {
      id: 'all',
      name: 'All Products',
      icon: '💧',
      count: products.length,
    };

    const regularTabs = categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      icon: cat.icon,
      count: products.filter(p => p.category === cat.id).length,
    }));

    return [allTab, ...regularTabs];
  }, []);

  // Active Category Object (if not 'all')
  const currentCategoryObj = useMemo(() => {
    return categories.find(c => c.id === activeCategory);
  }, [activeCategory]);

  // Subcategories available for Tier 2 based on active category
  const tier2Subcategories = useMemo(() => {
    if (activeCategory === 'all') {
      // Collect unique subcategories across all products
      const subcatSet = new Set<string>();
      products.forEach(p => {
        if (p.subcategory) subcatSet.add(p.subcategory);
      });
      return Array.from(subcatSet);
    }
    return currentCategoryObj?.subcategories || [];
  }, [activeCategory, currentCategoryObj]);

  // Handler for Tier 1 Category Selection
  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    setSelectedSubcat('All'); // Reset subcategory when switching main category
    setNextGenGroup('All');
    setViewMode('grid');
    if (onCategoryChange) {
      onCategoryChange(catId, 'All');
    }
  };

  // Handler for Tier 2 Subcategory Selection
  const handleSelectSubcategory = (subcat: string) => {
    setSelectedSubcat(subcat);
    if (activeCategory === 'next-gen' && subcat !== 'All' && nextGenSubcategoriesMeta[subcat]) {
      setNextGenGroup(nextGenSubcategoriesMeta[subcat].group);
    }
    setViewMode('grid');
    if (onCategoryChange) {
      onCategoryChange(activeCategory, subcat);
    }
  };

  // Handler for Next Gen Major Group Tab Selection
  const handleSelectNextGenGroup = (grp: string) => {
    setNextGenGroup(grp);
    setSelectedSubcat('All');
    if (onCategoryChange) {
      onCategoryChange('next-gen', 'All');
    }
  };

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

  // Base products pool for active category (or search query)
  const categoryProducts = useMemo(() => {
    if (searchQuery) {
      return products.filter(
        p =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.productCode && p.productCode.includes(searchQuery)) ||
          p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    if (activeCategory === 'all') {
      return products;
    }
    return products.filter(p => p.category === activeCategory);
  }, [searchQuery, activeCategory]);

  // Subcategory model counts for Tier 2 badges
  const subcatCounts = useMemo(() => {
    const map: Record<string, number> = { All: categoryProducts.length };
    categoryProducts.forEach(p => {
      map[p.subcategory] = (map[p.subcategory] || 0) + 1;
    });
    return map;
  }, [categoryProducts]);

  // Group model counts for Next Gen tabs
  const nextGenGroupCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: categoryProducts.length,
      'JTS / CTSS Series': 0,
      'Booster Pumps': 0,
      'Submersible and Surface Sewage / Drainage Pumps': 0,
    };
    categoryProducts.forEach(p => {
      if (p.group && counts[p.group] !== undefined) {
        counts[p.group]++;
      }
    });
    return counts;
  }, [categoryProducts]);

  // Subcategories displayed in Next Gen navigation bar
  const displayedNextGenSubcategories = useMemo(() => {
    if (nextGenGroup === 'All') {
      return currentCategoryObj?.subcategories || [];
    }
    return (currentCategoryObj?.subcategories || []).filter(sub => {
      const meta = nextGenSubcategoriesMeta[sub];
      return meta && meta.group === nextGenGroup;
    });
  }, [nextGenGroup, currentCategoryObj]);

  // Filtered products list
  const filtered = useMemo(() => {
    let list = categoryProducts;

    if (activeCategory === 'next-gen') {
      if (selectedSubcat !== 'All' && selectedSubcat !== 'All-Models') {
        list = list.filter(p => p.subcategory === selectedSubcat);
      } else if (nextGenGroup !== 'All') {
        list = list.filter(p => p.group === nextGenGroup);
      }
    } else {
      list =
        selectedSubcat === 'All' || selectedSubcat === 'All-Models'
          ? categoryProducts
          : categoryProducts.filter(p => p.subcategory === selectedSubcat);
    }

    // Text search filter
    if (modelSearch.trim()) {
      const q = modelSearch.toLowerCase().trim();
      list = list.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          (p.productCode && p.productCode.toLowerCase().includes(q)) ||
          (p.model && p.model.toLowerCase().includes(q)) ||
          (p.hp && p.hp.toLowerCase().includes(q)) ||
          (p.pipeSize && p.pipeSize.toLowerCase().includes(q)) ||
          (p.stageTank && p.stageTank.toLowerCase().includes(q)) ||
          (p.maxPressure && p.maxPressure.toLowerCase().includes(q)) ||
          (p.flowRate && p.flowRate.toLowerCase().includes(q)) ||
          (p.solidHandling && p.solidHandling.toLowerCase().includes(q)) ||
          (p.powerWatts && String(p.powerWatts).toLowerCase().includes(q)) ||
          (p.inletOutletSize && p.inletOutletSize.toLowerCase().includes(q)) ||
          (p.cableLength && p.cableLength.toLowerCase().includes(q)) ||
          p.specs.some(s => s.toLowerCase().includes(q))
      );
    }

    // Phase filter
    if (selectedPhase !== 'All') {
      list = list.filter(p => {
        if (!p.phase) return false;
        if (selectedPhase === '3-Phase') return p.phase.includes('3') || p.phase.toLowerCase().includes('three');
        if (selectedPhase === '1-Phase') return p.phase.includes('1') || p.phase.toLowerCase().includes('single');
        return true;
      });
    }

    // HP filter
    if (selectedHpRange !== 'All') {
      list = list.filter(p => {
        if (!p.hp) return false;
        if (activeCategory === 'tiny' || activeCategory === 'next-gen') {
          return p.hp.toLowerCase().includes(selectedHpRange.toLowerCase().replace(' hp', ''));
        }
        const hpNum = parseFloat(p.hp.replace(/[^0-9.]/g, ''));
        if (isNaN(hpNum)) return false;
        if (selectedHpRange === '<= 2 HP') return hpNum <= 2;
        if (selectedHpRange === '3 - 5 HP') return hpNum >= 3 && hpNum <= 5;
        if (selectedHpRange === '7.5 - 10 HP') return hpNum >= 7.5 && hpNum <= 10;
        if (selectedHpRange === '>= 12.5 HP') return hpNum >= 12.5;
        return true;
      });
    }

    return list;
  }, [activeCategory, selectedSubcat, nextGenGroup, categoryProducts, modelSearch, selectedPhase, selectedHpRange]);

  const hpOptions = useMemo(() => {
    if (activeCategory === 'tiny') {
      return ['All', '0.5 HP', '1 HP', '1.5 HP', '2 HP', '7 HP'];
    }
    if (activeCategory === 'next-gen') {
      return ['All', '0.5 HP', '1 HP', '1.5 HP', '2 HP', '3 HP', '5 HP', '7.5 HP', '10 HP'];
    }
    return ['All', '<= 2 HP', '3 - 5 HP', '7.5 - 10 HP', '>= 12.5 HP'];
  }, [activeCategory]);

  // Sorted products
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      if (sortBy === 'Top Rated') return b.rating - a.rating;
      if (sortBy === 'Model Name (A-Z)') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [filtered, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sorted.length / pageSize);
  const paginated = useMemo(() => {
    if (sorted.length <= pageSize) return sorted;
    const start = (currentPage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, currentPage, pageSize]);

  // Search Results Mode
  if (searchQuery) {
    return (
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 max-w-7xl mx-auto animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="px-3.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>←</span> Back to Home
            </button>
          )}
          <span className="text-gray-400 text-xs">/</span>
          <span className="text-gray-600 text-xs">Search</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Search Results for "{searchQuery}"
        </h2>
        <p className="text-gray-500 text-sm mb-6">{sorted.length} verified C.R.I. products found</p>
        {sorted.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-bold text-gray-800">No products found</p>
            <p className="text-sm text-gray-500 mt-1">Try searching by model name, product code (e.g. 632635), or HP</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sorted.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                isWishlisted={wishlist.includes(p.id)}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                onClick={onProductClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Tiny Main Category Page: show the 14 subcategory cards in clean layout
  if (activeCategory === 'tiny' && selectedSubcat === 'All') {
    return (
      <TinyCatalogOverview
        subcategories={currentCategoryObj?.subcategories || []}
        products={categoryProducts}
        onSelectSubcategory={(subcat) => handleSelectSubcategory(subcat)}
        onBackToHome={onBackToHome}
        onViewAllModels={() => handleSelectSubcategory('All-Models')}
      />
    );
  }

  // NEXT GEN Main Category Page: show all 20 subcategory cards in one continuous, unified grid
  if (activeCategory === 'next-gen' && selectedSubcat === 'All') {
    return (
      <NextGenCatalogOverview
        subcategories={currentCategoryObj?.subcategories || []}
        products={categoryProducts}
        onSelectSubcategory={(subcat) => handleSelectSubcategory(subcat)}
        onBackToHome={onBackToHome}
        onViewAllModels={() => handleSelectSubcategory('All-Models')}
      />
    );
  }

  // Residential Main Category Page: show all 11 subcategory cards in one continuous, unified grid
  if (activeCategory === 'residential' && selectedSubcat === 'All') {
    return (
      <ResidentialCatalogOverview
        subcategories={currentCategoryObj?.subcategories || []}
        products={categoryProducts}
        onSelectSubcategory={(subcat) => handleSelectSubcategory(subcat)}
        onBackToHome={onBackToHome}
        onViewAllModels={() => handleSelectSubcategory('All-Models')}
      />
    );
  }

  // Agri Main Category Page: show all 21 subcategory cards in one continuous, unified grid
  if (activeCategory === 'agri' && selectedSubcat === 'All') {
    return (
      <AgriCatalogOverview
        subcategories={currentCategoryObj?.subcategories || []}
        products={categoryProducts}
        onSelectSubcategory={(subcat) => handleSelectSubcategory(subcat)}
        onBackToHome={onBackToHome}
        onViewAllModels={() => handleSelectSubcategory('All-Models')}
      />
    );
  }

  // Accessories Main Category Page: show all 5 subcategory cards in one continuous, unified grid
  if (activeCategory === 'accessories' && selectedSubcat === 'All') {
    return (
      <AccessoriesCatalogOverview
        subcategories={currentCategoryObj?.subcategories || []}
        products={categoryProducts}
        onSelectSubcategory={(subcat) => handleSelectSubcategory(subcat)}
        onBackToHome={onBackToHome}
        onViewAllModels={() => handleSelectSubcategory('All-Models')}
      />
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16 animate-fade-in">
      {/* 1. TOP BREADCRUMB & DEALER BANNER (COMPACT) */}
      <div className="bg-gray-50 border-b border-gray-200 py-2.5 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-0.5">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-gray-100 text-gray-800 font-semibold transition-all border border-gray-300 shadow-2xs cursor-pointer mr-1"
              >
                <span>←</span>
                <span>Home Store</span>
              </button>
            )}
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">Categories</span>
            <span className="text-gray-400">/</span>
            {activeCategory === 'tiny' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="text-gray-800 hover:text-blue-700 font-bold hover:underline cursor-pointer"
              >
                Tiny
              </button>
            ) : activeCategory === 'next-gen' ? (
              <button
                onClick={() => {
                  setSelectedSubcat('All');
                  setNextGenGroup('All');
                  if (onCategoryChange) onCategoryChange('next-gen', 'All');
                }}
                className="text-gray-800 hover:text-blue-700 font-bold hover:underline cursor-pointer"
              >
                NEXT GEN
              </button>
            ) : activeCategory === 'residential' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="text-gray-800 hover:text-blue-700 font-bold hover:underline cursor-pointer"
              >
                Residential
              </button>
            ) : activeCategory === 'agri' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="text-gray-800 hover:text-blue-700 font-bold hover:underline cursor-pointer"
              >
                Agri
              </button>
            ) : activeCategory === 'accessories' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="text-gray-800 hover:text-blue-700 font-bold hover:underline cursor-pointer"
              >
                Accessories
              </button>
            ) : (
              <span className="text-gray-900 font-bold">
                {activeCategory === 'all' ? 'All Products' : currentCategoryObj?.name || 'Department'}
              </span>
            )}
            {selectedSubcat !== 'All' && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-blue-700 font-bold truncate max-w-[280px]">
                  {selectedSubcat === 'All-Models' ? 'All Models Table' : selectedSubcat}
                </span>
              </>
            )}
          </div>
          <div className="hidden sm:flex items-center gap-2 text-gray-600 text-[11px]">
            <img src={hebronLogo} alt="Hebron Logo" className="h-4 w-auto object-contain" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-gray-700">Hebron<sup className="text-[0.6em] font-bold align-super ml-0.5">®</sup> Enterprises — Authorised C.R.I. Dealer</span>
          </div>
        </div>
      </div>

      {/* 2. PRODUCT LISTING & FILTER TOOLBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-5 pb-8">
        {/* Back Button for Tiny, Next Gen, Residential, Agri & Accessories Subcategory Pages */}
        {(activeCategory === 'tiny' || activeCategory === 'next-gen' || activeCategory === 'residential' || activeCategory === 'agri' || activeCategory === 'accessories') && selectedSubcat !== 'All' && (
          <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => handleSelectSubcategory('All')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs transition-colors border border-blue-200 shadow-2xs cursor-pointer group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <span>Back to {activeCategory === 'next-gen' ? 'NEXT GEN Subcategories' : activeCategory === 'residential' ? 'Residential Subcategories' : activeCategory === 'agri' ? 'Agri Subcategories' : activeCategory === 'accessories' ? 'Accessories Subcategories' : 'Tiny Subcategories'}</span>
            </button>

            <span className="text-xs text-gray-500 font-medium">
              Subcategory: <strong className="text-gray-900 font-bold">{selectedSubcat}</strong>
            </span>
          </div>
        )}

        {/* COMPACT CATEGORY OVERVIEW & STATS BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 pb-3 border-b border-gray-100">
          <div>
            <h1 className="text-base sm:text-xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
              <span>
                {activeCategory === 'all'
                  ? '💧'
                  : activeCategory === 'tiny'
                  ? (tinySubcategoriesMeta[selectedSubcat]?.icon || '⚡')
                  : activeCategory === 'next-gen'
                  ? (nextGenSubcategoriesMeta[selectedSubcat]?.icon || '🚀')
                  : activeCategory === 'residential'
                  ? (residentialSubcategoriesMeta[selectedSubcat]?.icon || '🏠')
                  : activeCategory === 'agri'
                  ? (agriSubcategoriesMeta[selectedSubcat]?.icon || '🌾')
                  : activeCategory === 'accessories'
                  ? (accessoriesSubcategoriesMeta[selectedSubcat]?.icon || '🔧')
                  : currentCategoryObj?.icon || '📦'}
              </span>
              <span>
                {activeCategory === 'tiny' && selectedSubcat !== 'All'
                  ? `C.R.I. ${selectedSubcat === 'All-Models' ? 'Tiny All Models' : selectedSubcat}`
                  : activeCategory === 'next-gen' && selectedSubcat !== 'All'
                  ? `C.R.I. ${selectedSubcat === 'All-Models' ? 'Next Gen All Models' : nextGenSubcategoryShortLabels[selectedSubcat] || selectedSubcat}`
                  : activeCategory === 'next-gen' && nextGenGroup !== 'All'
                  ? `C.R.I. ${nextGenGroup}`
                  : activeCategory === 'residential' && selectedSubcat !== 'All'
                  ? `C.R.I. ${selectedSubcat === 'All-Models' ? 'Residential All Models' : selectedSubcat}`
                  : activeCategory === 'agri' && selectedSubcat !== 'All'
                  ? `C.R.I. ${selectedSubcat === 'All-Models' ? 'Agri All Models' : selectedSubcat}`
                  : activeCategory === 'accessories' && selectedSubcat !== 'All'
                  ? `C.R.I. ${selectedSubcat === 'All-Models' ? 'Accessories All Models' : selectedSubcat}`
                  : `C.R.I. ${activeCategory === 'all' ? 'All Products' : currentCategoryObj?.name} Pumping Systems`}
              </span>
              {activeCategory !== 'tiny' && activeCategory !== 'next-gen' && activeCategory !== 'residential' && activeCategory !== 'agri' && activeCategory !== 'accessories' && selectedSubcat !== 'All' && (
                <span className="text-xs font-normal text-gray-500">
                  — {selectedSubcat}
                </span>
              )}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
              {activeCategory === 'tiny' && tinySubcategoriesMeta[selectedSubcat]
                ? `${tinySubcategoriesMeta[selectedSubcat].tag} • ${tinySubcategoriesMeta[selectedSubcat].description}`
                : activeCategory === 'next-gen' && nextGenSubcategoriesMeta[selectedSubcat]
                ? `${nextGenSubcategoriesMeta[selectedSubcat].tag} • ${nextGenSubcategoriesMeta[selectedSubcat].description}`
                : activeCategory === 'residential' && residentialSubcategoriesMeta[selectedSubcat]
                ? `${residentialSubcategoriesMeta[selectedSubcat].tag} • ${residentialSubcategoriesMeta[selectedSubcat].description}`
                : activeCategory === 'agri' && agriSubcategoriesMeta[selectedSubcat]
                ? `${agriSubcategoriesMeta[selectedSubcat].tag} • ${agriSubcategoriesMeta[selectedSubcat].description}`
                : activeCategory === 'accessories' && accessoriesSubcategoriesMeta[selectedSubcat]
                ? `${accessoriesSubcategoriesMeta[selectedSubcat].tag} • ${accessoriesSubcategoriesMeta[selectedSubcat].description}`
                : activeCategory === 'next-gen' && nextGenGroup !== 'All'
                ? `Official C.R.I. ${nextGenGroup} Series • 100% Genuine C.R.I. Factory Warranty`
                : 'Official C.R.I. Price Catalogue (Tamil Nadu) • 100% Genuine C.R.I. Factory Warranty'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs shrink-0">
            <span className="text-gray-500">
              Showing <strong className="text-gray-900">{sorted.length}</strong> verified models
            </span>
            {selectedSubcat !== 'All' && (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold underline cursor-pointer ml-1"
              >
                {activeCategory === 'tiny' || activeCategory === 'next-gen' || activeCategory === 'residential' || activeCategory === 'agri' || activeCategory === 'accessories' ? 'All Models' : 'Reset to All'}
              </button>
            )}
          </div>
        </div>

        {/* SUBCATEGORY NAVIGATION BAR */}
        {tier2Subcategories.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap pb-2 mb-4 sm:mb-5 scrollbar-none touch-pan-x">
            {activeCategory === 'tiny' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer bg-slate-100 hover:bg-slate-200 text-gray-800 border border-gray-300 flex items-center gap-1 shadow-2xs"
              >
                <span>←</span>
                <span>14 Subcategories</span>
              </button>
            ) : activeCategory === 'next-gen' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer bg-slate-100 hover:bg-slate-200 text-gray-800 border border-gray-300 flex items-center gap-1 shadow-2xs"
              >
                <span>←</span>
                <span>20 Subcategories</span>
              </button>
            ) : activeCategory === 'residential' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer bg-slate-100 hover:bg-slate-200 text-gray-800 border border-gray-300 flex items-center gap-1 shadow-2xs"
              >
                <span>←</span>
                <span>11 Subcategories</span>
              </button>
            ) : activeCategory === 'agri' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer bg-slate-100 hover:bg-slate-200 text-gray-800 border border-gray-300 flex items-center gap-1 shadow-2xs"
              >
                <span>←</span>
                <span>21 Subcategories</span>
              </button>
            ) : activeCategory === 'accessories' ? (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer bg-slate-100 hover:bg-slate-200 text-gray-800 border border-gray-300 flex items-center gap-1 shadow-2xs"
              >
                <span>←</span>
                <span>5 Subcategories</span>
              </button>
            ) : (
              <button
                onClick={() => handleSelectSubcategory('All')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedSubcat === 'All'
                    ? 'bg-blue-700 text-white shadow-2xs font-bold'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All {currentCategoryObj?.name || ''} ({categoryProducts.length})
              </button>
            )}
            {tier2Subcategories.map(sub => {
              const isSelected = selectedSubcat === sub;
              const count = subcatCounts[sub] || 0;
              const label = activeCategory === 'next-gen' ? (nextGenSubcategoryShortLabels[sub] || sub) : sub;
              return (
                <button
                  key={sub}
                  onClick={() => handleSelectSubcategory(sub)}
                  title={sub}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-2xs font-bold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* CONTROLS BAR: SEARCH, PHASE, HP, VIEW MODE, SORT - Hidden on Category models pages */}
        {activeCategory === 'all' && (
          <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-3.5 mb-6 shadow-2xs flex flex-col gap-3">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Model Search Box */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <SearchIcon size={16} />
                </div>
                <input
                  type="text"
                  value={modelSearch}
                  onChange={e => setModelSearch(e.target.value)}
                  placeholder="Search model name (e.g. RYKER, JUMBO), code (#632635), HP..."
                  className="w-full pl-9 pr-7 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900"
                />
                {modelSearch && (
                  <button
                    onClick={() => setModelSearch('')}
                    className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2.5 justify-between md:justify-end flex-wrap">
                {/* View Mode Switcher */}
                <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200 shrink-0">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-white text-blue-700 shadow-2xs font-bold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    title="Grid Cards View"
                  >
                    <span>▦</span> Cards
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('table')}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'table'
                        ? 'bg-white text-blue-700 shadow-2xs font-bold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    title="Official Specifications Table"
                  >
                    <span>📋</span> Specs Table
                  </button>
                </div>

                {/* Sort Selector */}
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="px-2.5 py-1.5 border rounded-lg text-xs sm:text-sm text-gray-700 bg-white border-gray-200 focus:outline-none focus:border-blue-500 shadow-2xs cursor-pointer font-medium"
                >
                  {sortOptions.map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Filters: Phase & HP Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100 text-xs">
              <span className="text-gray-500 font-semibold mr-0.5">Phase:</span>
              {['All', '3-Phase', '1-Phase'].map(ph => (
                <button
                  key={ph}
                  onClick={() => setSelectedPhase(ph)}
                  className={`px-2 py-0.5 rounded-md font-medium transition-all cursor-pointer ${
                    selectedPhase === ph
                      ? 'bg-blue-700 text-white font-bold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {ph === 'All' ? 'All Phases' : ph}
                </button>
              ))}

              <span className="text-gray-300 mx-1.5">|</span>

              <span className="text-gray-500 font-semibold mr-0.5">Power:</span>
              {hpOptions.map(hp => (
                <button
                  key={hp}
                  onClick={() => setSelectedHpRange(hp)}
                  className={`px-2 py-0.5 rounded-md font-medium transition-all cursor-pointer ${
                    selectedHpRange === hp
                      ? 'bg-blue-700 text-white font-bold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {hp}
                </button>
              ))}

              {(modelSearch || selectedPhase !== 'All' || selectedHpRange !== 'All') && (
                <button
                  onClick={() => {
                    setModelSearch('');
                    setSelectedPhase('All');
                    setSelectedHpRange('All');
                  }}
                  className="ml-auto text-xs text-red-600 hover:text-red-800 font-semibold underline cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* 4. PRODUCT LISTING DISPLAY */}
        {sorted.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-2xs">
            <div className="text-4xl mb-2">📦</div>
            <h3 className="text-sm font-bold text-gray-800">No matching models found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              No products match your current filters in this selection. Try resetting the subcategory or search query.
            </p>
            <button
              onClick={() => {
                setModelSearch('');
                setSelectedPhase('All');
                setSelectedHpRange('All');
                setSelectedSubcat('All');
                setNextGenGroup('All');
              }}
              className="mt-3 px-3.5 py-1.5 bg-blue-700 text-white rounded-lg text-xs font-semibold hover:bg-blue-800 cursor-pointer shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'table' ? (
          /* Official Model & List Price Table View */
          (() => {
            const isAccessoriesCat = activeCategory === 'accessories';
            const isValve = selectedSubcat.includes('Valve') || paginated.some(p => Boolean(p.valveType));
            const isJtsCtss = selectedSubcat.includes('JTS') || selectedSubcat.includes('CTSS');
            const isApc = selectedSubcat === 'Automatic Pump Controller';
            const isCirculatory = selectedSubcat === 'Mini Circulatory Pumps';
            const isFloatSwitch = selectedSubcat === 'Float Switch';
            const isBriskMhbs = selectedSubcat.includes('BRISK') || selectedSubcat.includes('MHBS');

            const showStageTank = isBriskMhbs || paginated.some(p => Boolean(p.stageTank));
            const showSolidHandling = paginated.some(p => Boolean(p.solidHandling));
            const showMaxPressure = isJtsCtss || paginated.some(p => Boolean(p.maxPressure));
            const showFlowRate = isJtsCtss || paginated.some(p => Boolean(p.flowRate));
            const showPowerWatts = isCirculatory || paginated.some(p => Boolean(p.powerWatts));
            const showInletOutlet = isCirculatory || paginated.some(p => Boolean(p.inletOutletSize));
            const showCableLength = isFloatSwitch || paginated.some(p => Boolean(p.cableLength));
            const showValveType = isAccessoriesCat && isValve;
            const showRelay = isAccessoriesCat && !isValve;
            const showHp = !isApc && !isFloatSwitch && !isCirculatory && !isValve;
            const showPipe = !isApc && !isFloatSwitch && !isCirculatory && (!isAccessoriesCat || isValve);
            const showType = !isApc && !isFloatSwitch && !isCirculatory && !isValve;
            const showHeadDischarge = !isApc && !isFloatSwitch && !isCirculatory && !isJtsCtss && !isAccessoriesCat;
            const showRcp = activeCategory === 'next-gen' || activeCategory === 'accessories' || paginated.some(p => Boolean(p.rcp));

            return (
              <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden mb-6">
                <div className="p-3.5 bg-sky-50 border-b border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <h3 className="font-bold text-sky-950 flex items-center gap-1.5">
                      <span>📋</span> Official C.R.I. Model Specifications & List Price Table
                    </h3>
                    <p className="text-sky-700 mt-0.5 text-[11px]">
                      Tamil Nadu verified price catalogue w.e.f. 01.08.2026. Displaying official List Prices{showRcp ? ' & Rate Contract Prices (RCP)' : ''}.
                    </p>
                  </div>
                  <span className="font-mono font-bold bg-white text-sky-800 border border-sky-200 px-2.5 py-1 rounded text-[11px] self-start sm:self-auto shadow-2xs">
                    {selectedSubcat === 'All' ? 'All Subcategories' : selectedSubcat}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#003b73] text-white font-bold uppercase tracking-wider text-[11px] border-b border-blue-950">
                        <th className="py-3 px-3 whitespace-nowrap">Code</th>
                        <th className="py-3 px-3 whitespace-nowrap">Model</th>
                        {showHp && (
                          <th className="py-3 px-2.5 whitespace-nowrap">
                            {isAccessoriesCat ? 'Recommended HP' : showStageTank ? 'HP / Stage / Tank' : 'HP'}
                          </th>
                        )}
                        {showRelay && <th className="py-3 px-2.5 whitespace-nowrap">Relay Range</th>}
                        {showValveType && <th className="py-3 px-2.5 whitespace-nowrap">Valve Type</th>}
                        {showPipe && <th className="py-3 px-2.5 whitespace-nowrap">{isAccessoriesCat ? 'Size (mm)' : 'Pipe Size (mm)'}</th>}
                        {showType && <th className="py-3 px-2.5 whitespace-nowrap">Type / Phase</th>}
                        {showPowerWatts && <th className="py-3 px-2.5 whitespace-nowrap">Power (Watts)</th>}
                        {showInletOutlet && <th className="py-3 px-2.5 whitespace-nowrap">Inlet & Outlet (mm)</th>}
                        {showCableLength && <th className="py-3 px-2.5 whitespace-nowrap">Cable Length (m)</th>}
                        {showSolidHandling && (
                          <th className="py-3 px-2.5 whitespace-nowrap">Solid Handling (mm)</th>
                        )}
                        {showMaxPressure && <th className="py-3 px-2.5 whitespace-nowrap">Max Pressure</th>}
                        {showFlowRate && <th className="py-3 px-2.5 whitespace-nowrap">Flow Rate</th>}
                        {showHeadDischarge && (
                          <>
                            <th className="py-3 px-2.5 whitespace-nowrap">Head (m)</th>
                            <th className="py-3 px-2.5 whitespace-nowrap">Discharge (lph)</th>
                          </>
                        )}
                        <th className="py-3 px-3 text-right whitespace-nowrap">List Price (₹)</th>
                        {showRcp && (
                          <th className="py-3 px-3 text-right whitespace-nowrap bg-[#002f5c]">RCP (₹)</th>
                        )}
                        <th className="py-3 px-3 text-center whitespace-nowrap">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {paginated.map(p => (
                        <tr key={p.id} className="hover:bg-blue-50/60 transition-colors">
                          <td className="py-2.5 px-3 font-mono font-bold text-amber-800 whitespace-nowrap">
                            #{p.productCode || p.id.replace('cri-', '')}
                          </td>
                          <td className="py-2.5 px-3 font-semibold text-gray-900">
                            <button
                              onClick={() => onProductClick(p)}
                              className="hover:text-blue-700 text-left font-bold cursor-pointer"
                            >
                              {p.model || p.name.replace('CRI ', '')}
                            </button>
                            {p.stages && !showStageTank && (
                              <span className="ml-1.5 text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-50 text-sky-800 border border-sky-200 whitespace-nowrap">
                                {p.stages} ST
                              </span>
                            )}
                          </td>
                          {showHp && (
                            <td className="py-2.5 px-2.5 text-gray-800 whitespace-nowrap font-medium">
                              {p.recommendedHp || (showStageTank ? (p.stageTank || p.hp || '-') : (p.hp || '-'))}
                            </td>
                          )}
                          {showRelay && (
                            <td className="py-2.5 px-2.5 text-gray-700 whitespace-nowrap font-medium">
                              {p.relayRange || '-'}
                            </td>
                          )}
                          {showValveType && (
                            <td className="py-2.5 px-2.5 text-gray-700 whitespace-nowrap font-medium">
                              {p.valveType || '-'}
                            </td>
                          )}
                          {showPipe && (
                            <td className="py-2.5 px-2.5 text-gray-600 whitespace-nowrap">{p.sizeMm || p.pipeSize || '-'}</td>
                          )}
                          {showType && (
                            <td className="py-2.5 px-2.5 text-gray-600 whitespace-nowrap">{p.phase || '-'}</td>
                          )}
                          {showPowerWatts && (
                            <td className="py-2.5 px-2.5 text-gray-800 font-semibold whitespace-nowrap">
                              {p.powerWatts || '-'}
                            </td>
                          )}
                          {showInletOutlet && (
                            <td className="py-2.5 px-2.5 text-gray-700 whitespace-nowrap">
                              {p.inletOutletSize || '-'}
                            </td>
                          )}
                          {showCableLength && (
                            <td className="py-2.5 px-2.5 text-gray-700 font-medium whitespace-nowrap">
                              {p.cableLength ? `${p.cableLength} m` : '-'}
                            </td>
                          )}
                          {showSolidHandling && (
                            <td className="py-2.5 px-2.5 text-gray-700 font-medium whitespace-nowrap">
                              {p.solidHandling ? `${p.solidHandling} mm` : '-'}
                            </td>
                          )}
                          {showMaxPressure && (
                            <td className="py-2.5 px-2.5 text-gray-700 whitespace-nowrap">{p.maxPressure || '-'}</td>
                          )}
                          {showFlowRate && (
                            <td className="py-2.5 px-2.5 text-gray-700 whitespace-nowrap">{p.flowRate || '-'}</td>
                          )}
                          {showHeadDischarge && (
                            <>
                              <td className="py-2.5 px-2.5 text-gray-600 whitespace-nowrap">{p.head || '-'}</td>
                              <td className="py-2.5 px-2.5 text-gray-600 whitespace-nowrap">{p.discharge || '-'}</td>
                            </>
                          )}
                          <td className="py-2.5 px-3 text-right font-extrabold text-blue-900 text-xs sm:text-sm whitespace-nowrap">
                            ₹{p.price.toLocaleString('en-IN')}
                          </td>
                          {showRcp && (
                            <td className="py-2.5 px-3 text-right font-bold text-sky-800 bg-sky-50/40 text-xs sm:text-sm whitespace-nowrap">
                              {p.rcp ? `₹${p.rcp.toLocaleString('en-IN')}` : '-'}
                            </td>
                          )}
                          <td className="py-2.5 px-3 text-center whitespace-nowrap">
                            <button
                              onClick={() => onAddToCart(p)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-semibold text-xs transition-colors shadow-2xs cursor-pointer"
                            >
                              <CartIcon size={12} /> Add
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()
        ) : (
          /* Cards Grid View */
          <div
            className={`grid gap-3.5 sm:gap-4 md:gap-5 mb-6 ${
              activeCategory === 'tiny' || activeCategory === 'next-gen' || activeCategory === 'residential' || activeCategory === 'agri' || activeCategory === 'accessories'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6'
            }`}
          >
            {paginated.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                isWishlisted={wishlist.includes(p.id)}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                onClick={onProductClick}
              />
            ))}
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-gray-200 pt-4 mb-8 flex-wrap gap-2 text-xs">
            <span className="text-gray-500 font-medium">
              Showing page <strong className="text-gray-900">{currentPage}</strong> of{' '}
              <strong className="text-gray-900">{totalPages}</strong> ({sorted.length} models total)
            </span>
            <div className="flex items-center gap-1">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(p => Math.max(1, p - 1));
                  window.scrollTo({ top: 200, behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                ← Prev
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
                let pageNum = idx + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = Math.min(currentPage - 2 + idx, totalPages - (4 - idx));
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      window.scrollTo({ top: 200, behavior: 'smooth' });
                    }}
                    className={`w-7 h-7 rounded text-xs font-semibold cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-blue-700 text-white shadow-2xs font-bold'
                        : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage(p => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 200, behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* 5. WHY CHOOSE CRI SECTION */}
        <div className="mt-6 rounded-xl p-4 sm:p-6 border border-gray-200 bg-gray-50/60">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Why Choose Genuine C.R.I. Products?
          </h2>
          <p className="text-gray-600 text-xs mb-4 max-w-3xl leading-relaxed">
            Every C.R.I. pump is engineered for high hydraulic efficiency, backed by ISO 9001:2015 precision manufacturing, and supported by <span className="inline-flex items-center gap-1.5"><img src={hebronLogo} alt="Hebron Logo" className="h-4 w-auto inline-block object-contain" /><strong>Hebron<sup className="text-[0.6em] font-bold align-super ml-0.5">®</sup> Enterprises</strong></span> authorized dealer sales & service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                title: '100% Genuine C.R.I. Warranty',
                desc: 'Official factory warranty with authentic spares and certified service.',
              },
              {
                title: 'Verified Tamil Nadu RCP Rates',
                desc: 'Official Rate Contract List prices with full transparency.',
              },
              {
                title: 'Authorised Dealer Support',
                desc: (
                  <span className="flex flex-col gap-1">
                    <span className="flex items-center gap-1.5">
                      <img src={hebronLogo} alt="Hebron Logo" className="h-4 w-auto object-contain" />
                      <strong>Hebron<sup className="text-[0.6em] font-bold align-super ml-0.5">®</sup> Enterprises</strong>
                    </span>
                    <span>expert borewell depth sizing and technical consultation.</span>
                  </span>
                ),
              },
            ].map(pt => (
              <div key={pt.title} className="p-3 rounded-lg border border-gray-200 bg-white flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs">
                  <span>✓</span> {pt.title}
                </div>
                <p className="text-[11px] text-gray-600">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. ORDER PLACEMENT & TECHNICAL QUOTATION FORM */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-gray-200 pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900" style={{ fontFamily: 'DM Serif Display, serif' }}>
                {requestType === 'order' ? `Place Order / Request Quotation` : `Request Pump Service & Support`}
              </h2>
              <p className="text-gray-500 text-xs mt-0.5">
                {requestType === 'order'
                  ? `Direct order placement or bulk quotation for verified C.R.I. models.`
                  : `Schedule certified technician visit for installation, borewell testing, or maintenance.`}
              </p>
            </div>

            {/* Request Type Switcher Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200 shrink-0 self-start sm:self-center">
              <button
                type="button"
                onClick={() => setRequestType('order')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  requestType === 'order'
                    ? 'bg-blue-700 text-white shadow-2xs font-bold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>📦</span> Order Placement
              </button>
              <button
                type="button"
                onClick={() => setRequestType('service')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  requestType === 'service'
                    ? 'bg-blue-700 text-white shadow-2xs font-bold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>🛠️</span> Service Request
              </button>
            </div>
          </div>

          {formData.submitted ? (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                ✓
              </div>
              <h3 className="text-xs font-bold text-green-900 mb-0.5">
                {formData.submittedType === 'order' ? 'Order Request Submitted!' : 'Service Request Registered!'}
              </h3>
              <p className="text-[11px] text-green-700 max-w-md mx-auto flex items-center justify-center gap-1.5">
                 Thank you! Our <span className="inline-flex items-center gap-1.5"><img src={hebronLogo} alt="Hebron Logo" className="h-4 w-auto inline-block object-contain" /><strong>Hebron<sup className="text-[0.6em] font-bold align-super ml-0.5">®</sup> Enterprises</strong></span> representative will contact you shortly with confirmed pricing and dispatch details.
               </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">City / District *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Coimbatore, Salem, Madurai"
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Pin Code</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="6-digit PIN code"
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Model / Product Code</label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={e => setFormData({ ...formData, productName: e.target.value })}
                    placeholder="e.g. JUMBO-18/3 (#632635)"
                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Requirement Notes / Borewell Depth</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify HP requirement, borewell depth in feet, pipe size or farm application..."
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs transition-all shadow-xs cursor-pointer"
                >
                  {requestType === 'order' ? 'Submit Order Inquiry →' : 'Submit Service Request →'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
