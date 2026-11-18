'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Wallet, 
  Receipt, 
  TrendingUp, 
  FileSpreadsheet, 
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  AlertTriangle,
  Building2,
  Calendar,
  CreditCard,
  DollarSign,
  PieChart,
  ShieldCheck,
  Smartphone,
  Laptop,
  ArrowUpRight,
  PlusCircle,
  FileCheck2,
  Scale
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

type ExpenseCapabilityKey = 'petty_cash' | 'vendor_ap' | 'staff_advances' | 'pnl_reports';

interface ExpenseCapabilityMeta {
  key: ExpenseCapabilityKey;
  label: string;
  badge: string;
  icon: typeof Wallet;
  title: string;
  description: string;
  kpis: { label: string; value: string; hint: string }[];
  steps: string[];
}

const EXPENSE_CAPABILITIES: ExpenseCapabilityMeta[] = [
  {
    key: 'petty_cash',
    label: 'Petty Cash Wallet',
    badge: 'MOBILE OCR',
    icon: Wallet,
    title: 'Mobile Cash Outflows & Instant Slip Capture',
    description: 'Empower floor and kitchen managers to log market vegetable runs, ice deliveries, and emergency repairs on smartphone cameras with instant cash drawer balance updates.',
    kpis: [
      { label: 'RECEIPT LOGGING', value: '< 5 Seconds', hint: 'Camera snap with AI OCR total extraction' },
      { label: 'DRAWER VARIANCE', value: '₹0.00', hint: 'Opening float to closing count reconciliation' },
      { label: 'APPROVAL CONTROL', value: 'Role-Based', hint: 'Manager sign-off for expenses > ₹1,000' },
    ],
    steps: [
      'Floor manager snaps photo of physical vendor receipt or handwritten voucher',
      'Selects expense category (Market Purchases, Gas & Utilities, Repairs, Delivery)',
      'Cash drawer ledger balance auto-deducts with timestamped supervisor verification',
    ],
  },
  {
    key: 'vendor_ap',
    label: 'Vendor Credit & AP',
    badge: 'PAYMENT RADAR',
    icon: Receipt,
    title: 'Supplier Payables & Credit Term Schedules',
    description: 'Track outstanding distributor balances, 7/15/30-day credit cycles, and early-payment discounts. Generate verified payment vouchers directly on WhatsApp.',
    kpis: [
      { label: 'DISPUTE REDUCTION', value: '100%', hint: 'Matched against logged purchase bills' },
      { label: 'EARLY DISCOUNT', value: '2% - 5%', hint: 'Capture cash discounts on early settlements' },
      { label: 'PAYMENT MODES', value: 'UPI / NEFT / Cash', hint: 'Multi-mode payment recording with UTR' },
    ],
    steps: [
      'Log supplier purchase invoices with due dates and payment discount windows',
      'View daily aging calendar of upcoming distributor payments to manage liquidity',
      'Record settlements with UTR reference numbers and auto-send WhatsApp payment confirmation',
    ],
  },
  {
    key: 'staff_advances',
    label: 'Staff Advances & Tips',
    badge: 'AUTO-DEDUCT',
    icon: CreditCard,
    title: 'Employee Advances, Shift Payouts & Tip Pooling',
    description: 'Stop unrecorded loans and payroll confusion. Track staff salary advances, daily commis cash allowances, and digital tip distributions with automated payroll deductions.',
    kpis: [
      { label: 'ADVANCE RECOVERY', value: '100% Automated', hint: 'Auto-deducted from month-end salary' },
      { label: 'TIP POOLING', value: 'Custom Roster', hint: 'Transparent front/back-of-house split' },
      { label: 'DIGITAL SIGN-OFF', value: 'Instant OTP', hint: 'SMS/WhatsApp voucher confirmation' },
    ],
    steps: [
      'Record cash advance request with staff PIN or OTP confirmation',
      'System auto-generates digital voucher and locks against employee salary ledger',
      'Distribute daily card/UPI tips equitably based on hours clocked during shift',
    ],
  },
  {
    key: 'pnl_reports',
    label: 'Live P&L & Tax',
    badge: 'REAL-TIME MARGIN',
    icon: PieChart,
    title: 'Continuous Daily Profit & Loss Ledger',
    description: 'Know your exact restaurant net profit before turning off the kitchen lights. Prime costs, petty outflows, and revenue reconcile continuously into actionable P&L statements.',
    kpis: [
      { label: 'FOOD COST (FC%)', value: 'Live 28.5%', hint: 'Tracked continuously against gross sales' },
      { label: 'GST MATCHING', value: 'GSTR-2B Ready', hint: '100% Input Tax Credit verification' },
      { label: 'TALLY SYNC', value: '1-Click XML', hint: 'Direct export for chartered accountants' },
    ],
    steps: [
      'Aggregates all POS dine-in, takeaway, and delivery sales into gross revenue',
      'Deducts real-time BOM ingredient consumption, petty cash expenses, and labor',
      'Displays live gross margin, prime cost percentage, and daily net take-home profit',
    ],
  },
];

const EXPENSE_SPECS = [
  {
    title: 'Cash & Petty Outflows',
    specs: [
      { name: 'Receipt Capture', detail: 'Mobile camera upload, PDF attachment, thermal slip scan, and manual quick-entry' },
      { name: 'Float Management', detail: 'Opening morning cash drawer float, midday replenishments, and shift handovers' },
      { name: 'Approval Matrix', detail: 'Tiered permission limits (e.g., Captain up to ₹500, GM up to ₹10,000, Owner unrestricted)' },
      { name: 'Categorization', detail: 'Unlimited custom categories (Kitchen market, Bar consumables, Fuel/Gas, Office supplies, Cleaning)' },
    ],
  },
  {
    title: 'Vendor Payables (AP)',
    specs: [
      { name: 'Credit Term Tracking', detail: 'Configurable vendor payment terms (COD, 7 days, 15 days, 30 days, 45 days)' },
      { name: 'Aging Reports', detail: '0-7 days, 8-15 days, 16-30 days, and 30+ days overdue supplier balance buckets' },
      { name: 'Payment Vouchers', detail: 'Formal settlement vouchers with bank transaction ID, cheque number, or UPI reference' },
      { name: 'Vendor Ledger Export', detail: 'Complete vendor statement generation for reconciling distributor accounts' },
    ],
  },
  {
    title: 'P&L & Financial Metrics',
    specs: [
      { name: 'Prime Cost Calculation', detail: 'Continuous formula: Raw Food Cost + Kitchen Direct Labor / Total Food & Beverage Revenue' },
      { name: 'Operating Margins', detail: 'Tracks EBITDA, Gross Profit Margin, Net Operating Margin, and Controllable Expenses' },
      { name: 'GST Input Tax Credit', detail: 'Captures vendor GSTIN, invoice date, HSN breakdown, and eligible CGST/SGST/IGST credits' },
      { name: 'Cash Reconciliation', detail: 'Daily physical cash collected vs POS system expected cash with audit variance tracker' },
    ],
  },
  {
    title: 'Software & Accounting Sync',
    specs: [
      { name: 'Accounting Compatibility', detail: 'Native XML and Excel format exports optimized for Tally Prime, Zoho Books, and SAP' },
      { name: 'Multi-Outlet Consolidation', detail: 'Compare prime costs and expense ratios across multiple chain branches in one dashboard' },
      { name: 'Cloud Audit Trail', detail: 'Immutable financial logs with user identity, edit histories, and tamper-resistant timestamps' },
      { name: 'Data Security', detail: 'Bank-grade 256-bit TLS encryption with daily off-site cloud financial backups' },
    ],
  },
];

export default function ExpensesProductPage() {
  const [activeCapability, setActiveCapability] = useState<ExpenseCapabilityKey>('petty_cash');
  const currentCapability = EXPENSE_CAPABILITIES.find(c => c.key === activeCapability) || EXPENSE_CAPABILITIES[0];

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
            <span className="text-[#0B3B24] font-bold shrink-0">Expenses &amp; Cash Flow</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-500 font-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#008726] animate-pulse"></span>
            <span>Operations Suite • Module 02 • Finance</span>
          </div>
        </div>
      </div>

      {/* 3. Refined Editorial Hero Section */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/15 text-[#0B3B24] text-[11px] font-bold tracking-tight mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>TAVOLA OPERATIONS SUITE • EXPENSES &amp; CASH FLOW</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141414] tracking-[-0.03em] leading-[1.12]">
            Automated Restaurant Expenses &amp; Cash Flow Tracker
          </h1>

          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-normal">
            Stop guessing your month-end P&amp;L. Capture mobile petty cash slips, track bulk vendor credit schedules, prevent cash drawer leakage, and calculate your true food cost percentage in real-time.
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
            <span>Managing daily restaurant finances across 10,000+ busy food brands:</span>
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
             - Feature 1: Mobile Petty Cash Slips in 5 Seconds
             - Feature 2: Vendor Credit & Payables Schedule
             - Feature 3: Real-Time Daily P&L & Food Cost (FC%)
         ========================================================================= */}
      <section id="features" className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto space-y-16 sm:space-y-24 border-t border-stone-200/80 scroll-mt-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
            FINANCIAL INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141414] tracking-tight mt-1.5">
            Total control over cash outflows &amp; vendor bills
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Eliminate unrecorded cash leaks, dispute supplier invoices with proof, and monitor daily food cost percentages before month-end surprise.
          </p>
        </div>

        {/* Feature 1: Mobile Petty Cash Slips */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5 text-[#008726]" /> Petty Cash Outflow • Slip #PC-1082
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    Verified &amp; Deducted
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block">Commercial LPG Cylinder Refill</span>
                      <span className="text-[10.5px] text-stone-500 font-mono">Kitchen Utility • Approved by GM</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900 text-sm">₹2,150.00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block">Ice Block (40 kg) Morning Supply</span>
                      <span className="text-[10.5px] text-stone-500 font-mono">Bar &amp; Pantry Consumable</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900 text-sm">₹400.00</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-stone-500 text-[10px] uppercase font-mono block">Cash Drawer Balance:</span>
                    <span className="font-mono font-black text-[#0B3B24] text-sm">₹7,450.00 <span className="text-[10px] text-stone-500 font-normal">/ ₹10,000 Float</span></span>
                  </div>
                  <div className="text-right">
                    <span className="text-stone-500 text-[10px] uppercase font-mono block">Audit Status:</span>
                    <span className="font-mono font-bold text-[#008726] text-xs">₹0.00 Variance</span>
                  </div>
                </div>

                <div className="text-[10.5px] text-stone-500 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008726] shrink-0" />
                  <span>Receipt photo archived in cloud with timestamp and staff badge ID.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              PETTY CASH MANAGEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Snap &amp; record daily <span className="text-[#008726]">petty cash slips</span> in under 5 seconds
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Market vegetable runs, ice deliveries, emergency repairs, and courier fees often vanish without trace. Floor managers snap bills directly on their smartphone camera with instant AI total extraction, automated categorization, and cash drawer balance deduction.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>See mobile receipt capture in action</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 2: Vendor Credit & Payables Schedule */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              ACCOUNTS PAYABLE &amp; VENDORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Never miss a supplier credit cycle or <span className="text-[#008726]">vendor discount term</span>
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Eliminate vendor payment disputes and late fees. Track unpaid purchase bills, 7/15/30-day supplier credit terms, and cash flow forecasts with WhatsApp settlement vouchers sent straight to distributors.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Explore vendor payment schedules</span>
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
                    <Building2 className="w-3.5 h-3.5 text-blue-700" /> Supplier Invoice Payable
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                    Due in 2 Days
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>Metro Dairy Farms • Invoice #INV-9902</span>
                    <span className="font-mono text-base text-stone-900">₹24,800.00</span>
                  </div>
                  <div className="text-[11px] text-stone-600 flex justify-between">
                    <span>Credit Term: 15 Days</span>
                    <span className="text-amber-800 font-semibold">Payment Due: Friday</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200/80 text-[10.5px] text-[#008726] flex items-center justify-between font-medium">
                    <span>🎯 Early Settlement Discount:</span>
                    <span className="font-mono font-bold">Save 2% (-₹496.00) if paid today</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-stone-500 font-mono">Modes: UPI / NEFT / Cheque</span>
                  <button className="px-3 py-1.5 rounded-lg bg-[#008726] hover:bg-[#007420] text-white font-bold text-[10.5px] cursor-pointer flex items-center gap-1 shadow-2xs">
                    <span>Generate Settlement Voucher</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Real-Time Daily P&L */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                    <PieChart className="w-3.5 h-3.5 text-[#008726]" /> Daily Operating Profit &amp; Loss
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    Live P&amp;L Reconciled
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-[11px] space-y-1.5 text-stone-700">
                  <div className="flex justify-between">
                    <span>1. Gross Sales (POS + Online)</span>
                    <span className="font-bold text-stone-900">₹94,250.00</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>2. (-) Raw Material Cost (BOM)</span>
                    <span>-₹28,275.00 (30.0%)</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>3. (-) Petty Cash Outflows</span>
                    <span>-₹4,320.00</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>4. (-) Shift Labor &amp; Wages</span>
                    <span>-₹14,500.00</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>5. (-) Utilities &amp; Overheads</span>
                    <span>-₹6,200.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-stone-900 pt-2 border-t border-stone-200 text-xs">
                    <span>Net Operating Profit:</span>
                    <span className="text-[#008726] text-sm">₹40,955.00 (43.4%)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-stone-500 font-mono">Format: Tally Prime XML / Excel</span>
                  <span className="px-3 py-1 rounded-lg bg-[#008726] hover:bg-[#007420] text-white font-bold text-[10px] cursor-pointer flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    <span>Export P&amp;L Statement</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              DAILY PROFIT &amp; LOSS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Real-time <span className="text-[#008726]">daily P&amp;L reports</span> with exact food cost margin
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Calculate your prime costs (Food Cost + Direct Labor) against gross revenue every night. Know your exact net profit before turning off kitchen lights, with zero manual spreadsheet formulas or end-of-month panic.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>View daily P&amp;L analytics workflow</span>
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
              FINANCIAL MODULES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#141414] tracking-tight mt-1">
              Interactive Financial Operations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Inspect how Tavola automates daily cash workflows, vendor credit aging, and tax compliance across your outlets.
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
          {EXPENSE_CAPABILITIES.map((cap) => {
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
                  Standard Financial Workflow:
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
                Financial Precision Benchmarks
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
                    <span>Test This In Live Financial Sandbox</span>
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
                Anywhere Financial Control — Accessible on Any Phone, Tablet or Laptop
              </div>
              <div className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                Staff can snap slips on Android or iPhone while accountants view aggregated ledgers on Windows or Mac. No special hardware required.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-[#008726] font-bold text-xs">
              7-Day Free Financial Trial
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
            Financial Standards &amp; Architecture
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Detailed specifications for finance directors, restaurant owners, and chartered accountants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EXPENSE_SPECS.map((group, idx) => (
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
              READY TO CONTROL RESTAURANT CASH FLOW?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              Start stopping cash leakages in your business today
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Schedule a 20-minute technical walkthrough with our team or explore how Expenses connects with Tavola Inventory and POS.
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
            <span>• Expenses Tracker &amp; Cash Flow Management</span>
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
