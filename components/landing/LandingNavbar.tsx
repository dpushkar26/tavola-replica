'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  Smartphone, 
  CookingPot, 
  LayoutGrid, 
  TrendingUp, 
  HelpCircle,
  ArrowRight,
  ChevronDown,
  Boxes,
  Wallet,
  Dumbbell,
  Milk,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { BrandLogo } from './BrandLogo';

export const SUB_PRODUCTS = [
  {
    id: 'inventory',
    title: 'Inventory Management',
    desc: 'Ingredient-level stock tracking, automatic low-stock alerts & vendor...',
    href: '/product/inventory',
    badge: 'POPULAR',
    badgeColor: 'bg-[#D1FADF] text-[#027A48]',
  },
  {
    id: 'expenses',
    title: 'Expenses Tracker',
    desc: 'Daily cash outflows, vendor bill settlement, petty cash slips & live P&L...',
    href: '/product/expenses',
    badge: 'FINANCE',
    badgeColor: 'bg-[#FEF0C7] text-[#B54708]',
  },
  {
    id: 'gym',
    title: 'Gym Management',
    desc: 'Member subscriptions, biometric turnstiles, attendance tracking & traine...',
    href: '/product/gym',
    badge: 'NEW',
    badgeColor: 'bg-[#D1E9FF] text-[#175CD3]',
  },
  {
    id: 'dairy',
    title: 'Dairy Management',
    desc: 'Morning milk collection, automated fat/SNF rate charts & farmer passbook...',
    href: '/product/dairy',
    badge: 'SPECIALIZED',
    badgeColor: 'bg-[#CCFBEF] text-[#0E7090]',
  },
];

function SubProductIcon({ id, className = "w-5 h-5" }: { id: string; className?: string }) {
  switch (id) {
    case 'inventory':
      return <Boxes className={className} />;
    case 'expenses':
      return <Wallet className={className} />;
    case 'gym':
      return <Dumbbell className={className} />;
    case 'dairy':
      return <Milk className={className} />;
    default:
      return <Smartphone className={className} />;
  }
}

export function LandingNavbar({ user = null }: { user?: any }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(true);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isProductsActive = pathname.startsWith('/product');

  // Handle desktop mouse enter with debounce cancel
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setProductsDropdownOpen(true);
  };

  // Handle desktop mouse leave with smooth 180ms delay
  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 180);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7EE]/95 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(11,59,36,0.05),_0_1px_4px_rgba(0,0,0,0.03)] border-b border-[#0B3B24]/6 transition-all">
      <div className="w-full px-4 xs:px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 h-[56px] sm:h-[62px] flex items-center justify-between">
        
        {/* Left: Brand Logotype & Primary Navigation */}
        <div className="flex items-center gap-6 sm:gap-10 lg:gap-14 xl:gap-16">
          
          {/* Brand Wordmark (Tavola) */}
          <Link href="/" className="flex items-center select-none outline-none group shrink-0">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 lg:gap-8 xl:gap-9 text-[14px] font-medium text-[#1A1A1A]">
            
            {/* Products Dropdown / Sub Nav Drawer Trigger */}
            <div 
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/product" 
                className={`inline-flex items-center gap-1 text-[14px] transition-all duration-150 cursor-pointer select-none ${
                  isProductsActive || productsDropdownOpen
                    ? 'text-[#0B3B24] font-semibold' 
                    : 'text-[#1A1A1A] hover:text-[#0B3B24]'
                }`}
              >
                <span className={`${
                  isProductsActive || productsDropdownOpen 
                    ? 'border-b-2 border-[#0B3B24] pb-0.5' 
                    : ''
                }`}>
                  Products
                </span>
                {(productsDropdownOpen || isProductsActive) && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#0B3B24] ${
                    productsDropdownOpen ? 'rotate-180' : ''
                  }`} />
                )}
              </Link>

              {/* Desktop Sub Nav Drawer Flyout */}
              {productsDropdownOpen && (
                <div 
                  className="absolute left-0 top-[calc(100%+6px)] w-[680px] max-w-[92vw] rounded-2xl bg-[#FCFAF6] border border-stone-200/90 shadow-[0_20px_50px_-10px_rgba(11,59,36,0.12),0_4px_12px_rgba(0,0,0,0.04)] p-5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-stone-200/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00ab14]"></span>
                      <span className="text-[11px] font-bold tracking-wider text-[#0B3B24] uppercase font-sans">
                        TAVOLA OPERATIONS SUITE
                      </span>
                    </div>
                    <Link 
                      href="/product" 
                      className="text-xs font-semibold text-[#141414] hover:text-[#0B3B24] flex items-center gap-1 group transition-colors"
                    >
                      <span>View All Products</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Sub Nav Items 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {SUB_PRODUCTS.map((item) => {
                      const isCurrent = pathname === item.href;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          className={`p-3.5 rounded-2xl border transition-all duration-150 group flex items-start gap-3 bg-white ${
                            isCurrent
                              ? 'border-[#0B3B24] ring-1 ring-[#0B3B24]/20 shadow-xs'
                              : 'border-stone-200/80 hover:border-[#0B3B24]/40 hover:shadow-xs'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#F4FBF7] border border-[#D1FADF] flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5">
                            <SubProductIcon id={item.id} className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5 mb-1">
                              <span className="text-[13.5px] font-bold text-[#141414] group-hover:text-[#0B3B24] transition-colors leading-tight truncate">
                                {item.title}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide shrink-0 ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11.5px] text-stone-500 group-hover:text-stone-700 transition-colors leading-snug line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Drawer Footer Banner */}
                  <div className="mt-4 pt-3.5 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600">
                    <span className="flex items-center gap-1.5 text-stone-600 font-medium text-[12px]">
                      <Sparkles className="w-3.5 h-3.5 text-[#00ab14]" />
                      Zero hardware lock-in • 7-day free trial on all modules
                    </span>
                    <Link href="/demo" className="text-[#0B3B24] font-semibold hover:underline flex items-center gap-1 group text-[12px]">
                      <span>Schedule 1-on-1 Walkthrough</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              )}
            </div>

            <Link href="/#operations" className="hover:text-[#0B3B24] transition-colors cursor-pointer">
              Solutions
            </Link>
            <Link href="/#features" className="hover:text-[#0B3B24] transition-colors cursor-pointer">
              Features
            </Link>
            <Link href="/#calculator" className="hover:text-[#0B3B24] transition-colors cursor-pointer">
              Savings Calculator
            </Link>
            <Link href="/#faq" className="hover:text-[#0B3B24] transition-colors cursor-pointer">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Right: Actions & Mobile Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Request a demo (Tablet/Desktop Only) */}
          <Link href="/demo" className="hidden sm:inline-flex">
            <button 
              type="button"
              className="px-4.5 py-1.5 rounded-full border border-[#141414] text-[#141414] hover:bg-black/5 text-[13px] font-medium transition-colors cursor-pointer"
            >
              Request a demo
            </button>
          </Link>

          {/* Open an account / Start Trial Button (Responsive pill) */}
          <Link href={user ? "/app/overview" : "/login"}>
            <button 
              type="button"
              className="px-4.5 py-1.5 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] active:scale-[0.98] text-white text-[13px] font-semibold transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <span>{user ? "Dashboard" : "Open an account"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#BCE440] inline" />
            </button>
          </Link>

          {/* Mobile Sheet Trigger (Modern styled hamburger button) */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger className="lg:hidden p-2 rounded-xl text-[#1A1A1A] hover:bg-[#0B3B24]/5 active:bg-[#0B3B24]/10 transition-colors ml-0.5 cursor-pointer touch-manipulation">
              <Menu className="w-5 h-5 text-[#0B3B24]" />
              <span className="sr-only">Toggle navigation</span>
            </SheetTrigger>

            <SheetContent 
              side="right" 
              className="w-[90vw] max-w-[380px] bg-[#FAF7EE] p-5 sm:p-6 flex flex-col justify-between border-l border-[#0B3B24]/10 shadow-2xl overflow-y-auto"
            >
              <div className="space-y-5">
                
                {/* Header inside Sheet */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#0B3B24]/10">
                  <BrandLogo size="md" />
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0B3B24]/10 text-[#0B3B24] text-[10px] font-extrabold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ab14] animate-pulse" />
                    OS v2.4
                  </span>
                </div>

                {/* Mobile Navigation List with Products Drawer */}
                <nav className="flex flex-col space-y-1">
                  
                  {/* Expandable Products Item with Sub Nav Drawer */}
                  <div className="rounded-2xl border border-[#0B3B24]/10 bg-white/60 overflow-hidden">
                    <div className="flex items-center justify-between p-3">
                      <Link 
                        href="/product"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 flex-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0B3B24] text-[#BCE440] flex items-center justify-center shrink-0">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#0B3B24]">Products</p>
                          <p className="text-[10px] text-stone-500">Suite &amp; Specialized Tools</p>
                        </div>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                        className="p-1.5 rounded-lg hover:bg-stone-200/50 text-stone-600"
                        aria-label="Expand product list"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          mobileProductsExpanded ? 'rotate-180 text-[#0B3B24]' : ''
                        }`} />
                      </button>
                    </div>

                    {/* Sub Nav Drawer Inside Mobile Sheet */}
                    {mobileProductsExpanded && (
                      <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[#0B3B24]/8 bg-[#FAF7EE]/60">
                        {SUB_PRODUCTS.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                                isSubActive
                                  ? 'bg-[#0B3B24] text-white shadow-2xs'
                                  : 'hover:bg-white text-stone-800'
                              }`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isSubActive
                                  ? 'bg-white/20 text-[#BCE440]'
                                  : 'bg-white border border-[#DDD6C0] text-[#0B3B24]'
                              }`}>
                                <SubProductIcon id={sub.id} className="w-3.5 h-3.5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className={`text-xs font-bold truncate ${
                                    isSubActive ? 'text-white' : 'text-[#141414]'
                                  }`}>
                                    {sub.title}
                                  </p>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                                    isSubActive 
                                      ? 'bg-white/20 text-white border-transparent' 
                                      : sub.badgeColor
                                  }`}>
                                    {sub.badge}
                                  </span>
                                </div>
                                <p className={`text-[10px] truncate ${
                                  isSubActive ? 'text-white/80' : 'text-stone-500'
                                }`}>
                                  {sub.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}

                        {/* All Products link in sub drawer */}
                        <Link
                          href="/product"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-lg text-[11px] font-bold text-[#0B3B24] hover:bg-white/80 transition-colors mt-1"
                        >
                          <span>Explore All Products Overview</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Other Main Navigation Links */}
                  {[
                    { label: 'Solutions', href: '/#operations', icon: CookingPot, desc: 'Kitchen sync & speed' },
                    { label: 'Features', href: '/#features', icon: LayoutGrid, desc: '6 operational tools' },
                    { label: 'Savings Calculator', href: '/#calculator', icon: TrendingUp, desc: 'ROI & waste calculator' },
                    { label: 'FAQ', href: '/#faq', icon: HelpCircle, desc: 'Common owner questions' },
                  ].map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-white/80 active:bg-white text-stone-900 transition-colors group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-xl bg-white border border-[#0B3B24]/10 flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-colors shrink-0 shadow-2xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold leading-tight group-hover:text-[#0B3B24] transition-colors">
                            {link.label}
                          </p>
                          <p className="text-[11px] text-stone-500 truncate mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#0B3B24] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Mobile Action Buttons */}
              <div className="space-y-2.5 pt-5 border-t border-[#0B3B24]/10">
                <Link href={user ? "/app/overview" : "/login"} onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button className="w-full h-11 rounded-full bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold text-sm shadow-md shadow-[#0B3B24]/15 flex items-center justify-center gap-2 cursor-pointer">
                    <span>{user ? "Open Dashboard" : "Open an Account"}</span>
                    <ArrowRight className="w-4 h-4 text-[#BCE440]" />
                  </Button>
                </Link>

                <Link href="/demo" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="outline" className="w-full h-11 rounded-full border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24]/5 font-bold text-sm cursor-pointer">
                    Request a Live Demo
                  </Button>
                </Link>

                <div className="pt-1.5 text-center">
                  <Link 
                    href="/login" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-stone-600 font-semibold hover:text-[#0B3B24] transition-colors"
                  >
                    Already have an account? <span className="underline font-bold text-[#0B3B24]">Sign In</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}

