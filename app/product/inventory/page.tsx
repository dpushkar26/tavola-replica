'use client';

import { useState, useEffect } from 'react';
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
  FileSpreadsheet,
  LayoutGrid,
  Table as TableIcon,
  Maximize2,
  Minimize2,
  Sparkles
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingShowcase } from '@/components/landing/LandingShowcase';

type TabKey = 'catalog' | 'daily' | 'bom' | 'rates' | 'recipes';

interface TabMeta {
  tag: string;
  title: string;
  description: string;
  windowTitle: string;
  specs: { label: string; value: string }[];
}

const TAB_METADATA: Record<TabKey, TabMeta> = {
  catalog: {
    tag: 'INVENTORY CATALOG',
    title: 'Perpetual Ingredient & Stock Management',
    description: 'Track raw materials, pantry staples, and bar stock with real-time FIFO depletion, configurable low-stock reorder thresholds, and live valuation.',
    windowTitle: 'Stock & Raw Items',
    specs: [
      { label: 'VALUATION TRACKING', value: 'Live FIFO' },
      { label: 'REORDER TRIGGERS', value: 'Real-Time' },
      { label: 'MEASUREMENT UNITS', value: 'Multi-Unit' },
    ],
  },
  daily: {
    tag: 'DAILY AUDIT RECONCILIATION',
    title: 'Opening to Closing Stock & Valuation Ledger',
    description: 'Audit every gram that enters and leaves your kitchen. Track supplier purchases, automatic BOM order deductions, and kitchen spoilage with calculated closing stock balances.',
    windowTitle: 'Daily Inventory Report',
    specs: [
      { label: 'AUDIT CADENCE', value: 'Daily Close' },
      { label: 'FORMULA', value: 'FIFO Balanced' },
      { label: 'EXPORT FORMATS', value: 'Excel / CSV' },
    ],
  },
  bom: {
    tag: 'THEORETICAL VS ACTUAL VARIANCE',
    title: 'Food Cost Efficiency & Shrinkage Intelligence',
    description: 'Compare standard recipe portion consumption against actual ledger stock depletion. Identify prep-table over-portioning, kitchen waste, and pilferage with zero-variance monitoring.',
    windowTitle: 'Dish Consumption (BOM)',
    specs: [
      { label: 'PORTION ACCURACY', value: '0.001g Sub-Gram' },
      { label: 'VARIANCE TOLERANCE', value: '0% Target' },
      { label: 'POS SYNC', value: 'Live Deductions' },
    ],
  },
  rates: {
    tag: 'SUPPLIER RATE SHIFT DETECTION',
    title: 'Automated Price Alerting & Vendor Comparison',
    description: 'Catch vendor bill creep instantly with automated ≥5% purchase rate shift detection. Compare supplier price histories, unlock bulk discounts, and protect your recipe plate margins.',
    windowTitle: 'Price Fluctuation & Rates',
    specs: [
      { label: 'PRICE SHIFT ALERT', value: '≥ 5% Trigger' },
      { label: 'RATE COMPARISON', value: 'Multi-Vendor' },
      { label: 'SAVINGS RADAR', value: 'Bulk Savings' },
    ],
  },
  recipes: {
    tag: 'MULTI-TIER RECIPE FORMULATIONS',
    title: 'Dynamic Bill of Materials & Plate Cost Calculation',
    description: 'Link raw ingredients to menu dishes with granular portion formulas. Live recipe food cost and gross profit margin automatically recalculate as supplier ingredient rates shift.',
    windowTitle: 'Dish Recipes (BOM)',
    specs: [
      { label: 'PLATE COST', value: 'Live Recalc' },
      { label: 'MARGIN MONITOR', value: 'Target > 65%' },
      { label: 'NESTED BOMS', value: 'Sauces to Plate' },
    ],
  },
};

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
    supplier: 'Metro Dairy Farms',
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
    supplier: 'FreshVeg Wholesale',
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
    supplier: 'AquaPure Dist.',
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
    supplier: 'AquaPure Dist.',
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
      { name: 'Hardware Independence', detail: 'Web-based application accessible via any standard mobile browser, iPhone, Android, iPad, Mac, or PC' },
      { name: 'Barcode & QR Scanning', detail: 'Compatible with mobile camera scanning, Bluetooth barcode wands, and USB scanners' },
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
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
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

  const tabsConfig = [
    { key: 'catalog', title: 'Stock & Raw Items', sub: 'Catalog & Stock Count', icon: Boxes },
    { key: 'daily', title: 'Daily Inventory Report', sub: 'Opening / Waste / Closing', icon: FileText },
    { key: 'bom', title: 'Dish Consumption (BOM)', sub: 'Expected vs Actual Variance', icon: Scale },
    { key: 'rates', title: 'Price Fluctuation & Rates', sub: 'Rate Alerts & Multi-Vendor', icon: TrendingUp },
    { key: 'recipes', title: 'Dish Recipes (BOM)', sub: 'Portion Formulas', icon: UtensilsCrossed },
  ] as const;

  const currentMeta = TAB_METADATA[activeTab];

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#141414] font-sans antialiased selection:bg-[#BCE440]/40 selection:text-[#0B3B24] overflow-x-hidden">
      
      {/* 1. Global Navigation */}
      <LandingNavbar />

      {/* 2. Breadcrumb Bar */}
      <div className="border-b border-stone-200/80 bg-white/70 backdrop-blur-md px-3 xs:px-4 sm:px-6 lg:px-12 py-2 text-xs">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-stone-500 font-medium overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <Link href="/" className="hover:text-[#0B3B24] transition-colors shrink-0">Tavola</Link>
            <span className="shrink-0">/</span>
            <Link href="/product" className="hover:text-[#0B3B24] transition-colors shrink-0">Products</Link>
            <span className="shrink-0">/</span>
            <span className="text-[#0B3B24] font-semibold shrink-0">Inventory Management</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-stone-500 font-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00ab14]"></span>
            <span>Tavola Operations Suite</span>
          </div>
        </div>
      </div>

      {/* 3. Product Hero Section */}
      <section className="pt-5 xs:pt-7 sm:pt-10 pb-5 sm:pb-6 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/12 text-[#0B3B24] text-[10.5px] xs:text-[11px] font-bold tracking-tight mb-2.5 xs:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ab14]"></span>
            <span>OPERATIONS SUITE • MODULE 01</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-black text-[#141414] tracking-[-0.02em] leading-[1.15]">
            Ingredient-Level Inventory &amp; Operations Suite
          </h1>

          <p className="mt-2 text-xs xs:text-[13px] sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
            Real-time stock tracking with automated recipe deductions, supplier rate shift alerts, and unified operations across guest QR dining, kitchen displays, and POS billing.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 xs:gap-2.5 pt-3.5 xs:pt-4">
            <Link href="/demo" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-5 py-2.5 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs touch-manipulation active:scale-[0.98]"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <Link href="#operations-preview" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-4 py-2.5 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation active:scale-[0.98]"
              >
                <span>Explore Live Platform</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. MULTI-DEVICE PRODUCT PREVIEW (Exact Design from Screenshot)
             - macOS Desktop Suite Window with Dark Green Sidebar
             - Bottom-Left Floating TavolaServe Settled Toast
             - Foreground Floating iPhone Mockup with Interactive Guest Cart
         ========================================================================= */}
      <section id="operations-preview" className="py-4 pb-10 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto scroll-mt-12">
        
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 lg:p-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div className="max-w-2xl">
              <div className="text-[10.5px] xs:text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008726] animate-pulse"></span>
                <span>TAVOLA OPERATIONS SUITE • LIVE PRODUCT PREVIEW</span>
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-[26px] font-black text-[#141414] tracking-tight mt-1">
                Unified Floor, Kitchen &amp; Stock Operations
              </h2>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mt-1">
                Experience real-time guest table ordering, kitchen display routing, and instant automated stock deductions synced across desktop and mobile devices.
              </p>
            </div>

            {/* 3-Col Quick Specs Capsule */}
            <div className="bg-[#FAF7EE] border border-stone-200/80 rounded-2xl p-2.5 sm:px-4 sm:py-3 shrink-0">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-[8.5px] xs:text-[9.5px] font-bold text-stone-500 uppercase tracking-wider font-mono">
                    ARCHITECTURE
                  </span>
                  <span className="text-xs xs:text-[13px] sm:text-sm font-black text-[#0B3B24] mt-0.5 whitespace-nowrap">
                    Multi-Device
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8.5px] xs:text-[9.5px] font-bold text-stone-500 uppercase tracking-wider font-mono">
                    SYNC LATENCY
                  </span>
                  <span className="text-xs xs:text-[13px] sm:text-sm font-black text-[#0B3B24] mt-0.5 whitespace-nowrap">
                    &lt; 0.4s Real-Time
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8.5px] xs:text-[9.5px] font-bold text-stone-500 uppercase tracking-wider font-mono">
                    HARDWARE
                  </span>
                  <span className="text-xs xs:text-[13px] sm:text-sm font-black text-[#0B3B24] mt-0.5 whitespace-nowrap">
                    Zero Lock-In
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Layered Hardware Preview Component (macOS Window + Floating Phone + Floating Toast) */}
          <div className="pt-6 sm:pt-8 pb-4 flex justify-center">
            <LandingShowcase />
          </div>

        </div>

      </section>

      {/* =========================================================================
          5.5 ALTERNATING FEATURE DEMONSTRATION SECTIONS (Matching Petpooja-Style Layout)
             - Feature 1: Sub-Gram Recipe BOM Auto-Deductions
             - Feature 2: Supplier Price Fluctuation & Vendor Radar
             - Feature 3: Day-End Opening-to-Closing Audit Reconciliation
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto space-y-16 sm:space-y-20 border-t border-stone-200/80">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#008726] uppercase tracking-wider font-mono">
            INVENTORY INTELLIGENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141414] tracking-tight mt-1">
            Engineered for high-volume commercial kitchens
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
            From raw ingredient intake to dish portion deductions and supplier bill creep detection, Tavola provides end-to-end stock control.
          </p>
        </div>

        {/* Feature 1: Sub-Gram BOM Auto-Deductions */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-stone-200 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[#008726]" /> Active BOM Formula: Chocolate Cone
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold">
                    100% Efficiency
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="font-semibold text-stone-800">Milk (Whole Dairy)</span>
                    <span className="font-mono text-stone-600">60 ml / serving</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="font-semibold text-stone-800">Cocoa Waffle Shell</span>
                    <span className="font-mono text-stone-600">1 unit / serving</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="font-semibold text-stone-800">Chocolate Glaze</span>
                    <span className="font-mono text-stone-600">15 g / serving</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-900 font-medium text-[11px]">Calculated Plate Food Cost:</span>
                  <span className="font-mono font-bold text-[#008726]">₹6.20 / portion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              DYNAMIC RECIPE FORMULATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Restaurant <span className="text-[#008726]">Inventory auto-deduction</span> on every sold dish
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Link raw ingredients to menu dishes with granular portion precision. As orders are punched in the POS or mobile QR menu, Tavola automatically reduces ingredient inventory in real-time, eliminating midnight manual stock counting.
            </p>
            <div className="pt-1">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Configure sub-gram BOM formulas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 2: Supplier Rate Shift Radar */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              PURCHASE BILL RADAR
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Catch <span className="text-[#008726]">supplier rate shifts ≥5%</span> before paying vendor invoices
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Ingredient price creep silently eats restaurant margins. Tavola scans every logged supplier bill, flagging rate increases and comparing historical prices across multiple vendors so you always buy at the best rate.
            </p>
            <div className="pt-1">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Explore vendor rate intelligence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: UI Card Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#FAF7EE] p-5 sm:p-7 shadow-xl border border-[#DDD6C0] relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-stone-200 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-600" /> Supplier Invoice Verification
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200">
                    Shift Alert Active
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>Fresh Malai Paneer (20 kg)</span>
                    <span className="text-amber-800 font-mono">+6.8% Increase</span>
                  </div>
                  <div className="text-[11px] text-stone-600 flex justify-between">
                    <span>Last Rate: ₹280/kg</span>
                    <span className="font-bold text-stone-900">New Bill: ₹299/kg</span>
                  </div>
                  <div className="text-[10px] text-amber-900 font-medium pt-1">
                    ⚠️ Supplier rate shift exceeds 5% threshold. Manager review required.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                  <span className="text-[#008726] font-medium text-[11px]">Bulk Pack Savings Radar:</span>
                  <span className="font-mono font-bold text-[#008726]">Save -8.5% with Metro Dairy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Day-End Closing Reconciliation */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-stone-200 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#008726]" /> Day-End Closing Balance Formula
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold">
                    FIFO Reconciled
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-[11px] space-y-1.5 text-stone-700">
                  <div className="flex justify-between">
                    <span>1. Opening Stock Valuation</span>
                    <span className="font-bold text-stone-900">₹3,610.00</span>
                  </div>
                  <div className="flex justify-between text-[#008726]">
                    <span>2. (+) Purchases Today</span>
                    <span>+₹0.00</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>3. (-) BOM Order Consumption</span>
                    <span>-₹0.00</span>
                  </div>
                  <div className="flex justify-between text-rose-600">
                    <span>4. (-) Logged Kitchen Waste</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-stone-900 pt-1.5 border-t border-stone-200 text-xs">
                    <span>Closing Stock Valuation:</span>
                    <span className="text-[#008726]">₹3,610.00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-stone-500 font-mono">Export: Excel (.xlsx) / CSV</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#008726] text-white font-bold text-[10px] cursor-pointer">
                    Download Day Report
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              AUDIT COMPLIANCE
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Day-end <span className="text-[#008726]">audit reconciliation</span> that balances to the gram
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Say goodbye to unexplainable inventory variances. Tavola computes theoretical closing balances using continuous FIFO valuation and order consumption, highlighting spoilage, pilferage, and over-portioning instantly.
            </p>
            <div className="pt-1">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>View daily audit ledger workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          5. DEEP PERPETUAL INVENTORY & RECIPE BOM ENGINE
             - Outer 5-Pills Switcher
             - Active Tab Specification Header & 3-Pill Capsule
             - Full Interactive Platform Canvas with Table/Cards View Toggle
         ========================================================================= */}
      <section id="inventory-deep-dive" className="py-4 pb-12 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto scroll-mt-12">
        
        {/* Sub-section Header */}
        <div className="mb-4 sm:mb-5">
          <div className="text-[10.5px] xs:text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono flex items-center gap-1.5">
            <span>PERPETUAL INVENTORY ENGINE • DEEP AUDIT</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight mt-0.5">
            Stock Catalog, Daily Audit &amp; Recipe BOM Explorer
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Interact with live ingredient balances, FIFO opening-to-closing ledger reconciliations, plate cost margins, and vendor rate shift alerts.
          </p>
        </div>

        {/* Outer 5-Pills Module Selector */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 mb-3 sm:mb-4">
          {tabsConfig.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabKey)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 snap-start cursor-pointer touch-manipulation whitespace-nowrap active:scale-[0.98] ${
                activeTab === tab.key
                  ? 'bg-[#0B3B24] text-white shadow-xs'
                  : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200/90 shadow-2xs'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Main Inventory Card */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm p-3.5 xs:p-4 sm:p-6 lg:p-7">
          
          {/* Tab Description Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-stone-100 mb-4 sm:mb-5">
            <div className="max-w-2xl">
              <div className="text-[10.5px] xs:text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
                {currentMeta.tag}
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-[#141414] tracking-tight mt-0.5">
                {currentMeta.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mt-1">
                {currentMeta.description}
              </p>
            </div>

            {/* 3-Col Quick Specs */}
            <div className="bg-[#FAF7EE] border border-stone-200/80 rounded-2xl p-2.5 sm:px-4 sm:py-3 shrink-0">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                {currentMeta.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[8.5px] xs:text-[9.5px] font-bold text-stone-500 uppercase tracking-wider font-mono">
                      {spec.label}
                    </span>
                    <span className="text-xs xs:text-[13px] sm:text-sm font-black text-[#0B3B24] mt-0.5 whitespace-nowrap">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inner Sub-Nav Tabs Bar */}
          <div className="relative mb-4 sm:mb-5">
            <div className="w-full bg-stone-50 rounded-2xl border border-stone-200/90 p-1.5 sm:p-2 shadow-2xs flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">
              {tabsConfig.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as TabKey)}
                    className={`flex items-center gap-2 xs:gap-2.5 px-3 xs:px-3.5 py-2 rounded-xl text-left transition-all shrink-0 snap-start cursor-pointer touch-manipulation ${
                      isActive
                        ? 'bg-[#008726] text-white shadow-xs'
                        : 'bg-white hover:bg-stone-100 text-stone-700 active:bg-stone-200'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11.5px] xs:text-xs font-bold leading-tight whitespace-nowrap">{tab.title}</div>
                      <div className={`text-[9.5px] xs:text-[10px] whitespace-nowrap ${isActive ? 'text-white/80' : 'text-stone-400'}`}>
                        {tab.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TAB 1: Stock & Raw Items */}
          {activeTab === 'catalog' && (
            <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
              
              {/* Header & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-2.5 xs:gap-3">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[#008726] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <Boxes className="w-4 h-4 xs:w-4.5 xs:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Inventory &amp; Stock Management
                    </h4>
                    <p className="text-[11px] xs:text-xs text-stone-500 mt-0.5 leading-relaxed">
                      Unified stock tracking, flexible units, menu item consumption rules, and automatic order deduction.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <button 
                    onClick={handleRefresh}
                    className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 active:bg-stone-100 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center touch-manipulation"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                  <button 
                    className="rounded-xl bg-[#008726] hover:bg-[#007420] active:scale-[0.98] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center touch-manipulation"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span className="truncate">Add Inventory Item</span>
                  </button>
                </div>
              </div>

              {/* 4 KPI Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
                <div className="p-3 xs:p-3.5 sm:p-4 rounded-xl xs:rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] xs:text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">TRACKED ITEMS</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-[#008726] border border-emerald-100 flex items-center justify-center shrink-0">
                      <Boxes className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xl xs:text-2xl sm:text-3xl font-black text-[#141414] font-mono leading-none">{trackedCount}</div>
                    <div className="text-[10px] xs:text-xs text-stone-400 mt-1 truncate">Ingredients &amp; retail products</div>
                  </div>
                </div>

                <div className="p-3 xs:p-3.5 sm:p-4 rounded-xl xs:rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] xs:text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">LOW STOCK</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-stone-50 text-stone-400 border border-stone-200 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xl xs:text-2xl sm:text-3xl font-black text-[#141414] font-mono leading-none">{lowStockCount}</div>
                    <div className="text-[10px] xs:text-xs text-stone-400 mt-1 truncate">Below reorder alert level</div>
                  </div>
                </div>

                <div className="p-3 xs:p-3.5 sm:p-4 rounded-xl xs:rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] xs:text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">OUT OF STOCK</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-stone-50 text-stone-400 border border-stone-200 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xl xs:text-2xl sm:text-3xl font-black text-[#141414] font-mono leading-none">{outOfStockCount}</div>
                    <div className="text-[10px] xs:text-xs text-stone-400 mt-1 truncate">Depleted items needing restock</div>
                  </div>
                </div>

                <div className="p-3 xs:p-3.5 sm:p-4 rounded-xl xs:rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] xs:text-[10.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">EST. VALUATION</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                      ₹
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xl xs:text-2xl sm:text-3xl font-black text-[#141414] font-mono leading-none">₹{totalValuation.toLocaleString('en-IN')}</div>
                    <div className="text-[10px] xs:text-xs text-stone-400 mt-1 truncate">Based on unit costs &amp; stock</div>
                  </div>
                </div>
              </div>

              {/* Status Filter Pills & Search */}
              <div className="flex flex-col gap-2.5 pt-1">
                <div className="relative w-full">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by ingredient, category, or SKU..."
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#008726] bg-stone-50/50"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer touch-manipulation ${
                      statusFilter === 'all'
                        ? 'bg-[#008726] text-white shadow-2xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    All Items ({items.length})
                  </button>
                  <button
                    onClick={() => setStatusFilter('liquor')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer touch-manipulation ${
                      statusFilter === 'liquor'
                        ? 'bg-[#008726] text-white shadow-2xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    🍷 Liquor &amp; Bar (0)
                  </button>
                  <button
                    onClick={() => setStatusFilter('low')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer touch-manipulation ${
                      statusFilter === 'low'
                        ? 'bg-[#008726] text-white shadow-2xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    ⚠️ Low Stock ({lowStockCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter('out')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer touch-manipulation ${
                      statusFilter === 'out'
                        ? 'bg-[#008726] text-white shadow-2xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    ✕ Out of Stock ({outOfStockCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter('healthy')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer touch-manipulation ${
                      statusFilter === 'healthy'
                        ? 'bg-[#008726] text-white shadow-2xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    Healthy Stock ({items.filter(i => i.status === 'Healthy').length})
                  </button>
                </div>
              </div>

              {/* Category Ticker */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 border-y border-stone-100 text-xs">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider shrink-0 font-mono">
                  CATEGORY:
                </span>
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap transition-all shrink-0 cursor-pointer touch-manipulation ${
                      selectedCategory === cat
                        ? 'bg-[#141414] text-white font-bold'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* View Switcher */}
              <div className="flex items-center justify-between pt-1">
                <div className="text-[11px] text-stone-500 font-mono font-medium">
                  Showing <strong className="text-stone-900">{filteredItems.length}</strong> items
                </div>

                <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg border border-stone-200/80">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      viewMode === 'cards'
                        ? 'bg-white text-[#0B3B24] shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <LayoutGrid className="w-3 h-3" />
                    <span>Cards</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      viewMode === 'table'
                        ? 'bg-white text-[#0B3B24] shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <TableIcon className="w-3 h-3" />
                    <span>Table</span>
                  </button>
                </div>
              </div>

              {/* CARDS VIEW */}
              {viewMode === 'cards' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-3.5 rounded-2xl border border-stone-200/90 bg-white shadow-2xs hover:border-[#008726]/40 transition-colors flex flex-col justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-stone-100 border border-stone-200/80 flex items-center justify-center font-bold text-stone-700 text-xs uppercase shrink-0">
                              {item.name[0]}
                            </div>
                            <div>
                              <div className="font-extrabold text-stone-900 text-sm leading-tight">{item.name}</div>
                              <div className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
                                <span>• {item.location}</span>
                                <span className="text-stone-300">|</span>
                                <span>{item.category}</span>
                              </div>
                            </div>
                          </div>

                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#008726] border border-emerald-200/80 shrink-0">
                            Healthy
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-stone-100 text-center">
                          <div className="bg-stone-50/80 rounded-xl p-2 border border-stone-100">
                            <div className="text-[9.5px] font-mono text-stone-400 uppercase">AVAILABLE</div>
                            <div className="font-black text-stone-900 text-xs sm:text-sm mt-0.5 font-mono">
                              {item.availableStock} {item.unit}
                            </div>
                          </div>

                          <div className="bg-stone-50/80 rounded-xl p-2 border border-stone-100">
                            <div className="text-[9.5px] font-mono text-stone-400 uppercase">UNIT COST</div>
                            <div className="font-black text-stone-900 text-xs sm:text-sm mt-0.5 font-mono">
                              ₹{item.unitCost}
                            </div>
                          </div>

                          <div className="bg-emerald-50/50 rounded-xl p-2 border border-emerald-100">
                            <div className="text-[9.5px] font-mono text-[#008726] uppercase">EST. VALUE</div>
                            <div className="font-black text-[#008726] text-xs sm:text-sm mt-0.5 font-mono">
                              ₹{(item.availableStock * item.unitCost).toLocaleString('en-IN')}
                            </div>
                          </div>
                        </div>

                        <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-500 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-100">
                          <span>Reorder Alert: <strong className="text-stone-700">{item.lowStockLevel} {item.unit}</strong></span>
                          {item.linkedDishes > 0 ? (
                            <span className="font-bold text-[#008726] flex items-center gap-1">
                              🍴 {item.linkedDishes} linked dish
                            </span>
                          ) : (
                            <span className="text-stone-400 italic">No dishes linked</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1 border-t border-stone-100">
                        <button className="flex-1 py-2 rounded-xl text-xs font-bold text-[#008726] bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200/80 flex items-center justify-center gap-1 touch-manipulation active:scale-[0.98]">
                          <Plus className="w-3 h-3" />
                          <span>Restock</span>
                        </button>
                        <button className="flex-1 py-2 rounded-xl text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 transition-colors border border-amber-200/80 flex items-center justify-center gap-1 touch-manipulation active:scale-[0.98]">
                          <span>Log Waste</span>
                        </button>
                        <button className="p-2 rounded-xl text-stone-400 hover:text-stone-700 bg-stone-50 border border-stone-200/60 touch-manipulation" title="Edit">
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              ) : (
                /* TABLE VIEW */
                <div className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full text-left border-collapse text-xs min-w-[760px]">
                      <thead>
                        <tr className="border-b border-stone-200 bg-stone-50/70 text-stone-400 font-mono text-[10px] uppercase tracking-wider font-bold">
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

                            <td className="py-3 px-4 font-bold text-stone-900 font-mono">
                              {item.availableStock} {item.unit}
                            </td>

                            <td className="py-3 px-4 text-stone-500 font-mono">
                              {item.lowStockLevel} {item.unit}
                            </td>

                            <td className="py-3 px-4 text-stone-600 font-mono">
                              ₹{item.unitCost} <span className="text-stone-400 text-[10px]">/{item.unit}</span>
                            </td>

                            <td className="py-3 px-4 font-bold text-stone-900 font-mono">
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
                  <div className="px-4 py-2 bg-stone-50 border-t border-stone-200/80 text-[10px] text-stone-400 font-mono text-center sm:hidden">
                    ← Swipe horizontally to view all columns →
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: Daily Inventory Report */}
          {activeTab === 'daily' && (
            <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-2.5 xs:gap-3">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[#008726] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <FileText className="w-4 h-4 xs:w-4.5 xs:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Daily Inventory Report
                    </h4>
                    <p className="text-[11px] xs:text-xs text-stone-500 mt-0.5 leading-relaxed">
                      Day-by-day audit: Opening Stock + Purchases - Order Consumption - Waste = Closing Stock.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 xs:flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs text-stone-700 bg-white">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span className="font-mono">18-11-2026</span>
                  </div>
                  <button 
                    onClick={handleRefresh}
                    className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center touch-manipulation"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                  <button className="col-span-2 xs:col-span-1 rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center touch-manipulation">
                    <Download className="w-3.5 h-3.5" />
                    <span>Excel Export</span>
                  </button>
                </div>
              </div>

              {/* 6 Audit Valuation Metric Cards */}
              <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                <div className="p-3 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">OPENING VALUATION</div>
                  <div className="text-base sm:text-lg font-black text-[#141414] mt-1 font-mono">₹3,610.00</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">At start of day</div>
                </div>

                <div className="p-3 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-[#008726] uppercase tracking-wider font-mono">↓ PURCHASES TODAY</div>
                  <div className="text-base sm:text-lg font-black text-[#008726] mt-1 font-mono">+₹0.00</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">From vendor bills</div>
                </div>

                <div className="p-3 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-blue-600 uppercase tracking-wider font-mono">↑ ORDER CONSUMPTION</div>
                  <div className="text-base sm:text-lg font-black text-blue-600 mt-1 font-mono">-₹0.00</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">BOM order deductions</div>
                </div>

                <div className="p-3 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-rose-600 uppercase tracking-wider font-mono">WASTE / SPOILAGE</div>
                  <div className="text-base sm:text-lg font-black text-rose-600 mt-1 font-mono">₹0.00</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">Logged kitchen waste</div>
                </div>

                <div className="p-3 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">CLOSING VALUATION</div>
                  <div className="text-base sm:text-lg font-black text-[#141414] mt-1 font-mono">₹3,610.00</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">Calculated day close</div>
                </div>

                <div className="p-3 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-amber-600 uppercase tracking-wider font-mono">⚠️ LOW STOCK ITEMS</div>
                  <div className="text-base sm:text-lg font-black text-amber-600 mt-1 font-mono">0 items</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">Below reorder point</div>
                </div>
              </div>

              {/* Daily Audit Table */}
              <div className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse text-xs min-w-[820px]">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50/70 text-stone-400 font-mono text-[10px] uppercase tracking-wider font-bold">
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
                <div className="px-4 py-2 bg-stone-50 border-t border-stone-200/80 text-[10px] text-stone-400 font-mono text-center sm:hidden">
                  ← Swipe horizontally to view full ledger table →
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Dish Consumption (BOM) */}
          {activeTab === 'bom' && (
            <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-2.5 xs:gap-3">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <Scale className="w-4 h-4 xs:w-4.5 xs:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Daily Dish Consumption (BOM)
                    </h4>
                    <p className="text-[11px] xs:text-xs text-stone-500 mt-0.5 leading-relaxed">
                      Compare theoretical ingredient usage (Sold Dishes × Recipe BOM) with actual kitchen consumption to catch shrinkage and waste.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <button 
                    onClick={handleRefresh}
                    className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center touch-manipulation"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('recipes')}
                    className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center touch-manipulation"
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Manage BOMs</span>
                  </button>
                </div>
              </div>

              {/* Blue Guidelines Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <div className="flex items-center gap-2 font-bold text-xs text-blue-900 mb-2.5">
                  <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>How Daily Dish Consumption &amp; Recipe BOM Monitoring Works</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-blue-950">
                  <div className="space-y-1 bg-white/60 p-2.5 rounded-xl border border-blue-100/70">
                    <div className="font-bold text-blue-900">1. Portion Cost (1 Serving)</div>
                    <p className="text-blue-800/80 leading-relaxed text-[11px]">
                      Theoretical cost of raw ingredients needed to prepare a single serving according to your configured Recipe BOM.
                    </p>
                  </div>
                  <div className="space-y-1 bg-white/60 p-2.5 rounded-xl border border-blue-100/70">
                    <div className="font-bold text-blue-900">2. Total Ingredient Cost</div>
                    <p className="text-blue-800/80 leading-relaxed text-[11px]">
                      Portion Cost × Number of dishes sold today. Reflects standard monetary value of stock that should have been consumed.
                    </p>
                  </div>
                  <div className="space-y-1 bg-white/60 p-2.5 rounded-xl border border-blue-100/70">
                    <div className="font-bold text-[#008726]">3. Zero (0) Variance</div>
                    <p className="text-blue-800/80 leading-relaxed text-[11px]">
                      Variance = Actual Ledger Stock Deducted - Expected BOM Usage. When Variance is 0, it means <strong className="text-[#008726]">100% BOM Efficiency</strong> with zero shrinkage!
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 Variance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">DISHES PREPARED</div>
                  <div className="text-xl sm:text-2xl font-black text-[#141414] mt-0.5">51</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">Non-cancelled orders</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-blue-600 uppercase tracking-wider font-mono">INGREDIENTS LINKED</div>
                  <div className="text-xl sm:text-2xl font-black text-blue-600 mt-0.5">0</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">Linked in active BOMs</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">EXPECTED COST (BOM)</div>
                  <div className="text-xl sm:text-2xl font-black text-[#141414] mt-0.5 font-mono">₹0.00</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">Standard portions</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-blue-600 uppercase tracking-wider font-mono">ACTUAL LEDGER COST</div>
                  <div className="text-xl sm:text-2xl font-black text-blue-600 mt-0.5 font-mono">₹0.00</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 truncate">Total deducted stock</div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-[9.5px] font-bold text-rose-600 uppercase tracking-wider font-mono">⚠️ EXCESS VARIANCE LOSS</div>
                  <div className="text-xl sm:text-2xl font-black text-rose-600 mt-0.5 font-mono">₹0.00</div>
                  <div className="text-[10px] text-[#008726] font-bold mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
                    <span>100% Efficiency — Zero Waste</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Price Fluctuation & Rates */}
          {activeTab === 'rates' && (
            <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-2.5 xs:gap-3">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <TrendingUp className="w-4 h-4 xs:w-4.5 xs:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                      Item Price Fluctuation &amp; Rates
                    </h4>
                    <p className="text-[11px] xs:text-xs text-stone-500 mt-0.5 leading-relaxed">
                      Automatic detection of ≥5% supplier rate shifts, rate history tracking, and multi-vendor pricing intelligence.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <button 
                    onClick={handleRefresh}
                    className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center touch-manipulation"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                  <button className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center touch-manipulation">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Purchase Bills</span>
                  </button>
                </div>
              </div>

              {/* Sub-tabs */}
              <div className="grid grid-cols-2 sm:flex items-center gap-2 border-b border-stone-200 pb-2">
                <button
                  onClick={() => setPriceSubTab('alerts')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation ${
                    priceSubTab === 'alerts'
                      ? 'bg-amber-100 text-amber-900 border border-amber-200'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span className="truncate">Price Shift Alerts</span>
                </button>
                <button
                  onClick={() => setPriceSubTab('vendor')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation ${
                    priceSubTab === 'vendor'
                      ? 'bg-emerald-100 text-[#008726] border border-emerald-200'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <Boxes className="w-3.5 h-3.5 text-[#008726]" />
                  <span className="truncate">Multi-Vendor Analysis</span>
                </button>
              </div>

              {/* Rate Analysis Table */}
              <div className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse text-xs min-w-[740px]">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50/70 text-stone-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                        <th className="py-3 px-4">ITEM NAME</th>
                        <th className="py-3 px-4">CATEGORY</th>
                        <th className="py-3 px-4">CURRENT STOCK</th>
                        <th className="py-3 px-4">LATEST PURCHASE RATE</th>
                        <th className="py-3 px-4">AVG RATE</th>
                        <th className="py-3 px-4">RECENT SHIFT</th>
                        <th className="py-3 px-4">SUPPLIER</th>
                        <th className="py-3 px-4">BULK SAVINGS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-50/60 transition-colors">
                          <td className="py-3 px-4">
                            <div className="font-bold text-stone-900">{item.name}</div>
                            <div className="text-[10px] text-stone-400">{item.supplier}</div>
                          </td>
                          <td className="py-3 px-4 text-stone-600 font-medium">{item.category}</td>
                          <td className="py-3 px-4 font-bold font-mono">{item.availableStock} {item.unit}</td>
                          <td className="py-3 px-4 font-mono font-bold text-stone-900">
                            ₹{item.latestPurchaseRate?.toFixed(2)} <span className="text-[10px] font-normal text-stone-400">/{item.unit}</span>
                          </td>
                          <td className="py-3 px-4 font-mono">₹{item.avgRate?.toFixed(2)}</td>
                          <td className="py-3 px-4 font-mono text-stone-500">{item.recentShift}</td>
                          <td className="py-3 px-4 text-stone-500 text-[11px]">{item.supplier}</td>
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
                <div className="px-4 py-2 bg-stone-50 border-t border-stone-200/80 text-[10px] text-stone-400 font-mono text-center sm:hidden">
                  ← Swipe horizontally to view supplier rate comparisons →
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Dish Recipes (BOM) */}
          {activeTab === 'recipes' && (
            <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-2.5 xs:gap-3">
                  <button 
                    onClick={() => setActiveTab('catalog')}
                    className="w-8 h-8 rounded-xl border border-stone-200 hover:bg-stone-50 flex items-center justify-center text-stone-600 shrink-0 mt-0.5 sm:mt-0"
                    title="Back to Catalog"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg xs:text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                        Dish Recipes &amp; BOM
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-[#008726]">
                        2 Linked
                      </span>
                    </div>
                    <p className="text-[11px] xs:text-xs text-stone-500 mt-0.5 leading-relaxed">
                      Configure precise ingredient formulations, monitor real-time dish food costs, and automate inventory depletion.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <button 
                    onClick={() => setActiveTab('catalog')}
                    className="rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 gap-1.5 h-9 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center touch-manipulation"
                  >
                    <Boxes className="w-3.5 h-3.5 text-stone-500" />
                    <span>Raw Items</span>
                  </button>
                  <button className="rounded-xl bg-[#008726] hover:bg-[#007420] text-white gap-1.5 h-9 px-3.5 text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center touch-manipulation">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add BOM Link</span>
                  </button>
                </div>
              </div>

              {/* 4 Formulation KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">CONFIGURED BOMS</div>
                    <UtensilsCrossed className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#141414] mt-1 font-mono">
                    2 <span className="text-stone-400 text-xs font-normal">/ 120 Dishes</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">RAW MATERIALS</div>
                    <Boxes className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#141414] mt-1 font-mono">
                    3 <span className="text-stone-400 text-xs font-normal">Ingredients</span>
                  </div>
                  <div className="text-[10px] text-[#008726] font-medium mt-1 truncate">Auto-deducted at billing</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">AVG PORTION COST</div>
                    <span className="text-xs font-mono font-bold text-emerald-600">₹</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#141414] mt-1 font-mono">
                    ₹24.00 <span className="text-stone-400 text-xs font-normal">/dish</span>
                  </div>
                  <div className="text-[10px] text-stone-400 mt-1 truncate">From raw purchase rates</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider font-mono">GROSS MARGIN</div>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-rose-600 mt-1 font-mono">
                    17.5% <span className="text-stone-400 text-xs font-normal">&gt;65% Goal</span>
                  </div>
                  <div className="text-[10px] text-stone-400 mt-1 truncate">1 high margin dish</div>
                </div>
              </div>

              {/* Recipe Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                {RECIPES_DATA.map((r) => (
                  <div key={r.id} className="p-3.5 sm:p-4 rounded-2xl border border-stone-200/90 bg-white shadow-2xs flex flex-col justify-between hover:border-[#008726]/40 transition-colors">
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

                      <h4 className="font-extrabold text-stone-900 text-sm">{r.name}</h4>
                      <div className="text-xs text-stone-500 font-mono mt-0.5">Menu Price: ₹{r.price.toFixed(2)}</div>

                      <div className="mt-3 p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/70 text-[10.5px] text-amber-900 flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>No recipe linked yet. Add raw ingredient formula to start automatic deduction.</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full py-2.5 rounded-xl bg-[#008726] hover:bg-[#007420] text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 shadow-xs touch-manipulation active:scale-[0.98]">
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

      {/* 6. Technical Specifications Matrix */}
      <section className="py-7 sm:py-10 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto border-t border-stone-200/80">
        <div className="max-w-2xl mb-5 sm:mb-6">
          <span className="text-[10.5px] xs:text-[11px] font-bold uppercase tracking-wider text-[#008726] font-mono">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#141414] mt-0.5">
            System Capabilities &amp; Standards
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Detailed specifications for restaurant operators, culinary leads, and accountants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
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

      {/* 7. Action / Next Steps Banner */}
      <section className="pb-8 sm:pb-10 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
        <div className="bg-[#0B3B24] rounded-2xl p-5 xs:p-6 sm:p-8 text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-5 text-center sm:text-left">
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Ready to implement Tavola Inventory in your kitchen?
            </h2>
            <p className="text-xs text-stone-300 mt-1 max-w-xl leading-relaxed">
              Schedule a technical walkthrough with our team or explore how the operations suite integrates with your existing workflow.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row items-center gap-2.5 sm:gap-3 shrink-0 pt-2 sm:pt-0">
            <Link href="/demo" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-5 py-2.5 rounded-full bg-[#BCE440] hover:bg-[#aacc2f] text-[#0B3B24] text-xs font-bold transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
              >
                Schedule Walkthrough
              </button>
            </Link>
            <Link href="/product" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs font-medium transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
              >
                All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-6 px-4 sm:px-6 lg:px-12 text-center text-xs text-stone-500">
        <div className="max-w-[1480px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#0B3B24] tracking-tight font-serif italic text-sm">Tavola</span>
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
