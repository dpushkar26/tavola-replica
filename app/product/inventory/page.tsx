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
  ChevronRight,
  Download,
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Smartphone,
  Laptop,
  ArrowUpRight
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

type CapabilityKey = 'catalog' | 'daily' | 'bom' | 'rates';

interface CapabilityMeta {
  key: CapabilityKey;
  label: string;
  badge: string;
  icon: typeof Boxes;
  title: string;
  description: string;
  kpis: { label: string; value: string; hint: string }[];
  steps: string[];
}

const CAPABILITIES: CapabilityMeta[] = [
  {
    key: 'catalog',
    label: 'Perpetual Catalog',
    badge: 'LIVE FIFO',
    icon: Boxes,
    title: 'Real-Time Ingredient & Stock Catalog',
    description: 'Track pantry staples, dairy, dry fruits, meats, and bar stock with automated low-stock reorder triggers and live FIFO valuation.',
    kpis: [
      { label: 'VALUATION METHOD', value: 'Live FIFO', hint: 'Real-time continuous valuation' },
      { label: 'REORDER ALERTS', value: 'Real-Time', hint: 'Automated push & SMS triggers' },
      { label: 'UNIT CONVERSION', value: 'Multi-Tier', hint: 'Grams, kg, ml, litres & crates' },
    ],
    steps: [
      'Inward raw items with supplier batch & rate recording',
      'Assign custom low-stock thresholds per preparation station',
      'Automated transfer tracking between central store & kitchen line',
    ],
  },
  {
    key: 'daily',
    label: 'Daily Audit Ledger',
    badge: 'AUDIT RECONCILED',
    icon: FileText,
    title: 'Opening to Closing Stock Reconciliation',
    description: 'Audit every gram that enters and exits your kitchen. Mathematically balance opening stock + inwards - consumption - waste to closing stock.',
    kpis: [
      { label: 'AUDIT CADENCE', value: 'Daily Close', hint: 'End-of-shift reconciliation' },
      { label: 'VARIANCE TOLERANCE', value: '0.001g', hint: 'Sub-gram balance precision' },
      { label: 'ONE-CLICK EXPORT', value: '.xlsx / CSV', hint: 'Instant accountant-ready reports' },
    ],
    steps: [
      'Automatic sync of all tickets punched throughout the day',
      'Log kitchen prep spoilage and return-to-vendor write-offs',
      'Generate day-end closing variance report with zero spreadsheet work',
    ],
  },
  {
    key: 'bom',
    label: 'Recipe BOM Engine',
    badge: 'SUB-GRAM PRECISION',
    icon: UtensilsCrossed,
    title: 'Dynamic Bill of Materials (BOM) & Food Cost',
    description: 'Map raw ingredients to menu dishes with sub-gram portion granularity. As dishes are ordered at tables or online, ingredients deplete automatically.',
    kpis: [
      { label: 'PORTION FORMULAS', value: '0.001g', hint: 'Granular sub-gram portioning' },
      { label: 'PLATE FOOD COST', value: 'Dynamic', hint: 'Recalculates on every purchase bill' },
      { label: 'NESTED BOMS', value: 'Multi-Level', hint: 'Sauces, marinades to finished plate' },
    ],
    steps: [
      'Link menu items to exact raw ingredient portions (e.g. 150g paneer, 30g butter)',
      'Trigger instant inventory deduction upon POS or QR order placement',
      'Track live gross margin per dish against a configurable target (e.g. > 68%)',
    ],
  },
  {
    key: 'rates',
    label: 'Supplier Rate Radar',
    badge: 'RATE ALERT ACTIVE',
    icon: TrendingUp,
    title: 'Vendor Bill Intelligence & Rate Shift Alerts',
    description: 'Stop supplier bill creep before issuing payment. Tavola flags price increases ≥5% against historical baselines and highlights multi-vendor savings.',
    kpis: [
      { label: 'SHIFT THRESHOLD', value: '≥ 5% Trigger', hint: 'Immediate manager alert on increase' },
      { label: 'VENDOR COMPARISON', value: 'Multi-Vendor', hint: 'Cross-supplier pricing radar' },
      { label: 'BULK SAVINGS', value: 'Up to 12%', hint: 'Automated pack-size recommendations' },
    ],
    steps: [
      'Scan or enter supplier purchase bills with automated line-item parsing',
      'Instant warning flag when vendor rates rise above 30-day baseline',
      'Compare quotes across registered distributors before placing fresh POs',
    ],
  },
];

const SPECIFICATION_GROUPS = [
  {
    title: 'Stock & Inventory Engine',
    specs: [
      { name: 'Supported Units', detail: 'Kilograms (kg), Grams (g), Litres (L), Millilitres (ml), Packets, Crates, Cans, Pieces, Custom Units' },
      { name: 'Unit Conversion', detail: 'Bidirectional automatic conversions (e.g., 1 packet milk = 500 ml = 0.5 L in dish formulas)' },
      { name: 'Depletion Valuation', detail: 'Real-time FIFO (First-In, First-Out) with continuous weighted-average cost calculation' },
      { name: 'Reorder Thresholds', detail: 'Configurable Min/Max alert thresholds per item with automated notification triggers' },
    ],
  },
  {
    title: 'Recipe & BOM Formulations',
    specs: [
      { name: 'Formulation Depth', detail: 'Multi-tier nested BOMs (Raw Ingredients → Prep Sauces / Marinades → Finished Plate)' },
      { name: 'Portion Granularity', detail: 'Sub-gram accuracy (up to 3 decimal places for spices, seasonings, and bar spirits)' },
      { name: 'Plate Cost Recalculation', detail: 'Continuous live recalculation of dish cost whenever new supplier purchase bills are logged' },
      { name: 'Dietary & Allergen Tags', detail: 'Veg, Non-Veg, Egg, Vegan, and allergen markers synchronized with POS menu items' },
    ],
  },
  {
    title: 'Audit & Compliance Ledger',
    specs: [
      { name: 'Audit Formula', detail: 'Opening Stock + Purchases - Order Consumption - Logged Waste = Theoretical Closing Stock' },
      { name: 'Immutable Log', detail: 'Detailed audit log tracking timestamp, user identity, and reason for manual inventory adjustments' },
      { name: 'Access Permissions', detail: 'Role-based manager approvals required for stock overrides, write-offs, and rate adjustments' },
      { name: 'Export Formats', detail: 'Standard CSV, formatted Microsoft Excel (.xlsx), and printable PDF audit sheets' },
    ],
  },
  {
    title: 'System & Hardware Integration',
    specs: [
      { name: 'Hardware Independence', detail: 'Cloud application accessible via iPad, Android tablets, Windows POS, macOS, or mobile browsers' },
      { name: 'Barcode & QR Scanning', detail: 'Compatible with mobile camera scanning, Bluetooth barcode wands, and USB scanners' },
      { name: 'POS Synchronization', detail: 'Instant sub-second sync across table ordering, kitchen displays, and billing counters' },
      { name: 'Data Security', detail: 'Encrypted data transmission (TLS 1.3) with automated daily cloud database backups' },
    ],
  },
];

export default function InventoryProductPage() {
  const [activeCapability, setActiveCapability] = useState<CapabilityKey>('catalog');
  const currentCapability = CAPABILITIES.find(c => c.key === activeCapability) || CAPABILITIES[0];

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#141414] font-sans antialiased selection:bg-[#BCE440]/40 selection:text-[#0B3B24] overflow-x-hidden">
      
      {/* 1. Global Navigation */}
      <LandingNavbar />

      {/* 2. Breadcrumb Navigation Bar */}
      <div className="border-b border-stone-200/80 bg-white/70 backdrop-blur-md px-3 xs:px-4 sm:px-6 lg:px-12 py-2.5 text-xs">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-stone-500 font-medium overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <Link href="/" className="hover:text-[#0B3B24] transition-colors shrink-0">Tavola</Link>
            <span className="shrink-0 text-stone-300">/</span>
            <Link href="/product" className="hover:text-[#0B3B24] transition-colors shrink-0">Products</Link>
            <span className="shrink-0 text-stone-300">/</span>
            <span className="text-[#0B3B24] font-bold shrink-0">Inventory &amp; Recipe BOM</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-500 font-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#008726] animate-pulse"></span>
            <span>Operations Suite • Module 01</span>
          </div>
        </div>
      </div>

      {/* 3. Refined Editorial Hero Section */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/15 text-[#0B3B24] text-[11px] font-bold tracking-tight mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>TAVOLA OPERATIONS SUITE • INVENTORY &amp; RECIPES</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141414] tracking-[-0.03em] leading-[1.12]">
            Perpetual Ingredient Stock &amp; Sub-Gram Recipe BOM
          </h1>

          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-normal">
            Eliminate food cost leakage at the source. Automate ingredient depletion on every punched dish, detect supplier bill creep before invoice payment, and reconcile day-end closing balances to the gram.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 pt-5 sm:pt-6">
            <Link href="/demo" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-6 py-3 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] text-white text-xs sm:text-[13px] font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm touch-manipulation active:scale-[0.98]"
              >
                <span>Schedule 1-on-1 Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <a href="#features" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-5 py-3 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation active:scale-[0.98]"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </a>
          </div>

        </div>

        {/* Brand Trust Barometer */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-500">
          <div className="font-semibold text-stone-700 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>Trusted by 10,000+ commercial kitchens &amp; restaurant brands:</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-stone-600 font-bold overflow-x-auto no-scrollbar whitespace-nowrap text-xs">
            <span className="hover:text-stone-900 transition-colors">The Rustic Spatula</span>
            <span className="text-stone-300">•</span>
            <span className="hover:text-stone-900 transition-colors">Moti Mahal</span>
            <span className="text-stone-300">•</span>
            <span className="hover:text-stone-900 transition-colors">Yum Yum Cha</span>
            <span className="text-stone-300">•</span>
            <span className="hover:text-stone-900 transition-colors">Hocco Eatery</span>
            <span className="text-stone-300">•</span>
            <span className="hover:text-stone-900 transition-colors">La Pino&apos;z</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. REFINED ALTERNATING FEATURE DEMONSTRATIONS (Editorial Showcase)
             - Feature 1: Sub-Gram Recipe BOM Auto-Deductions
             - Feature 2: Supplier Price Fluctuation Radar
             - Feature 3: Day-End Closing Audit Reconciliation
         ========================================================================= */}
      <section id="features" className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto space-y-16 sm:space-y-24 border-t border-stone-200/80 scroll-mt-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
            INVENTORY INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141414] tracking-tight mt-1.5">
            Engineered for high-volume commercial kitchens
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Three core automation pillars designed to protect restaurant margins from the raw pantry line to vendor invoice payment.
          </p>
        </div>

        {/* Feature 1: Sub-Gram BOM Auto-Deductions */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[#008726]" /> Active BOM Formula: Butter Chicken
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    100% Efficiency
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="font-semibold text-stone-800">Fresh Boneless Chicken</span>
                    <span className="font-mono text-stone-600">180 g / serving</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="font-semibold text-stone-800">Makhani Gravy Base</span>
                    <span className="font-mono text-stone-600">120 ml / serving</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="font-semibold text-stone-800">Amul Fresh Cream &amp; Butter</span>
                    <span className="font-mono text-stone-600">25 g / serving</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-stone-500 text-[10px] uppercase font-mono block">Plate Food Cost:</span>
                    <span className="font-mono font-black text-[#0B3B24] text-sm">₹84.20 <span className="text-[10px] text-stone-500 font-normal">/portion</span></span>
                  </div>
                  <div className="text-right">
                    <span className="text-stone-500 text-[10px] uppercase font-mono block">Gross Margin:</span>
                    <span className="font-mono font-bold text-[#008726] text-xs">68.5% Target Met</span>
                  </div>
                </div>

                <div className="text-[10.5px] text-stone-500 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008726] shrink-0" />
                  <span>Auto-deducted in real-time as tickets punch on POS or mobile QR.</span>
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
              Link raw ingredients to menu dishes with granular portion precision. As orders are punched in the POS or mobile QR menu, Tavola automatically reduces raw inventory in real-time, eliminating midnight manual stock counting.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Configure sub-gram BOM formulas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 2: Supplier Rate Shift Radar */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
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
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Explore vendor rate intelligence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: UI Card Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#FAF7EE] p-5 sm:p-7 shadow-xl border border-[#DDD6C0] relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
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

                <div className="text-[10.5px] text-stone-500 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008726] shrink-0" />
                  <span>Vendor AP ledger auto-updates with payment due dates.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Day-End Closing Reconciliation */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#008726]" /> Day-End Closing Balance Formula
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                    FIFO Reconciled
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-[11px] space-y-1.5 text-stone-700">
                  <div className="flex justify-between">
                    <span>1. Opening Stock Valuation</span>
                    <span className="font-bold text-stone-900">₹38,450.00</span>
                  </div>
                  <div className="flex justify-between text-[#008726]">
                    <span>2. (+) Purchases Logged Today</span>
                    <span>+₹12,200.00</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>3. (-) BOM Order Consumption</span>
                    <span>-₹16,420.00</span>
                  </div>
                  <div className="flex justify-between text-rose-600">
                    <span>4. (-) Logged Kitchen Waste</span>
                    <span>-₹350.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-stone-900 pt-2 border-t border-stone-200 text-xs">
                    <span>Closing Stock Valuation:</span>
                    <span className="text-[#008726]">₹33,880.00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-stone-500 font-mono">Format: Excel (.xlsx) / CSV</span>
                  <span className="px-3 py-1 rounded-lg bg-[#008726] hover:bg-[#007420] text-white font-bold text-[10px] cursor-pointer flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    <span>Export Audit Report</span>
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
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Day-end <span className="text-[#008726]">audit reconciliation</span> that balances to the gram
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Say goodbye to unexplainable inventory variances. Tavola computes theoretical closing balances using continuous FIFO valuation and order consumption, highlighting spoilage, pilferage, and over-portioning instantly.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>View daily audit ledger workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          5. REFINED INTERACTIVE CAPABILITIES MATRIX (Compact & Professional)
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-stone-200/80">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
              CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#141414] tracking-tight mt-1">
              Interactive Operational Modules
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Select a module below to inspect workflow automation, accuracy benchmarks, and data sync mechanics.
            </p>
          </div>

          <Link href="/demo" className="shrink-0">
            <button className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold flex items-center gap-1.5 transition-all">
              <span>Request Guided Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
            </button>
          </Link>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            const isSelected = activeCapability === cap.key;
            return (
              <button
                key={cap.key}
                onClick={() => setActiveCapability(cap.key)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border cursor-pointer touch-manipulation ${
                  isSelected
                    ? 'bg-[#0B3B24] text-white border-[#0B3B24] shadow-md'
                    : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-white/15 text-white' : 'bg-emerald-50 text-[#008726]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-[#BCE440] text-[#0B3B24]' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {cap.badge}
                  </span>
                </div>
                <div className="font-extrabold text-xs sm:text-sm tracking-tight">{cap.label}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Details Canvas */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-5 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left: Overview & Key Steps */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-[11px] font-bold text-[#008726] font-mono uppercase tracking-wider">
                  MODULE SPECIFICATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight mt-1">
                  {currentCapability.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {currentCapability.description}
                </p>
              </div>

              <div className="pt-2 space-y-2.5">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">
                  Standard Automation Workflow:
                </div>
                <div className="space-y-2">
                  {currentCapability.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <span className="w-5 h-5 rounded-full bg-[#0B3B24] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: 3 KPI Specifications */}
            <div className="lg:col-span-5 bg-[#FAF7EE] rounded-2xl p-4 sm:p-5 border border-[#DDD6C0] space-y-3">
              <div className="text-xs font-bold text-[#0B3B24] uppercase tracking-wider font-mono pb-2 border-b border-[#DDD6C0]">
                System Accuracy Standards
              </div>

              <div className="space-y-3">
                {currentCapability.kpis.map((kpi, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-xl border border-stone-200">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono block">
                      {kpi.label}
                    </span>
                    <span className="text-base sm:text-lg font-black text-[#0B3B24] font-mono mt-0.5 block">
                      {kpi.value}
                    </span>
                    <span className="text-[11px] text-stone-500 mt-0.5 block">
                      {kpi.hint}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <Link href="/demo" className="w-full">
                  <button className="w-full py-2.5 rounded-xl bg-[#0B3B24] hover:bg-[#082b1a] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs">
                    <span>Test This In Live Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          6. ZERO HARDWARE LOCK-IN BANNER
         ========================================================================= */}
      <section className="py-6 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="bg-[#FAF7EE] border border-[#DDD6C0] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B3B24] text-white flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5 text-[#BCE440]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0B3B24]">
                Zero Hardware Lock-In — Runs On Your Existing Devices
              </div>
              <div className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                Compatible with iPads, Android Tablets, Windows Touch POS, MacBooks, and smartphones. Works with standard thermal ESC/POS printers.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-[#008726] font-bold text-xs">
              7-Day Free Kitchen Trial
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TECHNICAL SPECIFICATIONS MATRIX
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-stone-200/80">
        <div className="max-w-2xl mb-6 sm:mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#008726] font-mono">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#141414] mt-1 tracking-tight">
            System Capabilities &amp; Standards
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Detailed specifications for restaurant operators, culinary leads, and accountants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SPECIFICATION_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
              <div className="px-4 py-3 bg-[#FAF7EE] border-b border-stone-200 font-bold text-xs text-[#0B3B24] font-mono uppercase tracking-wider">
                {group.title}
              </div>
              <div className="divide-y divide-stone-100 text-xs">
                {group.specs.map((item, i) => (
                  <div key={i} className="p-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                    <span className="font-semibold text-stone-900 sm:w-1/3 shrink-0 text-xs">
                      {item.name}
                    </span>
                    <span className="text-stone-600 sm:w-2/3 text-xs leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION BANNER
         ========================================================================= */}
      <section className="pb-12 sm:pb-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="bg-[#0B3B24] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BCE440] font-mono">
              READY TO UPGRADE?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              Start stopping inventory loss in your kitchen today
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Schedule a 20-minute technical walkthrough with our team or explore how the rest of the Tavola operations suite connects to your front-of-house.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link href="/demo" className="w-full sm:w-auto">
              <button 
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#BCE440] hover:bg-[#aacc2f] text-[#0B3B24] text-xs font-bold transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
              >
                Schedule Walkthrough
              </button>
            </Link>
            <Link href="/product" className="w-full sm:w-auto">
              <button 
                type="button"
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs font-medium transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
              >
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Global Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-8 px-4 sm:px-6 lg:px-12 text-center text-xs text-stone-500">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#0B3B24] tracking-tight font-serif italic text-base">Tavola</span>
            <span>• Inventory &amp; Recipe Stock Intelligence</span>
          </div>
          <div>
            © {new Date().getFullYear()} Tavola Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-stone-600 font-medium">
            <Link href="/product" className="hover:text-[#0B3B24]">All Products</Link>
            <Link href="/demo" className="hover:text-[#0B3B24]">Request Demo</Link>
            <Link href="/#faq" className="hover:text-[#0B3B24]">FAQ</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
