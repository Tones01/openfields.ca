import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wheat, Shield, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Open Fields Distribution — a Prairie-native cannabis logistics company built by people who understand Saskatchewan and Manitoba markets from the ground up.",
};

const values = [
  {
    Icon: Wheat,
    title: "Prairie-native",
    body: "We're not a national company that added Prairie operations as an afterthought. Open Fields was built here, for here — with deep roots in Saskatchewan and Manitoba communities.",
  },
  {
    Icon: Shield,
    title: "Compliance-first",
    body: "Cannabis distribution carries real regulatory obligations. We take compliance seriously — for our sake, for our LPs, and for the integrity of the market.",
  },
  {
    Icon: Handshake,
    title: "Relationships that last",
    body: "We build long-term partnerships with LPs and retailers — not transactional vendor relationships. Our success is tied directly to yours.",
  },
];

const teamMembers = [
  {
    name: "Team Member",
    role: "Co-Founder & CEO",
    bio: "Former agricultural logistics executive with 15+ years moving product across the Prairies. Built Open Fields to bring the same discipline to cannabis distribution.",
  },
  {
    name: "Team Member",
    role: "Co-Founder & COO",
    bio: "Deep roots in Saskatchewan's retail cannabis sector. Helped build the retailer relationships that form the backbone of our SK distribution network.",
  },
  {
    name: "Team Member",
    role: "Director, Compliance",
    bio: "Former Health Canada regulatory consultant. Keeps Open Fields and our LP partners on the right side of provincial and federal cannabis law.",
  },
  {
    name: "Team Member",
    role: "Director, Sales & Retail Relations",
    bio: "Built and manages our retailer network across SK and MB. The person your account manager talks to when they need results.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b2a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-[#52b788] text-xs font-semibold uppercase tracking-widest mb-5 border border-[#52b788]/40 px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Open Fields</h1>
          <p className="text-xl text-[#52b788] font-medium mb-6">
            Prairie-native. Distribution-focused. Built to last.
          </p>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Open Fields Distribution was founded by people who understood that the
            Prairies needed a cannabis distributor built from the ground up for this
            market — not a national logistics company running a Prairie side-operation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
              Our Story
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Built on the Prairies. For the Prairies.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>
                When recreational cannabis legalization came in 2018, Saskatchewan made a
                choice that set it apart from every other province: a fully private retail
                model. No government stores. Just licensed private retailers, supplied by
                licensed distributors.
              </p>
              <p>
                We saw that opportunity clearly. The Prairies had the market structure —
                what they needed was a distribution company that actually understood the
                territory: the distances, the retailer relationships, the regulatory
                landscape, and the pace of business out here.
              </p>
              <p>
                Open Fields was built to fill that gap. Today we operate across
                Saskatchewan and Manitoba, serving as one of just three authorized MBLL
                distributors in Manitoba and a leading SK distributor by service quality
                and fulfillment speed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard number="600+" label="SK Retail Relationships" />
            <StatCard number="3rd" label="1 of 3 MBLL Distributors" />
            <StatCard number="<7 days" label="Average Fulfillment Time" />
            <StatCard number="2" label="Prairie Provinces Served" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
            Our Values
          </p>
          <h2 className="text-3xl font-bold mb-10">How we operate</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-[#52b788]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#2d6a4f]" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f] mb-3">
            Leadership
          </p>
          <h2 className="text-3xl font-bold mb-10">The team behind Open Fields</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.role} className="bg-[#f8f9f7] rounded-xl p-5 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#0d1b2a] flex items-center justify-center mb-4">
                  <span className="text-[#52b788] font-bold text-sm">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs text-[#2d6a4f] font-medium mb-2">{member.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Interested in joining the team?{" "}
            <a href="mailto:careers@openfields.ca" className="text-[#2d6a4f] font-medium hover:underline">
              careers@openfields.ca
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1b2a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Let&apos;s work together.</h2>
            <p className="text-slate-300 text-sm max-w-md">
              Whether you&apos;re an LP looking to enter the Prairies or a retailer looking
              for a better distributor, we want to hear from you.
            </p>
          </div>
          <Link
            href="/lp-partners#inquiry"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#52b788] text-[#0d1b2a] font-semibold rounded-md hover:bg-[#40916c] hover:text-white transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#f8f9f7] rounded-xl p-5 border border-slate-100 text-center">
      <p className="text-2xl font-black text-[#0d1b2a] mb-1">{number}</p>
      <p className="text-xs text-slate-500 font-medium">{label}</p>
    </div>
  );
}
