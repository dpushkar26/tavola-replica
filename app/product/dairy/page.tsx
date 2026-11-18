'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Milk, 
  Truck, 
  Layers, 
  AlertTriangle, 
  Calendar, 
  FileSpreadsheet, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  Clock, 
  ShieldCheck, 
  Thermometer, 
  TrendingUp, 
  Users2, 
  Check, 
  Sparkles, 
  Boxes, 
  Building2, 
  Receipt,
  Maximize2
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

export default function DairyProductPage() {
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
            <span className="text-[#0B3B24] font-bold shrink-0">Precision Dairy ERP</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-500 font-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#008726] animate-pulse"></span>
            <span>Operations Suite • Module 04 • Specialized ERP</span>
          </div>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto text-center sm:text-left">
        <div className="max-w-3xl mx-auto sm:mx-0">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/15 text-[#0B3B24] text-[11px] font-bold tracking-tight mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>ENTERPRISE DAIRY OPERATIONS • MADHAV DAIRY CENTRAL ERP</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141414] tracking-[-0.03em] leading-[1.12]">
            Precision Milk Procurement, Cold Chain &amp; Dairy ERP
          </h1>

          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-normal">
            End-to-end management for modern dairy processing plants and milk collection hubs. Real-time manufacturing batches, automated Fat &amp; SNF rate charts, cold chain stock health, morning van route dispatch, and wholesale retailer ledgers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center sm:justify-start gap-2.5 pt-5 sm:pt-6">
            <Link href="/demo" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-6 py-3 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] text-white text-xs sm:text-[13px] font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm touch-manipulation active:scale-[0.98]"
              >
                <span>Schedule Dairy Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <a href="#dashboard-preview" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-5 py-3 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation active:scale-[0.98]"
              >
                <span>View Operations Dashboard</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </a>
          </div>

        </div>

        {/* 6 Platform Pillars Strip */}
        <div className="mt-8 pt-6 border-t border-stone-200/80">
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-mono mb-3">
            Dairy Operations Suite Modules:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
              Production &amp; Manufacturing Batches
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Cold Chain &amp; Pouch Inventory
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
              Delivery Units &amp; Driver Logistics
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Wholesale Orders &amp; Retail Invoices
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
              Fat &amp; SNF Milk Analyzer Sync
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Farmer Passbooks &amp; Khata Ledgers
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. LIVE PLATFORM DASHBOARD PREVIEW (Real Screenshot Showcase)
         ========================================================================= */}
      <section id="dashboard-preview" className="py-8 sm:py-12 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto scroll-mt-12">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-4 sm:p-6 lg:p-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-100 mb-6">
            <div>
              <div className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
                <span>CENTRAL HUB PREVIEW • MADHAV ENTERPRISE DAIRY ERP</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight mt-1">
                Unified Manufacturing, Cold Storage &amp; Retail Logistics Hub
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Real-time manufacturing batches, wholesale order dispatch, cold chain stock health, and cash flow ledger.
              </p>
            </div>

            {/* Quick Specs Capsule */}
            <div className="bg-[#FAF7EE] border border-[#DDD6C0] rounded-2xl px-4 py-2.5 flex items-center gap-6 shrink-0">
              <div className="text-center">
                <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">BATCH TRACKING</span>
                <span className="text-xs sm:text-sm font-black text-[#0B3B24]">Real-Time</span>
              </div>
              <div className="h-6 w-px bg-stone-300"></div>
              <div className="text-center">
                <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">COLD CHAIN ALERTS</span>
                <span className="text-xs sm:text-sm font-black text-[#0B3B24]">&lt; 4°C Monitored</span>
              </div>
              <div className="h-6 w-px bg-stone-300"></div>
              <div className="text-center">
                <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">ROUTE DISPATCH</span>
                <span className="text-xs sm:text-sm font-black text-[#0B3B24]">05:00 AM Sync</span>
              </div>
            </div>
          </div>

          {/* Embedded High-Fidelity Screenshot Window */}
          <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-sm bg-stone-50">
            {/* macOS Browser Chrome */}
            <div className="bg-[#FAF7EE] border-b border-stone-200 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="text-[11px] font-mono text-stone-500 ml-2">madhav-dairy.tavola.com/ops/dashboard</span>
              </div>
              <span className="text-[10px] font-bold text-[#008726] font-mono bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                LIVE DAIRY OPERATIONS HUB
              </span>
            </div>

            {/* The Actual Platform Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] bg-white">
              <Image 
                src="/images/products/dairy/dairy-dashboard-preview.jpg" 
                alt="Madhav Dairy Central ERP Operations Hub Dashboard" 
                fill
                priority
                className="object-contain object-top"
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
            </div>
          </div>

          {/* 6 Key Operational KPI Cards (Extracted directly from the dashboard) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90">
              <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">TOTAL SALES</span>
              <span className="text-lg font-black text-stone-900 font-mono mt-1 block">₹0</span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">0% vs prev period</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90">
              <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">TOTAL ORDERS</span>
              <span className="text-lg font-black text-blue-700 font-mono mt-1 block">0</span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">0 pending • 0 dispatched</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90">
              <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">PRODUCTION YIELD</span>
              <span className="text-lg font-black text-emerald-700 font-mono mt-1 block">0 units</span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">0 batches logged</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200">
              <span className="text-[9.5px] font-bold text-rose-700 uppercase font-mono block">LOW STOCK ALERTS</span>
              <span className="text-lg font-black text-rose-800 font-mono mt-1 block">8 items</span>
              <span className="text-[10px] text-rose-600 font-semibold mt-0.5 block">Action required ↗</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90">
              <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">EXPIRING BATCHES</span>
              <span className="text-lg font-black text-stone-900 font-mono mt-1 block">0 batches</span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">Within 5-day warning</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90">
              <span className="text-[9.5px] font-bold text-stone-500 uppercase font-mono block">OUTSTANDING RECEIVABLES</span>
              <span className="text-lg font-black text-purple-700 font-mono mt-1 block">₹0</span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">Across all retailers</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. CORE EDITORIAL ALTERNATING SHOWCASES
             - Showcase 1: Manufacturing Batches, Processing & Cold Storage
             - Showcase 2: Early Morning Van Delivery Units & Route Logistics
             - Showcase 3: Automated Fat/SNF Rate Charts & Retailer Khata
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto space-y-16 sm:space-y-24 border-t border-stone-200/80">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
            DAIRY INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141414] tracking-tight mt-1.5">
            Engineered for high-throughput dairy processing
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Eliminate milk spoilage, automate Fat &amp; SNF payout calculations, track delivery van dispatch, and reconcile wholesale accounts with zero spreadsheet headache.
          </p>
        </div>

        {/* Showcase 1: Manufacturing Batches & Cold Chain */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-4 sm:p-6 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#008726] flex items-center justify-center">
                      <Milk className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Manufacturing Batch #BAT-402</div>
                      <div className="text-[10px] text-stone-500 font-mono">Standard Toned Milk 500ml • Line 02</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    Pasteurized &amp; Packed
                  </span>
                </div>

                {/* Batch Specifications */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase block font-mono">FAT / SNF RATIO</span>
                    <span className="font-mono font-bold text-stone-900 text-xs mt-0.5 block">3.5% / 8.5%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase block font-mono">TOTAL POUCHES</span>
                    <span className="font-mono font-bold text-stone-900 text-xs mt-0.5 block">2,400 Units</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase block font-mono">COLD ROOM TEMP</span>
                    <span className="font-mono font-bold text-[#008726] text-xs mt-0.5 block">3.8°C (Optimal)</span>
                  </div>
                </div>

                {/* Expiry Radar Pill */}
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs flex items-center justify-between">
                  <span className="text-emerald-900 font-medium text-[11px] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#008726]" />
                    <span>Shelf-Life Safe Window:</span>
                  </span>
                  <span className="font-mono font-bold text-[#008726]">48 Hours Remaining</span>
                </div>

                <div className="text-[10.5px] text-stone-500 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008726] shrink-0" />
                  <span>Automatically routed to morning dispatch van manifests upon packaging completion.</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              PRODUCTION &amp; COLD STORAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Real-time manufacturing batches, <span className="text-[#008726]">cold chain tracking</span> &amp; expiry radar
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Eliminate milk spoilage and production write-offs. Monitor morning raw intake, track pasteurization, standardize milk Fat &amp; SNF ratios, and receive automated 5-day expiry warning triggers before pouches ever hit retail shelves.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Explore batch manufacturing &amp; cold storage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Showcase 2: Early Morning Van Delivery Units */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              LOGISTICS &amp; DRIVER MANAGEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Early morning wholesale dispatch &amp; <span className="text-[#008726]">driver delivery routes</span>
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Seamless morning delivery logistics. Group retail standing orders, allocate crates and pouches to specific vehicle delivery units, and track real-time driver delivery drops with digital Proof of Delivery (POD).
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>View delivery route optimization</span>
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
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Delivery Unit: Van Route #03</div>
                      <div className="text-[10px] text-stone-500 font-mono">Vehicle: MH-12-DL-8820 • Driver: Ramesh K.</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                    Dispatched 05:15 AM
                  </span>
                </div>

                {/* Route Manifest Specs */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase font-mono block">RETAIL DROPS</span>
                    <span className="font-mono font-bold text-stone-900 text-xs mt-0.5 block">24 Stores</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase font-mono block">CRATES LOADED</span>
                    <span className="font-mono font-bold text-stone-900 text-xs mt-0.5 block">180 Crates</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase font-mono block">ROUTE PROGRESS</span>
                    <span className="font-mono font-bold text-[#008726] text-xs mt-0.5 block">18 / 24 Delivered</span>
                  </div>
                </div>

                {/* Next Delivery Drop Item */}
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>Next Drop: Sharma Dairy Mart</span>
                    <span className="text-[#008726] font-mono">12 Crates (240 Pouches)</span>
                  </div>
                  <div className="text-[10.5px] text-stone-500 flex justify-between">
                    <span>Invoice #INV-8820 • Standing Daily Order</span>
                    <span className="text-stone-700 font-bold">₹7,200.00 Billed</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-stone-500 font-mono">Live Vehicle Status:</span>
                  <span className="px-3 py-1 rounded-lg bg-[#008726] text-white font-bold text-[10px] cursor-pointer flex items-center gap-1">
                    <span>Driver App Live GPS Connected</span>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Showcase 3: Fat/SNF Rate Charts & Retailer Khata */}
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
                      <div className="font-extrabold text-xs text-stone-900">Farmer Milk Intake &amp; Rate Slip</div>
                      <div className="text-[10px] text-stone-500 font-mono">Center: Anandpur Hub • Shift: Morning</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    Analyzer Verified
                  </span>
                </div>

                {/* Milk Intake Breakdown */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-[11px] space-y-1.5 text-stone-700">
                  <div className="flex justify-between">
                    <span>1. Farmer Name &amp; ID</span>
                    <span className="font-bold text-stone-900">Balvinder Singh (#F-104)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2. Milk Quantity Collected</span>
                    <span className="font-bold text-stone-900">45.5 Liters (Buffalo)</span>
                  </div>
                  <div className="flex justify-between text-blue-700">
                    <span>3. Fat % / SNF % Tested</span>
                    <span className="font-bold">6.8% Fat • 9.1% SNF</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>4. Rate Chart Calculated</span>
                    <span>₹48.20 / Liter</span>
                  </div>
                  <div className="flex justify-between font-bold text-stone-900 pt-1.5 border-t border-stone-200 text-xs">
                    <span>Total Farmer Payout:</span>
                    <span className="text-[#008726]">₹2,193.10 Auto-Credited</span>
                  </div>
                </div>

                {/* Retailer Khata Dues */}
                <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-stone-500 text-[10px] uppercase font-mono block">Retailer Khata Receivables:</span>
                    <span className="font-mono font-bold text-[#0B3B24]">₹48,250.00 Outstanding</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#008726] text-white text-[10px] font-bold cursor-pointer">
                    Send WhatsApp UPI
                  </span>
                </div>

                <div className="text-[10.5px] text-stone-500 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008726] shrink-0" />
                  <span>Direct ultrasonic analyzer hardware sync with printed slip generation.</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              FARMER PAYOUTS &amp; RETAILER KHATA
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Automated Fat/SNF rate charts &amp; <span className="text-[#008726]">retailer credit ledgers</span>
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Pay milk farmers transparently and recover wholesale dues faster. Connect ultrasonic milk analyzers for instant Fat &amp; SNF grade computation, generate automated farmer passbook slips, and track retailer outstanding credit balances with automated WhatsApp payment links.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>View farmer payout &amp; analyzer workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          6. CALL TO ACTION BANNER
         ========================================================================= */}
      <section className="pb-12 sm:pb-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="bg-[#0B3B24] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BCE440] font-mono">
              READY TO MODERNIZE YOUR DAIRY PLANT?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              Run your milk collection &amp; cold chain on Tavola ERP
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Schedule a 20-minute technical walkthrough with our team or explore how Tavola connects milk chilling plants to city distribution networks.
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

      {/* 7. Global Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-8 px-4 sm:px-6 lg:px-12 text-center text-xs text-stone-500">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#0B3B24] tracking-tight font-serif italic text-base">Tavola</span>
            <span>• Precision Dairy ERP &amp; Cold Chain Management</span>
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
