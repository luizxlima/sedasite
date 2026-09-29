import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
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
    <html lang="en" className={poppins.variable}>
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
            <div className="flex items-center gap-3" aria-label="Social media">
              <a
                href="https://www.facebook.com/sedacollege"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-seda-primary transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sedacollege"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-seda-primary transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/sedacollege"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-seda-primary transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/school/seda-college"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-seda-primary transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo placeholder */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-seda-teal">
              <span className="bg-seda-primary text-seda-teal font-black px-2 py-1 rounded">SEDA</span>
              <span>College</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 font-medium text-seda-teal" aria-label="Main navigation">
              <Link href="/" className="hover:text-seda-orange transition-colors">Home</Link>
              <Link href="/about-us" className="hover:text-seda-orange transition-colors">About Us</Link>

              {/* Courses dropdown */}
              <div className="group relative">
                <button className="flex items-center gap-1 hover:text-seda-orange transition-colors cursor-pointer">
                  Courses <span className="text-xs">▾</span>
                </button>
                <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white shadow-xl border border-gray-100 rounded-xl w-52 py-2 z-20">
                  {coursesLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="px-4 py-2 hover:bg-gray-50 hover:text-seda-orange transition-colors text-sm"
                    >
                      {l.label}
                    </Link>
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
                    <Link
                      key={l.href}
                      href={l.href}
                      className="px-4 py-2 hover:bg-gray-50 hover:text-seda-orange transition-colors text-sm"
                    >
                      {l.label}
                    </Link>
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
                    <Link
                      key={l.href}
                      href={l.href}
                      className="px-4 py-2 hover:bg-gray-50 hover:text-seda-orange transition-colors text-sm"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact-us"
                className="bg-seda-primary text-seda-teal font-semibold px-4 py-2 rounded-full hover:bg-seda-orange hover:text-white transition-colors"
              >
                Contact Us
              </Link>
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
              <Link href="/" className="py-2 hover:text-seda-orange transition-colors">Home</Link>
              <Link href="/about-us" className="py-2 hover:text-seda-orange transition-colors">About Us</Link>
              <p className="py-1 text-xs uppercase tracking-widest text-gray-400 mt-2">Courses</p>
              {coursesLinks.map((l) => (
                <Link key={l.href} href={l.href} className="py-1.5 pl-3 text-sm hover:text-seda-orange transition-colors">{l.label}</Link>
              ))}
              <p className="py-1 text-xs uppercase tracking-widest text-gray-400 mt-2">Admissions</p>
              {admissionsLinks.map((l) => (
                <Link key={l.href} href={l.href} className="py-1.5 pl-3 text-sm hover:text-seda-orange transition-colors">{l.label}</Link>
              ))}
              <p className="py-1 text-xs uppercase tracking-widest text-gray-400 mt-2">Services</p>
              {servicesLinks.map((l) => (
                <Link key={l.href} href={l.href} className="py-1.5 pl-3 text-sm hover:text-seda-orange transition-colors">{l.label}</Link>
              ))}
              <Link
                href="/contact-us"
                className="mt-3 bg-seda-primary text-seda-teal font-semibold text-center py-2 rounded-full hover:bg-seda-orange hover:text-white transition-colors"
              >
                Contact Us
              </Link>
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
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-300 hover:text-seda-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h3 className="text-seda-primary font-semibold mb-3 uppercase text-xs tracking-widest">Admissions</h3>
              <ul className="space-y-1.5 text-sm">
                {admissionsLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-300 hover:text-seda-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-seda-primary font-semibold mb-3 uppercase text-xs tracking-widest">Quick Links</h3>
              <ul className="space-y-1.5 text-sm">
                <li><Link href="/about-us" className="text-gray-300 hover:text-seda-primary transition-colors">About Us</Link></li>
                {servicesLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-300 hover:text-seda-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li><Link href="/contact-us" className="text-gray-300 hover:text-seda-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-300 hover:text-seda-primary transition-colors">Privacy Policy</Link></li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/sedacollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-seda-primary hover:text-seda-teal transition-colors text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sedacollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-seda-primary hover:text-seda-teal transition-colors text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/sedacollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-seda-primary hover:text-seda-teal transition-colors text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/school/seda-college"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-seda-primary hover:text-seda-teal transition-colors text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                  </svg>
                </a>
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
