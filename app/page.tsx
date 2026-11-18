'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  QrCode, 
  Flame, 
  LayoutDashboard, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Receipt, 
  ChevronRight, 
  TrendingUp, 
  Clock, 
  Smartphone, 
  ChefHat, 
  Scale, 
  Store, 
  CreditCard,
  RefreshCw,
  Laptop,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge-2';
import { LandingHero, BrandLogo } from '@/components/landing';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'qr' | 'kds' | 'pos' | 'inventory'>('qr');
  const [calculatorTables, setCalculatorTables] = useState(24);
  const [calculatorDailyGuests, setCalculatorDailyGuests] = useState(180);
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  // Financial ROI Calculation (approx saved per month in INR)
  const estimatedHoursSavedDaily = Math.round((calculatorDailyGuests * 4.2) / 60);
  const estimatedTableTurnoverBoost = Math.min(28, Math.round(15 + (calculatorTables * 0.3)));
  const estimatedMonthlySaved = Math.round(calculatorTables * 1850 + calculatorDailyGuests * 120);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#141414] selection:bg-[#BCE440]/40 selection:text-[#0B3B24] font-sans antialiased overflow-x-hidden">
      
      {/* 1. HERO SECTION & INTEGRATED NAVBAR */}
      <LandingHero />

      {/* 2. REALTIME OPERATIONS SHOWCASE */}
      <section id="operations" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-2">
            Complete Operations Hub
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
            Everything in Your Restaurant, Connected in Real-Time
          </p>
          <p className="mt-3 text-[#555555] text-base">
            No lost paper slips, no misunderstandings between waiters and chefs. When a guest orders, the kitchen sees it immediately, the table status updates, and your inventory reduces automatically.
          </p>
        </div>

        {/* Interactive Tab Switcher (Responsive 2x2 grid on mobile, horizontal pill on tablet/desktop) */}
        <div className="flex justify-center mb-8 px-2">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center p-1.5 rounded-2xl sm:rounded-full bg-[#EAE4D3] border border-[#DDD6C0] shadow-2xs w-full sm:w-auto max-w-lg sm:max-w-none gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'qr'
                  ? 'bg-[#0B3B24] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#141414] hover:bg-black/5'
              }`}
            >
              <Smartphone className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'qr' ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} /> 
              <span>1. QR Menu</span>
            </button>
            <button
              onClick={() => setActiveTab('kds')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'kds'
                  ? 'bg-[#0B3B24] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#141414] hover:bg-black/5'
              }`}
            >
              <ChefHat className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'kds' ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} /> 
              <span>2. Kitchen KDS</span>
            </button>
            <button
              onClick={() => setActiveTab('pos')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'pos'
                  ? 'bg-[#0B3B24] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#141414] hover:bg-black/5'
              }`}
            >
              <Laptop className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'pos' ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} /> 
              <span>3. Floor Tables</span>
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'inventory'
                  ? 'bg-[#0B3B24] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#141414] hover:bg-black/5'
              }`}
            >
              <Scale className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'inventory' ? 'text-[#BCE440]' : 'text-[#0B3B24]'}`} /> 
              <span>4. Stock Control</span>
            </button>
          </div>
        </div>

        {/* Live Mockup Container */}
        <div className="relative rounded-3xl bg-white border border-[#E5DEC9] p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B3B24]/5 rounded-full blur-3xl pointer-events-none" />

          {/* TAB 1: GUEST QR EXPERIENCE */}
          {activeTab === 'qr' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-fade-in-up">
              <div className="md:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold">
                  <QrCode className="w-3.5 h-3.5" /> For Your Diners
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight">
                  Guests Scan &amp; Order in Seconds. No App Needed.
                </h3>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  Diners simply point their phone camera at the table QR code. They view your full menu with appetizing photos, choose spice levels or extras, and place their order without waiting for a waiter.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Order Extra Items Anytime:</strong> Guests can order more drinks or desserts anytime on the same continuous bill.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Easy Customization:</strong> Guests select modifiers (extra cheese, spicy level, butter naan count) easily.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Instant UPI Payments:</strong> Guests can pay by scanning an exact UPI QR code without waiting for a bill folder.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/demo">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-medium rounded-full px-6 py-2.5 shadow-sm">
                      Request Private Walkthrough <ArrowRight className="w-4 h-4 ml-2 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Mobile Mockup Card */}
              <div className="md:col-span-7 flex justify-center">
                <div className="w-full max-w-[350px] sm:max-w-[370px] rounded-[32px] bg-white border border-[#E5DEC9] p-5 shadow-lg">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00ab14]" />
                      <span className="text-xs font-bold text-[#141414]">Table 07 • The Rustic Spatula</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7EE] text-[#0B3B24] border border-[#DDD6C0] text-[10px] font-bold">
                      Round 2 Active
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[#141414]">Paneer Tikka Platter</div>
                        <div className="text-xs text-stone-500">Mint chutney, onion salad</div>
                        <div className="text-xs font-bold text-[#0B3B24] mt-1">₹340.00</div>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-[#FEF3C7] text-[#92400E] text-xs font-semibold">
                        Kitchen Cooking
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[#141414]">Fresh Lime Soda</div>
                        <div className="text-xs text-stone-500">Sweet &amp; Salt</div>
                        <div className="text-xs font-bold text-[#0B3B24] mt-1">₹90.00</div>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-[#D1FAE5] text-[#065F46] text-xs font-semibold">
                        Served
                      </span>
                    </div>

                    <div className="mt-4 p-3.5 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0]">
                      <div className="flex justify-between text-xs text-stone-600">
                        <span>Items Total (2 items)</span>
                        <span className="font-mono font-bold">₹430.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-stone-500 mt-1">
                        <span>GST (5%)</span>
                        <span className="font-mono">₹21.50</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-[#141414] mt-2 pt-2 border-t border-stone-200">
                        <span>Total Payable</span>
                        <span className="text-[#0B3B24] font-black font-mono">₹451.50</span>
                      </div>
                      <button className="w-full mt-3 py-2.5 rounded-xl bg-[#00ab14] hover:bg-[#009612] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer">
                        <QrCode className="w-3.5 h-3.5" /> Pay with Instant UPI QR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KITCHEN DISPLAY (KDS) */}
          {activeTab === 'kds' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-fade-in-up">
              <div className="md:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 text-amber-600" /> For Your Chefs &amp; Kitchen
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight">
                  Orders Pop Up in the Kitchen Instantly.
                </h3>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  No handwritten paper chits that get oily, burnt, or lost. Kitchen staff can see every order clearly categorized on any tablet or screen, with clear timers to ensure meals are served hot and on time.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Station Routing:</strong> Tandoor items go to the tandoor cook, bar drinks go to the bar.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>1-Tap Ready Button:</strong> Chefs tap once when a dish is ready so waiters know to pick it up.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Color Timers:</strong> Tickets turn yellow and red if food is taking longer than expected.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/login">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-medium rounded-full px-6 py-2.5 shadow-sm">
                      See Kitchen Screen View <ChevronRight className="w-4 h-4 ml-1 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* KDS Simulation Cards */}
              <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
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

          {/* TAB 3: FLOOR & POS BOARD */}
          {activeTab === 'pos' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-fade-in-up">
              <div className="md:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold">
                  <LayoutDashboard className="w-3.5 h-3.5" /> For Cashiers &amp; Managers
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight">
                  See Every Table and Settle Bills in One Tap.
                </h3>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  Look at your dining hall at a glance. See which tables are currently eating, which tables have asked for the bill, and which tables are clean and ready to seat waiting customers.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Color-Coded Tables:</strong> Green for dining, yellow for bill requested, gray for available.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>100% Accurate Bills:</strong> Zero miscalculations on GST, service charges, or discounts.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Split Bills &amp; Thermal Printing:</strong> Split bills easily and print standard 80mm thermal receipts.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/login">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-medium rounded-full px-6 py-2.5 shadow-sm">
                      Try Table Management <ChevronRight className="w-4 h-4 ml-1 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Floor Plan Simulation */}
              <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-emerald-200 text-center shadow-xs">
                  <div className="text-xs text-emerald-800 font-bold mb-1">Table 01 • 4 Pax</div>
                  <div className="text-lg font-black text-[#141414]">Dining</div>
                  <div className="text-[11px] text-stone-500 mt-1">₹1,420 • 28 mins</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-center shadow-xs">
                  <div className="text-xs text-amber-800 font-bold mb-1">Table 02 • 2 Pax</div>
                  <div className="text-lg font-black text-[#141414] flex items-center justify-center gap-1.5">
                    <span>Bill Asked</span>
                    <Bell className="w-4 h-4 text-amber-600 inline" />
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

          {/* TAB 4: RECIPE AUTO-DEDUCTIONS */}
          {activeTab === 'inventory' && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-fade-in-up">
              <div className="md:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold">
                  <Scale className="w-3.5 h-3.5" /> For Food Cost &amp; Waste Control
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight">
                  Stock Reduces Automatically as Dishes are Sold.
                </h3>
                <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                  Never do manual stock counts late at night. When an order of Paneer Butter Masala or Chicken Biryani is confirmed, the exact grams of raw paneer, chicken, and dairy are deducted automatically, and you get alerted before anything runs out.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Low Stock Alerts:</strong> Instant warning popup on screen when an item drops below safety level.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Flexible Measurements:</strong> Track by kilograms, grams, bottles, or plates easily.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#333333]">
                    <CheckCircle2 className="w-5 h-5 text-[#00ab14] shrink-0 mt-0.5" />
                    <span><strong>Prevent Kitchen Theft &amp; Wastage:</strong> Clear log showing every plate sold versus raw food used.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/login">
                    <Button className="bg-[#0B3B24] hover:bg-[#082b1a] text-white font-medium rounded-full px-6 py-2.5 shadow-sm">
                      Check Stock Management <ChevronRight className="w-4 h-4 ml-1 text-[#BCE440]" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Recipe Deduction Simulation */}
              <div className="md:col-span-7 space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#141414]">Fresh Paneer (Dairy)</span>
                    <Badge className="bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">Low Stock • Order Soon</Badge>
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
                    <span className="text-sm font-bold text-[#141414]">Chicken Portions</span>
                    <Badge className="bg-emerald-50 text-[#0B3B24] border border-emerald-200 text-xs font-bold">Healthy Stock</Badge>
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
                    <span className="text-sm font-bold text-[#141414]">Cold Drinks &amp; Beverages</span>
                    <Badge className="bg-emerald-50 text-[#0B3B24] border border-emerald-200 text-xs font-bold">Healthy Stock</Badge>
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
        </div>
      </section>

      {/* 3. CORE FEATURE CARDS */}
      <section id="features" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-2">
            Built for Restaurant Owners
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
            Six Practical Tools to Help You Run Your Venue
          </p>
          <p className="mt-3 text-[#555555] text-base">
            Simple to learn, fast for your staff, and proven to speed up table turnover during busy lunch and dinner hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/60 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-12px_rgba(11,59,36,0.12)] transition-all duration-300 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] mb-6 group-hover:scale-110 group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-all">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] mb-2 group-hover:text-[#0B3B24] transition-colors">
              Table QR Ordering
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-4">
              Guests scan the QR code on their table to view photos, choose dishes, and order instantly. No waiting for a waiter during rush hour.
            </p>
            <ul className="text-xs text-[#555555] space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Easy item customization (extra cheese, spice levels)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Diners can order extra food anytime on the same bill
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/60 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-12px_rgba(11,59,36,0.12)] transition-all duration-300 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] mb-6 group-hover:scale-110 group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-all">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] mb-2 group-hover:text-[#0B3B24] transition-colors">
              Kitchen Display Screen (KDS)
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-4">
              Digital kitchen screens show orders clearly with preparation timers. No paper chits blowing away, getting stained, or lost.
            </p>
            <ul className="text-xs text-[#555555] space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Color alerts warn chefs if an order takes too long
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Routes items to the right cook (Tandoor, Main Kitchen, Bar)
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/60 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-12px_rgba(11,59,36,0.12)] transition-all duration-300 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] mb-6 group-hover:scale-110 group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-all">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] mb-2 group-hover:text-[#0B3B24] transition-colors">
              Live Table &amp; Floor Plan
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-4">
              Visual overview of your dining hall. See which tables are eating, which asked for the bill, and which are ready to seat new guests.
            </p>
            <ul className="text-xs text-[#555555] space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Move, merge, or change tables in just one click
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Waiter service call alerts show immediately on the cash counter
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/60 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-12px_rgba(11,59,36,0.12)] transition-all duration-300 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] mb-6 group-hover:scale-110 group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-all">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] mb-2 group-hover:text-[#0B3B24] transition-colors">
              Automatic Stock Tracking
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-4">
              Link menu items to ingredients (paneer, chicken, sauces, dairy). Stock reduces automatically as dishes are sold with clear audit logs.
            </p>
            <ul className="text-xs text-[#555555] space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Automatic ingredient deduction on every confirmed order
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Instant low stock warning before you run out of an item
              </li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/60 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-12px_rgba(11,59,36,0.12)] transition-all duration-300 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] mb-6 group-hover:scale-110 group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-all">
              <Receipt className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] mb-2 group-hover:text-[#0B3B24] transition-colors">
              Instant UPI &amp; Fast Billing
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-4">
              Generates dynamic UPI QR codes with the exact bill amount. Guests pay in seconds. Supports split bills, discounts, and standard thermal receipts.
            </p>
            <ul className="text-xs text-[#555555] space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> 100% exact bill calculations (no rounding errors on GST)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Cash, Card, UPI, and Split Bill payments supported
              </li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/60 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-12px_rgba(11,59,36,0.12)] transition-all duration-300 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] mb-6 group-hover:scale-110 group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-all">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] mb-2 group-hover:text-[#0B3B24] transition-colors">
              Separate Staff Logins &amp; Security
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-4">
              Give cooks access only to kitchen screens, cashiers to billing, and keep your profit margins and sales reports private for the owner.
            </p>
            <ul className="text-xs text-[#555555] space-y-2 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Safe multi-user access without sharing manager passwords
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Works reliably even during heavy weekend dinner rushes
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. ROI & SAVINGS CALCULATOR */}
      <section id="calculator" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-[#E5DEC9] p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7EE] border border-[#DDD6C0] text-[#0B3B24] text-xs font-bold">
                <TrendingUp className="w-3.5 h-3.5" /> Direct Restaurant Benefits
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                See How Much Time &amp; Money You Save Every Month
              </h2>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
                By letting customers order directly, eliminating bill-checking delays, and stopping kitchen ingredient wastage, restaurants see an immediate boost in profit.
              </p>

              {/* Slider Controls */}
              <div className="space-y-6 pt-4">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-stone-700">Number of Tables in Your Restaurant:</span>
                    <span className="text-[#0B3B24] font-black">{calculatorTables} Tables</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="80"
                    value={calculatorTables}
                    onChange={(e) => setCalculatorTables(Number(e.target.value))}
                    className="w-full accent-[#0B3B24] h-3 bg-stone-200 rounded-lg cursor-pointer touch-pan-x"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                    <span>4 (Small Cafe)</span>
                    <span>40 (Medium Bistro)</span>
                    <span>80+ (Large Restaurant)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-stone-700">Average Daily Customers:</span>
                    <span className="text-[#0B3B24] font-black">{calculatorDailyGuests} Guests/day</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="600"
                    step="10"
                    value={calculatorDailyGuests}
                    onChange={(e) => setCalculatorDailyGuests(Number(e.target.value))}
                    className="w-full accent-[#0B3B24] h-3 bg-stone-200 rounded-lg cursor-pointer touch-pan-x"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                    <span>30 Guests/day</span>
                    <span>300 Guests/day</span>
                    <span>600+ Guests/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projected Impact Cards */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DEC9] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7EE] text-[#0B3B24] flex items-center justify-center mb-3 border border-[#DDD6C0]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm text-stone-600 font-semibold">Daily Staff Time Saved</div>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-extrabold text-[#141414]">~{estimatedHoursSavedDaily} Hours</div>
                  <div className="text-xs text-stone-500 mt-1">No waiter running back and forth for menu &amp; bills</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DEC9] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7EE] text-[#0B3B24] flex items-center justify-center mb-3 border border-[#DDD6C0]">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div className="text-sm text-stone-600 font-semibold">Faster Table Turns</div>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-extrabold text-[#141414]">+{estimatedTableTurnoverBoost}%</div>
                  <div className="text-xs text-stone-500 mt-1">12-18 minutes saved per dining party</div>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#0B3B24] via-[#0E4A2E] to-[#062414] text-white sm:col-span-2 shadow-lg shadow-[#0B3B24]/20">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-semibold text-emerald-100">Estimated Monthly Value for Owner</div>
                    <div className="text-xs text-emerald-100/80 mt-0.5">Calculated from saved food waste, faster tables &amp; reduced staff stress</div>
                  </div>
                  <Badge className="bg-[#BCE440]/20 text-[#BCE440] border-0 text-xs font-bold">High Profit Impact</Badge>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-white">₹{estimatedMonthlySaved.toLocaleString()}</div>
                  <span className="text-xs text-emerald-200">/ month estimated savings</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. COMPARISON: OLD HARDWARE POS VS TAVOLA */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-2">
            Why Restaurants Are Upgrading
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
            Old Bulky POS Terminals vs Tavola Cloud System
          </p>
        </div>

        
        {/* Mobile Card Comparison Mode (shown on small screens) */}
        <div className="block sm:hidden space-y-3.5 mb-6">
          {[
            {
              title: "QR Ordering by Customers",
              old: "Static laminated PDF only, or forces guests to download an app",
              tavola: "Opens instantly in any mobile browser with photos, modifiers & live status"
            },
            {
              title: "Kitchen Orders",
              old: "Paper slips that get lost, grease-stained, or printed out of order",
              tavola: "Instant digital screen with cooking timers & station routing"
            },
            {
              title: "Stock & Ingredient Control",
              old: "Manual notebook counts at midnight with huge missing stock",
              tavola: "Stock reduces automatically with every plate sold, with low-stock alerts"
            },
            {
              title: "UPI Payments & Billing",
              old: "Cashier shows static cardboard QR and verifies customer screens",
              tavola: "Exact bill amount encoded in UPI QR code; marks paid automatically"
            },
            {
              title: "Hardware Investment",
              old: "Expensive heavy POS machines costing ₹50,000+ upfront",
              tavola: "Runs on any existing laptop, tablet, iPad, or smartphone you already have"
            }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs space-y-2.5">
              <h4 className="text-sm font-bold text-[#141414]">{item.title}</h4>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500">
                <span className="font-bold text-stone-700 block text-[10px] uppercase tracking-wider mb-0.5">Traditional POS:</span>
                {item.old}
              </div>
              <div className="p-2.5 rounded-xl bg-[#0B3B24]/8 border border-[#0B3B24]/20 text-xs text-[#0B3B24] font-semibold">
                <span className="font-extrabold text-[#0B3B24] block text-[10px] uppercase tracking-wider mb-0.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00ab14]" /> Tavola Modern System:
                </span>
                {item.tavola}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet & Desktop Comparison Table */}
        <div className="hidden sm:block overflow-x-auto rounded-3xl border border-[#E5DEC9] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#E5DEC9] bg-[#FAF7EE]">
                <th className="p-4 sm:p-5 font-bold text-stone-700">What You Need</th>
                <th className="p-4 sm:p-5 font-semibold text-stone-500">Old Traditional POS Systems</th>
                <th className="p-4 sm:p-5 font-bold text-white bg-[#0B3B24] border-l border-r border-[#0B3B24]">
                  Tavola Modern System
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DEC9]/60 text-stone-700">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#141414]">QR Ordering by Customers</td>
                <td className="p-4 sm:p-5 text-stone-500">Static laminated PDF only, or forces guests to download an app</td>
                <td className="p-4 sm:p-5 bg-white text-[#141414] font-medium">
                  Opens instantly in any mobile browser with photos, extras, &amp; live status
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#141414]">Kitchen Orders</td>
                <td className="p-4 sm:p-5 text-stone-500">Paper slips that get lost, grease-stained, or printed out of order</td>
                <td className="p-4 sm:p-5 bg-white text-[#141414] font-medium">
                  Instant digital screen with cooking timers &amp; station routing
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#141414]">Stock &amp; Ingredient Control</td>
                <td className="p-4 sm:p-5 text-stone-500">Manual notebook counts at midnight with huge missing stock</td>
                <td className="p-4 sm:p-5 bg-white text-[#141414] font-medium">
                  Stock reduces automatically with every plate sold, with low-stock alerts
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#141414]">UPI Payments &amp; Billing</td>
                <td className="p-4 sm:p-5 text-stone-500">Cashier shows static cardboard QR and has to check customer phone screens</td>
                <td className="p-4 sm:p-5 bg-white text-[#141414] font-medium">
                  Exact bill amount encoded in UPI QR code; marks paid automatically
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#141414]">Hardware Investment</td>
                <td className="p-4 sm:p-5 text-stone-500">Expensive heavy POS machines costing ₹50,000+ upfront</td>
                <td className="p-4 sm:p-5 bg-white text-[#141414] font-medium">
                  Runs on any existing laptop, tablet, iPad, or smartphone you already have
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. OPERATOR FAQ */}
      <section id="faq" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
            Simple Answers for Restaurant Owners
          </p>
          <p className="mt-2 text-[#555555] text-sm">
            Everything you need to know about setting up and running Tavola at your venue.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Do my dining guests need to download an app from Play Store or App Store?",
              a: "No! Guests do not need to install anything. They just point their phone camera at the table QR code. It opens your full menu immediately in Safari or Chrome in under two seconds."
            },
            {
              q: "Can I use my existing thermal bill printer?",
              a: "Yes. Tavola works with standard 80mm and 58mm thermal receipt printers via your laptop or tablet. You don't need to buy expensive proprietary machines."
            },
            {
              q: "What happens if our restaurant internet connection drops temporarily?",
              a: "Tavola is built for busy restaurants. Your active drafts remain safe, and the moment your connection reconnects, everything syncs back up automatically without any lost orders."
            },
            {
              q: "Can my staff members access only their specific screens?",
              a: "Yes. Kitchen cooks only see the cooking screen, cashiers see billing, and you as the owner have full private access to sales reports, profit margins, and inventory logs."
            },
            {
              q: "How does the raw stock reduction work for items like Paneer or Chicken?",
              a: "You simply set how much raw ingredient goes into each dish (for example: 200g Paneer per Paneer Tikka). Whenever that dish is served, the system reduces that exact amount from your inventory and alerts you before it runs out."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-white border border-[#E5DEC9] shadow-xs overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-[#FAF8F5] transition-colors cursor-pointer select-none"
              >
                <span className="font-bold text-[#141414] text-base">{item.q}</span>
                <span className={`text-2xl font-bold transition-transform duration-300 ease-out shrink-0 ${openFaq === index ? 'rotate-45 text-[#0B3B24]' : 'text-stone-600'}`}>
                  +
                </span>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-[#555555] text-sm leading-relaxed border-t border-[#E5DEC9] pt-3.5 bg-[#FAF8F5]">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HIGH-CONVERSION CTA BANNER */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#0B3B24] p-8 sm:p-14 text-center text-white shadow-2xl shadow-[#0B3B24]/25 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Make Your Restaurant Operations Effortless?
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Speed up table turnover, eliminate missed kitchen orders, and keep complete control over your food costs starting today.
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

      {/* 8. CLEAN FOOTER (Platform Admin strictly hidden) */}
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
              <li><a href="#features" className="hover:text-[#0B3B24] transition-colors">QR Ordering</a></li>
              <li><a href="#operations" className="hover:text-[#0B3B24] transition-colors">Kitchen Display Screen</a></li>
              <li><a href="#operations" className="hover:text-[#0B3B24] transition-colors">Floor Plan &amp; Tables</a></li>
              <li><a href="#operations" className="hover:text-[#0B3B24] transition-colors">Inventory &amp; Stock</a></li>
              <li><a href="#calculator" className="hover:text-[#0B3B24] transition-colors">Savings Calculator</a></li>
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
                <Link href="/demo#faq" className="hover:text-[#0B3B24] transition-colors">
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
