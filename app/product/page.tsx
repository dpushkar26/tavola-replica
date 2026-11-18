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
  Milk
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { BrandLogo } from '@/components/landing/BrandLogo';

type ProductModule = 'qr' | 'kds' | 'tables' | 'inventory' | 'billing';

export default function ProductPage() {
  const [activeModule, setActiveModule] = useState<ProductModule>('qr');

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#141414] selection:bg-[#BCE440]/40 selection:text-[#0B3B24] font-sans antialiased overflow-x-hidden">
      
      {/* 1. SEAMLESS TOP NAVBAR */}
      <LandingNavbar />

      {/* 2. PRODUCT HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 lg:pb-20">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          
          {/* Breadcrumb / Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFE9] border border-[#0B3B24]/15 text-[#0B3B24] text-xs font-bold tracking-tight shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ab14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ab14]"></span>
            </span>
            <span>THE COMPLETE TAVOLASERVE SUITE</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black text-[#141414] tracking-tight leading-[1.04] uppercase">
            Everything You Need to Run a Modern Restaurant
          </h1>

          <p className="text-[#555555] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From the moment guests scan the table QR code to kitchen station routing and zero-error UPI settlement, Tavola powers your entire dining operations with zero proprietary hardware lock-in.
          </p>

          {/* Quick CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link href="/login" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-12 px-7 text-sm sm:text-base bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full shadow-md shadow-[#0B3B24]/15 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start 7-Day Free Trial</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
              </Button>
            </Link>
            <Link href="/demo" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto h-12 px-7 text-sm sm:text-base border border-[#141414] text-[#141414] hover:bg-[#0B3B24] hover:text-white hover:border-[#0B3B24] rounded-full transition-all duration-200 font-bold cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 mr-2 fill-current" />
                <span>Schedule Live Demo</span>
              </Button>
            </Link>
          </div>

        </div>

        {/* 3. MODULE SELECTOR TABS */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="p-1.5 rounded-2xl sm:rounded-full bg-[#EAE4D3] border border-[#DDD6C0] shadow-2xs flex flex-wrap justify-center gap-1">
            {[
              { id: 'qr', label: 'Table QR Ordering' },
              { id: 'kds', label: 'Kitchen KDS' },
              { id: 'tables', label: 'Live Floor Plan' },
              { id: 'inventory', label: 'Recipe Stock' },
              { id: 'billing', label: 'Instant Billing' },
            ].map((tab) => {
              const isActive = activeModule === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveModule(tab.id as ProductModule)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B3B24] text-white shadow-xs'
                      : 'text-[#444444] hover:text-[#141414] hover:bg-black/5'
                  }`}
                >
                  {tab.id === 'qr' && <QrCode className={`w-4 h-4 ${isActive ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} />}
                  {tab.id === 'kds' && <ChefHat className={`w-4 h-4 ${isActive ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} />}
                  {tab.id === 'tables' && <LayoutDashboard className={`w-4 h-4 ${isActive ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} />}
                  {tab.id === 'inventory' && <Scale className={`w-4 h-4 ${isActive ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} />}
                  {tab.id === 'billing' && <Receipt className={`w-4 h-4 ${isActive ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. ACTIVE MODULE FEATURE SPOTLIGHT */}
        <div className="mt-8 rounded-3xl bg-white border border-[#E5DEC9] p-7 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
          
          {/* MODULE 1: QR CODE DINING */}
          {activeModule === 'qr' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center animate-fade-in-up">
              <div className="lg:col-span-6 space-y-6">
                <span className="px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold inline-flex items-center gap-2">
                  <QrCode className="w-3.5 h-3.5" /> Table QR Ordering &amp; Digital Menu
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                  No App Downloads. Just Point, Order, and Relax.
                </h2>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  Every table gets a unique vector QR code. Guests simply point their iPhone or Android camera to open your interactive menu in Safari or Chrome in under two seconds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Multi-Round Ordering:</strong> Diners can order extra drinks, rotis, or dessert anytime on their open continuous tab.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Item Customizations &amp; Notes:</strong> Guests choose spice levels, less oil, or extra cheese with direct kitchen pass-through.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Automatic FSSAI &amp; Allergen Tags:</strong> Clearly displays veg/non-veg green/red dots, calories, and allergen warnings.</span>
                  </div>
                </div>
                <div className="pt-2 flex items-center gap-4">
                  <Link href="/demo">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full px-6 py-2.5">
                      Test Guest QR Experience <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[360px] rounded-[32px] bg-white border border-[#E5DEC9] p-5 shadow-xl">
                  <div className="flex items-center justify-between pb-3.5 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00ab14]" />
                      <span className="text-xs font-bold text-[#141414]">Table 07 • The Rustic Spatula</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7EE] text-[#0B3B24] border border-[#DDD6C0] text-[10px] font-bold">
                      Round 2 Active
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[#141414]">Paneer Tikka Platter</div>
                        <div className="text-xs text-stone-500">Mint chutney, onion salad</div>
                        <div className="text-xs font-bold text-[#0B3B24] mt-1">₹340.00</div>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-[#FEF3C7] text-[#92400E] text-xs font-semibold">
                        Kitchen Cooking
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[#141414]">Fresh Lime Soda</div>
                        <div className="text-xs text-stone-500">Sweet &amp; Salt</div>
                        <div className="text-xs font-bold text-[#0B3B24] mt-1">₹90.00</div>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-[#D1FAE5] text-[#065F46] text-xs font-semibold">
                        Served
                      </span>
                    </div>

                    <div className="mt-4 p-4 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0]/80">
                      <div className="flex justify-between text-xs text-stone-600">
                        <span>Items Total (2 items)</span>
                        <span className="font-mono font-bold">₹430.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-stone-500 mt-1.5">
                        <span>GST (5%)</span>
                        <span className="font-mono">₹21.50</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-[#141414] mt-2.5 pt-2.5 border-t border-stone-200">
                        <span>Total Payable</span>
                        <span className="text-[#0B3B24] font-black font-mono">₹451.50</span>
                      </div>
                      <button className="w-full mt-3.5 py-3 rounded-xl bg-[#00ab14] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer">
                        <QrCode className="w-3.5 h-3.5" /> Pay with Instant UPI QR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 2: KITCHEN KDS */}
          {activeModule === 'kds' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center animate-fade-in-up">
              <div className="lg:col-span-6 space-y-6">
                <span className="px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold inline-flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-amber-600" /> Kitchen Display Screen (KDS)
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                  Orders Pop Up on Kitchen Screens in Milliseconds.
                </h2>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  Eliminate lost paper slips, missed tickets, and shouting across the dining room. Kitchen screens organize dishes by prep time and route items directly to individual cooking stations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Station Routing:</strong> Tandoor items go to Tandoor screen, mocktails to Bar, biryani to Main Kitchen.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Color-Coded Timers:</strong> Tickets transition from Green (&lt;8 min) to Amber (12 min) to Red (15+ min) to prevent delays.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>One-Tap Ready Alerts:</strong> When cooks tap &apos;Ready&apos;, waiters get immediate push alerts to pick up dishes hot.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/demo">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full px-6 py-2.5">
                      Explore KDS Workflow <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white border border-amber-300 p-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#141414]">#T-104 • Table 04</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold border border-amber-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 07:42
                    </span>
                  </div>
                  <div className="text-xs text-stone-500 mb-3">Dine-in • 4 Guests</div>
                  <div className="space-y-2 text-sm border-t border-stone-200 pt-2">
                    <div className="flex justify-between">
                      <span className="text-[#141414] font-medium">2x Paneer Butter Masala</span>
                      <span className="text-xs text-amber-600 font-bold font-mono">KITCHEN</span>
                    </div>
                    <div className="text-xs text-stone-500 italic pl-3 border-l-2 border-amber-300">
                      &quot;Less spicy, extra gravy&quot;
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>4x Butter Naan</span>
                      <span className="text-xs text-[#00ab14] font-bold font-mono">READY</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs border border-amber-200 transition-colors cursor-pointer">
                    Mark Dishes Ready
                  </button>
                </div>

                <div className="rounded-2xl bg-white border border-[#E5DEC9] p-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00ab14]" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#141414]">#T-105 • Table 12</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 02:15
                    </span>
                  </div>
                  <div className="text-xs text-stone-500 mb-3">Dine-in • 2 Guests</div>
                  <div className="space-y-2 text-sm border-t border-stone-200 pt-2">
                    <div className="flex justify-between">
                      <span className="text-[#141414] font-medium">1x Veg Biryani (Handi)</span>
                      <span className="text-xs text-[#00ab14] font-bold font-mono">KITCHEN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#141414] font-medium">1x Boondi Raita</span>
                      <span className="text-xs text-blue-600 font-bold font-mono">PANTRY</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 rounded-xl bg-[#FAF7EE] hover:bg-[#F2EDDE] text-[#0B3B24] font-bold text-xs border border-[#DDD6C0] transition-colors cursor-pointer">
                    Mark In Preparation
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 3: LIVE FLOOR PLAN */}
          {activeModule === 'tables' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center animate-fade-in-up">
              <div className="lg:col-span-6 space-y-6">
                <span className="px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold inline-flex items-center gap-2">
                  <LayoutDashboard className="w-3.5 h-3.5" /> Floor Plan &amp; Table Management
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                  Visual Layout of Your Entire Restaurant in Real-Time.
                </h2>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  Hosts and floor captains see exactly which tables are dining, which requested bills, and which are clean and ready to seat the next waiting party.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>1-Click Table Reassignment:</strong> Merge tables for large parties or move guests to the patio with active cart transfer.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Waiter Service Chimes:</strong> When guests tap &apos;Call Waiter&apos; or &apos;Request Water&apos;, managers see it instantly.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Table Turnover Optimization:</strong> Auto-freed status triggers the moment UPI payment succeeds.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/demo">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full px-6 py-2.5">
                      View Table Control <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-emerald-200 text-center shadow-xs">
                  <div className="text-xs text-emerald-800 font-bold mb-1">Table 01 • 4 Pax</div>
                  <div className="text-lg font-black text-[#141414]">Dining</div>
                  <div className="text-[11px] text-stone-500 mt-1">₹1,420 • 28 mins</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-center shadow-xs">
                  <div className="text-xs text-amber-800 font-bold mb-1">Table 02 • 2 Pax</div>
                  <div className="text-lg font-black text-[#141414] flex items-center justify-center gap-1">
                    <span>Bill Asked</span>
                    <Bell className="w-3.5 h-3.5 text-amber-600 inline" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">₹890 • Awaiting UPI</div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center shadow-xs">
                  <div className="text-xs text-stone-500 font-bold mb-1">Table 03 • 6 Pax</div>
                  <div className="text-lg font-black text-stone-700">Available</div>
                  <div className="text-[11px] text-stone-400 mt-1">Clean &amp; Ready</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-emerald-200 text-center shadow-xs">
                  <div className="text-xs text-emerald-800 font-bold mb-1">Table 04 • 2 Pax</div>
                  <div className="text-lg font-black text-[#141414]">Dining</div>
                  <div className="text-[11px] text-stone-500 mt-1">₹640 • 12 mins</div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-center shadow-xs">
                  <div className="text-xs text-blue-800 font-bold mb-1">Table 05 • 8 Pax</div>
                  <div className="text-lg font-black text-[#141414]">Reserved</div>
                  <div className="text-[11px] text-stone-500 mt-1">Party • 9:00 PM</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-emerald-200 text-center shadow-xs">
                  <div className="text-xs text-emerald-800 font-bold mb-1">Table 06 • 4 Pax</div>
                  <div className="text-lg font-black text-[#141414]">Dining</div>
                  <div className="text-[11px] text-stone-500 mt-1">₹2,100 • 45 mins</div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 4: STOCK CONTROL */}
          {activeModule === 'inventory' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center animate-fade-in-up">
              <div className="lg:col-span-6 space-y-6">
                <span className="px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold inline-flex items-center gap-2">
                  <Scale className="w-3.5 h-3.5" /> Automatic Recipe Stock Deductions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                  Never Do Manual Inventory Audits at Midnight Again.
                </h2>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  Link raw ingredients like paneer, chicken, sauces, and cooking oils to your menu items. Every time an order is confirmed, raw weights reduce automatically.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Low-Stock Safeguards:</strong> Receive real-time alerts before key ingredients run out so your kitchen never stalls.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Loss &amp; Wastage Audits:</strong> Compare expected ingredient usage vs physical closing stock to curb pilferage.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Vendor Purchase Reorders:</strong> Auto-generate replenishment lists with a single tap.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/demo">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full px-6 py-2.5">
                      Explore Stock Control <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#141414]">Fresh Paneer (Dairy)</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">Low Stock • Order Soon</span>
                  </div>
                  <div className="w-full bg-[#FAF7EE] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '22%' }} />
                  </div>
                  <div className="flex justify-between text-xs text-stone-500 mt-2">
                    <span>Available: 1.8 kg</span>
                    <span>Safety Warning: 2.0 kg</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#141414]">Chicken Portions (Fresh Cut)</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#0B3B24] border border-emerald-200 text-xs font-bold">Healthy Stock</span>
                  </div>
                  <div className="w-full bg-[#FAF7EE] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-[#00ab14] h-2.5 rounded-full" style={{ width: '78%' }} />
                  </div>
                  <div className="flex justify-between text-xs text-stone-500 mt-2">
                    <span>Available: 28 plates</span>
                    <span>Safety Warning: 6 plates</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#141414]">Cold Drinks &amp; Bottled Soda</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#0B3B24] border border-emerald-200 text-xs font-bold">Healthy Stock</span>
                  </div>
                  <div className="w-full bg-[#FAF7EE] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-[#00ab14] h-2.5 rounded-full" style={{ width: '85%' }} />
                  </div>
                  <div className="flex justify-between text-xs text-stone-500 mt-2">
                    <span>Available: 56 bottles</span>
                    <span>Safety Warning: 12 bottles</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 5: BILLING & POS */}
          {activeModule === 'billing' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center animate-fade-in-up">
              <div className="lg:col-span-6 space-y-6">
                <span className="px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold inline-flex items-center gap-2">
                  <Receipt className="w-3.5 h-3.5" /> Instant Dynamic UPI &amp; Fast POS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                  Dynamic UPI QR Codes with 100% Exact Bill Amounts.
                </h2>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  No manual entering of rupee amounts on cardboard QRs. Tavola encodes the precise bill amount with GST directly into the QR code, marking the table paid automatically.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Zero Verification Hassles:</strong> No need for cashiers to peek at customer payment screens. Status syncs in 0.4 seconds.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Split Bills &amp; Custom Discounts:</strong> Split equally or by item among dining guests with instant thermal print.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Standard Thermal Printers:</strong> Works out of the box with any 80mm or 58mm USB/Bluetooth printer.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/demo">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full px-6 py-2.5">
                      Test Billing Workflow <ArrowRight className="w-4 h-4 ml-1.5 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[340px] rounded-3xl bg-gradient-to-br from-[#0B3B24] via-[#0E4A2E] to-[#062414] text-white p-6 shadow-2xl border border-emerald-700/50 space-y-5">
                  <div className="flex justify-between items-center border-b border-emerald-800/80 pb-3">
                    <span className="font-serif italic text-lg font-bold">TavolaServe POS</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#BCE440]/20 text-[#BCE440] font-bold">
                      PAID AUTO-VERIFIED
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-emerald-200 uppercase font-semibold">Table #04 Settled</div>
                    <div className="text-4xl font-black font-mono">₹1,420.00</div>
                    <div className="text-xs text-emerald-300/80">GooglePay UPI • Ref: #TXN-90241</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 text-xs space-y-1.5 text-emerald-100">
                    <div className="flex justify-between">
                      <span>Subtotal (4 items)</span>
                      <span className="font-mono">₹1,352.38</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5%)</span>
                      <span className="font-mono">₹67.62</span>
                    </div>
                    <div className="flex justify-between font-bold text-white pt-1 border-t border-white/20">
                      <span>Final Settled</span>
                      <span className="font-mono">₹1,420.00</span>
                    </div>
                  </div>
                  <div className="text-center text-[11px] text-emerald-300">
                    Table freed in 0.4s • Next party ready to seat
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </section>

      {/* 4.5 SPECIALIZED INDUSTRY PRODUCTS */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE9] border border-[#0B3B24]/15 text-[#0B3B24] text-xs font-bold tracking-tight mb-3">
            <span>EXPANDED BUSINESS LINEUP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141414] tracking-tight uppercase">
            Specialized Products by Tavola
          </h2>
          <p className="mt-2 text-[#555555] text-sm sm:text-base">
            Engineered with the same real-time sync, zero proprietary hardware, and instant settlement principles across high-turnover business models.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: 'inventory',
              title: 'Inventory Management',
              tag: 'Stock & Wastage',
              desc: 'Ingredient-level recipe deduction, automatic low-stock warnings & 1-tap supplier purchase orders.',
              href: '/product/inventory',
              badge: 'Popular',
              badgeColor: 'bg-emerald-100 text-[#0B3B24] border-emerald-200',
            },
            {
              id: 'expenses',
              title: 'Expenses Tracker',
              tag: 'Cash & P&L',
              desc: 'Daily cash outflows, supplier bill reconciliation, petty cash receipts & verified profit margins.',
              href: '/product/expenses',
              badge: 'Finance',
              badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
            },
            {
              id: 'gym',
              title: 'Gym Management',
              tag: 'Fitness Operations',
              desc: 'Biometric turnstile check-ins, WhatsApp renewal reminders, class booking & trainer slots.',
              href: '/product/gym',
              badge: 'New',
              badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
            },
            {
              id: 'dairy',
              title: 'Dairy Management',
              tag: 'Milk Procurement',
              desc: 'Morning/evening milk intake, electronic Fat/SNF testing formulas, farmer ledgers & route dispatch.',
              href: '/product/dairy',
              badge: 'Specialized',
              badgeColor: 'bg-teal-100 text-teal-900 border-teal-200',
            },
          ].map((item) => {
            return (
              <Link 
                key={item.id}
                href={item.href}
                className="group p-6 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-colors">
                      {item.id === 'inventory' && <Boxes className="w-5 h-5" />}
                      {item.id === 'expenses' && <Wallet className="w-5 h-5" />}
                      {item.id === 'gym' && <Dumbbell className="w-5 h-5" />}
                      {item.id === 'dairy' && <Milk className="w-5 h-5" />}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-[#0B3B24] uppercase tracking-wider mb-1">
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

      {/* 5. HARDWARE AGNOSTIC VALUE PROP */}
      <section className="relative z-10 py-16 bg-[#F5F0E1] border-y border-[#E5DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-2">
              Zero Proprietary Hardware Lock-In
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
              <h3 className="font-bold text-base text-[#141414]">Standard Thermal Printers</h3>
              <p className="text-xs text-[#555555]">
                Compatible with any 80mm or 58mm ESC/POS thermal printer via USB, Bluetooth, or WiFi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                  className="w-full sm:w-auto h-13 px-8 text-base bg-[#BCE440] hover:bg-[#b0d938] text-[#0B3B24] font-bold rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] cursor-pointer"
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

      {/* 7. CLEAN FOOTER */}
      <footer className="relative z-10 border-t border-[#E5DEC9] bg-[#FAF7EE] py-14 px-4 sm:px-6 lg:px-8">
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
            <h4 className="text-xs uppercase font-extrabold text-[#141414] tracking-wider mb-4">Features</h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li><Link href="/product#qr" className="hover:text-[#0B3B24] transition-colors">QR Ordering</Link></li>
              <li><Link href="/product#kds" className="hover:text-[#0B3B24] transition-colors">Kitchen Display Screen</Link></li>
              <li><Link href="/product#tables" className="hover:text-[#0B3B24] transition-colors">Floor Plan &amp; Tables</Link></li>
              <li><Link href="/product#inventory" className="hover:text-[#0B3B24] transition-colors">Inventory &amp; Stock</Link></li>
              <li><Link href="/#calculator" className="hover:text-[#0B3B24] transition-colors">Savings Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-extrabold text-[#141414] tracking-wider mb-4">Contact &amp; Advisory</h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li>
                <Link href="/demo" className="hover:text-[#0B3B24] transition-colors flex items-center gap-1">
                  Request a Private Demo
                </Link>
              </li>
              <li>
                <Link href="/demo#contact" className="hover:text-[#0B3B24] transition-colors">
                  Contact Sales &amp; Onboarding
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#0B3B24] transition-colors">
                  Platform Architecture &amp; FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-extrabold text-[#141414] tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li className="text-stone-600">Private Restaurant Data</li>
              <li className="text-stone-600">Instant Kitchen Routing</li>
              <li className="text-stone-600">Dynamic UPI Payments</li>
              <li className="text-stone-600">Thermal Printer Support</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div>
            &copy; {new Date().getFullYear()} Tavola Restaurant Operations Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-stone-600">Enterprise Restaurant OS</span>
            <span className="text-stone-400">•</span>
            <span className="text-stone-600">High-Availability Cloud Architecture</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
