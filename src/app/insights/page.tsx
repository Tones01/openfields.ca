import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, BookOpen, FileText, ShoppingCart, ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market reports, regulatory guides, LP onboarding documents, and retailer ordering guides for Saskatchewan and Manitoba cannabis markets.",
};

const categories = [
  {
    id: "reports",
    Icon: BarChart2,
    label: "Market Data & Reports",
    color: "#52b788",
    description:
      "Shelf velocity data, category trends, pricing benchmarks, and provincial market overviews for SK and MB.",
    resources: [
      { title: "2025 Saskatchewan Cannabis Market Overview", type: "Report", tag: "Free" },
      { title: "Manitoba Retail Velocity Report — Q4 2024", type: "Report", tag: "Free" },
      { title: "Prairie Cannabis Category Benchmarks 2025", type: "Report", tag: "Free" },
      { title: "SK vs MB: A Distributor's Comparison", type: "Report", tag: "Free" },
    ],
  },
  {
    id: "regulatory",
    Icon: BookOpen,
    label: "Regulatory Guides",
    color: "#d4a853",
    description:
      "Plain-language explainers on SK and MB provincial cannabis regulations, licensing requirements, and compliance obligations.",
    resources: [
      { title: "Saskatchewan Cannabis Retail Model Explained", type: "Guide", tag: "Free" },
      { title: "MBLL Authorization: What LPs Need to Know", type: "Guide", tag: "Free" },
      { title: "SK Distributor Licensing Requirements 2025", type: "Guide", tag: "Free" },
      { title: "Cannabis Compliance Checklist — Prairie Edition", type: "Guide", tag: "Free" },
    ],
  },
  {
    id: "lp-onboarding",
    Icon: FileText,
    label: "LP Onboarding Documents",
    color: "#6366f1",
    description:
      "Everything a Licensed Producer needs to prepare before working with Open Fields — from documentation checklists to pricing guides.",
    resources: [
      { title: "LP Onboarding Checklist", type: "Document", tag: "Free" },
      { title: "Wholesale Pricing Guide for Prairie Markets", type: "Document", tag: "Free" },
      { title: "SKU Submission Template", type: "Document", tag: "Free" },
      { title: "LP Distribution Agreement — Overview", type: "Document", tag: "Free" },
    ],
  },
  {
    id: "ordering",
    Icon: ShoppingCart,
    label: "Retailer Ordering Guides",
    color: "#ef4444",
    description:
      "Step-by-step guides for SK retailers on using the Open Fields portal, product selection, and managing your cannabis inventory.",
    resources: [
      { title: "SK Retailer Portal — Getting Started", type: "Guide", tag: "Free" },
      { title: "How to Read a Product CoA", type: "Guide", tag: "Free" },
      { title: "Seasonal Ordering Strategy for SK Retailers", type: "Guide", tag: "Free" },
      { title: "Category Management for Cannabis Retail", type: "Guide", tag: "Free" },
    ],
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b2a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-[#52b788] text-xs font-semibold uppercase tracking-widest mb-5 border border-[#52b788]/40 px-3 py-1 rounded-full">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Market data, regulatory guides, onboarding documents, and retail playbooks —
            built specifically for Saskatchewan and Manitoba cannabis operators.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="py-20 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {categories.map(({ id, Icon, label, color, description, resources }) => (
            <div key={id} id={id} className="scroll-mt-20">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}20` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <h2 className="text-xl font-bold">{label}</h2>
              </div>
              <p className="text-slate-600 text-sm mb-6 max-w-xl">{description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {resources.map((r) => (
                  <ResourceCard key={r.title} {...r} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Looking for something specific?</h2>
            <p className="text-slate-600 text-sm">
              We publish new resources regularly. Have a topic you&apos;d like us to cover?
              Reach out.
            </p>
          </div>
          <Link
            href="/lp-partners#inquiry"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#0d1b2a] text-white font-medium text-sm rounded-md hover:bg-[#1a2f45] transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function ResourceCard({
  title,
  type,
  tag,
  color,
}: {
  title: string;
  type: string;
  tag: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm group hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded"
          style={{ background: `${color}15`, color }}
        >
          {type}
        </span>
        <span className="text-xs text-slate-400">{tag}</span>
      </div>
      <h3 className="text-sm font-semibold leading-snug mb-4 flex-1">{title}</h3>
      <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-[#2d6a4f] transition-colors mt-auto">
        <Download className="w-3.5 h-3.5" />
        Download
      </button>
    </div>
  );
}
