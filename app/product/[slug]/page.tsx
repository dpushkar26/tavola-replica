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
  Play
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
  inventory: {
    slug: 'inventory',
    badge: 'INVENTORY & RAW MATERIAL CONTROL',
    title: 'Smart Inventory Management',
    tagline: 'Track every gram, eliminate kitchen wastage, and automate supplier orders.',
    description: 'Directly link your menu dishes to raw ingredients like oils, vegetables, meats, and dairy. When a ticket is fired, stock reduces in real-time with automatic low-level reorder alerts.',
    iconName: 'boxes',
    stats: [
      { value: '38%', label: 'Average Reduction in Food Waste' },
      { value: '0 Min', label: 'Midnight Manual Count Delay' },
      { value: '99.8%', label: 'Audit & Variance Accuracy' },
    ],
    features: [
      { title: 'Recipe-Level Ingredient Deductions', desc: 'Break down each menu dish into exact raw portions. Selling 1 plate of Butter Chicken instantly deducts 220g chicken, 40g butter, and spices.' },
      { title: 'Predictive Low-Stock Alerts', desc: 'Get SMS and dashboard warnings before you run out of fast-moving items during busy dinner rushes.' },
      { title: '1-Click Vendor Purchase Orders', desc: 'Consolidate low items and send structured WhatsApp/Email purchase requests to your verified suppliers in seconds.' },
      { title: 'Pilferage & Variance Reports', desc: 'Compare physical opening/closing audits against theoretical consumption to spot leakages instantly.' },
    ],
    mockup: {
      title: 'Real-Time Stock Audit',
      subtitle: 'Central Kitchen & Pantry Stores',
      metricTitle: 'Active Ingredients Tracked',
      metricValue: '184 Items',
      metricChange: '12 Low Stock Alerts',
      items: [
        { label: 'Fresh Paneer (Dairy)', sub: 'Available: 2.1 kg (Min 4.0 kg)', status: 'Low Stock • Order', statusType: 'warning' },
        { label: 'Boneless Chicken Breast', sub: 'Available: 18.5 kg (Min 5.0 kg)', status: 'Sufficient', statusType: 'success' },
        { label: 'Cooking Oil (Mustard 5L)', sub: 'Available: 14 Tins (Min 3 Tins)', status: 'Optimal', statusType: 'success' },
        { label: 'Basmati Rice (Grade A)', sub: 'Available: 35 kg (Min 20 kg)', status: 'In Transit', statusType: 'info' },
      ],
    },
  },
  expenses: {
    slug: 'expenses',
    badge: 'EXPENSES & CASH FLOW TRACKER',
    title: 'Automated Expenses Tracker',
    tagline: 'Complete visibility into daily vendor payouts, utility bills, and true profit margins.',
    description: 'Stop guessing your month-end profits. Tavola captures petty cash slips, bulk vendor invoices, staff advances, and utility costs to deliver a live, automated Profit & Loss statement.',
    iconName: 'wallet',
    stats: [
      { value: '₹42,000+', label: 'Avg Monthly Untracked Leakage Prevented' },
      { value: '100%', label: 'GST Input Tax Credit Match' },
      { value: '0.4s', label: 'Instant Cash Drawer Reconciliation' },
    ],
    features: [
      { title: 'Daily Cash Outflow Logs', desc: 'Easily record market runs, ice purchases, or courier expenses with receipt photo attachments right from your smartphone.' },
      { title: 'Vendor Payable Schedules', desc: 'Track pending supplier bills, due dates, and paid vouchers so you never incur supplier late fees or disputes.' },
      { title: 'Automatic Gross vs Net Margin Analysis', desc: 'Real-time calculation of Food Cost Percentage (FC%) and prime costs against daily gross revenue.' },
      { title: 'Tally & Accounting Export', desc: 'One-click export formatted for standard accountants and Indian GST filing systems.' },
    ],
    mockup: {
      title: 'Daily Operations P&L Ledger',
      subtitle: 'Verified Cash & Bank Ledger',
      metricTitle: "Today's Net Margin",
      metricValue: '₹34,850',
      metricChange: '+18.4% vs last week',
      items: [
        { label: 'Morning Fresh Produce Vendor', sub: 'Invoice #INV-8821 • Vegetables & Herbs', status: '₹4,200 Paid', statusType: 'success' },
        { label: 'Monthly Electricity & HVAC', sub: 'Commercial Meter Due in 3 days', status: '₹14,500 Pending', statusType: 'warning' },
        { label: 'Staff Advance Payment', sub: 'Kitchen Commis II Voucher', status: '₹2,000 Approved', statusType: 'info' },
        { label: 'Dairy Supply Direct Settlement', sub: '35 Liters Milk + Cream', status: '₹2,450 Settled', statusType: 'success' },
      ],
    },
  },
  gym: {
    slug: 'gym',
    badge: 'FITNESS & GYM OPERATIONS',
    title: 'Smart Gym Management',
    tagline: 'Effortless member check-ins, automated subscription renewals, and trainer schedules.',
    description: 'Designed for modern fitness studios, gym chains, and CrossFit boxes. Automate membership renewals via WhatsApp, sync turnstile biometric access, and track trainer commissions seamlessly.',
    iconName: 'dumbbell',
    stats: [
      { value: '94%', label: 'On-Time Membership Renewal Rate' },
      { value: '3 Sec', label: 'Rapid Turnstile Check-In Speed' },
      { value: '0', label: 'Unpaid Member Entry Instances' },
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
      metricTitle: 'Active Members Present',
      metricValue: '48 / 80 Pax',
      metricChange: 'Peak Hour Flow',
      items: [
        { label: 'Vikram Mehta (Gold Tier)', sub: 'Valid till Nov 2026 • 248 Days Left', status: 'Access Granted', statusType: 'success' },
        { label: 'Ananya Sharma (Personal PT)', sub: 'Assigned to Trainer Arjun (Slot 07:00)', status: 'Checked In', statusType: 'info' },
        { label: 'Rohan Deshmukh (Basic)', sub: 'Subscription Expired 2 days ago', status: 'Gate Locked • UPI Sent', statusType: 'warning' },
        { label: 'Pooja Nair (Morning Yoga)', sub: 'Class #04 • Room B', status: 'Attended', statusType: 'success' },
      ],
    },
  },
  dairy: {
    slug: 'dairy',
    badge: 'MILK PROCUREMENT & DAIRY ERP',
    title: 'Precision Dairy Management',
    tagline: 'Automate milk collection, fat & SNF rate calculations, farmer ledgers, and delivery routes.',
    description: 'The end-to-end management suite for milk collection centers, chilling plants, and urban dairy distributors. Capture fat percentages, compute payouts with dynamic rate charts, and manage daily milk rounds.',
    iconName: 'milk',
    stats: [
      { value: '100%', label: 'Fat & SNF Rate Calculation Accuracy' },
      { value: '0 Dispute', label: 'Farmer Passbook Settlements' },
      { value: '2.5 Hrs', label: 'Daily Delivery Dispatch Saved' },
    ],
    features: [
      { title: 'Automated Fat & SNF Testing Sync', desc: 'Connect with electronic milk analyzers and weighing scales to record morning and evening shifts without manual pen-and-paper entry.' },
      { title: 'Dynamic Matrix Rate Charts', desc: 'Auto-calculate exact milk price per liter based on cow/buffalo fat percentage and lactometer SNF formulas.' },
      { title: 'Instant Farmer Passbook & SMS Receipts', desc: 'Farmers receive immediate SMS with quantity, fat reading, and credit amount with weekly direct bank payouts.' },
      { title: 'Morning Milk Route Delivery Tracking', desc: 'Manage daily household milk packet subscriptions, route drop-offs, bottles returned, and monthly customer billing.' },
    ],
    mockup: {
      title: 'Morning Shift Milk Collection',
      subtitle: 'Weighing & Electronic Analyzer Intake',
      metricTitle: "Today's Morning Intake",
      metricValue: '1,420 Liters',
      metricChange: 'Avg Fat 6.8% • SNF 9.1%',
      items: [
        { label: 'Farmer: Ramesh Patel (#F-102)', sub: 'Cow Milk • 38.5 L • Fat 4.2% • SNF 8.6%', status: '₹1,501.50 Credited', statusType: 'success' },
        { label: 'Farmer: Suresh Yadav (#F-108)', sub: 'Buffalo Milk • 54.0 L • Fat 7.1% • SNF 9.2%', status: '₹3,024.00 Credited', statusType: 'success' },
        { label: 'Chilling Vat 01 Storage', sub: 'Temperature: 3.8°C (Optimal Range)', status: 'Chilling Active', statusType: 'info' },
        { label: 'Urban Route 04 (City Center)', sub: '180 Liters Packed for Distribution', status: 'Dispatched', statusType: 'success' },
      ],
    },
  },
  hotel: {
    slug: 'hotel',
    badge: 'ENTERPRISE HOSPITALITY & PROPERTY MANAGEMENT',
    title: 'Multi-Chain Hotel Management',
    tagline: 'Centralized front-desk, multi-property room inventory, banquet billing & guest CRM.',
    description: 'Unify reservations across boutique stays, multi-city hotel chains, and luxury resorts. Automate housekeeping room turns, manage banquet hall bookings, and track guest folio balances with zero double-bookings.',
    iconName: 'hotel',
    stats: [
      { value: '99.9%', label: 'Multi-Property Room Parity' },
      { value: '< 20s', label: 'Express Mobile Check-In' },
      { value: '100%', label: 'Centralized Banquet Folio' },
    ],
    features: [
      { title: 'Centralized Multi-Property Grid', desc: 'Manage room tariffs, live availability, and block allocations across all your properties from a single executive dashboard.' },
      { title: 'Housekeeping & Maintenance Dispatch', desc: 'Instantly notify room attendants when guests check out, with digital inspection check-offs before rooms show available.' },
      { title: 'Banquet & Event Operations', desc: 'Quote, schedule, and invoice banquet halls, conferences, and destination weddings with customized catering menus.' },
      { title: 'Direct OTA & POS Folio Routing', desc: 'Sync with Booking.com, Agoda, and MakeMyTrip, and route restaurant and spa bills directly to the guest room folio.' },
    ],
    mockup: {
      title: 'Grand Heritage Hotel & Suites',
      subtitle: 'Live Front Desk & Multi-Property Folio',
      metricTitle: "Today's Occupancy Rate",
      metricValue: '88.5%',
      metricChange: '142 / 160 Rooms Checked-In',
      items: [
        { label: 'Room 402 • Executive Suite', sub: 'Guest: Vikramaditya Verma • 3 Nights • Direct Booking', status: 'Checked-In', statusType: 'success' },
        { label: 'Grand Ballroom A • Corporate Summit', sub: '250 Guests • Buffet & AV Package • Folio Active', status: 'In Progress', statusType: 'info' },
        { label: 'Room 208 • Deluxe Garden View', sub: 'Housekeeping Cleaned & Sanitized by Staff #H-12', status: 'Ready for Guest', statusType: 'success' },
        { label: 'Room 315 • Restaurant Charge Post', sub: 'Dinner Bill ₹3,450 Transferred to Room Account', status: 'Folio Settled', statusType: 'success' },
      ],
    },
  },
  school: {
    slug: 'school',
    badge: 'CAMPUS & INSTITUTION MANAGEMENT • UPCOMING',
    title: 'School ERP System',
    tagline: 'All-in-one student admissions, automated fee collection, attendance biometrics & parent portal.',
    description: 'A modern, cloud-first school management system for K-12 schools, academies, and coaching institutes. Automate fee collection with instant receipt generation, manage biometric gate turnstiles, and connect parents via a branded mobile app.',
    iconName: 'school',
    stats: [
      { value: '100%', label: 'Digital Fee Collection' },
      { value: '< 1s', label: 'RFID Gate Attendance' },
      { value: 'Upcoming', label: 'Launching Q3 2026' },
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
      metricTitle: 'Active Enrolled Students',
      metricValue: '2,480 Students',
      metricChange: '98.4% Morning Attendance Logged',
      items: [
        { label: 'Grade 10-A • Morning Gate Biometrics', sub: '44/45 Students Checked-In (1 Leave Approved)', status: 'Verified', statusType: 'success' },
        { label: 'Q2 Tuition & Lab Fee Counter', sub: '₹18,45,000 Collected Online via UPI Today', status: 'Reconciled', statusType: 'success' },
        { label: 'Campus Bus Route 08 (North Zone)', sub: 'On Schedule • ETA Campus Gate 07:55 AM', status: 'En Route', statusType: 'info' },
        { label: 'Mid-Term Examinations Report Card', sub: '320 Gradebook Submissions Awaiting Approval', status: 'Pending Review', statusType: 'warning' },
      ],
    },
  },
};

export function generateStaticParams() {
  return [
    { slug: 'expenses' },
    { slug: 'hotel' },
    { slug: 'gym' },
    { slug: 'dairy' },
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

  const getIcon = () => {
    switch (product.iconName) {
      case 'boxes':
        return <Boxes className="w-8 h-8 text-[#0B3B24]" />;
      case 'wallet':
        return <Wallet className="w-8 h-8 text-amber-700" />;
      case 'hotel':
        return <Building2 className="w-8 h-8 text-purple-700" />;
      case 'dumbbell':
        return <Dumbbell className="w-8 h-8 text-blue-700" />;
      case 'milk':
        return <Milk className="w-8 h-8 text-emerald-700" />;
      case 'school':
        return <GraduationCap className="w-8 h-8 text-rose-700" />;
    }
  };

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
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8EFE9] text-[#0B3B24]">
                  LIVE SYNC
                </span>
              </div>

              {/* KPI highlight banner */}
              <div className="p-4 rounded-2xl bg-[#FAF7EE] border border-[#DDD6C0]/70 flex items-center justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-semibold">{product.mockup.metricTitle}</div>
                  <div className="text-2xl font-black text-[#0B3B24] font-mono mt-0.5">{product.mockup.metricValue}</div>
                </div>
                <div className="text-xs font-bold text-[#00ab14] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {product.mockup.metricChange}
                </div>
              </div>

              {/* Live line items */}
              <div className="space-y-2.5">
                {product.mockup.items.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-stone-50/70 border border-stone-200/80 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#141414] truncate">{item.label}</div>
                      <div className="text-[11px] text-stone-500 truncate">{item.sub}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap ${
                      item.statusType === 'warning'
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : item.statusType === 'info'
                        ? 'bg-blue-100 text-blue-900 border border-blue-200'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/login" className="block">
                  <button className="w-full py-2.5 rounded-xl bg-[#0B3B24] hover:bg-[#082b1a] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
                    <span>Open Live Interactive Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#BCE440]" />
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 3. CORE CAPABILITIES GRID */}
      <section className="relative z-10 py-16 bg-[#F5F0E1] border-y border-[#E5DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-2">
              ENGINEERED FOR EFFICIENCY
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-[#141414] tracking-tight">
              Key Features Built for Real Operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E5DEC9] shadow-xs space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF7EE] text-[#0B3B24] flex items-center justify-center border border-[#DDD6C0] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ab14]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#141414]">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mt-1">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OTHER SUITE MODULES NAVIGATION */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#0B3B24] mb-1">
            EXPLORE THE FULL SUITE
          </h3>
          <p className="text-2xl font-black text-[#141414]">
            Other Specialized Products by Tavola
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {Object.values(PRODUCTS_DATA)
            .filter((p) => p.slug !== slug)
            .map((other) => (
              <Link 
                key={other.slug} 
                href={`/product/${other.slug}`}
                className="group p-5 rounded-2xl bg-white border border-[#E5DEC9] hover:border-[#0B3B24]/40 hover:shadow-md transition-all duration-200 block"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#DDD6C0] flex items-center justify-center text-[#0B3B24] group-hover:bg-[#0B3B24] group-hover:text-[#BCE440] transition-colors">
                    {other.slug === 'inventory' && <Boxes className="w-4 h-4" />}
                    {other.slug === 'expenses' && <Wallet className="w-4 h-4" />}
                    {other.slug === 'gym' && <Dumbbell className="w-4 h-4" />}
                    {other.slug === 'dairy' && <Milk className="w-4 h-4" />}
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B3B24] group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="font-bold text-sm text-[#141414] group-hover:text-[#0B3B24] transition-colors">{other.title}</h4>
                <p className="text-xs text-stone-500 line-clamp-2 mt-1">{other.tagline}</p>
              </Link>
            ))}
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
