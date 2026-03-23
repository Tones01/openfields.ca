"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Provinces",
    href: "#",
    children: [
      { label: "Saskatchewan", href: "/provinces/saskatchewan" },
      { label: "Manitoba", href: "/provinces/manitoba" },
    ],
  },
  { label: "LP Partners", href: "/lp-partners" },
  { label: "Retailers", href: "/retailers" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm bg-[#52b788] flex items-center justify-center">
            <span className="text-[#0d1b2a] font-black text-sm leading-none">OF</span>
          </div>
          <span className="text-white font-semibold text-base tracking-tight">
            Open Fields
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-[#0d1b2a] border border-white/10 rounded-lg shadow-xl py-1 min-w-44"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/lp-partners"
            className="px-4 py-2 text-sm font-medium bg-[#52b788] text-[#0d1b2a] rounded-md hover:bg-[#40916c] hover:text-white transition-colors"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1b2a] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-3 mb-1">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-slate-300 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/lp-partners"
            className="mt-4 px-4 py-2.5 text-sm font-medium bg-[#52b788] text-[#0d1b2a] rounded-md text-center hover:bg-[#40916c] hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}
