import Link from "next/link";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  BarChart2,
  Clock,
  MapPin,
  Package,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#0d1b2a] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 60%, #52b788 0%, transparent 45%), radial-gradient(circle at 85% 15%, #2d6a4f 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-[#52b788] text-xs font-semibold uppercase tracking-widest mb-5 border border-[#52b788]/40 px-3 py-1 rounded-full">
              Prairie Cannabis Logistics
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Get your product
              <br />
              <span className="text-[#52b788]">on Prairie shelves.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              Open Fields Distribution connects licensed producers to Saskatchewan
              retailers and the Manitoba Liquor &amp; Lotteries network — with
              faster fulfillment and less friction than anywhere else.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/lp-partners"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#52b788] text-[#0d1b2a] font-semibold text-sm rounded-md hover:bg-[#40916c] hover:text-white transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/provinces/saskatchewan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-medium text-sm rounded-md hover:bg-white/5 transition-colors"
              >
                Explore Our Markets
              </Link>
            </div>
          </div>
        </div>

        {/* Market badges */}
        <div className="relative max-w-7xl mx-auto px-6 pb-14 flex flex-col sm:flex-row gap-4">
          <MarketBadge
            province="Saskatchewan"
            detail="Privatized retail model — direct to 600+ licensed stores"
            href="/provinces/saskatchewan"
          />
          <MarketBadge
            province="Manitoba"
            detail="1 of 3 MBLL-authorized cannabis distributors"
            href="/provinces/manitoba"
          />
        </div>
      </section>

      {/* ── Why Open Fields ── */}
      <section className="bg-[#f8f9f7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Why Open Fields</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 max-w-xl">
            Distribution that works as hard as you do.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              Icon={Clock}
              title="Fast Fulfillment"
              body="Orders fulfilled same-week. We maintain local inventory so your products reach stores without national DC delays."
            />
            <FeatureCard
              Icon={MapPin}
              title="Prairie-Native Reach"
              body="Deep relationships with Saskatchewan retailers and full coverage of Manitoba's government distribution network."
            />
            <FeatureCard
              Icon={ShieldCheck}
              title="Fully Compliant"
              body="We navigate provincial cannabis regulations on your behalf — licensing, reporting, and documentation handled."
            />
            <FeatureCard
              Icon={Package}
              title="Streamlined Ordering"
              body="LPs and retailers access a single portal for purchase orders, inventory visibility, and delivery tracking."
            />
            <FeatureCard
              Icon={Truck}
              title="Last-Mile Logistics"
              body="From our warehouse to the shelf. We own last-mile delivery in both provinces so there are no hand-off delays."
            />
            <FeatureCard
              Icon={BarChart2}
              title="Market Intelligence"
              body="Access to real shelf data, velocity reports, and category insights to help you price and position competitively."
            />
          </div>
        </div>
      </section>

      {/* ── Province cards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Our Markets</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
            Two provinces. One distribution partner.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProvinceCard
              name="Saskatchewan"
              tagline="Canada's most open cannabis market"
              body="Saskatchewan runs a fully privatized retail model — the only province where LPs can work directly with private retailers through a distributor. We connect your SKUs to hundreds of stores across the province."
              href="/provinces/saskatchewan"
              accent="#52b788"
            />
            <ProvinceCard
              name="Manitoba"
              tagline="Exclusive MBLL distribution"
              body="As one of just three authorized cannabis distributors for Manitoba Liquor & Lotteries, Open Fields provides LPs with privileged access to Manitoba's government-managed retail network."
              href="/provinces/manitoba"
              accent="#d4a853"
            />
          </div>
        </div>
      </section>

      {/* ── LP CTA ── */}
      <section className="bg-[#0d1b2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <SectionLabel light>For Licensed Producers</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Ready to enter the Prairies?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Whether you&apos;re a craft producer or a national brand, we can get your
              products listed and selling in Saskatchewan and Manitoba faster than any
              other route to market. Tell us about your portfolio.
            </p>
          </div>
          <Link
            href="/lp-partners"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#52b788] text-[#0d1b2a] font-semibold rounded-md hover:bg-[#40916c] hover:text-white transition-colors"
          >
            Submit LP Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Insights teaser ── */}
      <section className="py-20 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Insights</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Know the market before you enter it.
          </h2>
          <p className="text-slate-600 max-w-xl mb-10">
            Access our library of market reports, regulatory guides, LP onboarding
            documents, and retailer ordering guides — built for the Prairie cannabis
            ecosystem.
          </p>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[#2d6a4f] font-semibold hover:text-[#40916c] transition-colors"
          >
            Browse All Resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

/* ─────────── Sub-components ─────────── */

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest ${
        light ? "text-[#52b788]" : "text-[#2d6a4f]"
      }`}
    >
      {children}
    </p>
  );
}

function MarketBadge({
  province,
  detail,
  href,
}: {
  province: string;
  detail: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors group"
    >
      <div className="w-2 h-2 rounded-full bg-[#52b788] shrink-0" />
      <div>
        <p className="text-sm font-semibold text-white">{province}</p>
        <p className="text-xs text-slate-400">{detail}</p>
      </div>
      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#52b788] ml-auto transition-colors" />
    </Link>
  );
}

function FeatureCard({
  Icon,
  title,
  body,
}: {
  Icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
      <div className="w-10 h-10 rounded-lg bg-[#52b788]/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#2d6a4f]" />
      </div>
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function ProvinceCard({
  name,
  tagline,
  body,
  href,
  accent,
}: {
  name: string;
  tagline: string;
  body: string;
  href: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group relative bg-[#0d1b2a] text-white rounded-xl p-8 overflow-hidden hover:opacity-95 transition-opacity"
    >
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-2xl"
        style={{ background: accent, transform: "translate(30%, -30%)" }}
      />
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-3"
        style={{ color: accent }}
      >
        {tagline}
      </p>
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <p className="text-slate-300 text-sm leading-relaxed mb-6">{body}</p>
      <span
        className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
        style={{ color: accent }}
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
