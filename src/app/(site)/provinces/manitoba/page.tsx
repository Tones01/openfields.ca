import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Manitoba",
  description:
    "Open Fields Distribution in Manitoba — one of only three authorized MBLL cannabis distributors. Exclusive access to Manitoba's government-managed retail network.",
};

const mbllFacts = [
  "Manitoba Liquor & Lotteries controls all cannabis distribution",
  "Only 3 distributors are authorized to service the MBLL network",
  "Open Fields is 1 of those 3 authorized distributors",
  "All cannabis sold in Manitoba flows through authorized distributors",
  "MBLL operates 30+ Cannabis Manitoba retail locations",
  "Controlled market = premium shelf placement potential",
];

const steps = [
  {
    step: "01",
    title: "LP Authorization",
    body: "We work with you to get your products submitted and approved by MBLL's listing process. Our team knows the requirements.",
  },
  {
    step: "02",
    title: "Logistics Setup",
    body: "Your products flow into our Manitoba distribution network. We coordinate inbound receiving and MBLL compliance documentation.",
  },
  {
    step: "03",
    title: "MBLL Fulfillment",
    body: "As an authorized distributor, we receive and fulfill MBLL purchase orders — getting your product to government stores efficiently.",
  },
  {
    step: "04",
    title: "Reporting & Reorder",
    body: "We handle all MBLL reporting requirements and actively manage inventory levels to prevent stockouts.",
  },
];

export default function ManitobaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b2a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-[#d4a853] text-xs font-semibold uppercase tracking-widest mb-5 border border-[#d4a853]/40 px-3 py-1 rounded-full">
            Province
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manitoba</h1>
          <p className="text-xl text-[#d4a853] font-medium mb-6">
            One of 3 MBLL-authorized distributors.
          </p>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            Manitoba&apos;s cannabis market runs through Manitoba Liquor &amp; Lotteries.
            Only three distributors have been authorized to service this network — and
            Open Fields is one of them. This gives our LP partners privileged access to
            every cannabis retail location in Manitoba.
          </p>
          <Link
            href="/lp-partners"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#d4a853] text-[#0d1b2a] font-semibold text-sm rounded-md hover:bg-[#b8923e] transition-colors"
          >
            Distribute in Manitoba
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* MBLL explained */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
              The MBLL Model
            </p>
            <h2 className="text-3xl font-bold mb-4">
              A controlled market with real advantages
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unlike Saskatchewan&apos;s open market, Manitoba&apos;s cannabis distribution is
              tightly controlled by Manitoba Liquor &amp; Lotteries. Every product sold
              in a Manitoba cannabis store must flow through an authorized distributor.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              For LPs, this creates a high barrier to entry — but it also means less
              price competition, more predictable ordering, and a government-backed
              retail partner. If you&apos;re in, you&apos;re in.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Open Fields&apos; authorized status means your products can reach every
              Cannabis Manitoba retail location through one distribution relationship.
            </p>
          </div>
          <div className="bg-[#f8f9f7] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#d4a853]/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#d4a853]" />
              </div>
              <p className="font-semibold">Manitoba Distribution Facts</p>
            </div>
            <ul className="space-y-3">
              {mbllFacts.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4a853] mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
            Our Process
          </p>
          <h2 className="text-3xl font-bold mb-12">How we work with MBLL</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-slate-100">
                <span className="text-3xl font-black text-[#d4a853]/30 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailer note */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d4a853]/10 flex items-center justify-center">
              <Store className="w-6 h-6 text-[#d4a853]" />
            </div>
            <div>
              <p className="font-semibold text-base">Manitoba Retailer?</p>
              <p className="text-sm text-slate-600">
                Ordering information and product catalogue access for Manitoba retailers.
              </p>
            </div>
          </div>
          <Link
            href="/retailers"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#d4a853] text-[#d4a853] font-medium text-sm rounded-md hover:bg-[#d4a853] hover:text-[#0d1b2a] transition-colors"
          >
            Retailer Information
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1b2a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enter Manitoba?</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Our authorized distributor status means your LP can reach the entire MBLL
            retail network through one partner. Let&apos;s talk.
          </p>
          <Link
            href="/lp-partners#inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a853] text-[#0d1b2a] font-semibold rounded-md hover:bg-[#b8923e] transition-colors"
          >
            Submit LP Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
