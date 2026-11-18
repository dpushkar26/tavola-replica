'use client';

import { useState } from 'react';
import { 
  Warning, 
  CookingPot, 
  Table as TableIcon, 
  Receipt, 
  CreditCard, 
  Package, 
  ChartBar, 
  Clock, 
  ForkKnife, 
  Printer, 
  Sparkle, 
  BellRinging, 
  Check,
  DeviceMobile,
  Laptop
} from '@phosphor-icons/react';
import IPhoneMockup from '@/components/ui/iphone-mockup';

type OpsTab = 'tables' | 'kds' | 'orders' | 'billing' | 'inventory' | 'overview';

export function LandingShowcase() {
  const [activeTab, setActiveTab] = useState<OpsTab>('tables');
  const [mobileMode, setMobileMode] = useState<'qr' | 'ops'>('qr');

  // Phone Mockup interactive state: guest dish quantities
  const [guestCart, setGuestCart] = useState<Record<string, number>>({
    'paneer-tikka': 2,
    'butter-naan': 4,
    'dal-makhani': 1,
  });
  const [selectedGuestCategory, setSelectedGuestCategory] = useState<'all' | 'mains' | 'breads'>('all');

  const updateQuantity = (dishId: string, delta: number) => {
    setGuestCart(prev => {
      const current = prev[dishId] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [dishId]: next };
    });
  };

  const guestItemTotal = 
    (guestCart['paneer-tikka'] || 0) * 340 +
    (guestCart['butter-naan'] || 0) * 140 +
    (guestCart['dal-makhani'] || 0) * 280;
  
  const guestGst = Math.round(guestItemTotal * 0.05);
  const guestGrandTotal = guestItemTotal + guestGst;
  const guestTotalCount = Object.values(guestCart).reduce((a, b) => a + b, 0);

  // Render Desktop Window (Adaptive for desktop sidebar or mobile horizontal tab bar)
  const renderDesktopWindow = (isMobileLayout: boolean) => (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] border border-stone-200 overflow-hidden flex flex-col">
      {/* Titlebar */}
      <div className="h-9 bg-[#F4F1EA] border-b border-stone-200 px-3.5 sm:px-4 flex items-center justify-between text-[11px] text-stone-600">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          <span className="ml-2 font-semibold text-stone-700 text-[11px] sm:text-xs">
            Tavola Operations Suite
          </span>
        </div>

        <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/80 border border-stone-200 text-[9.5px] sm:text-[10px] font-mono text-stone-600">
          tavola.com/ops/{activeTab}
        </div>

        <div className="text-[11px] font-medium text-stone-500 hidden sm:block">
          Floor &amp; Kitchen Suite
        </div>
      </div>

      {/* Mobile Horizontal Tab Bar */}
      {isMobileLayout && (
        <div className="w-full bg-[#0B3B24] text-white p-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-emerald-900/60 shrink-0">
          {[
            { id: 'tables', label: 'Live Tables', icon: TableIcon },
            { id: 'kds', label: 'Kitchen KDS', icon: CookingPot },
            { id: 'orders', label: 'Orders', icon: Receipt },
            { id: 'billing', label: 'Billing POS', icon: CreditCard },
            { id: 'inventory', label: 'Stock', icon: Package },
            { id: 'overview', label: 'Overview', icon: ChartBar },
          ].map((item) => {
            const Icon = item.icon;
            const isCurrent = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id as OpsTab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#14532d] text-white shadow-xs ring-1 ring-[#00ab14]/40'
                    : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} weight={isCurrent ? 'fill' : 'bold'} className={isCurrent ? 'text-[#00ab14]' : ''} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Content Area */}
      <div className={`flex ${isMobileLayout ? 'flex-col min-h-[380px]' : 'min-h-[440px] sm:min-h-[460px]'}`}>
        {!isMobileLayout && (
          /* Desktop Vertical Sidebar */
          <div className="w-32 sm:w-40 bg-[#0B3B24] text-white p-3 flex flex-col justify-between shrink-0">
            <div className="space-y-4">
              <div className="flex items-center gap-2 pt-1 px-1">
                <span 
                  className="font-script text-xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-script), "Dancing Script", cursive' }}
                >
                  Tavola
                </span>
              </div>

              <div className="space-y-1 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-[#14532d] text-white shadow-xs font-bold'
                      : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <ChartBar size={14} weight={activeTab === 'overview' ? 'fill' : 'bold'} className={activeTab === 'overview' ? 'text-[#00ab14]' : ''} />
                  <span>Overview</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('tables')}
                  className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'tables'
                      ? 'bg-[#14532d] text-white shadow-xs font-bold'
                      : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <TableIcon size={14} weight={activeTab === 'tables' ? 'fill' : 'bold'} className={activeTab === 'tables' ? 'text-[#00ab14]' : ''} />
                  <span>Live Tables</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('kds')}
                  className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'kds'
                      ? 'bg-[#14532d] text-white shadow-xs font-bold'
                      : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <CookingPot size={14} weight={activeTab === 'kds' ? 'fill' : 'bold'} className={activeTab === 'kds' ? 'text-[#00ab14]' : ''} />
                  <span>Kitchen KDS</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'orders'
                      ? 'bg-[#14532d] text-white shadow-xs font-bold'
                      : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Receipt size={14} weight={activeTab === 'orders' ? 'fill' : 'bold'} className={activeTab === 'orders' ? 'text-[#00ab14]' : ''} />
                  <span>Orders</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('billing')}
                  className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'billing'
                      ? 'bg-[#14532d] text-white shadow-xs font-bold'
                      : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <CreditCard size={14} weight={activeTab === 'billing' ? 'fill' : 'bold'} className={activeTab === 'billing' ? 'text-[#00ab14]' : ''} />
                  <span>Billing &amp; POS</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('inventory')}
                  className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'inventory'
                      ? 'bg-[#14532d] text-white shadow-xs font-bold'
                      : 'text-emerald-200/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Package size={14} weight={activeTab === 'inventory' ? 'fill' : 'bold'} className={activeTab === 'inventory' ? 'text-[#00ab14]' : ''} />
                  <span>Stock Control</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-900/60 text-[10px] text-emerald-300/80 px-1">
              <p className="font-bold text-white truncate">The Rustic Spatula</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ab14]" />
                <span className="text-[9px] text-[#00ab14] font-semibold">Shift Active • 8:45 PM</span>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Canvas Area */}
        <div className="flex-1 bg-[#FBF9F5] p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden">
            
            {/* ============================================================ */}
            {/* TAB 1: LIVE TABLES & FLOOR PLAN                              */}
            {/* ============================================================ */}
            {activeTab === 'tables' && (
              <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141414]">Floor Plan &amp; Live Tables</h4>
                      <p className="text-[10px] text-stone-500">Real-time table occupancy &amp; waiter alerts</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#E6F7F5] text-[#0D9488] text-[10px] font-bold border border-emerald-200">
                      16 / 24 Occupied
                    </span>
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-3 gap-2 mt-2.5">
                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wider block">Today&apos;s Sales</span>
                      <span className="text-xs sm:text-sm font-black text-[#141414] font-mono">₹48,250</span>
                      <span className="text-[9px] text-[#00ab14] font-bold block">+14% vs avg</span>
                    </div>

                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wider block">Active Tables</span>
                      <span className="text-xs sm:text-sm font-black text-[#141414] font-mono">16 Tables</span>
                      <span className="text-[9px] text-stone-500 block">8 ready to seat</span>
                    </div>

                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wider block">Kitchen Queue</span>
                      <span className="text-xs sm:text-sm font-black text-[#EA580C] font-mono">4 Tickets</span>
                      <span className="text-[9px] text-[#EA580C] font-semibold block">Avg 11m prep</span>
                    </div>
                  </div>

                  {/* Zone Filter Pills */}
                  <div className="flex items-center gap-1 mt-2.5">
                    <span className="px-2 py-0.5 rounded-lg bg-white border border-stone-300 text-[10px] font-bold text-stone-900 shadow-2xs">
                      Main Dining (12)
                    </span>
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold text-stone-500">
                      Patio (6)
                    </span>
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold text-stone-500">
                      Rooftop (6)
                    </span>
                  </div>

                  {/* Table Cards Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                    
                    {/* Table 1: Occupied */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                          <span className="font-bold text-stone-900 text-xs">Table #01</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#FFE2DA] text-[#EA580C]">
                          Occupied
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-stone-500">
                        <span>4 Guests • Dining</span>
                        <span className="font-mono font-bold text-stone-800">₹1,420</span>
                      </div>
                    </div>

                    {/* Table 4: Needs Attention */}
                    <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-300 shadow-2xs space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span className="font-bold text-amber-950 text-xs">Table #04</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-amber-100 text-amber-800 flex items-center gap-1 animate-pulse">
                          <Warning size={10} weight="fill" className="text-amber-600" /> Help <BellRinging size={10} weight="fill" className="text-amber-700" />
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-amber-900 font-semibold">
                        <span>Bill Requested</span>
                        <span className="font-mono font-bold">₹890 UPI</span>
                      </div>
                    </div>

                    {/* Table 7: Cooking */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                          <span className="font-bold text-stone-900 text-xs">Table #07</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-blue-100 text-blue-800">
                          Cooking
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-stone-500">
                        <span>Round 2 Added</span>
                        <span className="font-mono font-bold text-stone-800">₹798</span>
                      </div>
                    </div>

                    {/* Table 2: Available */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                          <span className="font-bold text-stone-700 text-xs">Table #02</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#EEF2FF] text-[#4F46E5]">
                          Available
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-stone-400">
                        <span>2 Guests Clean</span>
                        <span className="text-[#00ab14] font-semibold">Seat Now</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Ticket Strip */}
                <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
                    <span className="font-bold text-stone-800">Ticket #T-104</span>
                    <span className="text-stone-500 font-mono hidden sm:inline">• 2x Butter Chicken, 4x Naan</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-extrabold text-[9px]">
                    Cooking 08m
                  </span>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 2: KITCHEN DISPLAY (KDS)                                 */}
            {/* ============================================================ */}
            {activeTab === 'kds' && (
              <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141414]">Live Kitchen Display (KDS)</h4>
                      <p className="text-[10px] text-stone-500">Live order tickets with prep timer alarms</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-orange-700 text-[10px] font-bold">
                        3 Pending Tickets
                      </span>
                    </div>
                  </div>

                  {/* KDS Simulation Cards */}
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    
                    {/* Ticket 1: Warning amber timer */}
                    <div className="p-2.5 rounded-xl bg-white border border-amber-300 shadow-2xs space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-stone-900">#T-104 • Table 04</span>
                        <span className="font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold flex items-center gap-1">
                          <Clock size={10} /> 07:42
                        </span>
                      </div>
                      <div className="space-y-1 text-[11px] border-t border-stone-100 pt-1.5">
                        <div className="flex justify-between">
                          <span className="font-medium text-stone-800">2x Paneer Butter Masala</span>
                          <span className="text-[9px] font-bold text-amber-600 font-mono">COOK</span>
                        </div>
                        <p className="text-[9px] text-stone-400 italic">&quot;Less spicy, extra gravy&quot;</p>
                        <div className="flex justify-between text-stone-400">
                          <span>4x Butter Naan</span>
                          <span className="text-[9px] font-bold text-[#00ab14] font-mono">READY</span>
                        </div>
                      </div>
                      <button className="w-full py-1 rounded-md bg-[#00ab14] hover:bg-[#009612] text-white text-[10px] font-bold cursor-pointer transition-colors shadow-2xs flex items-center justify-center gap-1">
                        <span>Mark Ready</span>
                        <Check size={11} weight="bold" />
                      </button>
                    </div>

                    {/* Ticket 2: Fresh green timer */}
                    <div className="p-2.5 rounded-xl bg-white border border-emerald-300 shadow-2xs space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-stone-900">#T-105 • Table 12</span>
                        <span className="font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                          <Clock size={10} /> 02:15
                        </span>
                      </div>
                      <div className="space-y-1 text-[11px] border-t border-stone-100 pt-1.5">
                        <div className="flex justify-between">
                          <span className="font-medium text-stone-800">1x Veg Biryani (Handi)</span>
                          <span className="text-[9px] font-bold text-emerald-600 font-mono">PREP</span>
                        </div>
                        <div className="flex justify-between text-stone-600">
                          <span>1x Boondi Raita</span>
                          <span className="text-[9px] font-bold text-blue-600 font-mono">PANTRY</span>
                        </div>
                      </div>
                      <button className="w-full py-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 text-[10px] font-bold cursor-pointer transition-colors">
                        In Preparation...
                      </button>
                    </div>

                  </div>
                </div>

                <div className="p-2 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between text-[10px] text-orange-900">
                  <span className="font-semibold flex items-center gap-1">
                    Station: Main Hot Kitchen • Audio Chime Enabled
                    <BellRinging size={11} weight="fill" className="text-orange-600" />
                  </span>
                  <span className="font-mono font-bold">Volume: High</span>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 3: ORDERS MANAGEMENT                                     */}
            {/* ============================================================ */}
            {activeTab === 'orders' && (
              <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141414]">Active Orders Hub</h4>
                      <p className="text-[10px] text-stone-500">Live guest &amp; staff orders tracking</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                      6 Total Orders
                    </span>
                  </div>

                  <div className="space-y-2 mt-3">
                    
                    {/* Order Row 1 */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[11px]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-stone-900">#ORD-8492</span>
                          <span className="px-1.5 py-0.2 rounded bg-stone-100 font-bold text-stone-700 text-[10px]">T04</span>
                          <span className="text-stone-500">3 items • ₹890</span>
                        </div>
                        <p className="text-[10px] text-stone-400 mt-0.5">Paneer Tikka, 4x Naan, Lime Soda</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-200">
                        Served
                      </span>
                    </div>

                    {/* Order Row 2 */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[11px]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-stone-900">#ORD-8493</span>
                          <span className="px-1.5 py-0.2 rounded bg-stone-100 font-bold text-stone-700 text-[10px]">T07</span>
                          <span className="text-stone-500">2 items • ₹798</span>
                        </div>
                        <p className="text-[10px] text-stone-400 mt-0.5">Round 2 • Veg Biryani, Raita</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-700 font-bold text-[10px] border border-orange-200 animate-pulse">
                        Cooking
                      </span>
                    </div>

                    {/* Order Row 3 */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[11px]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-stone-900">#ORD-8494</span>
                          <span className="px-1.5 py-0.2 rounded bg-stone-100 font-bold text-stone-700 text-[10px]">T01</span>
                          <span className="text-stone-500">5 items • ₹1,420</span>
                        </div>
                        <p className="text-[10px] text-stone-400 mt-0.5">Butter Chicken Platter, Garlic Naan</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#00ab14] font-bold text-[10px] border border-emerald-200 flex items-center gap-1">
                        <span>Ready</span>
                        <Check size={10} weight="bold" />
                      </span>
                    </div>

                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[10px] text-stone-600">
                  <span>Auto-sync with Kitchen screens</span>
                  <span className="font-mono text-[#00ab14] font-bold">Socket Connected</span>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 4: BILLING & POS                                         */}
            {/* ============================================================ */}
            {activeTab === 'billing' && (
              <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141414]">Running Bills &amp; Quick POS</h4>
                      <p className="text-[10px] text-stone-500">Instant UPI QR generation &amp; thermal printing</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#00ab14] text-[10px] font-bold border border-emerald-200">
                      ₹4,218 Outstanding
                    </span>
                  </div>

                  {/* Bill Split Details */}
                  <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-2 mt-3">
                    <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                      <div>
                        <span className="font-bold text-stone-900 text-xs">Table #04 Bill Summary</span>
                        <p className="text-[10px] text-stone-400">Session #SES-1092 • 4 Guests</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-extrabold text-[10px]">
                        Bill Requested
                      </span>
                    </div>

                    <div className="space-y-1 text-[11px] text-stone-600">
                      <div className="flex justify-between">
                        <span>Items Total (4 items)</span>
                        <span className="font-mono">₹847.62</span>
                      </div>
                      <div className="flex justify-between text-stone-500">
                        <span>CGST (2.5%) + SGST (2.5%)</span>
                        <span className="font-mono">₹42.38</span>
                      </div>
                      <div className="flex justify-between font-bold text-stone-900 pt-1 border-t border-stone-100 text-xs">
                        <span>Grand Total Payable</span>
                        <span className="font-mono text-sm text-[#00ab14]">₹890.00</span>
                      </div>
                    </div>

                    {/* Quick POS action buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button className="py-1.5 px-2 rounded-lg bg-[#00ab14] hover:bg-[#009612] text-white font-bold text-[10px] flex items-center justify-center gap-1 cursor-pointer transition-colors">
                        <CreditCard size={12} weight="bold" /> Settle UPI
                      </button>
                      <button className="py-1.5 px-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-[10px] flex items-center justify-center gap-1 cursor-pointer transition-colors">
                        <Printer size={12} /> Print 80mm
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[10px] text-stone-500">
                  <span>Zero calculation errors</span>
                  <span className="font-bold text-stone-800 font-mono">100% GST Compliant</span>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 5: INVENTORY & STOCK                                     */}
            {/* ============================================================ */}
            {activeTab === 'inventory' && (
              <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141414]">Live Stock &amp; Recipe Control</h4>
                      <p className="text-[10px] text-stone-500">Automatic ingredient reduction on every plate sold</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
                      1 Low Stock Alert
                    </span>
                  </div>

                  <div className="space-y-2 mt-3">
                    
                    {/* Item 1: Low stock */}
                    <div className="p-2 rounded-xl bg-white border border-amber-300 shadow-2xs space-y-1">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="font-bold text-stone-900">Fresh Malai Paneer</span>
                        <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">
                          Low Stock
                        </span>
                      </div>
                      <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '22%' }} />
                      </div>
                      <div className="flex justify-between text-[9px] text-stone-500">
                        <span>Current: 1.8 kg</span>
                        <span className="text-amber-700 font-bold">Threshold: 2.0 kg</span>
                      </div>
                    </div>

                    {/* Item 2: Healthy stock */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="font-bold text-stone-900">Bone-in Chicken Portions</span>
                        <span className="px-1.5 py-0.2 rounded bg-emerald-50 text-[#00ab14] text-[9px] font-bold">
                          Healthy
                        </span>
                      </div>
                      <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#00ab14] h-1.5 rounded-full" style={{ width: '74%' }} />
                      </div>
                      <div className="flex justify-between text-[9px] text-stone-500">
                        <span>Current: 14.5 kg</span>
                        <span>Threshold: 5.0 kg</span>
                      </div>
                    </div>

                    {/* Item 3: Healthy stock */}
                    <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="font-bold text-stone-900">Basmati Biryani Rice</span>
                        <span className="px-1.5 py-0.2 rounded bg-emerald-50 text-[#00ab14] text-[9px] font-bold">
                          Healthy
                        </span>
                      </div>
                      <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#00ab14] h-1.5 rounded-full" style={{ width: '85%' }} />
                      </div>
                      <div className="flex justify-between text-[9px] text-stone-500">
                        <span>Current: 42 kg</span>
                        <span>Threshold: 10 kg</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[10px] text-stone-500">
                  <span>Auto-deducts gram by gram</span>
                  <span className="font-bold text-[#00ab14]">Audit Ledger Active</span>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 6: BUSINESS OVERVIEW & ANALYTICS                         */}
            {/* ============================================================ */}
            {activeTab === 'overview' && (
              <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141414]">Executive Overview</h4>
                      <p className="text-[10px] text-stone-500">Real-time revenue, margins &amp; table velocity</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200">
                      Live Dashboard
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-[9px] font-semibold text-stone-500 uppercase block">Total Shift Revenue</span>
                      <span className="text-sm sm:text-base font-black text-stone-900 font-mono">₹48,250</span>
                      <span className="text-[9px] text-[#00ab14] font-bold block">+18% vs last week</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-[9px] font-semibold text-stone-500 uppercase block">Avg Turnaround Time</span>
                      <span className="text-sm sm:text-base font-black text-stone-900 font-mono">38 mins</span>
                      <span className="text-[9px] text-blue-600 font-bold block">14m faster per table</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-[9px] font-semibold text-stone-500 uppercase block">Gross Margin</span>
                      <span className="text-sm sm:text-base font-black text-stone-900 font-mono">68.4%</span>
                      <span className="text-[9px] text-[#00ab14] font-bold block">Low waste achieved</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-[9px] font-semibold text-stone-500 uppercase block">UPI Payment Share</span>
                      <span className="text-sm sm:text-base font-black text-stone-900 font-mono">82%</span>
                      <span className="text-[9px] text-stone-500 block">Instant settlements</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-[10px] text-stone-500">
                  <span>Owner Insights &amp; P&amp;L</span>
                  <span className="font-bold text-[#00ab14]">Encrypted &amp; Secure</span>
                </div>
              </div>
            )}

          </div>
      </div>
    </div>
  );

  // Render Interactive iPhone 15 Pro Mockup
  const renderIPhone = (isStandaloneMobile: boolean) => (
    <IPhoneMockup 
      model="15-pro" 
      color="space-black"
      scale={isStandaloneMobile ? 0.45 : 0.41}
      shadow={isStandaloneMobile ? "0 25px 60px -10px rgba(0,0,0,0.38), 0 8px 20px -5px rgba(0,0,0,0.22)" : "0 30px 70px -10px rgba(0,0,0,0.48), 0 10px 24px -5px rgba(0,0,0,0.28)"}
      safeArea={false}
      className={isStandaloneMobile ? "select-none mx-auto drop-shadow-2xl" : "select-none transform rotate-[3.5deg] hover:rotate-0 transition-transform duration-300 origin-bottom-right"}
    >
      <div className="w-full h-full bg-[#FAF8F5] text-stone-900 flex flex-col justify-between pt-14 pb-7 px-4 overflow-hidden">
            
            {/* Top Bar: Restaurant Brand & Table Pill */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#0B3B24] text-[#BCE440] flex items-center justify-center font-black text-base shadow-2xs">
                    R
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-extrabold block leading-none">THE</span>
                    <h5 className="text-[16px] font-black uppercase text-stone-900 tracking-tight leading-none mt-0.5">
                      Rustic Spatula
                    </h5>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-stone-300 text-sm font-black text-stone-900 shadow-2xs">
                    T07
                  </span>
                  <button className="p-2 rounded-xl bg-white border border-stone-200 text-stone-700 shadow-2xs hover:bg-stone-50">
                    <BellRinging size={16} weight="bold" />
                  </button>
                </div>
              </div>

              {/* Guest Category Filter Tabs */}
              <div className="flex items-center gap-2 mt-3.5">
                <button 
                  onClick={() => setSelectedGuestCategory('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-colors cursor-pointer ${
                    selectedGuestCategory === 'all'
                      ? 'bg-[#0B3B24] text-white shadow-2xs'
                      : 'bg-white border border-stone-200 text-stone-700'
                  }`}
                >
                  All (3)
                </button>
                <button 
                  onClick={() => setSelectedGuestCategory('mains')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-colors cursor-pointer ${
                    selectedGuestCategory === 'mains'
                      ? 'bg-[#0B3B24] text-white shadow-2xs'
                      : 'bg-white border border-stone-200 text-stone-700'
                  }`}
                >
                  Mains
                </button>
                <button 
                  onClick={() => setSelectedGuestCategory('breads')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-colors cursor-pointer ${
                    selectedGuestCategory === 'breads'
                      ? 'bg-[#0B3B24] text-white shadow-2xs'
                      : 'bg-white border border-stone-200 text-stone-700'
                  }`}
                >
                  Breads
                </button>
              </div>

              {/* Dish Items List */}
              <div className="space-y-2.5 mt-3.5">
                
                {/* Dish 1: Paneer Tikka */}
                {(selectedGuestCategory === 'all' || selectedGuestCategory === 'mains') && (
                  <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex items-center justify-between gap-3">
                    <div className="w-13 h-13 rounded-2xl bg-orange-100/90 flex items-center justify-center text-2xl shrink-0">
                      <CookingPot size={26} weight="duotone" className="text-orange-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-xs border-2 border-emerald-600 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        </span>
                        <p className="text-[14px] font-extrabold text-stone-900 truncate">Paneer Tikka Platter</p>
                      </div>
                      <p className="text-[13px] text-stone-600 font-mono font-bold mt-0.5">₹340</p>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 border border-stone-300 px-2.5 py-1.5 rounded-xl text-xs font-black">
                      <button 
                        onClick={() => updateQuantity('paneer-tikka', -1)} 
                        className="text-stone-600 hover:text-stone-900 w-5 h-5 flex items-center justify-center cursor-pointer text-sm"
                      >
                        -
                      </button>
                      <span className="text-[#0B3B24] font-black text-sm">{guestCart['paneer-tikka'] || 0}</span>
                      <button 
                        onClick={() => updateQuantity('paneer-tikka', 1)} 
                        className="text-stone-600 hover:text-stone-900 w-5 h-5 flex items-center justify-center cursor-pointer text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {/* Dish 2: Butter Naan */}
                {(selectedGuestCategory === 'all' || selectedGuestCategory === 'breads') && (
                  <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex items-center justify-between gap-3">
                    <div className="w-13 h-13 rounded-2xl bg-amber-100/90 flex items-center justify-center text-2xl shrink-0">
                      <ForkKnife size={26} weight="duotone" className="text-amber-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-xs border-2 border-emerald-600 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        </span>
                        <p className="text-[14px] font-extrabold text-stone-900 truncate">Garlic Butter Naan</p>
                      </div>
                      <p className="text-[13px] text-stone-600 font-mono font-bold mt-0.5">₹140</p>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 border border-stone-300 px-2.5 py-1.5 rounded-xl text-xs font-black">
                      <button 
                        onClick={() => updateQuantity('butter-naan', -1)} 
                        className="text-stone-600 hover:text-stone-900 w-5 h-5 flex items-center justify-center cursor-pointer text-sm"
                      >
                        -
                      </button>
                      <span className="text-[#0B3B24] font-black text-sm">{guestCart['butter-naan'] || 0}</span>
                      <button 
                        onClick={() => updateQuantity('butter-naan', 1)} 
                        className="text-stone-600 hover:text-stone-900 w-5 h-5 flex items-center justify-center cursor-pointer text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {/* Dish 3: Dal Makhani */}
                {(selectedGuestCategory === 'all' || selectedGuestCategory === 'mains') && (
                  <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex items-center justify-between gap-3">
                    <div className="w-13 h-13 rounded-2xl bg-red-100/90 flex items-center justify-center text-2xl shrink-0">
                      <CookingPot size={26} weight="duotone" className="text-red-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-xs border-2 border-emerald-600 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        </span>
                        <p className="text-[14px] font-extrabold text-stone-900 truncate">Dal Makhani</p>
                      </div>
                      <p className="text-[13px] text-stone-600 font-mono font-bold mt-0.5">₹280</p>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 border border-stone-300 px-2.5 py-1.5 rounded-xl text-xs font-black">
                      <button 
                        onClick={() => updateQuantity('dal-makhani', -1)} 
                        className="text-stone-600 hover:text-stone-900 w-5 h-5 flex items-center justify-center cursor-pointer text-sm"
                      >
                        -
                      </button>
                      <span className="text-[#0B3B24] font-black text-sm">{guestCart['dal-makhani'] || 0}</span>
                      <button 
                        onClick={() => updateQuantity('dal-makhani', 1)} 
                        className="text-stone-600 hover:text-stone-900 w-5 h-5 flex items-center justify-center cursor-pointer text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom Guest Checkout Container */}
            <div className="space-y-2 pt-3 border-t border-stone-200">
              <div className="flex justify-between text-[13px] text-stone-700 font-medium">
                <span>Items ({guestTotalCount})</span>
                <span className="font-mono font-bold text-stone-900">₹{guestItemTotal}.00</span>
              </div>
              <div className="flex justify-between text-xs text-stone-500">
                <span>GST (5%)</span>
                <span className="font-mono font-medium">₹{guestGst}.00</span>
              </div>

              {/* Instant UPI Checkout Action */}
              <button 
                type="button"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#00ab14] hover:bg-[#009612] text-white font-extrabold text-sm flex items-center justify-between shadow-md shadow-[#00ab14]/25 transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Pay ₹{guestGrandTotal} via UPI</span>
                <span className="text-xs bg-white/20 px-2.5 py-1 rounded-lg font-black">Scan QR &rarr;</span>
              </button>
            </div>

          </div>
    </IPhoneMockup>
  );

  // Render Settled Status Card
  const renderSettledCard = (isStandaloneMobile: boolean) => (
    <div className={isStandaloneMobile ? "w-full max-w-[320px] rounded-2xl bg-gradient-to-br from-[#0B3B24] via-[#0E4A2E] to-[#062414] text-white p-3.5 shadow-md border border-emerald-700/50" : "w-[195px] sm:w-[215px] rounded-2xl bg-gradient-to-br from-[#0B3B24] via-[#0E4A2E] to-[#062414] text-white p-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.32)] border border-emerald-700/50 transition-all duration-200"}>
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-black font-serif italic tracking-wide text-white">
          TavolaServe
        </span>
        <div className="w-4 h-4 rounded-full bg-amber-400 border border-amber-500 shadow-2xs flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full border border-amber-600/60 bg-amber-300" />
        </div>
      </div>

      <div className="mt-3 space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ab14] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00ab14]"></span>
          </span>
          <p className="text-[9px] text-[#00ab14] uppercase tracking-wider font-extrabold">
            TABLE #04 SETTLED
          </p>
        </div>
        <p className="text-sm sm:text-[15px] font-black font-mono tracking-tight text-white">
          ₹890.00 PAID
        </p>
      </div>

      <div className="mt-2.5 pt-1.5 border-t border-emerald-800/80 flex items-center justify-between text-[8px] text-emerald-200/90">
        <span>Table Auto-Freed</span>
        <span className="text-white font-mono font-bold">0.4s</span>
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-[650px] xl:max-w-[700px] mx-auto select-none pt-2 pb-6 sm:pb-10">
      
      {/* Soft Ambient Depth Glow behind the hardware */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3B24]/15 via-[#00ab14]/10 to-transparent blur-3xl -z-10 rounded-3xl" />

      {/* MOBILE & TABLET PRESENTATION (< lg) */}
      <div className="block lg:hidden space-y-4">
        {/* Interactive Mode Segmented Pill */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-[#EAE4D3] border border-[#DDD6C0] shadow-2xs">
            <button
              type="button"
              onClick={() => setMobileMode('qr')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                mobileMode === 'qr'
                  ? 'bg-[#0B3B24] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <DeviceMobile size={15} weight={mobileMode === 'qr' ? 'fill' : 'bold'} className={mobileMode === 'qr' ? 'text-[#BCE440]' : 'text-[#0B3B24]'} />
              <span>1. Diners QR Menu</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMode('ops')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                mobileMode === 'ops'
                  ? 'bg-[#0B3B24] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Laptop size={15} weight={mobileMode === 'ops' ? 'fill' : 'bold'} className={mobileMode === 'ops' ? 'text-[#BCE440]' : 'text-[#0B3B24]'} />
              <span>2. Operations Hub</span>
            </button>
          </div>
        </div>

        {mobileMode === 'qr' ? (
          <div className="flex flex-col items-center pt-2 pb-2">
            <div className="relative flex justify-center w-full">
              {renderIPhone(true)}
            </div>
            {/* Interactive hint badge */}
            <div className="mt-4 px-4 py-2 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs flex items-center gap-2 text-xs text-stone-700">
              <Sparkle size={14} weight="fill" className="text-[#00ab14]" />
              <span className="font-semibold">Interactive simulation — tap + / - to test ordering</span>
            </div>
          </div>
        ) : (
          <div className="relative pt-1 space-y-3">
            {renderDesktopWindow(true)}
            <div className="flex justify-center pt-1">
              {renderSettledCard(true)}
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP PRESENTATION (>= lg) */}
      <div className="hidden lg:block relative">
        <div className="animate-float-window">
          {renderDesktopWindow(false)}
        </div>
        <div className="absolute -bottom-8 -right-4 xl:-right-6 z-20 pointer-events-auto animate-float-phone">
          {renderIPhone(false)}
        </div>
        <div className="absolute -bottom-5 -left-4 z-30 animate-float-card">
          {renderSettledCard(false)}
        </div>
      </div>

    </div>
  );
}
