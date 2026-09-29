import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter is bundled with Next.js; no external fetch needed at build time.
// Swap to Poppins once the deployment environment has internet access.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: "SEDA College", template: "%s | SEDA College" },
  description: "English language school in Dublin and Cork, Ireland.",
};

const coursesLinks = [
  { href: "/courses/general-english", label: "General English" },
  { href: "/courses/ielts-preparation", label: "IELTS Preparation" },
  { href: "/courses/certtesol", label: "CertTESOL" },
  { href: "/courses/trinity-ise", label: "Trinity ISE" },
  { href: "/courses/cambridge-fce-cae", label: "Cambridge FCE / CAE" },
];

const admissionsLinks = [
  { href: "/admissions/how-to-apply", label: "How to Apply" },
  { href: "/admissions/entry-requirements", label: "Entry Requirements" },
  { href: "/admissions/visa-and-legal-requirements", label: "Visa & Legal Requirements" },
  { href: "/admissions/fees", label: "Fees" },
  { href: "/admissions/refund-policy", label: "Refund Policy" },
  { href: "/admissions/terms-and-conditions", label: "Terms & Conditions" },
];

const servicesLinks = [
  { href: "/services/accommodation", label: "Accommodation" },
  { href: "/services/health-insurance", label: "Health Insurance" },
  { href: "/services/social-activities", label: "Social Activities" },
  { href: "/services/first-day-induction", label: "First Day Induction" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-seda-teal">
        {/* ── Top bar ─────────────────────────────────────────────── */}
        <div className="bg-seda-teal text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
            <div className="flex gap-5">
              <a href="tel:+35314734915" className="hover:text-seda-primary transition-colors">
                📞 +353 1 473 4915
              </a>
              <a href="mailto:info@seda.ie" className="hover:text-seda-primary transition-colors">
                ✉ info@seda.ie
              </a>
            </div>
            <div className="flex gap-3 text-base" aria-label="Social media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-seda-primary transition-colors">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-seda-primary transition-colors">ig</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-seda-primary transition-colors">in</a>
            </div>
          </div>
        </div>

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo placeholder */}
            <a href="/" className="flex items-center gap-2 font-bold text-xl text-seda-teal">
              <span className="bg-seda-primary text-seda-teal font-black px-2 py-1 rounded">SEDA</span>
              <span>College</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 font-medium text-seda-teal" aria-label="Main navigation">
              <a href="/" className="hover:text-seda-orange transition-colors">Home</a>
              <a href="/about-us" className="hover:text-seda-orange transition-colors">About Us</a>

              {/* Courses dropdown */}
              <div className="group relative">
                <button className="flex items-center gap-1 hover:text-seda-orange transition-colors cursor-pointer">
                  Courses <span className="text-xs">▾</span>
                </button>
                <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white shadow-xl border border-gray-100 rounded-xl w-52 py-2 z-20">
                  {coursesLinks.map((l) => (
                    <a key={l.href} href={l.href} className="px-4 py-2 hover:bg-gray-50 hover:text-seda-orange transition-colors text-sm">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Admissions dropdown */}
              <div className="group relative">
                <button className="flex items-center gap-1 hover:text-seda-orange transition-colors cursor-pointer">
                  Admissions <span className="text-xs">▾</span>
                </button>
                <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white shadow-xl border border-gray-100 rounded-xl w-56 py-2 z-20">
                  {admissionsLinks.map((l) => (
                    <a key={l.href} href={l.href} className="px-4 py-2 hover:bg-gray-50 hover:text-seda-orange transition-colors text-sm">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services dropdown */}
              <div className="group relative">
                <button className="flex items-center gap-1 hover:text-seda-orange transition-colors cursor-pointer">
                  Services <span className="text-xs">▾</span>
                </button>
                <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white shadow-xl border border-gray-100 rounded-xl w-52 py-2 z-20">
                  {servicesLinks.map((l) => (
                    <a key={l.href} href={l.href} className="px-4 py-2 hover:bg-gray-50 hover:text-seda-orange transition-colors text-sm">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/contact-us" className="bg-seda-primary text-seda-teal font-semibold px-4 py-2 rounded-full hover:bg-seda-orange hover:text-white transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Mobile hamburger — pure HTML/CSS toggle via checkbox */}
            <label htmlFor="mobile-menu-toggle" className="md:hidden cursor-pointer p-2 text-seda-teal" aria-label="Open menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </label>
          </div>

          {/* Mobile menu (checkbox-driven, no JS required) */}
          <input type="checkbox" id="mobile-menu-toggle" className="hidden peer/menu" />
          <nav className="hidden peer-checked/menu:block md:hidden bg-white border-t border-gray-100 px-4 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1 text-seda-teal font-medium">
              <a href="/" className="py-2 hover:text-seda-orange transition-colors">Home</a>
              <a href="/about-us" className="py-2 hover:text-seda-orange transition-colors">About Us</a>
              <p className="py-1 text-xs uppercase tracking-widest text-gray-400 mt-2">Courses</p>
              {coursesLinks.map((l) => (
                <a key={l.href} href={l.href} className="py-1.5 pl-3 text-sm hover:text-seda-orange transition-colors">{l.label}</a>
              ))}
              <p className="py-1 text-xs uppercase tracking-widest text-gray-400 mt-2">Admissions</p>
              {admissionsLinks.map((l) => (
                <a key={l.href} href={l.href} className="py-1.5 pl-3 text-sm hover:text-seda-orange transition-colors">{l.label}</a>
              ))}
              <p className="py-1 text-xs uppercase tracking-widest text-gray-400 mt-2">Services</p>
              {servicesLinks.map((l) => (
                <a key={l.href} href={l.href} className="py-1.5 pl-3 text-sm hover:text-seda-orange transition-colors">{l.label}</a>
              ))}
              <a href="/contact-us" className="mt-3 bg-seda-primary text-seda-teal font-semibold text-center py-2 rounded-full hover:bg-seda-orange hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </nav>
        </header>

        {/* ── Page content ────────────────────────────────────────── */}
        <main className="flex-grow">{children}</main>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <footer className="bg-seda-teal text-white">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="text-seda-primary font-black text-xl mb-3">SEDA College</div>
              <address className="not-italic text-sm text-gray-300 leading-relaxed">
                68–72 Capel Street<br />
                Rotunda, Dublin 1<br />
                Ireland
              </address>
              <div className="mt-4 flex flex-col gap-1 text-sm">
                <a href="tel:+35314734915" className="text-gray-300 hover:text-seda-primary transition-colors">+353 1 473 4915</a>
                <a href="mailto:info@seda.ie" className="text-gray-300 hover:text-seda-primary transition-colors">info@seda.ie</a>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-seda-primary font-semibold mb-3 uppercase text-xs tracking-widest">Courses</h3>
              <ul className="space-y-1.5 text-sm">
                {coursesLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-gray-300 hover:text-seda-primary transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h3 className="text-seda-primary font-semibold mb-3 uppercase text-xs tracking-widest">Admissions</h3>
              <ul className="space-y-1.5 text-sm">
                {admissionsLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-gray-300 hover:text-seda-primary transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-seda-primary font-semibold mb-3 uppercase text-xs tracking-widest">Quick Links</h3>
              <ul className="space-y-1.5 text-sm">
                <li><a href="/about-us" className="text-gray-300 hover:text-seda-primary transition-colors">About Us</a></li>
                {servicesLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-gray-300 hover:text-seda-primary transition-colors">{l.label}</a></li>
                ))}
                <li><a href="/contact-us" className="text-gray-300 hover:text-seda-primary transition-colors">Contact Us</a></li>
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-seda-primary transition-colors">Privacy Policy</a></li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-seda-primary hover:text-seda-teal transition-colors text-xs font-bold">f</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-seda-primary hover:text-seda-teal transition-colors text-xs font-bold">ig</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-seda-primary hover:text-seda-teal transition-colors text-xs font-bold">in</a>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="border-t border-white/10 py-4 text-center text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} SEDA College. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
