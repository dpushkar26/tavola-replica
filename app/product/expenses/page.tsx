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
  Scale,
  RefreshCw,
  Upload,
  Search,
  Check,
  Clock,
  Layers,
  Users2,
  ArrowDownRight,
  Send,
  Eye
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

type PlatformModuleKey = 
  | 'direct_expenses' 
  | 'purchase_bills' 
  | 'payment_out' 
  | 'daily_reconciliation' 
  | 'parties_ledger' 
  | 'customer_khata';

interface PlatformModuleMeta {
  key: PlatformModuleKey;
  label: string;
  sub: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  kpis: { label: string; value: string; hint: string }[];
  workflow: string[];
}

const PLATFORM_MODULES: PlatformModuleMeta[] = [
  {
    key: 'direct_expenses',
    label: 'Direct Expenses',
    sub: 'Petty Cash & Vouchers',
    badge: 'PETTY CASH',
    title: 'Operating Expenses & Daily Cash Vouchers',
    subtitle: 'Track operating expenses, chai, fuel, rents and utility vouchers',
    description: 'Capture day-to-day cash outflows instantly. Record kitchen market runs, commercial cylinder refills, and cleaning supplies with attached receipt photos and instant drawer float deductions.',
    kpis: [
      { label: 'OPERATING OUTFLOW', value: '₹4,850.00', hint: 'Petty Cash + Vendor Procurement' },
      { label: 'DIRECT / INDIRECT', value: '₹3,100 / ₹1,750', hint: 'Operational vs Overhead Split' },
      { label: 'RECORD SPEED', value: '< 5 Seconds', hint: 'Camera upload & auto-categorization' },
    ],
    workflow: [
      'Floor manager taps "+ Add Expense" and snaps receipt photo or handwritten slip',
      'Assigns category (Cleaning & Supplies, Electricity, Market Purchases, Chai/Fuel)',
      'Cash drawer ledger balance auto-deducts with timestamped supervisor sign-off',
    ],
  },
  {
    key: 'daily_reconciliation',
    label: 'Daily Reconciliation',
    sub: 'Cashier vs POS & Bank UTR',
    badge: 'AUDIT MATRIX',
    title: 'Daily Payment & Cashier Reconciliation',
    subtitle: 'End-of-day verification: Cashier drawer counts vs POS database collections vs Bank/UPI gateway statements',
    description: 'Eliminate midnight cash shortages and uncollected QR orders. Cross-reference physical drawer cash against live POS database totals and bank settlement statements down to the exact rupee.',
    kpis: [
      { label: 'RECORDED INFLOW', value: '₹2,264.00', hint: 'Live POS collections (Cash + UPI)' },
      { label: 'DRAWER VARIANCE', value: '₹0.00 Match', hint: 'Physical cash declared vs database' },
      { label: 'TRANSACTION AUDIT', value: '14 Logged', hint: 'Time-stamped match audit trail' },
    ],
    workflow: [
      'Cashier counts drawer notes and enters physical cash total at shift handover',
      'System compares Cash (₹1,406) + UPI (₹858) against POS order database',
      'Highlights any uncollected QR orders or cash shortages before shift close',
    ],
  },
  {
    key: 'purchase_bills',
    label: 'Purchase Bills',
    sub: 'Vendor Invoices & Dues',
    badge: 'INVOICE DUES',
    title: 'Supplier Purchase Invoices & Credit Cycles',
    subtitle: 'Track incoming distributor bills, payment due dates, and eligible GST Input Tax Credits',
    description: 'Never lose a supplier bill or incur distributor late fees. Log procurement invoices, monitor 7/15/30-day payment windows, and protect gross margins with itemized purchase rate verifications.',
    kpis: [
      { label: 'PENDING INVOICES', value: '₹24,800.00', hint: 'Metro Dairy & FreshVeg Invoices' },
      { label: 'EARLY DISCOUNT', value: 'Save 2%', hint: 'Early settlement discount radar' },
      { label: 'GST MATCHING', value: '100% GSTR-2B', hint: 'ITC tax credit verification' },
    ],
    workflow: [
      'Inward raw items with supplier invoice number, date, and credit cycle terms',
      'Automatic payment reminder sent to manager 2 days prior to invoice due date',
      'One-click export of verified purchase ledgers for your chartered accountant',
    ],
  },
  {
    key: 'payment_out',
    label: 'Payment-Out',
    sub: 'Supplier Settlements',
    badge: 'SETTLEMENTS',
    title: 'Supplier Settlements & Payment Vouchers',
    subtitle: 'Generate formal payment vouchers with bank UTRs and instant WhatsApp receipts',
    description: 'Settle distributor accounts seamlessly via UPI, NEFT, or Cash. Generate formal branded payment vouchers with transaction UTR numbers and share instant payment confirmations directly to vendors.',
    kpis: [
      { label: 'SETTLED THIS WEEK', value: '₹68,450.00', hint: 'Paid across 8 verified suppliers' },
      { label: 'PAYMENT MODES', value: 'UPI / NEFT / Cash', hint: 'Complete banking reference tracking' },
      { label: 'DISPUTE RATE', value: '0.0%', hint: 'Zero supplier payment discrepancies' },
    ],
    workflow: [
      'Select vendor and outstanding bills to settle from the aging schedule',
      'Enter bank UTR / cheque number or scan supplier UPI QR code',
      'Generate stamped payment voucher and dispatch WhatsApp confirmation PDF',
    ],
  },
  {
    key: 'parties_ledger',
    label: 'Parties Ledger',
    sub: 'Vendors & Customers',
    badge: 'PARTY MASTER',
    title: 'Consolidated Vendor & Customer Ledgers',
    subtitle: 'Complete financial statement and transaction history for every business counterparty',
    description: 'Review historical transaction statements for all raw material distributors, utility suppliers, and corporate customer accounts. Maintain complete transparency across debit and credit entries.',
    kpis: [
      { label: 'ACTIVE PARTIES', value: '42 Vendors', hint: 'Pantry, dairy, produce & utilities' },
      { label: 'STATEMENT EXPORT', value: 'PDF / Excel', hint: 'Full itemized historical ledger' },
      { label: 'BALANCE AUDIT', value: 'Real-Time', hint: 'Continuous balance recalculation' },
    ],
    workflow: [
      'Search vendor by name, GSTIN, phone number, or supplier category',
      'Inspect detailed debit/credit history with linked invoice and voucher numbers',
      'Download formal vendor statement for year-end audit reconciliations',
    ],
  },
  {
    key: 'customer_khata',
    label: 'Customer Pay Later',
    sub: 'Khata Dues & Collection',
    badge: 'KHATA RECOVERY',
    title: 'Customer Khata & Pay Later Accounts',
    subtitle: 'Credit dining accounts, corporate employee folios, and automated WhatsApp payment links',
    description: 'Delight VIP regular guests and corporate cafeteria accounts with trusted pay-later privileges. Send polite automated WhatsApp payment reminders with instant 1-click UPI collection links.',
    kpis: [
      { label: 'KHATA RECEIVABLES', value: '₹12,450.00', hint: 'Active corporate & VIP guest folios' },
      { label: 'COLLECTION RATE', value: '96.8%', hint: 'On-time settlement via UPI links' },
      { label: 'RECOVERY SPEED', value: 'Avg 3 Days', hint: 'Polite automated WhatsApp nudges' },
    ],
    workflow: [
      'Tag diner order folio as "Customer Pay Later" upon bill settlement at POS',
      'System auto-generates digital customer ledger with date, time, and item summary',
      'Automated WhatsApp payment link sent on due date for 1-click UPI payment',
    ],
  },
];

const TECHNICAL_SPECIFICATIONS = [
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
    title: 'Payment & Bank Reconciliation',
    specs: [
      { name: 'Matrix Channels', detail: 'Cash Drawer, UPI / QR settlements (PhonePe, Paytm, GPay), and Card / EDC swipe machines' },
      { name: 'Discrepancy Engine', detail: 'Real-time mathematical variance tracking between physical cashier count and POS database' },
      { name: 'Transaction Trail', detail: 'Individual timestamped log with payment method, system source, amount, and UTR reference' },
      { name: 'Shift Handovers', detail: 'Day-end and shift-end closing drawer verification with electronic manager sign-off' },
    ],
  },
  {
    title: 'Vendor Accounts Payable (AP)',
    specs: [
      { name: 'Credit Term Tracking', detail: 'Configurable vendor payment terms (COD, 7 days, 15 days, 30 days, 45 days)' },
      { name: 'Aging Reports', detail: '0-7 days, 8-15 days, 16-30 days, and 30+ days overdue supplier balance buckets' },
      { name: 'Payment Vouchers', detail: 'Formal settlement vouchers with bank transaction ID, cheque number, or UPI reference' },
      { name: 'Vendor Ledger Export', detail: 'Complete vendor statement generation for reconciling distributor accounts' },
    ],
  },
  {
    title: 'Customer Khata & Accounting Sync',
    specs: [
      { name: 'Khata Credit Limits', detail: 'Custom credit balance ceilings per corporate guest with automated lockout on limit breach' },
      { name: 'Accounting Compatibility', detail: 'Native XML and Excel format exports optimized for Tally Prime, Zoho Books, and SAP' },
      { name: 'GST Input Tax Credit', detail: 'Captures vendor GSTIN, invoice date, HSN breakdown, and eligible CGST/SGST/IGST credits' },
      { name: 'Cloud Audit Trail', detail: 'Immutable financial logs with user identity, edit histories, and tamper-resistant timestamps' },
    ],
  },
];

export default function ExpensesProductPage() {
  const [activeModule, setActiveModule] = useState<PlatformModuleKey>('daily_reconciliation');
  const currentModule = PLATFORM_MODULES.find(m => m.key === activeModule) || PLATFORM_MODULES[0];

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

      {/* 3. Hero Section */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/15 text-[#0B3B24] text-[11px] font-bold tracking-tight mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>TAVOLA OPERATIONS SUITE • EXPENSES &amp; CASH FLOW</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141414] tracking-[-0.03em] leading-[1.12]">
            Direct Expenses, Daily Reconciliation &amp; Vendor Cash Flow
          </h1>

          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-normal">
            Track daily operating petty cash vouchers, verify end-of-day cashier drawer counts against POS database and bank settlements, and manage supplier purchase credit cycles with zero financial leakage.
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

            <a href="#platform-preview" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-5 py-3 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation active:scale-[0.98]"
              >
                <span>Explore Live Platform</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </a>
          </div>

        </div>

        {/* Brand Trust Barometer */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-500">
          <div className="font-semibold text-stone-700 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>Reconciling daily cash &amp; vendor payouts across 10,000+ restaurant outlets:</span>
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
          4. REFINED ALTERNATING FEATURE SHOWCASES (Direct Platform Realities)
             - Showcase 1: Direct Expenses & Operating Petty Cash Vouchers (Image 3)
             - Showcase 2: Daily Payment Reconciliation & Audit Matrix (Image 1 & 2)
             - Showcase 3: Purchase Bills, Supplier Settlements & Customer Khata
         ========================================================================= */}
      <section id="features" className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto space-y-16 sm:space-y-24 border-t border-stone-200/80 scroll-mt-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
            FINANCIAL INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141414] tracking-tight mt-1.5">
            Total control over cash drawers, vendor dues &amp; bank settlements
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Eliminate unrecorded cash leaks, reconcile cashier counts against bank gateway UTRs, and track distributor credit schedules with audit precision.
          </p>
        </div>

        {/* Showcase 1: Direct Expenses & Operating Petty Cash (Reflecting Image 3) */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-4 sm:p-6 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#008726] flex items-center justify-center">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Expenses &amp; Petty Cash</div>
                      <div className="text-[10px] text-stone-500">Track chai, fuel, rents and utility vouchers</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    Active Ledger
                  </span>
                </div>

                {/* 4 Mini KPI Cards (from Screenshot 3) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase block font-mono">TOTAL OUTFLOW</span>
                    <span className="font-mono font-bold text-stone-900 text-xs mt-0.5 block">₹4,850.00</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase block font-mono">VENDOR DUES</span>
                    <span className="font-mono font-bold text-stone-900 text-xs mt-0.5 block">₹2,400.00</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase block font-mono">DIRECT/INDIRECT</span>
                    <span className="font-mono font-bold text-[#008726] text-xs mt-0.5 block">₹3,100 / ₹1,750</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase block font-mono">CASH OUTFLOW</span>
                    <span className="font-mono font-bold text-purple-700 text-xs mt-0.5 block">₹2,450.00</span>
                  </div>
                </div>

                {/* Split Category Preview */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block text-[11.5px]">Cleaning &amp; Supplies</span>
                      <span className="text-[10px] text-stone-500 font-mono">DIRECT EXPENSE • Floor detergent &amp; wipes</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900">₹850.00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block text-[11.5px]">Electricity &amp; Kitchen LPG</span>
                      <span className="text-[10px] text-stone-500 font-mono">INDIRECT EXPENSE • Commercial cylinder</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900">₹2,250.00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block text-[11.5px]">Daily Chai &amp; Shift Fuel</span>
                      <span className="text-[10px] text-stone-500 font-mono">DIRECT EXPENSE • Staff refreshments</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900">₹1,750.00</span>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-between text-xs">
                  <span className="text-stone-600 text-[11px] font-medium">Float Replenishment Status:</span>
                  <span className="font-mono font-bold text-[#008726] text-xs">₹7,550 Remaining in Drawer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              DIRECT EXPENSES &amp; PETTY CASH
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Track operating expenses, <span className="text-[#008726]">chai, fuel &amp; petty cash</span> vouchers
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Record morning market runs, kitchen cylinder refills, and daily staff chai in under 5 seconds. Automatically categorize direct operational costs versus indirect overheads, attach camera proofs, and prevent petty cash drawer leakage with supervisor sign-offs.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Configure petty cash categories &amp; limits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Showcase 2: Daily Payment Reconciliation (Reflecting Image 1 & 2) */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              DAILY PAYMENT RECONCILIATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Cashier drawer count vs <span className="text-[#008726]">POS &amp; Bank UTR</span> reconciliation
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Eliminate midnight cash shortages and uncollected customer UPIs. Tavola cross-verifies physical drawer counts against live POS database totals and bank/UPI gateway statements, providing an itemized 14-point transaction audit trail.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Explore daily reconciliation matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: UI Card Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#FAF7EE] p-4 sm:p-6 shadow-xl border border-[#DDD6C0] relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#008726] flex items-center justify-center">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Daily Payment Reconciliation</div>
                      <div className="text-[10px] text-stone-500 font-mono">Date: 18-11-2026 • End of Day</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    Awaiting Drawer Count
                  </span>
                </div>

                {/* Collections Comparison Table (from Screenshot 1) */}
                <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
                  <div className="grid grid-cols-12 bg-stone-50 p-2 font-mono text-[9.5px] font-bold text-stone-500 uppercase border-b border-stone-200">
                    <div className="col-span-5">Payment Channel</div>
                    <div className="col-span-4 text-right">POS Recorded</div>
                    <div className="col-span-3 text-right">Status</div>
                  </div>
                  <div className="divide-y divide-stone-100 text-[11px]">
                    <div className="grid grid-cols-12 p-2 items-center">
                      <div className="col-span-5 font-semibold text-stone-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Cash Drawer
                      </div>
                      <div className="col-span-4 text-right font-mono font-bold text-stone-900">₹1,406.00</div>
                      <div className="col-span-3 text-right font-bold text-amber-700 text-[10px]">Awaiting Count</div>
                    </div>
                    <div className="grid grid-cols-12 p-2 items-center">
                      <div className="col-span-5 font-semibold text-stone-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span> UPI / QR Settlements
                      </div>
                      <div className="col-span-4 text-right font-mono font-bold text-stone-900">₹858.00</div>
                      <div className="col-span-3 text-right font-bold text-blue-700 text-[10px]">Pending Upload</div>
                    </div>
                    <div className="grid grid-cols-12 p-2 items-center">
                      <div className="col-span-5 font-semibold text-stone-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-purple-600"></span> Card / EDC Machine
                      </div>
                      <div className="col-span-4 text-right font-mono font-bold text-stone-900">₹0.00</div>
                      <div className="col-span-3 text-right font-bold text-stone-400 text-[10px]">Zero Inflow</div>
                    </div>
                    <div className="grid grid-cols-12 p-2 items-center bg-[#FAF7EE] font-bold text-xs">
                      <div className="col-span-5 text-[#0B3B24]">TOTAL COLLECTIONS</div>
                      <div className="col-span-4 text-right font-mono text-[#0B3B24]">₹2,264.00</div>
                      <div className="col-span-3 text-right text-stone-600 text-[10px]">Audit Ready</div>
                    </div>
                  </div>
                </div>

                {/* Audit Trail Snippet (from Screenshot 2) */}
                <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/90 text-[10.5px] space-y-1">
                  <div className="flex justify-between text-stone-500 font-mono text-[9px] uppercase font-bold">
                    <span>Transaction Match &amp; Audit Trail</span>
                    <span>14 Logged</span>
                  </div>
                  <div className="flex justify-between font-mono text-stone-700 pt-0.5">
                    <span>13:01:47 • UPI • System POS</span>
                    <span className="font-bold text-stone-900">₹450.00</span>
                  </div>
                  <div className="flex justify-between font-mono text-stone-700">
                    <span>10:33:13 • UPI • System POS</span>
                    <span className="font-bold text-stone-900">₹100.00</span>
                  </div>
                  <div className="flex justify-between font-mono text-stone-700">
                    <span>10:32:16 • CASH • System POS</span>
                    <span className="font-bold text-stone-900">₹120.00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-stone-500 font-mono">Audit Action:</span>
                  <span className="px-3 py-1 rounded-lg bg-[#008726] text-white font-bold text-[10px] cursor-pointer flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    <span>Export Excel Audit Report</span>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Showcase 3: Vendor Invoices & Customer Khata */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-4 sm:p-6 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#008726] flex items-center justify-center">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Customer Pay Later &amp; Vendor Ledgers</div>
                      <div className="text-[10px] text-stone-500 font-mono">Khata Dues &amp; Supplier Settlements</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                    WhatsApp Sync
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-stone-900 block">Mr. Rajesh Sharma (VIP Corporate Khata)</span>
                      <span className="text-[10px] text-stone-500 font-mono">Account #KH-8801 • Folio Dues</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900 text-sm">₹3,450.00</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-[11px] text-[#008726]">
                    <span>📱 1-Click WhatsApp UPI Payment Link Sent</span>
                    <span className="font-bold">Active</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] text-xs space-y-1.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-[#0B3B24] block">Metro Dairy Farms (Supplier Payment-Out)</span>
                      <span className="text-[10px] text-stone-600 font-mono">Invoice #INV-9902 • Due in 2 Days</span>
                    </div>
                    <span className="font-mono font-bold text-[#0B3B24] text-sm">₹24,800.00</span>
                  </div>
                  <div className="text-[10.5px] text-stone-600 flex justify-between">
                    <span>Credit Window: 15 Days</span>
                    <span className="text-[#008726] font-bold">Early Discount: Save 2% (-₹496.00)</span>
                  </div>
                </div>

                <div className="text-[10.5px] text-stone-500 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008726] shrink-0" />
                  <span>GSTIN input tax credits auto-validated against GSTR-2B filing sheets.</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              SETTLEMENTS &amp; CUSTOMER KHATA
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Vendor invoices, credit cycles &amp; <span className="text-[#008726]">customer pay later khata</span>
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Complete counterpart ledger management. Track raw supplier credit terms with early cash settlement discounts, while offering trusted corporate customers Pay Later dining privileges with automated WhatsApp collection reminders.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>View customer khata &amp; supplier settlement flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          5. INTERACTIVE PLATFORM MODULES (The 6 Real Modules from Screenshot)
         ========================================================================= */}
      <section id="platform-preview" className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-stone-200/80 scroll-mt-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
              EXPENSES PLATFORM SUITE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#141414] tracking-tight mt-1">
              Explore All 6 Core Financial Modules
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Click any module below to inspect its operational workflow, live reconciliation metrics, and reporting mechanics.
            </p>
          </div>

          <Link href="/demo" className="shrink-0">
            <button className="px-4 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold flex items-center gap-1.5 transition-all">
              <span>Request Guided Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
            </button>
          </Link>
        </div>

        {/* 6 Interactive Selector Pills (from Screenshot) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {PLATFORM_MODULES.map((mod) => {
            const isSelected = activeModule === mod.key;
            return (
              <button
                key={mod.key}
                onClick={() => setActiveModule(mod.key)}
                className={`p-3 rounded-2xl text-left transition-all border cursor-pointer touch-manipulation ${
                  isSelected
                    ? 'bg-[#008726] text-white border-[#008726] shadow-sm'
                    : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {mod.badge}
                  </span>
                </div>
                <div className="font-extrabold text-xs tracking-tight truncate">{mod.label}</div>
                <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-emerald-100' : 'text-stone-500'}`}>
                  {mod.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Module Details Canvas */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-5 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left: Overview & Key Steps */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-[11px] font-bold text-[#008726] font-mono uppercase tracking-wider">
                  ACTIVE PLATFORM CAPABILITY
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight mt-1">
                  {currentModule.title}
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-0.5">
                  {currentModule.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {currentModule.description}
                </p>
              </div>

              <div className="pt-2 space-y-2.5">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">
                  Standard Automation Workflow:
                </div>
                <div className="space-y-2">
                  {currentModule.workflow.map((step, idx) => (
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
                {currentModule.kpis.map((kpi, i) => (
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
          {TECHNICAL_SPECIFICATIONS.map((group, idx) => (
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
