"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight, Package, Truck, FileText } from "lucide-react";

const skPortalSteps = [
  "Log in to the Saskatchewan retailer portal",
  "Browse available SKUs by category, brand, or format",
  "Add products to your order and submit",
  "Receive confirmation and estimated delivery date",
  "Delivery fulfilled same-week from our SK distribution hub",
];

const mbInfo = [
  {
    title: "MBLL-managed ordering",
    body: "Manitoba retailers order cannabis products through the MBLL system. Open Fields fulfills those orders as an authorized distributor.",
  },
  {
    title: "Product availability",
    body: "Contact your MBLL representative or visit the Cannabis Manitoba product catalogue to see available SKUs distributed by Open Fields.",
  },
  {
    title: "Delivery & fulfillment",
    body: "Orders are picked from our Manitoba distribution hub and delivered on MBLL's schedule. We coordinate directly with MBLL on timing.",
  },
];

export default function RetailersContent() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0d1b2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-[#52b788] text-xs font-semibold uppercase tracking-widest mb-5 border border-[#52b788]/40 px-3 py-1 rounded-full">
            Retailers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retailer Hub</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Everything you need to order from Open Fields Distribution — whether
            you&apos;re a Saskatchewan private retailer or a Manitoba Cannabis store.
          </p>
        </div>
      </section>

      {/* Saskatchewan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#52b788]" />
            <h2 className="text-2xl font-bold">Saskatchewan Retailers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Saskatchewan licensed retailers can access the Open Fields ordering
                portal to browse our full catalogue, place purchase orders, and track
                deliveries. Our team is available by phone and email for support.
              </p>
              <ol className="space-y-3 mb-8">
                {skPortalSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#52b788]/10 text-[#2d6a4f] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
              <a
                href="https://portal.openfields.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#52b788] text-[#0d1b2a] font-semibold text-sm rounded-md hover:bg-[#40916c] hover:text-white transition-colors"
              >
                Go to SK Ordering Portal
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-[#f8f9f7] rounded-xl p-6 space-y-5">
              <div className="flex gap-3">
                <Package className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Full catalogue access</p>
                  <p className="text-sm text-slate-600">
                    Browse hundreds of SKUs across flower, pre-rolls, edibles, extracts,
                    beverages, and accessories.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Truck className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Same-week delivery</p>
                  <p className="text-sm text-slate-600">
                    Orders placed before Thursday are typically delivered the following week.
                    Rush delivery available on request.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <FileText className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Need an account?</p>
                  <p className="text-sm text-slate-600">
                    Email{" "}
                    <a
                      href="mailto:retailers@openfields.ca"
                      className="text-[#2d6a4f] font-medium hover:underline"
                    >
                      retailers@openfields.ca
                    </a>{" "}
                    with your retail licence number and we&apos;ll set you up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manitoba */}
      <section className="py-16 bg-[#f8f9f7] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
            <h2 className="text-2xl font-bold">Manitoba Retailers</h2>
          </div>
          <p className="text-slate-600 max-w-xl leading-relaxed mb-8">
            Manitoba cannabis retail operates through Manitoba Liquor &amp; Lotteries.
            Open Fields serves as an authorized distributor within the MBLL supply chain.
            Retail ordering happens through MBLL&apos;s existing systems.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {mbInfo.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Questions about MB product availability?{" "}
            <a
              href="mailto:info@openfields.ca"
              className="text-[#2d6a4f] font-medium hover:underline"
            >
              Contact us directly
            </a>
            .
          </p>
        </div>
      </section>

      {/* LP CTA */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-700 font-medium">
            Are you a Licensed Producer looking to get your products on retailer shelves?
          </p>
          <Link
            href="/lp-partners"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d1b2a] text-white font-medium text-sm rounded-md hover:bg-[#1a2f45] transition-colors shrink-0"
          >
            LP Partner Info
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
