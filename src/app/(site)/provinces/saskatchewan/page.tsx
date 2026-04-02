import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Store, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Saskatchewan",
  description:
    "Open Fields Distribution in Saskatchewan — Canada's fully privatized cannabis retail market. Direct-to-retailer distribution across 600+ licensed stores.",
};

const differentiators = [
  "Only province with a 100% private retail model",
  "LPs sell directly to retailers via licensed distributors",
  "No provincial government markup layer",
  "Fastest route from producer to consumer in Canada",
  "600+ licensed retail locations province-wide",
  "Highly competitive — shelf space rewards speed and relationships",
];

const howItWorks = [
  {
    step: "01",
    title: "LP Onboarding",
    body: "We add your SKUs to our catalogue and handle all provincial compliance documentation on your behalf.",
  },
  {
    step: "02",
    title: "Inventory & Warehousing",
    body: "Your product ships to our Saskatchewan distribution hub. We manage receiving, storage, and inventory tracking.",
  },
  {
    step: "03",
    title: "Retailer Sales",
    body: "Our sales team actively sells your products to our retailer network. No passive listing — we push your SKUs.",
  },
  {
    step: "04",
    title: "Fulfillment & Delivery",
    body: "Orders are picked, packed, and delivered to retail locations. Same-week fulfillment is our standard.",
  },
];

export default function SaskatchewanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b2a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-[#52b788] text-xs font-semibold uppercase tracking-widest mb-5 border border-[#52b788]/40 px-3 py-1 rounded-full">
            Province
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Saskatchewan</h1>
          <p className="text-xl text-[#52b788] font-medium mb-6">
            Canada&apos;s most open cannabis market.
          </p>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            Saskatchewan is the only province in Canada running a fully privatized
            cannabis retail model. Licensed producers work directly with private
            retailers through licensed distributors — no government wholesale layer,
            no listing lottery. Just fast, direct market access.
          </p>
          <Link
            href="/lp-partners"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#52b788] text-[#0d1b2a] font-semibold text-sm rounded-md hover:bg-[#40916c] hover:text-white transition-colors"
          >
            Distribute in Saskatchewan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Market overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
              Market Overview
            </p>
            <h2 className="text-3xl font-bold mb-4">Why Saskatchewan works differently</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When cannabis was legalized, Saskatchewan chose a model unlike any other
              province: fully private retail from day one. This means the competitive
              dynamics resemble a true free market — retailers choose their suppliers,
              distributors compete on service and selection, and producers have real
              influence over their shelf presence.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For LPs, this is the most accessible provincial market in Canada. And for
              Open Fields, it&apos;s our home turf.
            </p>
          </div>
          <div className="bg-[#f8f9f7] rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-4">
              What makes SK unique
            </p>
            <ul className="space-y-3">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#52b788] mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
            Our Process
          </p>
          <h2 className="text-3xl font-bold mb-12">How we get you on SK shelves</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-slate-100">
                <span className="text-3xl font-black text-[#52b788]/30 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailer portal CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#52b788]/10 flex items-center justify-center">
              <Store className="w-6 h-6 text-[#2d6a4f]" />
            </div>
            <div>
              <p className="font-semibold text-base">Saskatchewan Retailer?</p>
              <p className="text-sm text-slate-600">
                Access your ordering portal or learn how to set up an account.
              </p>
            </div>
          </div>
          <Link
            href="/retailers"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2d6a4f] text-[#2d6a4f] font-medium text-sm rounded-md hover:bg-[#2d6a4f] hover:text-white transition-colors"
          >
            Retailer Information
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1b2a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enter Saskatchewan?</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Tell us about your products and we&apos;ll show you how quickly we can get
            you listed with SK retailers.
          </p>
          <Link
            href="/lp-partners#inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#52b788] text-[#0d1b2a] font-semibold rounded-md hover:bg-[#40916c] hover:text-white transition-colors"
          >
            Submit LP Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
