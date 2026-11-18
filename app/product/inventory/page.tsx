'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Boxes, 
  FileText, 
  TrendingUp, 
  Scale, 
  UtensilsCrossed, 
  ArrowRight,
  Check,
  RefreshCw,
  Plus,
  Search,
  AlertTriangle,
  X,
  SlidersHorizontal,
  ChevronRight,
  Download,
  Calendar,
  RotateCcw,
  Clock,
  Edit3,
  Trash2,
  Lightbulb,
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

type TabKey = 'catalog' | 'daily' | 'bom' | 'rates' | 'recipes';

interface InventoryItem {
  id: string;
  name: string;
  location: string;
  badge: string;
  category: string;
  availableStock: number;
  unit: string;
  lowStockLevel: number;
  unitCost: number;
  linkedDishes: number;
  status: 'Healthy' | 'Low' | 'Out';
  supplier?: string;
  openingStock?: number;
  closingStock?: number;
  latestPurchaseRate?: number;
  avgRate?: number;
  recentShift?: string;
  bulkDiscount?: string;
}

const INITIAL_ITEMS: InventoryItem[] = [
  {
    id: '1',
    name: 'Milk',
    location: 'Kitchen Pantry',
    badge: 'Recipe/Ingredient',
    category: 'Dairy & Eggs',
    availableStock: 8,
    unit: 'packets',
    lowStockLevel: 2,
    unitCost: 30,
    linkedDishes: 0,
    status: 'Healthy',
    supplier: 'Unassigned',
    openingStock: 8,
    closingStock: 8,
    latestPurchaseRate: 30,
    avgRate: 30,
    recentShift: '0%',
    bulkDiscount: 'Standard Pack',
  },
  {
    id: '2',
    name: 'spinach',
    location: 'Kitchen Pantry',
    badge: 'Recipe/Ingredient',
    category: 'General',
    availableStock: 10,
    unit: 'kg',
    lowStockLevel: 2,
    unitCost: 120,
    linkedDishes: 1,
    status: 'Healthy',
    supplier: 'Unassigned',
    openingStock: 10,
    closingStock: 10,
    latestPurchaseRate: 120,
    avgRate: 120,
    recentShift: '0%',
    bulkDiscount: 'Standard Pack',
  },
  {
    id: '3',
    name: 'Water Bottle 1000 ml',
    location: 'Kitchen Pantry',
    badge: 'Recipe/Ingredient',
    category: 'Produce',
    availableStock: 43,
    unit: 'L',
    lowStockLevel: 10,
    unitCost: 20,
    linkedDishes: 1,
    status: 'Healthy',
    supplier: 'Unassigned',
    openingStock: 43,
    closingStock: 43,
    latestPurchaseRate: 20,
    avgRate: 20,
    recentShift: '0%',
    bulkDiscount: 'Save -8.5% in bulk',
  },
  {
    id: '4',
    name: 'Water Bottle 500 ml',
    location: 'Kitchen Pantry',
    badge: 'Recipe/Ingredient',
    category: 'General',
    availableStock: 131,
    unit: 'L',
    lowStockLevel: 10,
    unitCost: 10,
    linkedDishes: 1,
    status: 'Healthy',
    supplier: 'Unassigned',
    openingStock: 131,
    closingStock: 131,
    latestPurchaseRate: 10,
    avgRate: 10,
    recentShift: '0%',
    bulkDiscount: 'Save -8.5% in bulk',
  },
];

const RECIPES_DATA = [
  {
    id: 'r1',
    name: 'Cream roll',
    category: 'Cream roll',
    price: 15.00,
    hasRecipe: false,
    diet: 'veg',
  },
  {
    id: 'r2',
    name: 'Chocolate cone',
    category: 'Ice cream 🍦',
    price: 20.00,
    hasRecipe: false,
    diet: 'veg',
  },
  {
    id: 'r3',
    name: 'Tripple Crown',
    category: 'Ice cream 🍦',
    price: 30.00,
    hasRecipe: false,
    diet: 'veg',
  },
  {
    id: 'r4',
    name: 'Tiramisu',
    category: 'Ice cream 🍦',
    price: 50.00,
    hasRecipe: false,
    diet: 'veg',
  },
];

const SPECIFICATION_GROUPS = [
  {
    title: 'Stock & Inventory Engine',
    specs: [
      { name: 'Supported Units', detail: 'Kilograms (kg), Grams (g), Litres (L), Millilitres (ml), Packets, Crates, Cans, Pieces, Custom Units' },
      { name: 'Unit Conversion', detail: 'Bidirectional automatic conversions (e.g., 1 packet milk = 500 ml = 0.5 L in dish formulas)' },
      { name: 'Depletion Valuation', detail: 'Real-time FIFO (First-In, First-Out) with continuous weighted-average cost calculation' },
      { name: 'Reorder Thresholds', detail: 'Configurable Min/Max alert thresholds per item with automated notification triggers' }
    ]
  },
  {
    title: 'Recipe & BOM Formulations',
    specs: [
      { name: 'Formulation Depth', detail: 'Multi-tier nested BOMs (Raw Ingredients → Prep Sauces / Marinades → Finished Plate)' },
      { name: 'Portion Granularity', detail: 'Sub-gram accuracy (up to 3 decimal places for spices, seasonings, and bar spirits)' },
      { name: 'Plate Cost Recalculation', detail: 'Continuous live recalculation of dish cost whenever new supplier purchase bills are logged' },
      { name: 'Dietary & Allergen Tags', detail: 'Veg, Non-Veg, Egg, Vegan, and allergen markers synchronized with POS menu items' }
    ]
  },
  {
    title: 'Audit & Compliance Ledger',
    specs: [
      { name: 'Audit Formula', detail: 'Opening Stock + Purchases - Order Consumption - Logged Waste = Theoretical Closing Stock' },
      { name: 'Immutable Log', detail: 'Detailed audit log tracking timestamp, user identity, and reason for manual inventory adjustments' },
      { name: 'Access Permissions', detail: 'Role-based manager approvals required for stock overrides, write-offs, and rate adjustments' },
      { name: 'Export Formats', detail: 'Standard CSV, formatted Microsoft Excel (.xlsx), and printable PDF audit sheets' }
    ]
  },
  {
    title: 'System & Hardware Integration',
    specs: [
      { name: 'Hardware Independence', detail: 'Web-based application accessible via any standard browser, iPad, Android tablet, Mac, or PC' },
      { name: 'Barcode & QR Scanning', detail: 'Compatible with standard USB/Bluetooth barcode readers and device camera scanning' },
      { name: 'POS Synchronization', detail: 'Integrates with order ticketing to trigger real-time BOM deductions on bill creation' },
      { name: 'Data Security', detail: 'Encrypted data transmission (TLS 1.3) with automated daily cloud database backups' }
    ]
  }
];

export default function InventoryProductPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('catalog');
  const [items, setItems] = useState<InventoryItem[]>(INITIAL_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'liquor' | 'low' | 'out' | 'healthy'>('all');
  const [priceSubTab, setPriceSubTab] = useState<'alerts' | 'vendor'>('vendor');
  const [recipeFilter, setRecipeFilter] = useState<'all' | 'configured' | 'missing'>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 400);
  };

  // Metrics
  const totalValuation = items.reduce((sum, item) => sum + (item.availableStock * item.unitCost), 0);
  const trackedCount = items.length;
  const lowStockCount = items.filter(i => i.availableStock <= i.lowStockLevel && i.availableStock > 0).length;
  const outOfStockCount = items.filter(i => i.availableStock === 0).length;

  // Filter items
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesStatus = 
      statusFilter === 'all' ? true :
      statusFilter === 'healthy' ? item.status === 'Healthy' :
      statusFilter === 'low' ? item.status === 'Low' :
      statusFilter === 'out' ? item.status === 'Out' :
      statusFilter === 'liquor' ? item.category.toLowerCase().includes('bar') : true;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categoriesList = [
    'All', 'Dairy', 'Dairy & Eggs', 'Beverage', 'Beverages', 'Grocery', 
    'Vegetables & Produce', 'Produce', 'Spices & Seasonings', 'Dry Fruits', 
    'Grains & Bakery', 'Sauces & Condiments', 'Oils & Fats', 'Packaging & Disposables'
  ];

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#141414] font-sans antialiased selection:bg-[#BCE440]/40 selection:text-[#0B3B24]">
      
      {/* 1. Global Navigation */}
      <LandingNavbar />

      {/* 2. Breadcrumb Bar */}
      <div className="border-b border-stone-200/80 bg-white/70 backdrop-blur-md px-4 sm:px-6 lg:px-12 py-2 text-xs">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-stone-500 font-medium">
            <Link href="/" className="hover:text-[#0B3B24] transition-colors">Tavola</Link>
            <span>/</span>
            <Link href="/product" className="hover:text-[#0B3B24] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#0B3B24] font-semibold">Inventory Management</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#00ab14]"></span>
            <span>Tavola Operations Suite</span>
          </div>
        </div>
      </div>

      {/* 3. Product Hero Section */}
      <section className="pt-7 sm:pt-10 pb-6 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/12 text-[#0B3B24] text-[11px] font-bold tracking-tight mb-3">
            <span>OPERATIONS SUITE • MODULE 01</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-black text-[#141414] tracking-[-0.02em] leading-[1.12]">
            Ingredient-Level Inventory &amp; Recipe BOM Management
          </h1>

          <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
            Real-time stock tracking with automated recipe deductions, supplier rate shift alerts, and daily opening-to-closing reconciliation built for commercial kitchens.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-4">
            <Link href="/demo">
              <button 
                type="button"
                className="px-5 py-2 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <Link href="#platform-view">
              <button 
                type="button"
                className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Explore Live Platform</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. PLATFORM SHOWCASE (100% Matching Platform Screenshot Image) */}
      <section id="platform-view" className="py-2 pb-10 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto scroll-mt-12">
        
        {/* Module Sub-Nav Tabs (Identical to Platform Screenshot) */}
        <div className="w-full bg-white rounded-2xl border border-stone-200/90 p-2 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar mb-4">
          
          {/* TAB 1: Stock & Raw Items */}
          <button
            onClick={() => setActiveTab('catalog')}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer ${
              activeTab === 'catalog'
                ? 'bg-[#008726] text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === 'catalog' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
            }`}>
              <Boxes className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold leading-tight whitespace-nowrap">Stock &amp; Raw Items</div>
              <div className={`text-[10px] whitespace-nowrap ${activeTab === 'catalog' ? 'text-white/80' : 'text-stone-400'}`}>Catalog &amp; Stock Count</div>
            </div>
          </button>

          {/* TAB 2: Daily Inventory Report */}
          <button
            onClick={() => setActiveTab('daily')}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer ${
              activeTab === 'daily'
                ? 'bg-[#008726] text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === 'daily' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
            }`}>
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold leading-tight whitespace-nowrap">Daily Inventory Report</div>
              <div className={`text-[10px] whitespace-nowrap ${activeTab === 'daily' ? 'text-white/80' : 'text-stone-400'}`}>Opening / Waste / Closing</div>
            </div>
          </button>

          {/* TAB 3: Dish Consumption (BOM) */}
          <button
            onClick={() => setActiveTab('bom')}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer ${
              activeTab === 'bom'
                ? 'bg-[#008726] text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === 'bom' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
            }`}>
              <Scale className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold leading-tight whitespace-nowrap">Dish Consumption (BOM)</div>
              <div className={`text-[10px] whitespace-nowrap ${activeTab === 'bom' ? 'text-white/80' : 'text-stone-400'}`}>Expected vs Actual Variance</div>
            </div>
          </button>

          {/* TAB 4: Price Fluctuation & Rates */}
          <button
            onClick={() => setActiveTab('rates')}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer ${
              activeTab === 'rates'
                ? 'bg-[#008726] text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === 'rates' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
            }`}>
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold leading-tight whitespace-nowrap">Price Fluctuation &amp; Rates</div>
              <div className={`text-[10px] whitespace-nowrap ${activeTab === 'rates' ? 'text-white/80' : 'text-stone-400'}`}>Rate Alerts &amp; Multi-Vendor</div>
            </div>
          </button>

          {/* TAB 5: Dish Recipes (BOM) */}
          <button
            onClick={() => setActiveTab('recipes')}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer ${
              activeTab === 'recipes'
                ? 'bg-[#008726] text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === 'recipes' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
            }`}>
              <UtensilsCrossed className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold leading-tight whitespace-nowrap">Dish Recipes (BOM)</div>
              <div className={`text-[10px] whitespace-nowrap ${activeTab === 'recipes' ? 'text-white/80' : 'text-stone-400'}`}>Portion Formulas</div>
            </div>
          </button>

        </div>

        {/* Platform Content Card (Identical to Platform Screenshot) */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 lg:p-7">
          
          {/* =========================================================================
              VIEW 1: Stock & Raw Items (Catalog & Stock Count)
             ========================================================================= */}
          {activeTab === 'catalog' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              
              {/* Header & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[#008726] flex items-center justify-center shrink-0">
                    <Boxes className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Inventory &amp; Stock Management
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Unified stock tracking, flexible units, menu item consumption rules, and automatic order deduction.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={handleRefresh}
                    className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3.5 text-xs font-semibold cursor-pointer flex items-center"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                  <button 
                    className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-4 text-xs font-bold shadow-xs cursor-pointer flex items-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Inventory Item</span>
                  </button>
                </div>
              </div>

              {/* 4 KPI Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <div className="text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">TRACKED ITEMS</div>
                    <div className="text-2xl sm:text-3xl font-black text-[#141414] mt-0.5">{trackedCount}</div>
                    <div className="text-xs text-stone-400 mt-0.5">Ingredients &amp; retail products</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008726] border border-emerald-100 flex items-center justify-center shrink-0">
                    <Boxes className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <div className="text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">LOW STOCK WARNINGS</div>
                    <div className="text-2xl sm:text-3xl font-black text-[#141414] mt-0.5">{lowStockCount}</div>
                    <div className="text-xs text-stone-400 mt-0.5">Below reorder alert level</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-stone-50 text-stone-400 border border-stone-200 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <div className="text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">OUT OF STOCK</div>
                    <div className="text-2xl sm:text-3xl font-black text-[#141414] mt-0.5">{outOfStockCount}</div>
                    <div className="text-xs text-stone-400 mt-0.5">Depleted items needing restock</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-stone-50 text-stone-400 border border-stone-200 flex items-center justify-center shrink-0">
                    <X className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <div className="text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">ESTIMATED VALUATION</div>
                    <div className="text-2xl sm:text-3xl font-black text-[#141414] mt-0.5">₹{totalValuation.toLocaleString('en-IN')}</div>
                    <div className="text-xs text-stone-400 mt-0.5">Based on unit costs &amp; stock</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 font-bold font-mono text-sm">
                    ₹
                  </div>
                </div>
              </div>

              {/* Status Filter Pills & Search Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === 'all'
                        ? 'bg-[#008726] text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    All Items ({items.length})
                  </button>
                  <button
                    onClick={() => setStatusFilter('liquor')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === 'liquor'
                        ? 'bg-[#008726] text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    🍷 Liquor &amp; Bar (0)
                  </button>
                  <button
                    onClick={() => setStatusFilter('low')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === 'low'
                        ? 'bg-[#008726] text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    ⚠️ Low Stock ({lowStockCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter('out')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === 'out'
                        ? 'bg-[#008726] text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    ✕ Out of Stock ({outOfStockCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter('healthy')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === 'healthy'
                        ? 'bg-[#008726] text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    Healthy Stock ({items.filter(i => i.status === 'Healthy').length})
                  </button>
                </div>

                <div className="relative min-w-[280px]">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by ingredient, category, or SKU..."
                    className="w-full pl-9 pr-3.5 py-1.5 rounded-full border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#008726] bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Category Ticker */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 border-y border-stone-100 text-xs">
                <span className="text-[10.5px] font-bold text-stone-400 uppercase tracking-wider shrink-0 font-mono">
                  CATEGORY:
                </span>
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#141414] text-white font-bold'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Data Table */}
              <div className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50/60 text-stone-400 font-mono text-[10.5px] uppercase tracking-wider font-bold">
                        <th className="py-3 px-4">ITEM DETAILS</th>
                        <th className="py-3 px-4">CATEGORY</th>
                        <th className="py-3 px-4">AVAILABLE STOCK</th>
                        <th className="py-3 px-4">LOW-STOCK LEVEL</th>
                        <th className="py-3 px-4">UNIT COST</th>
                        <th className="py-3 px-4">EST. VALUE</th>
                        <th className="py-3 px-4">LINKED DISHES</th>
                        <th className="py-3 px-4">STATUS</th>
                        <th className="py-3 px-4 text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      {filteredItems.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-50/60 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-stone-100 border border-stone-200/80 flex items-center justify-center font-bold text-stone-600 text-xs uppercase shrink-0">
                                {item.name[0]}
                              </div>
                              <div>
                                <div className="font-bold text-stone-900 leading-tight">{item.name}</div>
                                <div className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
                                  <span>• {item.location}</span>
                                  <span className="text-stone-300">|</span>
                                  <span>{item.badge}</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 px-4 text-stone-600 font-medium">
                            {item.category}
                          </td>

                          <td className="py-3 px-4 font-bold text-stone-900">
                            {item.availableStock} {item.unit}
                          </td>

                          <td className="py-3 px-4 text-stone-500">
                            {item.lowStockLevel} {item.unit}
                          </td>

                          <td className="py-3 px-4 text-stone-600">
                            ₹{item.unitCost} <span className="text-stone-400 text-[10px]">/{item.unit}</span>
                          </td>

                          <td className="py-3 px-4 font-bold text-stone-900">
                            ₹{(item.availableStock * item.unitCost).toLocaleString('en-IN')}
                          </td>

                          <td className="py-3 px-4">
                            {item.linkedDishes > 0 ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008726]">
                                <span>🍴 {item.linkedDishes} dish</span>
                              </span>
                            ) : (
                              <span className="text-stone-400 italic text-[11px]">No dishes linked</span>
                            )}
                          </td>

                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#008726] border border-emerald-200/80">
                              Healthy
                            </span>
                          </td>

                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button className="px-2.5 py-1 rounded-md text-[11px] font-bold text-[#008726] hover:bg-emerald-50 transition-colors border border-emerald-200">
                                + Restock
                              </button>
                              <button className="px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-700 hover:bg-amber-50 transition-colors border border-amber-200">
                                Waste
                              </button>
                              <button className="p-1 rounded text-stone-400 hover:text-stone-600">
                                <Clock className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1 rounded text-stone-400 hover:text-stone-600">
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1 rounded text-stone-400 hover:text-rose-600">
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              VIEW 2: Daily Inventory Report
             ========================================================================= */}
          {activeTab === 'daily' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[#008726] flex items-center justify-center shrink-0">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Daily Inventory Report
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Day-by-day audit: Opening Stock + Purchases - Order Consumption - Waste = Closing Stock.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs text-stone-700 bg-white">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span className="font-mono">17-11-2026</span>
                  </div>
                  <button className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Refresh</span>
                  </button>
                  <button className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center">
                    <Download className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>
                  <button className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center">
                    <Download className="w-3.5 h-3.5" />
                    <span>Excel Export</span>
                  </button>
                </div>
              </div>

              {/* 6 Audit Valuation Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">OPENING VALUATION</div>
                  <div className="text-lg font-black text-[#141414] mt-1 font-mono">₹3,610.00</div>
                  <div className="text-[10.5px] text-stone-400 mt-0.5">At start of day</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-[#008726] uppercase tracking-wider font-mono">↓ PURCHASES TODAY</div>
                  <div className="text-lg font-black text-[#008726] mt-1 font-mono">+₹0.00</div>
                  <div className="text-[10.5px] text-stone-400 mt-0.5">From vendor bills</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider font-mono">↑ ORDER CONSUMPTION</div>
                  <div className="text-lg font-black text-blue-600 mt-1 font-mono">-₹0.00</div>
                  <div className="text-[10.5px] text-stone-400 mt-0.5">BOM order deductions</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-rose-600 uppercase tracking-wider font-mono">WASTE / SPOILAGE</div>
                  <div className="text-lg font-black text-rose-600 mt-1 font-mono">₹0.00</div>
                  <div className="text-[10.5px] text-stone-400 mt-0.5">Logged kitchen waste</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">CLOSING VALUATION</div>
                  <div className="text-lg font-black text-[#141414] mt-1 font-mono">₹3,610.00</div>
                  <div className="text-[10.5px] text-stone-400 mt-0.5">Calculated day close</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider font-mono">⚠️ LOW STOCK ITEMS</div>
                  <div className="text-lg font-black text-amber-600 mt-1 font-mono">0 items</div>
                  <div className="text-[10.5px] text-stone-400 mt-0.5">Below reorder point</div>
                </div>
              </div>

              {/* Daily Audit Table */}
              <div className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50/60 text-stone-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                        <th className="py-3 px-4">ITEM NAME / SKU</th>
                        <th className="py-3 px-4">CATEGORY</th>
                        <th className="py-3 px-4">SUPPLIER</th>
                        <th className="py-3 px-4">UNIT RATE</th>
                        <th className="py-3 px-4">OPENING STOCK</th>
                        <th className="py-3 px-4 text-[#008726]">PURCHASED</th>
                        <th className="py-3 px-4 text-blue-600">CONSUMED</th>
                        <th className="py-3 px-4 text-rose-600">WASTED</th>
                        <th className="py-3 px-4">CLOSING STOCK</th>
                        <th className="py-3 px-4">CLOSING VALUATION</th>
                        <th className="py-3 px-4">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-50/60 transition-colors">
                          <td className="py-3 px-4 font-bold text-stone-900">{item.name}</td>
                          <td className="py-3 px-4 text-stone-600">{item.category}</td>
                          <td className="py-3 px-4 text-stone-400">{item.supplier}</td>
                          <td className="py-3 px-4 font-mono font-medium">₹{item.unitCost}.00 /{item.unit}</td>
                          <td className="py-3 px-4 font-mono">
                            <div>{item.availableStock} {item.unit}</div>
                            <div className="text-[10px] text-stone-400">₹{(item.availableStock * item.unitCost).toFixed(2)}</div>
                          </td>
                          <td className="py-3 px-4 text-stone-400 font-mono">-</td>
                          <td className="py-3 px-4 text-stone-400 font-mono">-</td>
                          <td className="py-3 px-4 text-stone-400 font-mono">-</td>
                          <td className="py-3 px-4 font-mono font-bold text-stone-900">
                            <div>{item.availableStock} {item.unit}</div>
                            <div className="text-[10px] text-stone-400 font-normal">₹{(item.availableStock * item.unitCost).toFixed(2)}</div>
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-stone-900">
                            ₹{(item.availableStock * item.unitCost).toLocaleString('en-IN')}.00
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#008726] border border-emerald-200">
                              OK
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              VIEW 3: Dish Consumption (BOM)
             ========================================================================= */}
          {activeTab === 'bom' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0">
                    <Scale className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Daily Dish Consumption (BOM)
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Compare theoretical ingredient usage (Sold Dishes × Recipe BOM) with actual kitchen consumption to catch shrinkage and waste.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs text-stone-700 bg-white">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span className="font-mono">17-11-2026</span>
                  </div>
                  <button className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Refresh</span>
                  </button>
                  <button className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Manage Recipes (BOM)</span>
                  </button>
                </div>
              </div>

              {/* Blue Guidelines Card */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <div className="flex items-center gap-2 font-bold text-xs text-blue-900 mb-3">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span>How Daily Dish Consumption &amp; Recipe BOM Monitoring Works</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-blue-950">
                  <div className="space-y-1">
                    <div className="font-bold text-blue-900">1. Portion Cost (1 Serving)</div>
                    <p className="text-blue-800/80 leading-relaxed text-[11px]">
                      Theoretical cost of raw ingredients needed to prepare a single serving according to your configured Recipe BOM.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-blue-900">2. Total Ingredient Cost</div>
                    <p className="text-blue-800/80 leading-relaxed text-[11px]">
                      Portion Cost × Number of dishes sold today. Reflects standard monetary value of stock that should have been consumed.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-[#008726]">3. Zero (0) Variance</div>
                    <p className="text-blue-800/80 leading-relaxed text-[11px]">
                      Variance = Actual Ledger Stock Deducted - Expected BOM Usage. When Variance is 0, it means <strong className="text-[#008726]">100% BOM Efficiency</strong> with zero shrinkage or wastage!
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 Variance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">DISHES PREPARED</div>
                  <div className="text-2xl font-black text-[#141414] mt-0.5">51</div>
                  <div className="text-xs text-stone-400 mt-0.5">Non-cancelled orders</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider font-mono">INGREDIENTS TRACKED</div>
                  <div className="text-2xl font-black text-blue-600 mt-0.5">0</div>
                  <div className="text-xs text-stone-400 mt-0.5">Linked in active BOMs</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">EXPECTED COST (BOM)</div>
                  <div className="text-2xl font-black text-[#141414] mt-0.5 font-mono">₹0.00</div>
                  <div className="text-xs text-stone-400 mt-0.5">Standard portions</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider font-mono">ACTUAL LEDGER COST</div>
                  <div className="text-2xl font-black text-blue-600 mt-0.5 font-mono">₹0.00</div>
                  <div className="text-xs text-stone-400 mt-0.5">Total deducted stock</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-rose-600 uppercase tracking-wider font-mono">⚠️ EXCESS VARIANCE LOSS</div>
                  <div className="text-2xl font-black text-rose-600 mt-0.5 font-mono">₹0.00</div>
                  <div className="text-[10.5px] text-[#008726] font-bold mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
                    <span>100% Efficiency — Zero Waste</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              VIEW 4: Price Fluctuation & Rates
             ========================================================================= */}
          {activeTab === 'rates' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Item Price Fluctuation &amp; Rates
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Automatic detection of ≥5% supplier rate shifts, rate history tracking, and multi-vendor pricing intelligence.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Refresh</span>
                  </button>
                  <button className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Purchase Bills</span>
                  </button>
                </div>
              </div>

              {/* Sub-tabs */}
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <button
                  onClick={() => setPriceSubTab('alerts')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    priceSubTab === 'alerts'
                      ? 'bg-amber-100 text-amber-900 border border-amber-200'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Price Shift Alerts</span>
                </button>
                <button
                  onClick={() => setPriceSubTab('vendor')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    priceSubTab === 'vendor'
                      ? 'bg-emerald-100 text-[#008726] border border-emerald-200'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <Boxes className="w-3.5 h-3.5 text-[#008726]" />
                  <span>Multi-Vendor Rate Analysis</span>
                </button>
              </div>

              {/* Rate Analysis Table */}
              <div className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50/60 text-stone-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                        <th className="py-3 px-4">ITEM NAME</th>
                        <th className="py-3 px-4">CATEGORY</th>
                        <th className="py-3 px-4">CURRENT STOCK</th>
                        <th className="py-3 px-4">LATEST PURCHASE RATE</th>
                        <th className="py-3 px-4">AVG RATE</th>
                        <th className="py-3 px-4">RECENT SHIFT</th>
                        <th className="py-3 px-4">SUPPLIER PRICING HISTORY</th>
                        <th className="py-3 px-4">BULK SAVINGS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-50/60 transition-colors">
                          <td className="py-3 px-4">
                            <div className="font-bold text-stone-900">{item.name}</div>
                            <div className="text-[10px] text-stone-400">Supplier: {item.supplier}</div>
                          </td>
                          <td className="py-3 px-4 text-stone-600 font-medium">{item.category}</td>
                          <td className="py-3 px-4 font-bold">{item.availableStock} {item.unit}</td>
                          <td className="py-3 px-4 font-mono font-bold text-stone-900">
                            ₹{item.latestPurchaseRate?.toFixed(2)} <span className="text-[10px] font-normal text-stone-400">/{item.unit}</span>
                          </td>
                          <td className="py-3 px-4 font-mono">₹{item.avgRate?.toFixed(2)}</td>
                          <td className="py-3 px-4 font-mono text-stone-500">{item.recentShift}</td>
                          <td className="py-3 px-4 text-stone-400 font-mono text-[11px]">-</td>
                          <td className="py-3 px-4">
                            {item.bulkDiscount?.includes('Save') ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#008726] border border-emerald-200">
                                {item.bulkDiscount}
                              </span>
                            ) : (
                              <span className="text-stone-400 text-[10px]">{item.bulkDiscount}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              VIEW 5: Dish Recipes (BOM)
             ========================================================================= */}
          {activeTab === 'recipes' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveTab('catalog')}
                    className="w-8 h-8 rounded-xl border border-stone-200 hover:bg-stone-50 flex items-center justify-center text-stone-600 shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                        Dish Recipes &amp; Bill of Materials (BOM)
                      </h2>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-[#008726]">
                        2 Linked Dishes
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Configure precise ingredient formulations, monitor real-time dish food costs, and automate inventory depletion.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => setActiveTab('catalog')}
                    className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center"
                  >
                    <Boxes className="w-3.5 h-3.5 text-stone-500" />
                    <span>Stock &amp; Raw Items</span>
                  </button>
                  <button className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Ingredient Link</span>
                  </button>
                </div>
              </div>

              {/* 4 Formulation KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">CONFIGURED BOMS</div>
                    <UtensilsCrossed className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-black text-[#141414] mt-1 font-mono">
                    2 <span className="text-stone-400 text-xs font-normal">/ 120 Menu Dishes</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">RAW MATERIALS IN BOM</div>
                    <Boxes className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-black text-[#141414] mt-1 font-mono">
                    3 <span className="text-stone-400 text-xs font-normal">Unique Ingredients</span>
                  </div>
                  <div className="text-[10.5px] text-[#008726] font-medium mt-1">Auto-deducted from central store</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">AVG RECIPE FOOD COST</div>
                    <span className="text-xs font-mono font-bold text-emerald-600">₹</span>
                  </div>
                  <div className="text-2xl font-black text-[#141414] mt-1 font-mono">
                    ₹24.00 <span className="text-stone-400 text-xs font-normal">/dish</span>
                  </div>
                  <div className="text-[10.5px] text-stone-400 mt-1">Calculated from raw purchase rates</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">AVG GROSS MARGIN</div>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-black text-rose-600 mt-1 font-mono">
                    17.5% <span className="text-stone-400 text-xs font-normal">Target &gt; 65%</span>
                  </div>
                  <div className="text-[10.5px] text-stone-400 mt-1">1 high margin recipes (&gt;70%)</div>
                </div>
              </div>

              {/* Recipe Cards 4-Col Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {RECIPES_DATA.map((r) => (
                  <div key={r.id} className="p-4 rounded-2xl border border-stone-200/90 bg-white shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          <span>{r.category}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                          No Recipe
                        </span>
                      </div>

                      <h3 className="font-extrabold text-stone-900 text-sm">{r.name}</h3>
                      <div className="text-xs text-stone-500 font-mono mt-0.5">Menu Price: ₹{r.price.toFixed(2)}</div>

                      <div className="mt-3 p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/70 text-[10.5px] text-amber-900 flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>No recipe linked yet. Click below to add raw ingredient formulations.</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full py-2 rounded-xl bg-[#008726] hover:bg-[#007420] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-xs">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Create Recipe Formulation</span>
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </section>

      {/* 5. Technical Specifications Matrix */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto border-t border-stone-200/80">
        <div className="max-w-2xl mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#008726] font-mono">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#141414] mt-0.5">
            System Capabilities &amp; Standards
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Detailed specifications for restaurant operators, culinary leads, and accountants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SPECIFICATION_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
              <div className="px-4 py-2.5 bg-[#FAF7EE] border-b border-stone-200 font-bold text-xs text-[#0B3B24] font-mono uppercase tracking-wider">
                {group.title}
              </div>
              <div className="divide-y divide-stone-100 text-xs">
                {group.specs.map((item, i) => (
                  <div key={i} className="p-3 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-3">
                    <span className="font-semibold text-stone-900 sm:w-1/3 shrink-0 text-[11.5px]">
                      {item.name}
                    </span>
                    <span className="text-stone-600 sm:w-2/3 text-[11px] leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Action / Next Steps Banner */}
      <section className="pb-10 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
        <div className="bg-[#0B3B24] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Ready to implement Tavola Inventory in your kitchen?
            </h2>
            <p className="text-xs text-stone-300 mt-1 max-w-xl">
              Schedule a technical walkthrough with our team or explore how the operations suite integrates with your existing workflow.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link href="/demo">
              <button 
                type="button"
                className="px-5 py-2.5 rounded-full bg-[#BCE440] hover:bg-[#aacc2f] text-[#0B3B24] text-xs font-bold transition-colors cursor-pointer"
              >
                Schedule Walkthrough
              </button>
            </Link>
            <Link href="/product">
              <button 
                type="button"
                className="px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs font-medium transition-colors cursor-pointer"
              >
                All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-6 px-4 sm:px-6 lg:px-12 text-center text-xs text-stone-500">
        <div className="max-w-[1480px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#0B3B24] tracking-tight font-serif italic">Tavola</span>
            <span>• Inventory &amp; Stock Intelligence</span>
          </div>
          <div>
            © {new Date().getFullYear()} Tavola Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-stone-600 font-medium">
            <Link href="/product" className="hover:text-[#0B3B24]">Products</Link>
            <Link href="/demo" className="hover:text-[#0B3B24]">Request Demo</Link>
            <Link href="/#faq" className="hover:text-[#0B3B24]">FAQ</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
