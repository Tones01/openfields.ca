import Link from "next/link";
import {
  ArrowRight,
  Truck,
  BarChart2,
  Clock,
  MapPin,
  Package,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: content */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-5 block">
                Prairie Cannabis Logistics
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#0d1b2a]">
                Connect your product
                <br />
                <span className="italic text-[#40916c]">to the prairies.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-lg mb-10">
                Open Fields connects licensed producers to Saskatchewan retailers
                and Manitoba&apos;s government-managed retail network — two markets,
                one distribution partner.
              </p>

              {/* Two-row CTA */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 min-w-[9rem]">
                    Saskatchewan Retailers
                  </span>
                  <Link
                    href="/retailers"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0d1b2a] text-white text-sm font-semibold rounded-full hover:bg-[#1a2f42] transition-colors"
                  >
                    Browse catalogue <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 min-w-[9rem]">
                    Licensed Producers
                  </span>
                  <Link
                    href="/lp-partners"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-[#0d1b2a] text-[#0d1b2a] text-sm font-semibold rounded-full hover:bg-[#0d1b2a] hover:text-white transition-colors"
                  >
                    Submit an inquiry <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: image placeholder */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-[5/4] rounded-2xl bg-[#f0f7f4] border border-[#cce4d8] flex items-center justify-center">
                <p className="text-sm text-[#6aaf91] font-medium tracking-wide">
                  Hero image / map
                </p>
              </div>
            </div>
          </div>

          {/* Province strip */}
          <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProvinceStrip
              abbr="SK"
              name="Saskatchewan"
              detail="Fully private, open retail market"
              href="/provinces/saskatchewan"
            />
            <ProvinceStrip
              abbr="MB"
              name="Manitoba"
              detail="MBLL-authorized distribution partner"
              href="/provinces/manitoba"
            />
          </div>
        </div>
      </section>

      {/* ── Why Open Fields ── */}
      <section className="bg-[#f8f9f7] py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Why Open Fields</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 max-w-xl text-[#0d1b2a]">
            Distribution that works as hard as you do.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              Icon={BarChart2}
              title="Market intelligence"
              body="Real shelf data across both provinces, so you price and position with confidence."
            />
            <FeatureCard
              Icon={Clock}
              title="Fast fulfillment"
              body="Orders fulfilled same-week. Local inventory means no national DC delays."
            />
            <FeatureCard
              Icon={TrendingUp}
              title="Go-to-market support"
              body="We help LPs think through prairie entry — the right SKUs, the right stores."
            />
            <FeatureCard
              Icon={MapPin}
              title="Dedicated prairie coverage"
              body="SK and MB exclusively. Not a national distributor spread thin across 10 provinces."
            />
            <FeatureCard
              Icon={Package}
              title="Streamlined ordering"
              body="One portal for SK retailers. Purchase orders, inventory visibility, delivery tracking."
            />
            <FeatureCard
              Icon={Truck}
              title="Last-mile logistics"
              body="From our warehouse to the shelf. We own last-mile delivery in both provinces."
            />
          </div>
        </div>
      </section>

      {/* ── Province cards ── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Our Markets</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 text-[#0d1b2a]">
            Two provinces.
            <br />
            One distribution partner.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProvinceCard
              name="Saskatchewan"
              tagline="Canada's most open cannabis market"
              body="Fully privatized retail — the only province where LPs can work directly with retailers through a distributor. We connect your SKUs to stores province-wide."
              href="/provinces/saskatchewan"
              accent="#52b788"
            />
            <ProvinceCard
              name="Manitoba"
              tagline="MBLL-authorized distributor"
              body="Manitoba's retail network runs through MBLL. Getting product to stores requires an authorized distribution partner. We handle logistics, compliance, and last mile so you don't have to navigate MB alone."
              href="/provinces/manitoba"
              accent="#d4a853"
            />
          </div>
        </div>
      </section>

      {/* ── LP CTA ── */}
      <section className="bg-[#f8f9f7] py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-xl">
            <SectionLabel>For Licensed Producers</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[#0d1b2a]">
              Ready to enter the prairies?
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We work with craft producers and national brands alike. Tell us
              about your portfolio and we&apos;ll tell you if we&apos;re a fit.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <Link
              href="/lp-partners"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d1b2a] text-white font-semibold rounded-full hover:bg-[#1a2f42] transition-colors"
            >
              Submit LP inquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-slate-400">Selective partnerships only</p>
          </div>
        </div>
      </section>

      {/* ── Insights teaser ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Insights</SectionLabel>
          <div className="mt-2 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">
              Know the market
              <br />
              before you enter it.
            </h2>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[#2d6a4f] font-semibold text-sm hover:text-[#40916c] transition-colors shrink-0"
            >
              Browse all resources <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InsightCard
              type="Market Report"
              title="Prairie cannabis market overview"
            />
            <InsightCard
              type="Regulatory Guide"
              title="Entering SK and MB as a licensed producer"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────── Sub-components ─────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
      {children}
    </p>
  );
}

function ProvinceStrip({
  abbr,
  name,
  detail,
  href,
}: {
  abbr: string;
  name: string;
  detail: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#2d6a4f]/40 hover:bg-[#f8fdfb] transition-colors group"
    >
      <div className="w-9 h-9 rounded-lg bg-[#f0f7f4] border border-[#cce4d8] flex items-center justify-center shrink-0">
        <span className="text-[10px] font-bold text-[#2d6a4f] tracking-wide">{abbr}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#0d1b2a]">{name}</p>
        <p className="text-xs text-slate-500 truncate">{detail}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#2d6a4f] transition-colors shrink-0" />
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
    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors">
      <div className="w-9 h-9 rounded-lg bg-[#f0f7f4] border border-[#cce4d8] flex items-center justify-center mb-4">
        <Icon className="w-4 h-4 text-[#2d6a4f]" />
      </div>
      <h3 className="font-semibold text-sm text-[#0d1b2a] mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
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
      className="group relative bg-[#0d1b2a] text-white rounded-2xl p-8 overflow-hidden hover:opacity-95 transition-opacity"
    >
      {/* Map placeholder */}
      <div
        className="absolute top-4 right-4 w-32 h-24 rounded-lg opacity-20 border border-white/20 flex items-center justify-center"
        style={{ background: `${accent}20` }}
      >
        <span className="text-[10px] text-white/50 font-medium uppercase tracking-widest">Map</span>
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, ${accent} 0%, transparent 60%)`,
        }}
      />
      <p
        className="text-[10px] font-semibold uppercase tracking-widest mb-3"
        style={{ color: accent }}
      >
        {tagline}
      </p>
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">{body}</p>
      <span
        className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
        style={{ color: accent }}
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

function InsightCard({ type, title }: { type: string; title: string }) {
  return (
    <div className="bg-[#f8f9f7] border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors">
      {/* Cover placeholder */}
      <div className="h-36 bg-[#f0f7f4] border-b border-slate-200 flex items-center justify-center">
        <span className="text-xs text-[#6aaf91] font-medium tracking-wide uppercase">
          {type === "Market Report" ? "Report cover" : "Guide cover"}
        </span>
      </div>
      <div className="p-5">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#2d6a4f] bg-[#f0f7f4] border border-[#cce4d8] px-2 py-0.5 rounded mb-3">
          {type}
        </span>
        <p className="text-sm font-semibold text-[#0d1b2a] leading-snug">{title}</p>
      </div>
    </div>
  );
}
