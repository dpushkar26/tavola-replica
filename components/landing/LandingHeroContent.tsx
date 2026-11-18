'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  QrCode, 
  Receipt, 
  LayoutGrid, 
  CookingPot,
  ArrowRight,
  Play,
} from 'lucide-react';

export function LandingHeroContent() {
  return (
    <div className="space-y-6 sm:space-y-7 text-left max-w-xl mx-auto lg:mx-0">
      
      {/* Editorial Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFE9] border border-[#0B3B24]/15 text-[#0B3B24] text-[11px] sm:text-xs font-bold tracking-tight shadow-2xs hover:border-[#0B3B24]/30 transition-colors">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ab14] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ab14]"></span>
        </span>
        <span>NEXT-GEN RESTAURANT OPERATIONS OS</span>
      </div>

      {/* Editorial Condensed Headline - Exact 5 lines from screenshot */}
      <h1 className="text-[38px] xs:text-[46px] sm:text-[54px] lg:text-[58px] xl:text-[64px] font-black tracking-[-0.035em] text-[#141414] uppercase leading-[0.92]">
        SEE WHAT
        <br />
        YOU&apos;RE
        <br />
        COOKING,
        <br />
        SERVING
        <br />
        &amp; EARNING
      </h1>

      {/* 1-Line Crisp Subhead */}
      <p className="text-base sm:text-[17px] text-[#4A4A4A] font-normal leading-relaxed max-w-lg">
        Real-time QR dining, kitchen display routing, and live floor turnover designed for modern restaurant owners.
      </p>

      {/* Responsive Value Props - Clean unboxed icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-[13.5px] sm:text-[14px] text-[#1A1A1A] font-medium pt-1 max-w-lg">
        
        <div className="flex items-start gap-2.5">
          <QrCode className="w-4.5 h-4.5 text-[#141414] shrink-0 mt-0.5" />
          <span className="leading-tight">Table QR ordering &amp; digital menu</span>
        </div>

        <div className="flex items-start gap-2.5">
          <CookingPot className="w-4.5 h-4.5 text-[#141414] shrink-0 mt-0.5" />
          <span className="leading-tight">Kitchen display screens &amp; prep timers</span>
        </div>

        <div className="flex items-start gap-2.5">
          <LayoutGrid className="w-4.5 h-4.5 text-[#141414] shrink-0 mt-0.5" />
          <span className="leading-tight">Live floor layout &amp; table turnover</span>
        </div>

        <div className="flex items-start gap-2.5">
          <Receipt className="w-4.5 h-4.5 text-[#141414] shrink-0 mt-0.5" />
          <span className="leading-tight">Instant UPI payments &amp; split bills</span>
        </div>

      </div>

      {/* Dual High-Converting Action CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <Link 
          href="/login"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0B3B24]/20 active:translate-y-0 active:scale-[0.98] text-white font-bold text-[14px] sm:text-[14.5px] transition-all duration-200 cursor-pointer text-center"
        >
          <span>Start 7-Day Free Trial</span>
          <ArrowRight className="w-4 h-4 text-[#BCE440] group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <Link 
          href="/demo"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#141414] text-[#141414] hover:bg-[#0B3B24] hover:text-white hover:border-[#0B3B24] active:scale-[0.98] font-bold text-[14px] sm:text-[14.5px] transition-all duration-200 cursor-pointer text-center bg-transparent"
        >
          <Play className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform duration-200" />
          <span>Schedule Live Demo</span>
        </Link>
      </div>

      {/* Social Proof & Founding Kitchens */}
      <div className="pt-2 space-y-3">
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3.5 p-3 sm:p-0 rounded-2xl bg-white/60 sm:bg-transparent border border-stone-200/60 sm:border-0">
          
          {/* Overlapping Avatar Stack */}
          <div className="flex -space-x-2.5 overflow-hidden shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=96&h=96&auto=format&fit=crop&crop=faces&q=80" 
              alt="Restaurant Chef" 
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-[#FAF7EE]"
            />
            <Image 
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=96&h=96&auto=format&fit=crop&crop=faces&q=80" 
              alt="Culinary Operator" 
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-[#FAF7EE]"
            />
            <Image 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&auto=format&fit=crop&crop=faces&q=80" 
              alt="Cafe Manager" 
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-[#FAF7EE]"
            />
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&auto=format&fit=crop&crop=faces&q=80" 
              alt="Hospitality Founder" 
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-[#FAF7EE]"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0B3B24]/10 text-[#0B3B24] text-[10px] sm:text-[11px] font-extrabold tracking-tight">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ab14] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00ab14]"></span>
                </span>
                Founding Partner Kitchens
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#141414]">Early Access</span>
            </div>
            <span className="text-[11.5px] sm:text-xs text-[#555555] font-medium mt-0.5">
              Co-designed with independent restaurants, cafes &amp; craft kitchens
            </span>
          </div>

        </div>

        {/* Value Badges */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#666666] pt-0.5">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ab14]" />
            Zero upfront fees
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ab14]" />
            Hands-on founder onboarding
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ab14]" />
            Zero proprietary hardware required
          </span>
        </div>
      </div>

    </div>
  );
}
