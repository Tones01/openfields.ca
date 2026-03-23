import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1b2a] text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-sm bg-[#52b788] flex items-center justify-center">
              <span className="text-[#0d1b2a] font-black text-xs leading-none">OF</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">
              Open Fields Distribution
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Prairie-native cannabis logistics serving Saskatchewan and Manitoba.
          </p>
        </div>

        {/* Provinces */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Provinces
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/provinces/saskatchewan" className="hover:text-white transition-colors">Saskatchewan</Link></li>
            <li><Link href="/provinces/manitoba" className="hover:text-white transition-colors">Manitoba</Link></li>
          </ul>
        </div>

        {/* Partners */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Work With Us
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/lp-partners" className="hover:text-white transition-colors">LP Partners</Link></li>
            <li><Link href="/retailers" className="hover:text-white transition-colors">Retailers</Link></li>
            <li><Link href="/lp-partners#inquiry" className="hover:text-white transition-colors">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Resources
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
            <li><Link href="/insights#reports" className="hover:text-white transition-colors">Market Reports</Link></li>
            <li><Link href="/insights#guides" className="hover:text-white transition-colors">Regulatory Guides</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <p>© {year} Open Fields Distribution Inc. All rights reserved.</p>
        <p>
          Cannabis products are for adults 19+. Please consume responsibly.
        </p>
      </div>
    </footer>
  );
}
