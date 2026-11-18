'use client';

import Link from 'next/link';
import { 
  Building2, 
  UtensilsCrossed, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Bed, 
  Users2, 
  Check, 
  CreditCard, 
  FileText, 
  Layers, 
  DoorClosed,
  Receipt,
  Store
} from 'lucide-react';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

export default function HotelProductPage() {
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
            <span className="text-[#0B3B24] font-bold shrink-0">Multi-Chain Hotel Hub</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-500 font-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#008726] animate-pulse"></span>
            <span>Operations Suite • Module 03 • Hospitality PMS</span>
          </div>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto text-center sm:text-left">
        <div className="max-w-3xl mx-auto sm:mx-0">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24]/8 border border-[#0B3B24]/15 text-[#0B3B24] text-[11px] font-bold tracking-tight mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
            <span>TAVOLA OPERATIONS SUITE • MULTI-PROPERTY PMS</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141414] tracking-[-0.03em] leading-[1.12]">
            Multi-Chain Hotel PMS, Front Desk &amp; Banquet Hub
          </h1>

          <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-normal">
            Centralize reservations, room tariffs, and guest folios across boutique properties and multi-city hotel chains. Coordinate real-time housekeeping, banquet hall billing, and seamless dining room-charge transfers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center sm:justify-start gap-2.5 pt-5 sm:pt-6">
            <Link href="/demo" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-6 py-3 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] text-white text-xs sm:text-[13px] font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm touch-manipulation active:scale-[0.98]"
              >
                <span>Schedule Hotel Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <a href="#features" className="w-full xs:w-auto">
              <button 
                type="button"
                className="w-full xs:w-auto px-5 py-3 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation active:scale-[0.98]"
              >
                <span>Explore PMS Capabilities</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </a>
          </div>

        </div>

        {/* 6 Platform Pillars Strip */}
        <div className="mt-8 pt-6 border-t border-stone-200/80">
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-mono mb-3">
            Hotel Operations Suite Modules:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008726]"></span>
              Front Desk &amp; Room Matrix
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Housekeeping Status Turns
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
              Banquet &amp; MICE Catering
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Restaurant Room-Charge Post
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Multi-Property Corporate Folios
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500"></span>
              Channel Manager OTA Sync
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE ALTERNATING FEATURE SHOWCASES
             - Showcase 1: Front-Desk Room Inventory Matrix & Check-In
             - Showcase 2: Restaurant POS to Room Folio Billing
             - Showcase 3: Banquet Hall & Wedding MICE Events
         ========================================================================= */}
      <section id="features" className="py-12 sm:py-16 px-3.5 xs:px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto space-y-16 sm:space-y-24 border-t border-stone-200/80 scroll-mt-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
            HOSPITALITY INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141414] tracking-tight mt-1.5">
            Designed for boutique stays and luxury multi-property chains
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Eliminate double bookings, speed up front-desk check-in to under 45 seconds, and synchronize restaurant dining tabs directly to guest room folios.
          </p>
        </div>

        {/* Showcase 1: Front Desk Room Matrix */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-4 sm:p-6 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#008726] flex items-center justify-center">
                      <Bed className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Front Desk Room Matrix</div>
                      <div className="text-[10px] text-stone-500 font-mono">Grand Palace Hotel • Property #01</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    86% Occupancy
                  </span>
                </div>

                {/* Occupancy Summary */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase font-mono block">OCCUPIED</span>
                    <span className="font-mono font-bold text-[#0B3B24] text-xs mt-0.5 block">43 / 50 Rooms</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase font-mono block">READY FOR ARRIVAL</span>
                    <span className="font-mono font-bold text-[#008726] text-xs mt-0.5 block">7 Clean Rooms</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-[9px] font-bold text-stone-500 uppercase font-mono block">CHECK-IN SPEED</span>
                    <span className="font-mono font-bold text-purple-700 text-xs mt-0.5 block">42s Average</span>
                  </div>
                </div>

                {/* Room List Preview */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block text-[11.5px]">Room 402 • Executive Suite</span>
                      <span className="text-[10px] text-stone-500 font-mono">Vikramaditya Verma • 3 Nights • Direct</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#008726] font-bold text-[10px]">
                      Checked-In
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block text-[11.5px]">Room 208 • Deluxe Garden View</span>
                      <span className="text-[10px] text-stone-500 font-mono">Housekeeping Cleaned &amp; Sanitized (#H-12)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-[10px]">
                      Ready for Guest
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <div>
                      <span className="font-semibold text-stone-800 block text-[11.5px]">Room 315 • Superior Twin</span>
                      <span className="text-[10px] text-stone-500 font-mono">Guest Departure at 11:00 AM • Folio Settled</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">
                      Housekeeping Turn
                    </span>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-between text-xs">
                  <span className="text-stone-600 text-[11px] font-medium">Channel Manager OTA Sync:</span>
                  <span className="font-mono font-bold text-[#008726] text-xs">Agoda, Booking.com &amp; MMT Synced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              FRONT DESK &amp; ROOM INVENTORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Real-time room status grid, <span className="text-[#008726]">instant check-in</span> &amp; digital keys
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Manage multi-floor room inventory at a glance. Visual color-coded grid across Deluxe, Executive, and Suite categories (Clean, Occupied, Dirty, Maintenance). Speed up check-ins to under 45 seconds with Aadhaar ID scanning and automated room tariff calculations.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>Explore front-desk room management</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Showcase 2: Restaurant POS to Room Folio Billing */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              DINING &amp; ROOM CHARGE TRANSFERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Seamless restaurant &amp; cafe <span className="text-[#008726]">room-charge transfers</span>
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Connect in-house restaurants, rooftop lounges, and room service directly to front-desk PMS folios. When guests order meals, waitstaff simply tap &quot;Charge to Room&quot; — verifying guest name and credit limits in 0.4s with zero manual billing transfers.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>See room charge transfer workflow</span>
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
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Restaurant Charge Transfer</div>
                      <div className="text-[10px] text-stone-500 font-mono">The Spatula Cafe • Table #04 → Room #402</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008726] text-[10px] font-bold border border-emerald-200">
                    Transferred to Folio
                  </span>
                </div>

                {/* Transferred Order Breakdown */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>Dinner Bill #DIN-4421</span>
                    <span className="text-sm">₹2,450.00</span>
                  </div>
                  <div className="text-[10.5px] text-stone-600 flex justify-between">
                    <span>2x Butter Chicken, 4x Naan, 2x Lime Soda</span>
                    <span>GST 5% Included</span>
                  </div>
                  <div className="pt-1 border-t border-stone-200 flex justify-between text-[11px] text-stone-800">
                    <span>Target Folio: Room 402</span>
                    <span className="font-bold text-[#0B3B24]">Vikramaditya Verma</span>
                  </div>
                </div>

                {/* Digital Verification */}
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                  <span className="text-[#008726] font-medium text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guest Verification Status:</span>
                  </span>
                  <span className="font-bold text-[#008726]">Approved via Room Key PIN</span>
                </div>

                <div className="text-[10.5px] text-stone-500 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008726] shrink-0" />
                  <span>Itemized dining bill automatically appended to front-desk checkout invoice.</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Showcase 3: Banquet Hall & Wedding MICE Events */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: UI Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-[#0B3B24] p-4 sm:p-6 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-3">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-stone-900">Banquet Booking #BQ-8810</div>
                      <div className="text-[10px] text-stone-500 font-mono">Grand Ballroom A • Corporate Summit</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200">
                    Deposit Settled
                  </span>
                </div>

                {/* Banquet Milestone Ledger */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-[11px] space-y-1.5 text-stone-700">
                  <div className="flex justify-between">
                    <span>1. Guest / Corporate Client</span>
                    <span className="font-bold text-stone-900">Nexus Tech Summit (250 Pax)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2. Package Catering &amp; Hall Rental</span>
                    <span className="font-bold text-stone-900">₹3,85,000.00</span>
                  </div>
                  <div className="flex justify-between text-[#008726]">
                    <span>3. Advance Booking Deposit</span>
                    <span>-₹1,50,000.00 (Received via NEFT)</span>
                  </div>
                  <div className="flex justify-between text-amber-800">
                    <span>4. Balance Payable at Event Close</span>
                    <span className="font-bold">₹2,35,000.00 Due</span>
                  </div>
                  <div className="flex justify-between font-bold text-stone-900 pt-1.5 border-t border-stone-200 text-xs">
                    <span>Kitchen BFP Status:</span>
                    <span className="text-[#008726]">Menu Locked &amp; KOT Synced</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-stone-500 font-mono">Document: Formal BFP (.pdf)</span>
                  <span className="px-3 py-1 rounded-lg bg-[#008726] text-white font-bold text-[10px] cursor-pointer flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    <span>Download Function Sheet</span>
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              BANQUETS &amp; MICE EVENT BILLING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Milestone billing for <span className="text-[#008726]">banquets, weddings &amp; corporate summits</span>
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Book grand ballrooms, design custom multi-course catering menus, and coordinate AV equipment packages. Track advance deposits, milestone installment billing, and final folio reconciliations with automated GST tax invoices.
            </p>
            <div className="pt-2">
              <Link href="/demo" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] hover:text-[#008726] transition-colors">
                <span>View banquet function prospectus workflow</span>
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
              READY TO UPGRADE YOUR HOTEL OPERATIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              Run your front desk &amp; dining on Tavola PMS
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Schedule a 20-minute technical walkthrough with our team or explore how Tavola connects multi-property room inventory to restaurant dining.
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
            <span>• Multi-Chain Hotel PMS &amp; Banquet Management</span>
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
