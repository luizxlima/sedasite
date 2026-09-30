import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEDA College – English School in Dublin & Cork",
  description:
    "English courses for all levels in Dublin and Cork, with a communicative method, regular assessment and real support from day one.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 1. Hero Section ───────────────────────────────────────── */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Students at SEDA College"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark-teal overlay */}
          <div className="absolute inset-0 bg-seda-teal/80 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white mt-10">
          <span className="inline-block text-seda-primary font-bold tracking-widest uppercase text-sm md:text-base mb-4">
            Learn with the professionals
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            Live Your Dream — <br className="hidden sm:block" />
            Study English in Ireland
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 text-gray-100">
            English courses for all levels in Dublin and Cork, with a communicative method,
            regular assessment and real support from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/courses/general-english"
              className="w-full sm:w-auto bg-seda-primary text-seda-teal font-bold px-8 py-4 rounded-full hover:bg-seda-orange hover:text-white transition-all text-lg shadow-lg"
            >
              Our Courses
            </Link>
            <Link
              href="/contact-us"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-seda-teal transition-all text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Courses Grid ───────────────────────────────────────── */}
      <section className="py-20 bg-seda-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-seda-teal mb-4">Our Courses</h2>
            <div className="w-24 h-1 bg-seda-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* General English */}
            <Link href="/courses/general-english" className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border-t-4 border-seda-primary h-full flex flex-col">
                <h3 className="text-xl font-bold text-seda-teal mb-3 group-hover:text-seda-orange transition-colors">
                  General English
                </h3>
                <p className="text-gray-600 flex-grow mb-6 leading-relaxed">
                  All levels from Beginner to Advanced, morning or afternoon, 15 hours per week
                </p>
                <div className="text-seda-teal font-semibold flex items-center gap-2 group-hover:text-seda-orange transition-colors">
                  Learn more <span className="text-xl">→</span>
                </div>
              </div>
            </Link>

            {/* IELTS Preparation */}
            <Link href="/courses/ielts-preparation" className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border-t-4 border-seda-primary h-full flex flex-col">
                <h3 className="text-xl font-bold text-seda-teal mb-3 group-hover:text-seda-orange transition-colors">
                  IELTS Preparation
                </h3>
                <p className="text-gray-600 flex-grow mb-6 leading-relaxed">
                  Focused preparation for the IELTS exam
                </p>
                <div className="text-seda-teal font-semibold flex items-center gap-2 group-hover:text-seda-orange transition-colors">
                  Learn more <span className="text-xl">→</span>
                </div>
              </div>
            </Link>

            {/* CertTESOL */}
            <Link href="/courses/certtesol" className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border-t-4 border-seda-primary h-full flex flex-col">
                <h3 className="text-xl font-bold text-seda-teal mb-3 group-hover:text-seda-orange transition-colors">
                  CertTESOL
                </h3>
                <p className="text-gray-600 flex-grow mb-6 leading-relaxed">
                  Trinity College London teacher-training certificate, 130 contact hours
                </p>
                <div className="text-seda-teal font-semibold flex items-center gap-2 group-hover:text-seda-orange transition-colors">
                  Learn more <span className="text-xl">→</span>
                </div>
              </div>
            </Link>

            {/* Trinity ISE */}
            <Link href="/courses/trinity-ise" className="group md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border-t-4 border-seda-primary h-full flex flex-col">
                <h3 className="text-xl font-bold text-seda-teal mb-3 group-hover:text-seda-orange transition-colors">
                  Trinity ISE
                </h3>
                <p className="text-gray-600 flex-grow mb-6 leading-relaxed">
                  Integrated Skills in English exams — we are a recognised exam centre
                </p>
                <div className="text-seda-teal font-semibold flex items-center gap-2 group-hover:text-seda-orange transition-colors">
                  Learn more <span className="text-xl">→</span>
                </div>
              </div>
            </Link>

            {/* Cambridge FCE / CAE */}
            <Link href="/courses/cambridge-fce-cae" className="group md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border-t-4 border-seda-primary h-full flex flex-col">
                <h3 className="text-xl font-bold text-seda-teal mb-3 group-hover:text-seda-orange transition-colors">
                  Cambridge FCE / CAE
                </h3>
                <p className="text-gray-600 flex-grow mb-6 leading-relaxed">
                  Preparation for Cambridge English qualifications
                </p>
                <div className="text-seda-teal font-semibold flex items-center gap-2 group-hover:text-seda-orange transition-colors">
                  Learn more <span className="text-xl">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Why SEDA ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/why-seda.jpg"
                alt="Students studying at SEDA College"
                fill
                className="object-cover"
              />
            </div>
            {/* List Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-seda-teal mb-4">Why SEDA?</h2>
              <div className="w-16 h-1 bg-seda-primary rounded-full mb-8" />
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-seda-primary/20 text-seda-teal flex items-center justify-center font-bold">✓</span>
                  <span className="text-lg text-gray-700 pt-1">qualified and experienced teachers</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-seda-primary/20 text-seda-teal flex items-center justify-center font-bold">✓</span>
                  <span className="text-lg text-gray-700 pt-1">structured levels from A1 to C1 (CEFR)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-seda-primary/20 text-seda-teal flex items-center justify-center font-bold">✓</span>
                  <span className="text-lg text-gray-700 pt-1">regular assessment with feedback</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-seda-primary/20 text-seda-teal flex items-center justify-center font-bold">✓</span>
                  <span className="text-lg text-gray-700 pt-1">welcoming international community</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-seda-primary/20 text-seda-teal flex items-center justify-center font-bold">✓</span>
                  <span className="text-lg text-gray-700 pt-1">central locations in Dublin and Cork</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-seda-primary/20 text-seda-teal flex items-center justify-center font-bold">✓</span>
                  <span className="text-lg text-gray-700 pt-1">support with accommodation, insurance and first steps in Ireland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Campuses ───────────────────────────────────────────── */}
      <section className="py-20 bg-seda-bg border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-seda-teal mb-4">Our Campuses</h2>
            <div className="w-24 h-1 bg-seda-primary mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Study right in the heart of two of Ireland&apos;s most vibrant cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dublin Campus */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/location.jpg"
                  alt="SEDA College Dublin location"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center border-t-4 border-seda-teal flex-grow">
                <h3 className="text-2xl font-bold text-seda-teal mb-3">Dublin</h3>
                <p className="text-gray-600">
                  68–72 Capel Street<br />
                  Rotunda, Dublin 1
                </p>
              </div>
            </div>

            {/* Cork Campus */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/about-us.jpg"
                  alt="SEDA College Cork location"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center border-t-4 border-seda-orange flex-grow">
                <h3 className="text-2xl font-bold text-seda-teal mb-3">Cork</h3>
                <p className="text-gray-600">
                  Cork city centre
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA Band ───────────────────────────────────────────── */}
      <section className="bg-seda-primary py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-seda-teal mb-8">
            Ready to start your journey?
          </h2>
          <Link
            href="/contact-us"
            className="inline-block bg-seda-teal text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-seda-teal transition-all text-lg shadow-lg"
          >
            Get a Quick Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
