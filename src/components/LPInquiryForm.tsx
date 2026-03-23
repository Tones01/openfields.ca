"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function LPInquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [markets, setMarkets] = useState<string[]>([]);

  function toggleMarket(m: string) {
    setMarkets((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // Simulate async submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-[#52b788]/10 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-[#52b788]" />
        </div>
        <h3 className="text-xl font-bold">Inquiry received!</h3>
        <p className="text-slate-600 max-w-xs">
          Thanks for reaching out. A member of our team will be in touch within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
            First name <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            name="firstName"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#52b788]/40 focus:border-[#52b788]"
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
            Last name <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            name="lastName"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#52b788]/40 focus:border-[#52b788]"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
          Company / LP name <span className="text-red-400">*</span>
        </label>
        <input
          required
          type="text"
          name="company"
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#52b788]/40 focus:border-[#52b788]"
          placeholder="Acme Cannabis Inc."
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          required
          type="email"
          name="email"
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#52b788]/40 focus:border-[#52b788]"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#52b788]/40 focus:border-[#52b788]"
          placeholder="+1 (306) 555-0100"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
          Target markets <span className="text-red-400">*</span>
        </label>
        <div className="flex gap-3 flex-wrap">
          {["Saskatchewan", "Manitoba", "Both"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => toggleMarket(m)}
              className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                markets.includes(m)
                  ? "bg-[#52b788] border-[#52b788] text-[#0d1b2a] font-semibold"
                  : "border-slate-200 text-slate-700 hover:border-[#52b788]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <input type="hidden" name="markets" value={markets.join(",")} />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
          Number of active SKUs
        </label>
        <select
          name="skuCount"
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#52b788]/40 focus:border-[#52b788] bg-white"
        >
          <option value="">Select range</option>
          <option value="1-5">1–5</option>
          <option value="6-15">6–15</option>
          <option value="16-30">16–30</option>
          <option value="30+">30+</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
          Tell us about your products
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#52b788]/40 focus:border-[#52b788] resize-none"
          placeholder="Categories, formats, brands, current distribution, any other context..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting" || markets.length === 0}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#52b788] text-[#0d1b2a] font-semibold text-sm rounded-lg hover:bg-[#40916c] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending…" : "Submit Inquiry"}
        {state !== "submitting" && <ArrowRight className="w-4 h-4" />}
      </button>
      <p className="text-xs text-slate-400 text-center">
        We typically respond within one business day.
      </p>
    </form>
  );
}
