'use client';

import Link from 'next/link';
import { 
  Receipt, 
  Scale, 
  Users2, 
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

export default function ExpensesProductPage() {
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

      {/* 3. Refined Hero Section */}
      <section className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto text-center sm:text-left">
        <div className="max-w-3xl mx-auto sm:mx-0">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/15 text-[#0B3B24] text-[11px] font-bold tracking-tight mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>TAVOLA OPERATIONS SUITE • EXPENSES &amp; CASH FLOW</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141414] tracking-[-0.03em] leading-[1.12]">
            Direct Expenses, Daily Reconciliation &amp; Cash Flow
          </h1>

          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-normal">
            Track daily operating petty cash vouchers, verify end-of-day cashier drawer counts against POS database and bank settlements, and manage supplier purchase credit cycles with zero financial leakage.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center sm:justify-start gap-2.5 pt-5 sm:pt-6">
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

        {/* 6 Platform Pillars Strip */}
        <div className="mt-8 pt-6 border-t border-stone-200/80">
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-mono mb-3">
            Core Financial Modules:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
              Direct Expenses &amp; Petty Cash
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Daily Payment Reconciliation
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
              Purchase Bills &amp; Invoices
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Supplier Payment-Out
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500"></span>
              Parties Ledger (Vendors)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Customer Pay Later (Khata)
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE ALTERNATING FEATURE SHOWCASES (Direct Platform Realities)
             - Showcase 1: Direct Expenses & Operating Petty Cash (Image 3)
             - Showcase 2: Daily Payment Reconciliation & Audit Matrix (Image 1 & 2)
             - Showcase 3: Vendor Invoices & Customer Khata
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
          5. CALL TO ACTION BANNER
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

      {/* 6. Global Footer */}
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
