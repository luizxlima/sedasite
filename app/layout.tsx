import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SEDA College",
  description: "English language school in Dublin and Cork, Ireland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col`}>
        {/* Top bar */}
        <div className="bg-seda-teal text-white text-sm py-2 px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>+353 1 473 4915</span>
            <span>info@seda.ie</span>
          </div>
          <div className="flex gap-3">
            {/* Social Icons Placeholder */}
            <span>[FB]</span>
            <span>[IG]</span>
            <span>[IN]</span>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          <div className="text-2xl font-bold text-seda-teal">SEDA Logo</div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-medium text-seda-teal items-center">
            <a href="/" className="hover:text-seda-orange">Home</a>
            <a href="/about-us" className="hover:text-seda-orange">About Us</a>
            <div className="group relative">
              <span className="cursor-pointer hover:text-seda-orange">Courses ▾</span>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-2 top-full w-48 z-10">
                <a href="/courses/general-english" className="p-2 hover:bg-gray-100">General English</a>
                <a href="/courses/ielts-preparation" className="p-2 hover:bg-gray-100">IELTS Preparation</a>
                <a href="/courses/certtesol" className="p-2 hover:bg-gray-100">CertTESOL</a>
                <a href="/courses/trinity-ise" className="p-2 hover:bg-gray-100">Trinity ISE</a>
                <a href="/courses/cambridge-fce-cae" className="p-2 hover:bg-gray-100">Cambridge FCE/CAE</a>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer hover:text-seda-orange">Admissions ▾</span>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-2 top-full w-48 z-10">
                <a href="/admissions/how-to-apply" className="p-2 hover:bg-gray-100">How to Apply</a>
                <a href="/admissions/entry-requirements" className="p-2 hover:bg-gray-100">Entry Requirements</a>
                <a href="/admissions/visa-and-legal-requirements" className="p-2 hover:bg-gray-100">Visa & Legal</a>
                <a href="/admissions/fees" className="p-2 hover:bg-gray-100">Fees</a>
                <a href="/admissions/refund-policy" className="p-2 hover:bg-gray-100">Refund Policy</a>
                <a href="/admissions/terms-and-conditions" className="p-2 hover:bg-gray-100">T&Cs</a>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer hover:text-seda-orange">Services ▾</span>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-2 top-full w-48 z-10">
                <a href="/services/accommodation" className="p-2 hover:bg-gray-100">Accommodation</a>
                <a href="/services/health-insurance" className="p-2 hover:bg-gray-100">Health Insurance</a>
                <a href="/services/social-activities" className="p-2 hover:bg-gray-100">Social Activities</a>
                <a href="/services/first-day-induction" className="p-2 hover:bg-gray-100">First Day Induction</a>
              </div>
            </div>
            <a href="/contact-us" className="hover:text-seda-orange">Contact Us</a>
          </nav>
          {/* Mobile Menu Button Placeholder */}
          <button className="md:hidden text-seda-teal font-bold p-2">MENU</button>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-seda-teal text-white py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-seda-primary">SEDA College</h3>
              <p>68–72 Capel Street<br/>Rotunda, Dublin 1</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-seda-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about-us" className="hover:text-seda-orange">About Us</a></li>
                <li><a href="/courses/general-english" className="hover:text-seda-orange">Courses</a></li>
                <li><a href="/contact-us" className="hover:text-seda-orange">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-seda-orange">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-seda-primary">Follow Us</h3>
              <div className="flex gap-4">
                <span>[FB]</span>
                <span>[IG]</span>
                <span>[IN]</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-600 pt-4 text-sm text-gray-300">
            &copy; {new Date().getFullYear()} SEDA College. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
