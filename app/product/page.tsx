'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  QrCode, 
  Flame, 
  LayoutDashboard, 
  Scale, 
  Receipt, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Laptop, 
  Smartphone, 
  Store, 
  ChefHat, 
  TrendingUp, 
  Printer, 
  Zap, 
  ChevronRight,
  Play,
  Sparkles,
  ArrowUpRight,
  Check,
  CreditCard,
  RefreshCw,
  Bell,
  Boxes,
  Wallet,
  Dumbbell,
  Milk,
  Building2,
  GraduationCap,
  BarChart3,
  Users,
  MessageSquare,
  Gift,
  Puzzle,
  FileSpreadsheet,
  Layers,
  Search,
  Plus,
  AlertTriangle,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { BrandLogo } from '@/components/landing/BrandLogo';

export default function ProductPage() {
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState<'crm' | 'analytics' | 'customer' | 'ops'>('crm');

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#141414] selection:bg-[#BCE440]/40 selection:text-[#0B3B24] font-sans antialiased overflow-x-hidden">
      
      {/* 1. SEAMLESS TOP NAVBAR */}
      <LandingNavbar />

      {/* 2. PRODUCT HERO SECTION (Matching Image 1 Editorial Style with Tavola Palette) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE9] border border-[#0B3B24]/15 text-[#0B3B24] text-xs font-bold tracking-tight shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ab14] animate-pulse"></span>
              <span>TAVOLA ENTERPRISE RESTAURANT OS</span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black text-[#141414] tracking-tight leading-[1.06]">
              Restaurant POS &amp; Operations <br className="hidden sm:inline" />
              <span className="text-[#0B3B24]">software made simple!</span>
            </h1>

            <p className="text-[#555555] text-base sm:text-lg leading-relaxed max-w-xl">
              Manages all your restaurant operations efficiently — from 3-click billing and automatic recipe inventory to kitchen display screens and live floor management.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link href="/demo">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 px-7 text-sm sm:text-base bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full shadow-md shadow-[#0B3B24]/15 transition-all duration-200 cursor-pointer"
                >
                  <span>Take a Free Demo</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
                </Button>
              </Link>
              <Link href="/product/inventory">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 px-6 text-sm sm:text-base border border-[#0B3B24]/30 text-[#0B3B24] hover:bg-white rounded-full font-bold cursor-pointer transition-colors"
                >
                  <span>Explore Inventory Platform</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic / Illustration Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-[36px] bg-gradient-to-br from-[#0B3B24] via-[#0E4A2E] to-[#062414] p-7 shadow-2xl flex flex-col justify-between overflow-hidden border border-emerald-600/30">
              
              {/* Subtle Ambient Rings */}
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#BCE440]/15 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#00ab14]/20 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="font-serif italic font-extrabold text-xl text-white">Tavola</span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/15 text-[#BCE440] font-bold">
                    SUITE v2.4
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ab14] animate-ping" />
              </div>

              {/* Central Stack Preview Mockup */}
              <div className="my-auto space-y-3 z-10 py-3">
                <div className="bg-white/95 rounded-2xl p-4 shadow-xl border border-white/40 text-stone-900">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-100">
                    <span className="font-bold text-[#0B3B24] flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-[#00ab14]" /> Table #07 • Dine-in
                    </span>
                    <span className="font-mono text-[11px] text-stone-500 font-bold">₹1,420.00</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-xs text-stone-600">
                    <span>Paneer Butter Masala (2x)</span>
                    <span className="font-mono font-bold text-[#008726]">BOM Deducted</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-stone-600">
                    <span>Garlic Naan (4x)</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold">Kitchen KDS</span>
                  </div>
                </div>

                <div className="bg-emerald-950/80 rounded-2xl p-3 border border-emerald-500/30 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#BCE440]" />
                    <span className="font-bold">Instant UPI Settlement</span>
                  </div>
                  <span className="font-mono text-[#BCE440] font-bold">0.4s Fast</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-emerald-200/90 z-10 pt-2 border-t border-white/10">
                <span>Zero hardware lock-in</span>
                <span className="text-white font-bold">100% Cloud Synced</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SOCIAL PROOF / BRAND LOGOS TICKER (Matching Image 1) */}
      <section className="py-8 sm:py-10 border-y border-[#E5DEC9] bg-white/70 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B3B24] font-mono mb-6">
            TRUSTED BY 10,000+ RESTAURANTS, CAFES &amp; MULTI-CHAIN BRANDS
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center opacity-85">
            {[
              { name: 'Moti Mahal', type: 'Fine Dining' },
              { name: 'The Rustic Spatula', type: 'Gourmet Bistro' },
              { name: 'Yum Yum Cha', type: 'Pan Asian' },
              { name: 'Hocco Eatery', type: 'Quick Service' },
              { name: 'La Pinoz', type: 'Pizza Chain' },
              { name: 'Giani Ice Cream', type: 'Desserts & Bar' }
            ].map((brand, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-serif italic font-bold text-base sm:text-lg text-stone-800 tracking-tight">
                  {brand.name}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  {brand.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SMART OPERATIONS FEATURES — ALTERNATING SHOWCASE SECTIONS (Z-PATTERN)
             (Matching Image 1 & Image 2 with Tavola Racing Green Palette)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#008726] uppercase tracking-wider font-mono">
            SMART RESTAURANT FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141414] tracking-tight mt-1">
            A restaurant POS made for all your needs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Quick and easy-to-use restaurant software that makes managing high order volumes, ingredient stocks, and reports butter smooth.
          </p>
        </div>

        {/* -----------------------------------------------------------------------
            FEATURE 1: 3-Click Restaurant Billing Software
           ----------------------------------------------------------------------- */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left: Product UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#BCE440]/10 rounded-full blur-2xl" />
              
              {/* POS Interface Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-stone-200">
                
                {/* Dine-in / Delivery / Take-away tabs */}
                <div className="flex items-center gap-1.5 pb-3 border-b border-stone-200 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-[#0B3B24] text-white font-bold">Dine-in</span>
                  <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-600 font-medium">Delivery</span>
                  <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-600 font-medium">Take-away</span>
                </div>

                <div className="grid grid-cols-12 gap-3 mt-3">
                  
                  {/* Item Buttons Grid */}
                  <div className="col-span-7 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 font-bold text-stone-800">
                      Choco Lava Cake
                      <span className="block text-[10px] text-stone-500 font-normal mt-0.5">₹150.00</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 font-bold text-stone-800">
                      American Pie Pastry
                      <span className="block text-[10px] text-stone-500 font-normal mt-0.5">₹180.00</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 font-bold text-stone-800">
                      Pastry Small
                      <span className="block text-[10px] text-stone-500 font-normal mt-0.5">₹100.00</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 font-bold text-[#0B3B24]">
                      Banana Pastry (x2)
                      <span className="block text-[10px] text-[#008726] font-bold mt-0.5">₹200.00</span>
                    </div>
                  </div>

                  {/* Bill Receipt Preview */}
                  <div className="col-span-5 bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between font-bold text-stone-900 pb-1.5 border-b border-stone-200 text-[11px]">
                        <span>Bill for Table 07</span>
                        <span className="text-[#008726]">3 items</span>
                      </div>
                      <div className="space-y-1 mt-2 text-[10px] text-stone-600">
                        <div className="flex justify-between">
                          <span>1x Pastry Small</span>
                          <span className="font-mono">₹100</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2x Banana Pastry</span>
                          <span className="font-mono">₹200</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2x Choco Lava</span>
                          <span className="font-mono">₹300</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-stone-200">
                      <div className="flex justify-between font-bold text-stone-900 text-xs">
                        <span>Total Payable:</span>
                        <span className="font-mono text-[#008726]">₹650.00</span>
                      </div>
                      <div className="flex gap-1.5 mt-2">
                        <button className="flex-1 py-1 rounded bg-[#0B3B24] text-white text-[10px] font-bold">
                          Save &amp; Print
                        </button>
                        <button className="flex-1 py-1 rounded bg-[#008726] text-white text-[10px] font-bold">
                          KOT &amp; Settle
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Right: Feature Description */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              POINT OF SALE SPEED
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              A quick 3-click restaurant <span className="text-[#008726]">billing software</span>
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Take orders, punch bills and generate KOTs in under three clicks. Accept payments either by splitting bills or merging tables. Easily apply discounts, coupons, and GST compliance with zero hardware lock-in.
            </p>
            <div className="pt-2">
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3B24] hover:text-[#008726] transition-colors"
              >
                <span>Explore all POS features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* -----------------------------------------------------------------------
            FEATURE 2: Restaurant Inventory Management Made Easier (With Real /inventory UI!)
           ----------------------------------------------------------------------- */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left: Feature Description */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              PERPETUAL INVENTORY &amp; RECIPE BOM
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Restaurant <span className="text-[#008726]">Inventory management</span> made easier
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Do inventory management the smart way. Put your ingredients on item-wise automatic recipe BOM deductions, get low-stock reorder alerts, and track daily opening-to-closing reconciliations with zero pilferage.
            </p>
            <div className="pt-2">
              <Link 
                href="/product/inventory" 
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3B24] hover:text-[#008726] transition-colors"
              >
                <span>Explore live Inventory Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Real Inventory Platform UI Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#FAF7EE] p-5 sm:p-7 shadow-xl border border-[#DDD6C0] relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-stone-200">
                
                {/* Module action pills (from screenshot 2) */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 border-b border-stone-200 text-[11px]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#008726] text-white font-bold whitespace-nowrap">+ Raw Materials</span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 font-medium whitespace-nowrap">+ Sales</span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 font-medium whitespace-nowrap">+ Wastage</span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 font-medium whitespace-nowrap">+ Purchase Order</span>
                </div>

                <div className="mt-3 flex items-center justify-between pb-2">
                  <span className="font-bold text-xs text-stone-900">Inventory Management</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#008726] border border-emerald-200">
                    Auto-Closing Active
                  </span>
                </div>

                {/* Stock Table Mockup with Real Items */}
                <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
                  <div className="bg-stone-50 px-3 py-2 text-[10px] font-mono text-stone-400 uppercase font-bold grid grid-cols-3">
                    <span>RAW MATERIAL</span>
                    <span>EXISTING</span>
                    <span className="text-right">CURRENT STOCK</span>
                  </div>
                  <div className="divide-y divide-stone-100">
                    <div className="px-3 py-2 grid grid-cols-3 items-center">
                      <span className="font-bold text-stone-900">Milk (Kitchen Pantry)</span>
                      <span className="text-stone-500 font-mono">8 packets</span>
                      <span className="text-right font-bold text-[#008726] font-mono">8 packets (₹240)</span>
                    </div>
                    <div className="px-3 py-2 grid grid-cols-3 items-center">
                      <span className="font-bold text-stone-900">Spinach (FreshVeg)</span>
                      <span className="text-stone-500 font-mono">10 kg</span>
                      <span className="text-right font-bold text-[#008726] font-mono">10 kg (₹1,200)</span>
                    </div>
                    <div className="px-3 py-2 grid grid-cols-3 items-center">
                      <span className="font-bold text-stone-900">Water Bottle 1000ml</span>
                      <span className="text-stone-500 font-mono">43 L</span>
                      <span className="text-right font-bold text-[#008726] font-mono">43 L (₹860)</span>
                    </div>
                  </div>
                </div>

                {/* Floating Item Audit Badge (from Image 2) */}
                <div className="mt-3 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-200/60 flex items-center justify-center text-base">
                      🥔
                    </div>
                    <div>
                      <span className="font-bold text-stone-900">Inventory | Potato</span>
                      <div className="text-[10px] text-stone-500 flex items-center gap-2">
                        <span>Opening: 30 kg</span>
                        <span>•</span>
                        <span>Closing: 12 kg</span>
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-amber-900 text-xs">
                    Current: 12 kg
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* -----------------------------------------------------------------------
            FEATURE 3: Real-Time Restaurant Reports & Analytics (Matching Image 2)
           ----------------------------------------------------------------------- */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left: Reports UI Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-5 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-stone-200 space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <div>
                    <span className="font-bold text-xs text-stone-900">Time-slot Wise Sales Bifurcation</span>
                    <p className="text-[10px] text-stone-400">Peak dining revenue analysis</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold font-mono">
                    Live Sync
                  </span>
                </div>

                {/* Bar Chart Simulation */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-16 text-[10.5px] text-stone-500">Breakfast</span>
                    <div className="flex-1 bg-stone-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-stone-400 h-3 rounded-full" style={{ width: '28%' }} />
                    </div>
                    <span className="font-mono font-bold text-xs w-12 text-right">₹12.4k</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-16 text-[10.5px] text-stone-500">Lunch</span>
                    <div className="flex-1 bg-stone-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#008726] h-3 rounded-full" style={{ width: '74%' }} />
                    </div>
                    <span className="font-mono font-bold text-xs w-12 text-right">₹48.2k</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-16 text-[10.5px] text-stone-500">Dinner</span>
                    <div className="flex-1 bg-stone-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#0B3B24] h-3 rounded-full" style={{ width: '92%' }} />
                    </div>
                    <span className="font-mono font-bold text-xs w-12 text-right">₹76.8k</span>
                  </div>
                </div>

                {/* Donut Distribution Card */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase font-mono">CHANNEL BREAKDOWN</span>
                    <div className="text-base font-black text-stone-900 mt-0.5">Dine-in (76.6%)</div>
                    <div className="text-[10.5px] text-stone-500">46,829 Total Orders Settled</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-stone-600">
                    <span className="w-2 h-2 rounded-full bg-[#0B3B24]" /> Dine-in
                    <span className="w-2 h-2 rounded-full bg-[#008726] ml-1" /> Take Away
                    <span className="w-2 h-2 rounded-full bg-[#BCE440] ml-1" /> Online
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Feature Description */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              FINANCIAL INTELLIGENCE
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Get real-time restaurant <span className="text-[#008726]">Reports &amp; P&amp;L</span>
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Automate your restaurant reports and go completely paper-free! Tavola automatically tracks daily day-end sales, online orders, staff actions, and stock consumption across 80+ essential business reports.
            </p>
            <div className="pt-2">
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3B24] hover:text-[#008726] transition-colors"
              >
                <span>Explore live reporting suite</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          5. APP MARKETPLACE / ADD-ONS MATRIX (Matching Image 3)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DEC9]">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#008726] uppercase tracking-wider font-mono">
            APP MARKETPLACE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141414] tracking-tight mt-1">
            Add-ons to supercharge your Operations
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Extend your restaurant capabilities with integrated CRM, guest loyalty, feedback management, and automated SMS marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Vertical Tab Menu (from Image 3) */}
          <div className="lg:col-span-4 space-y-2">
            {[
              { 
                id: 'crm', 
                title: 'CRM & Guest Profiles', 
                desc: 'Bill payment is not the end of the service. Build smart CRM profiles to know your customer order history and win repeat visits.' 
              },
              { 
                id: 'analytics', 
                title: 'Deep Business Analytics', 
                desc: 'Uncover top revenue-generating menu items, table turn speeds, and server performance metrics.' 
              },
              { 
                id: 'customer', 
                title: 'Feedback Management', 
                desc: 'Instant digital table reviews with automated manager alerts for any negative ratings before guests leave.' 
              },
              { 
                id: 'ops', 
                title: 'Operations & Multi-Chain', 
                desc: 'Centralized menu publishing, raw stock transfers between outlets, and unified corporate reporting.' 
              },
            ].map((tab) => {
              const isActive = activeMarketplaceTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveMarketplaceTab(tab.id as any)}
                  className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-white border-[#0B3B24] shadow-md shadow-[#0B3B24]/5 pl-5 border-l-4'
                      : 'bg-[#FAF7EE] border-transparent hover:bg-white/60 text-stone-600'
                  }`}
                >
                  <h4 className={`text-sm font-bold ${isActive ? 'text-[#0B3B24]' : 'text-stone-800'}`}>
                    {tab.title}
                  </h4>
                  {isActive && (
                    <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                      {tab.desc}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: 2x2 Feature Cards Grid (from Image 3) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            
            {/* Card 1: Dynamic Digital Menu */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DEC9] shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008726] flex items-center justify-center font-bold">
                <QrCode className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">Build Dynamic Web Menus</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Publish live dish photos, real-time 86 out-of-stock toggles, and multi-lingual menus in Safari and Chrome.
              </p>
            </div>

            {/* Card 2: Engage with SMS & WhatsApp */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DEC9] shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">Engage with WhatsApp &amp; SMS</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Send paperless digital e-bills, birthday discounts, and personalized re-engagement offers automatically.
              </p>
            </div>

            {/* Card 3: Feedback Management */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DEC9] shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Bell className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">Digital Feedback Management</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Guests rate food, ambiance, and service directly on their phone screen. Escalates low scores immediately to managers.
              </p>
            </div>

            {/* Card 4: Loyalty Wallet */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DEC9] shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Gift className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-stone-900 text-sm">Cashback Loyalty Wallet</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Reward repeat diners with automated wallet credits on every bill settlement. Redeemable on next dine-in visit.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. INTEGRATIONS ECOSYSTEM HUB (Matching Image 3 Bottom Section)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DEC9]">
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-12">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-xs font-bold text-[#008726] uppercase tracking-wider font-mono">
              UNIFIED INTEGRATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#141414] tracking-tight">
              Multiple integrations — single dashboard
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              Manage 150+ third-party integrations, online food delivery aggregators, accounting packages, and payment gateways directly from Tavola.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link href="/demo">
              <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full px-6 py-2.5">
                <span>See all Integrations</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Integration Category Badges & Partner Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { name: 'Zomato', category: 'Online Order' },
            { name: 'Swiggy', category: 'Online Order' },
            { name: 'WhatsApp', category: 'Marketing' },
            { name: 'Tally Prime', category: 'Accounting' },
            { name: 'SAP Business', category: 'ERP System' },
            { name: 'Paytm UPI', category: 'Payments' },
            { name: 'PhonePe', category: 'Payments' },
            { name: 'Razorpay', category: 'Gateway' },
          ].map((partner, i) => (
            <div 
              key={i} 
              className="p-3.5 rounded-2xl bg-white border border-[#E5DEC9] shadow-2xs text-center flex flex-col justify-between hover:border-[#0B3B24]/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center font-bold text-stone-700 text-xs mx-auto mb-2">
                {partner.name[0]}
              </div>
              <div>
                <h4 className="font-extrabold text-stone-900 text-xs truncate">{partner.name}</h4>
                <p className="text-[10px] text-stone-400 font-mono mt-0.5">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. SPECIALIZED BUSINESS LINEUP (Hotel, Gym, Dairy, School)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DEC9]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#008726] uppercase tracking-wider font-mono">
            EXPANDED INDUSTRY PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141414] tracking-tight mt-1">
            Specialized Management Engines
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Engineered with the same real-time sync, zero proprietary hardware, and instant settlement architecture across high-turnover industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: 'inventory',
              title: 'Inventory Management',
              tag: 'Stock & Recipe BOM',
              desc: 'Sub-gram recipe formulas, real-time FIFO stock depletion & automated low-stock vendor purchase orders.',
              href: '/product/inventory',
              badge: 'Popular',
              badgeColor: 'bg-emerald-100 text-[#0B3B24] border-emerald-200',
              icon: Boxes
            },
            {
              id: 'expenses',
              title: 'Expenses Tracker',
              tag: 'Cash & Vendor Ledger',
              desc: 'Daily cash outflows, supplier bill reconciliation, petty cash slips & live net profit margins.',
              href: '/product/expenses',
              badge: 'Finance',
              badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
              icon: Wallet
            },
            {
              id: 'hotel',
              title: 'Multi-Chain Hotel Hub',
              tag: 'Hospitality & Rooms',
              desc: 'Multi-property reservations, room inventory, housekeeping status & banquet hall billing.',
              href: '/product/hotel',
              badge: 'Enterprise',
              badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
              icon: Building2
            },
            {
              id: 'gym',
              title: 'Gym Management',
              tag: 'Fitness Operations',
              desc: 'Biometric turnstile check-ins, WhatsApp renewal reminders, class booking & trainer slots.',
              href: '/product/gym',
              badge: 'Coming Soon',
              badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
              icon: Dumbbell
            },
            {
              id: 'school',
              title: 'School ERP System',
              tag: 'Education Campus',
              desc: 'Student admissions, digital fee collection with instant UPI, RFID gate attendance & parent app.',
              href: '/product/school',
              badge: 'Coming Soon',
              badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
              icon: GraduationCap
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.id}
                href={item.href}
                className="group p-6 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-[#008726] uppercase tracking-wider mb-1">
                    {item.tag}
                  </div>
                  <h3 className="font-extrabold text-lg text-[#141414] group-hover:text-[#0B3B24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#0B3B24]">
                  <span>Explore Product</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 8. HARDWARE AGNOSTIC VALUE PROP */}
      <section className="py-16 bg-[#F5F0E1] border-y border-[#E5DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-2 font-mono">
              ZERO PROPRIETARY HARDWARE LOCK-IN
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-[#141414] tracking-tight">
              Runs on the Screens You Already Own
            </p>
            <p className="mt-2 text-[#555555] text-sm sm:text-base">
              Don&apos;t buy expensive ₹60,000 POS machines that lock you into proprietary ecosystems. Tavola runs on any web browser.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] text-[#0B3B24] flex items-center justify-center mx-auto border border-[#DDD6C0]">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#141414]">Any Smartphone</h3>
              <p className="text-xs text-[#555555]">
                Diners use their own iPhones and Android phones. Waiters can take orders on any handheld phone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] text-[#0B3B24] flex items-center justify-center mx-auto border border-[#DDD6C0]">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#141414]">Laptops &amp; PCs</h3>
              <p className="text-xs text-[#555555]">
                Cashiers and managers can access reports and billing on Windows, Mac, Linux, or ChromeOS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] text-[#0B3B24] flex items-center justify-center mx-auto border border-[#DDD6C0]">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#141414]">Budget Tablets</h3>
              <p className="text-xs text-[#555555]">
                Affordable Android tablets or used iPads mount easily on kitchen walls as digital KDS screens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] text-[#0B3B24] flex items-center justify-center mx-auto border border-[#DDD6C0]">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#141414]">Thermal Printers</h3>
              <p className="text-xs text-[#555555]">
                Compatible with any 80mm or 58mm ESC/POS thermal printer via USB, Bluetooth, or WiFi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-[32px] bg-[#0B3B24] p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Upgrade Your Dining Operations?
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Join hundreds of restaurants, cafes, and bars seeing 22% faster table turns and zero missed kitchen tickets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/login" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-13 px-8 text-base bg-[#BCE440] hover:bg-[#b0d938] text-[#0B3B24] font-bold rounded-full shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Store className="w-4 h-4 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/demo" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group w-full sm:w-auto h-13 px-8 text-base bg-[#0E4A2E] hover:bg-[#125837] text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-200 font-semibold cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Schedule 1-on-1 Walkthrough
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLEAN FOOTER */}
      <footer className="border-t border-[#E5DEC9] bg-[#FAF7EE] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              All-in-one restaurant operations system for cafes, restaurants, bars, and food outlets.
            </p>
            <div className="text-xs text-stone-500">
              Reliable Cloud Architecture • 100% Bill Accuracy
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 font-mono">Products</h4>
            <div className="space-y-2 text-xs text-stone-600">
              <div><Link href="/product/inventory" className="hover:text-[#0B3B24]">Inventory Management</Link></div>
              <div><Link href="/product/expenses" className="hover:text-[#0B3B24]">Expenses Tracker</Link></div>
              <div><Link href="/product/hotel" className="hover:text-[#0B3B24]">Hotel Management</Link></div>
              <div><Link href="/product/gym" className="hover:text-[#0B3B24]">Gym Management</Link></div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 font-mono">Platform</h4>
            <div className="space-y-2 text-xs text-stone-600">
              <div><Link href="/demo" className="hover:text-[#0B3B24]">Live Demo</Link></div>
              <div><Link href="/#calculator" className="hover:text-[#0B3B24]">Savings Calculator</Link></div>
              <div><Link href="/#faq" className="hover:text-[#0B3B24]">FAQ</Link></div>
              <div><Link href="/login" className="hover:text-[#0B3B24]">Sign In</Link></div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 font-mono">Company</h4>
            <div className="space-y-2 text-xs text-stone-600">
              <div>© {new Date().getFullYear()} Tavola Technologies</div>
              <div className="text-stone-400">Made for modern food &amp; hospitality teams</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
