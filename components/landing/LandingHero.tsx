'use client';

import { LandingNavbar } from './LandingNavbar';
import { LandingHeroContent } from './LandingHeroContent';
import { LandingShowcase } from './LandingShowcase';
import { LandingTrustBar } from './LandingTrustBar';

export function LandingHero() {
  return (
    <div className="relative w-full bg-[#FAF7EE] text-[#141414] overflow-hidden font-sans">
      
      {/* 1. SEAMLESS TOP NAVBAR (Exact Relay style, no dropdown carets, clean pill buttons) */}
      <LandingNavbar />

      {/* 2. MAIN 2-COLUMN EDITORIAL HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left: Punchy Condensed Headline, 2x2 Clean Line Grid, Email Pill & Reviews */}
          <div className="lg:col-span-6 flex justify-start">
            <LandingHeroContent />
          </div>

          {/* Right: Layered 3D Hardware & Live Operations Showcase */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <LandingShowcase />
          </div>

        </div>
      </section>

      {/* 3. TICKER TRUST BAR (Matching Image 1's dark green bottom anchor) */}
      <LandingTrustBar />

    </div>
  );
}
