import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, TrendingUp, Zap, Users } from "lucide-react";
import LPInquiryForm from "@/components/LPInquiryForm";

export const metadata: Metadata = {
  title: "LP Partners",
  description:
    "Partner with Open Fields Distribution to access Saskatchewan and Manitoba cannabis markets. Fast listings, active sales support, and compliant last-mile delivery.",
};

const reasons = [
  {
    Icon: Zap,
    title: "Faster time to shelf",
    body: "Skip the national DC queue. Our Prairie-native infrastructure means your product goes from your facility to retail in days, not weeks.",
  },
  {
    Icon: TrendingUp,
    title: "Active sales — not passive listing",
    body: "We don't just warehouse your products. Our team actively sells to retailers and works your portfolio into their orders.",
  },
  {
    Icon: CheckCircle2,
    title: "Full compliance support",
    body: "Provincial licensing, MBLL authorization, tracking and reporting — we handle the regulatory side so you can focus on production.",
  },
  {
    Icon: Users,
    title: "Retailer relationships that move product",
    body: "Years of trusted relationships with SK retailers and direct MBLL authorization mean your products are welcomed, not just tolerated.",
  },
];

const whatWeNeed = [
  "Valid Health Canada LP licence",
  "Product CoAs and regulatory documentation",
  "Target SKU list with wholesale pricing",
  "Minimum inventory commitment (flexible for craft LPs)",
  "Designated sales/distribution contact",
];

export default function LPPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b2a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-[#52b788] text-xs font-semibold uppercase tracking-widest mb-5 border border-[#52b788]/40 px-3 py-1 rounded-full">
            Licensed Producers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LP Partners</h1>
          <p className="text-xl text-[#52b788] font-medium mb-6">
            Your fastest route to Prairie consumers.
          </p>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Open Fields Distribution is the Prairie partner for licensed producers who
            want genuine market access — not just a listing. We actively sell, fulfill,
            and grow your presence in Saskatchewan and Manitoba.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-16 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
            Why Choose Open Fields
          </p>
          <h2 className="text-3xl font-bold mb-10">We move product. Seriously.</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-slate-100 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#52b788]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#2d6a4f]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we need */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
              Onboarding
            </p>
            <h2 className="text-3xl font-bold mb-4">
              What we need to get started
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our onboarding process is built to be fast. Most LPs are active in our
              catalogue within 2–3 weeks of our first conversation. Here&apos;s what
              we need from your side:
            </p>
            <ul className="space-y-3">
              {whatWeNeed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#52b788] mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              New to Prairie markets?{" "}
              <Link href="/insights" className="text-[#2d6a4f] font-medium hover:underline">
                Read our LP onboarding guide
              </Link>{" "}
              to understand the landscape before you reach out.
            </p>
          </div>

          {/* Markets overview */}
          <div className="space-y-4">
            <div className="bg-[#f8f9f7] rounded-xl p-6 border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#52b788] mb-1">
                Saskatchewan
              </p>
              <h3 className="font-bold text-lg mb-2">Private retail model</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct-to-retailer access across 600+ licensed stores. The most open
                provincial cannabis market in Canada.
              </p>
              <Link
                href="/provinces/saskatchewan"
                className="inline-block mt-3 text-xs font-semibold text-[#2d6a4f] hover:underline"
              >
                Learn more →
              </Link>
            </div>
            <div className="bg-[#f8f9f7] rounded-xl p-6 border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d4a853] mb-1">
                Manitoba
              </p>
              <h3 className="font-bold text-lg mb-2">MBLL distribution</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As 1 of 3 authorized MBLL distributors, we provide exclusive access to
                Manitoba&apos;s government cannabis retail network.
              </p>
              <Link
                href="/provinces/manitoba"
                className="inline-block mt-3 text-xs font-semibold text-[#2d6a4f] hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="py-20 bg-[#f8f9f7] scroll-mt-16">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3 text-center">
            LP Inquiry
          </p>
          <h2 className="text-3xl font-bold mb-2 text-center">
            Let&apos;s talk distribution.
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Fill out the form below and we&apos;ll get back to you within one business day.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <LPInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
