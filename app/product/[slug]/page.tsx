import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Boxes, 
  Wallet, 
  Dumbbell, 
  Milk, 
  Building2,
  GraduationCap,
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Smartphone, 
  Laptop, 
  Check, 
  ChevronRight, 
  Store, 
  Play,
  Clock,
  Bell,
  Mail,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { BrandLogo } from '@/components/landing/BrandLogo';

interface ProductData {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'boxes' | 'wallet' | 'dumbbell' | 'milk' | 'hotel' | 'school';
  stats: { value: string; label: string }[];
  features: { title: string; desc: string }[];
  mockup: {
    title: string;
    subtitle: string;
    metricTitle: string;
    metricValue: string;
    metricChange: string;
    items: { label: string; sub: string; status: string; statusType: 'success' | 'warning' | 'info' }[];
  };
}

const PRODUCTS_DATA: Record<string, ProductData> = {
  hotel: {
    slug: 'hotel',
    badge: 'HOSPITALITY & MULTI-PROPERTY PMS',
    title: 'Multi-Chain Hotel Hub',
    tagline: 'Multi-property reservations, front-desk room inventory, housekeeping & banquet billing.',
    description: 'Centralize reservations, room tariffs, and guest folios across multiple hotel properties. Coordinate housekeeping turns, banquet event packages, and seamless restaurant dining room-charge transfers.',
    iconName: 'hotel',
    stats: [
      { value: '99.4%', label: 'Reservation Sync Rate' },
      { value: '18 Min', label: 'Average Room Turnaround' },
      { value: '0 Error', label: 'Banquet & Folio Settlement' },
    ],
    features: [
      { title: 'Front-Desk Room Inventory Matrix', desc: 'Real-time room status grid (Clean, Occupied, Dirty, Maintenance) with 1-click check-in and luggage tags.' },
      { title: 'Multi-Property Corporate Folios', desc: 'Manage master guest corporate billing with consolidated tax invoices across all chain properties.' },
      { title: 'Banquet & Event Management', desc: 'Book event halls, plan wedding catering menus, and manage AV packages with milestone advance billing.' },
      { title: 'Restaurant POS to Room Charge Post', desc: 'Guests charge cafe and room dining straight to their room folio with instant verification.' },
    ],
    mockup: {
      title: 'Grand Palace Hotel & Suites',
      subtitle: 'Property #01 • Front Desk & Room Inventory',
      metricTitle: 'Occupancy Rate Today',
      metricValue: '86% (43 / 50 Rooms)',
      metricChange: '+12% vs last weekend',
      items: [
        { label: 'Room 402 • Executive Suite', sub: 'Guest: Vikramaditya Verma • 3 Nights • Direct Booking', status: 'Checked-In', statusType: 'success' },
        { label: 'Grand Ballroom A • Corporate Summit', sub: '250 Guests • Buffet & AV Package • Folio Active', status: 'In Progress', statusType: 'info' },
        { label: 'Room 208 • Deluxe Garden View', sub: 'Housekeeping Cleaned & Sanitized by Staff #H-12', status: 'Ready for Guest', statusType: 'success' },
        { label: 'Room 315 • Restaurant Charge Post', sub: 'Dinner Bill ₹3,450 Transferred to Room Account', status: 'Folio Settled', statusType: 'success' },
      ],
    },
  },
  gym: {
    slug: 'gym',
    badge: 'FITNESS & GYM OPERATIONS • LAUNCHING SOON',
    title: 'Smart Gym Management',
    tagline: 'Effortless member check-ins, automated subscription renewals, and trainer schedules.',
    description: 'Designed for modern fitness studios, gym chains, and CrossFit boxes. Automate membership renewals via WhatsApp, sync turnstile biometric access, and track trainer commissions seamlessly.',
    iconName: 'dumbbell',
    stats: [
      { value: 'Upcoming', label: 'Launching Q3/Q4 2026' },
      { value: 'WhatsApp', label: 'Automated Renewal Links' },
      { value: 'Biometric', label: 'RFID & Turnstile Gate Sync' },
    ],
    features: [
      { title: 'Automated WhatsApp Dues Reminders', desc: 'Members receive polite reminder links with integrated UPI payment 5 days before subscription expiry.' },
      { title: 'Biometric & QR Access Gate Sync', desc: 'Instantly revoke turnstile or door access when a subscription lapses, preventing unauthorized workouts.' },
      { title: 'Personal Trainer & Class Rostering', desc: 'Members book HIIT, Yoga, or PT slots directly on mobile, with auto-calculated trainer payout commissions.' },
      { title: 'Diet & Workout Routine Cards', desc: 'Trainers assign customized digital workout logs and nutrition guidelines directly to member accounts.' },
    ],
    mockup: {
      title: 'Fitness Studio Live Gate',
      subtitle: 'Main Turnstile & Floor Roster',
      metricTitle: 'Pilot Launch Target',
      metricValue: 'Late 2026',
      metricChange: 'Early Access Waitlist Active',
      items: [
        { label: 'Turnstile Hardware Controller Sync', sub: 'Biometric & RFID access control integration', status: 'In Engineering', statusType: 'info' },
        { label: 'WhatsApp Renewal Link Gateway', sub: 'UPI 1-click subscription payments', status: 'In Testing', statusType: 'success' },
        { label: 'Trainer Commission Payout Engine', sub: 'Automated attendance-based commission splits', status: 'Planned', statusType: 'warning' },
        { label: 'Member Nutrition & Routine App', sub: 'Custom training regimens assigned to member profiles', status: 'In Design', statusType: 'info' },
      ],
    },
  },
  school: {
    slug: 'school',
    badge: 'CAMPUS & INSTITUTION MANAGEMENT • LAUNCHING SOON',
    title: 'School ERP System',
    tagline: 'All-in-one student admissions, automated fee collection, attendance biometrics & parent portal.',
    description: 'A modern, cloud-first school management system for K-12 schools, academies, and coaching institutes. Automate fee collection with instant receipt generation, manage biometric gate turnstiles, and connect parents via a branded mobile app.',
    iconName: 'school',
    stats: [
      { value: 'Upcoming', label: 'Launching Q3/Q4 2026' },
      { value: '100% Digital', label: 'UPI Fee Reminders' },
      { value: '< 1s', label: 'RFID Gate Attendance' },
    ],
    features: [
      { title: 'Automated Student Admissions', desc: 'Digital enrollment forms, merit lists, student document archiving, and automated roll-number allocations.' },
      { title: 'Fee Schedules & Instant UPI Receipts', desc: 'Send automated WhatsApp payment reminders with one-click UPI links and real-time ledger settlement.' },
      { title: 'Biometric Gate & Transport Tracking', desc: 'Live RFID check-in notifications to parents and real-time GPS tracking for student bus routes.' },
      { title: 'Digital Gradebook & Report Cards', desc: 'Teachers log exam marks, calculate percentile ranks, and publish CBSE/ICSE compliant report cards in one click.' },
    ],
    mockup: {
      title: 'Greenwood International Academy',
      subtitle: 'Academic Operations & Campus ERP',
      metricTitle: 'Pilot Launch Target',
      metricValue: 'Late 2026',
      metricChange: 'Early Access Waitlist Active',
      items: [
        { label: 'Tuition Fee Schedules & UPI Receipts', sub: 'Automated WhatsApp invoice reminders with instant reconciliation', status: 'In Testing', statusType: 'success' },
        { label: 'Campus RFID Turnstile Gate Controller', sub: 'Real-time parent notification on gate swipe', status: 'In Engineering', statusType: 'info' },
        { label: 'Student Bus GPS Live Tracking', sub: 'School transport route monitoring & arrival alerts', status: 'Planned', statusType: 'warning' },
        { label: 'Report Card & Marksheet Generator', sub: 'Automated gradebook calculations with printable CBSE templates', status: 'In Design', statusType: 'info' },
      ],
    },
  },
};

export function generateStaticParams() {
  return [
    { slug: 'hotel' },
    { slug: 'gym' },
    { slug: 'school' },
  ];
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];

  if (!product) {
    notFound();
  }

  const isLaunchingSoon = slug === 'gym' || slug === 'school';

  const getIcon = () => {
    switch (product.iconName) {
      case 'hotel':
        return <Building2 className="w-8 h-8 text-purple-700" />;
      case 'dumbbell':
        return <Dumbbell className="w-8 h-8 text-blue-700" />;
      case 'school':
        return <GraduationCap className="w-8 h-8 text-rose-700" />;
      default:
        return <Boxes className="w-8 h-8 text-[#0B3B24]" />;
    }
  };

  /* =========================================================================
      LAUNCHING SOON / COMING SOON VIEW (FOR GYM AND SCHOOL ERP)
     ========================================================================= */
  if (isLaunchingSoon) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] text-[#141414] font-sans antialiased overflow-x-hidden selection:bg-[#BCE440]/40 selection:text-[#0B3B24]">
        {/* 1. TOP NAVBAR */}
        <LandingNavbar />

        {/* 2. BREADCRUMBS */}
        <div className="border-b border-stone-200/80 bg-white/70 backdrop-blur-md px-3 xs:px-4 sm:px-6 lg:px-12 py-2.5 text-xs">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-stone-500 font-medium overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
              <Link href="/" className="hover:text-[#0B3B24] transition-colors shrink-0">Tavola</Link>
              <span className="shrink-0 text-stone-300">/</span>
              <Link href="/product" className="hover:text-[#0B3B24] transition-colors shrink-0">Products</Link>
              <span className="shrink-0 text-stone-300">/</span>
              <span className="text-[#0B3B24] font-bold shrink-0">{product.title}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-amber-800 font-mono font-bold shrink-0 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>LAUNCHING SOON • Q3/Q4 2026</span>
            </div>
          </div>
        </div>

        {/* 3. HERO / LAUNCHING SOON SPOTLIGHT */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-tight mb-4 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>EARLY ACCESS WAITLIST ACTIVE • TARGET LAUNCH 2026</span>
          </div>

          <div className="w-20 h-20 rounded-3xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center mx-auto mb-6 shadow-sm">
            {getIcon()}
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141414] tracking-tight leading-tight uppercase">
            {product.title} is Launching Soon
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {product.description}
          </p>

          {/* Waitlist / Early Access Action Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm max-w-xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#008726] font-mono">
              RESERVE YOUR EARLY ACCESS SEAT
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              Be the first to pilot {product.title} in your city
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              We are currently in closed beta testing with select pilot partners. Leave your details to get priority onboarding and 3 months of complimentary founder support.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/demo" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full shadow-sm cursor-pointer transition-all"
                >
                  <Mail className="w-4 h-4 mr-2 text-[#BCE440]" />
                  <span>Join Early Access Waitlist</span>
                </Button>
              </Link>
              <Link href="/product" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm border border-stone-300 text-stone-800 hover:bg-stone-50 rounded-full font-bold cursor-pointer transition-all"
                >
                  <span>View Live Products</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* 4 Feature Preview Cards */}
          <div className="mt-16 text-left">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold text-[#008726] uppercase tracking-wider font-mono">
                ENGINEERING PREVIEW
              </span>
              <h2 className="text-2xl font-black text-[#141414] tracking-tight mt-1">
                Capabilities Being Built
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#008726] text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-extrabold text-sm text-[#141414]">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed pl-8">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Available Now Active Suite Strip */}
          <div className="mt-16 pt-10 border-t border-stone-200/80">
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono mb-4 text-center">
              Available Active Modules Ready Today:
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link href="/product/inventory" className="px-4 py-2 rounded-full bg-white border border-stone-200 hover:border-[#0B3B24] text-xs font-bold text-[#0B3B24] transition-all flex items-center gap-1.5 shadow-2xs">
                <Boxes className="w-3.5 h-3.5 text-[#008726]" />
                <span>Inventory &amp; Recipe BOM</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
              <Link href="/product/expenses" className="px-4 py-2 rounded-full bg-white border border-stone-200 hover:border-[#0B3B24] text-xs font-bold text-[#0B3B24] transition-all flex items-center gap-1.5 shadow-2xs">
                <Wallet className="w-3.5 h-3.5 text-amber-700" />
                <span>Expenses Tracker &amp; Cash Flow</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
              <Link href="/product/dairy" className="px-4 py-2 rounded-full bg-white border border-stone-200 hover:border-[#0B3B24] text-xs font-bold text-[#0B3B24] transition-all flex items-center gap-1.5 shadow-2xs">
                <Milk className="w-3.5 h-3.5 text-emerald-700" />
                <span>Precision Dairy ERP</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
              <Link href="/product/hotel" className="px-4 py-2 rounded-full bg-white border border-stone-200 hover:border-[#0B3B24] text-xs font-bold text-[#0B3B24] transition-all flex items-center gap-1.5 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-purple-700" />
                <span>Hotel Management PMS</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. FOOTER */}
        <footer className="border-t border-stone-200/80 bg-white py-8 px-4 sm:px-6 lg:px-12 text-center text-xs text-stone-500">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#0B3B24] tracking-tight font-serif italic text-base">Tavola</span>
              <span>• {product.title} (Launching Soon)</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Tavola Operations Platform. All rights reserved.
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

  /* =========================================================================
      ACTIVE DETAIL VIEW (E.G. FOR HOTEL MANAGEMENT)
     ========================================================================= */
  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#141414] font-sans antialiased overflow-x-hidden selection:bg-[#BCE440]/40 selection:text-[#0B3B24]">
      {/* 1. TOP NAVBAR */}
      <LandingNavbar />

      {/* 2. PRODUCT HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 lg:pb-20">
        
        {/* Breadcrumb row */}
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-6">
          <Link href="/" className="hover:text-[#0B3B24]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/product" className="hover:text-[#0B3B24]">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B3B24] font-bold">{product.title}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFE9] border border-[#0B3B24]/15 text-[#0B3B24] text-xs font-bold tracking-tight shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ab14] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ab14]"></span>
              </span>
              <span>{product.badge}</span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black text-[#141414] tracking-tight leading-[1.05] uppercase">
              {product.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#0B3B24] leading-snug">
              {product.tagline}
            </p>

            <p className="text-[#555555] text-base leading-relaxed max-w-xl">
              {product.description}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <Link href="/login" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 px-7 text-sm sm:text-base bg-[#0B3B24] hover:bg-[#082b1a] text-white font-bold rounded-full shadow-md shadow-[#0B3B24]/15 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
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
                  <span>Request Live Walkthrough</span>
                </Button>
              </Link>
            </div>

            {/* Impact Metric Chips */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E5DEC9]">
              {product.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-[#0B3B24] font-mono">{stat.value}</div>
                  <div className="text-xs text-stone-500 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Live UI Mockup Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#E5DEC9] p-6 shadow-xl relative overflow-hidden space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center">
                    {getIcon()}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#141414]">{product.mockup.title}</h3>
                    <p className="text-[11px] text-stone-500">{product.mockup.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Central Key Stat Card */}
              <div className="p-4 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0] space-y-1">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider font-mono">
                  {product.mockup.metricTitle}
                </span>
                <div className="text-2xl font-black text-[#0B3B24] font-mono">
                  {product.mockup.metricValue}
                </div>
                <div className="text-xs font-semibold text-[#008726]">
                  {product.mockup.metricChange}
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2.5">
                {product.mockup.items.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <div className="font-bold text-stone-900">{item.label}</div>
                      <div className="text-[11px] text-stone-500">{item.sub}</div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0 ${
                      item.statusType === 'success' ? 'bg-emerald-100 text-[#008726]' :
                      item.statusType === 'warning' ? 'bg-amber-100 text-amber-800' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUE PROPOSITION GRID */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DEC9]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#008726] font-mono">
            ENGINEERED FOR SCALE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141414] tracking-tight mt-1">
            Built for High-Growth Multi-Outlet Operations
          </h2>
          <p className="mt-2 text-[#555555] text-base leading-relaxed">
            Eliminate operational bottlenecks, streamline communication between staff, and maintain audit-proof records across all branches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {product.features.map((feat, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl bg-white border border-[#E5DEC9] shadow-xs hover:border-[#0B3B24]/40 hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#E8EFE9] text-[#0B3B24] flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-[#141414] tracking-tight">
                {feat.title}
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OTHER SUITE MODULES NAVIGATION */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5DEC9]">
        <div className="text-center mb-10">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-1">
            EXPLORE THE FULL SUITE
          </h3>
          <p className="text-2xl font-black text-[#141414]">
            Other Specialized Products by Tavola
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <Link 
            href="/product/inventory" 
            className="group p-5 rounded-2xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/40 hover:shadow-md transition-all duration-200 block"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-colors">
                <Boxes className="w-4 h-4" />
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B3B24] group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-bold text-sm text-[#141414] group-hover:text-[#0B3B24] transition-colors">Smart Inventory Management</h4>
            <p className="text-xs text-stone-500 line-clamp-2 mt-1">Track every gram, eliminate kitchen wastage, and automate supplier orders.</p>
          </Link>

          <Link 
            href="/product/expenses" 
            className="group p-5 rounded-2xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/40 hover:shadow-md transition-all duration-200 block"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-colors">
                <Wallet className="w-4 h-4" />
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B3B24] group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-bold text-sm text-[#141414] group-hover:text-[#0B3B24] transition-colors">Expenses &amp; Cash Flow</h4>
            <p className="text-xs text-stone-500 line-clamp-2 mt-1">Direct expenses, daily reconciliation, petty cash slips &amp; live net profit margins.</p>
          </Link>

          <Link 
            href="/product/dairy" 
            className="group p-5 rounded-2xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/40 hover:shadow-md transition-all duration-200 block"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-colors">
                <Milk className="w-4 h-4" />
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B3B24] group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-bold text-sm text-[#141414] group-hover:text-[#0B3B24] transition-colors">Precision Dairy ERP</h4>
            <p className="text-xs text-stone-500 line-clamp-2 mt-1">Manufacturing batches, milk fat/SNF collection, cold chain &amp; van delivery.</p>
          </Link>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-[32px] bg-[#0B3B24] p-10 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Ready to Modernize Your {product.title}?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Get setup in 15 minutes. No specialized hardware, no long contracts, and 24/7 founder support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link href="/login" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 px-8 text-base bg-[#BCE440] hover:bg-[#b0d938] text-[#0B3B24] font-bold rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Store className="w-4 h-4 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/demo" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 px-8 text-base bg-[#0E4A2E] hover:bg-[#125837] text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-200 font-semibold cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Schedule 1-on-1 Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="relative z-10 border-t border-[#E5DEC9] bg-[#FAF7EE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <BrandLogo size="sm" />
            <span className="text-stone-400">|</span>
            <span>{product.title}</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Tavola Operations Platform. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
