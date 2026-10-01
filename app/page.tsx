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
            Learn from experienced professionals
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
                  Trinity CertTESOL
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
          </div>

          <div className="space-y-20">
            {/* Dublin Campus */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/location.jpg"
                  alt="SEDA College Dublin location"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-seda-teal mb-2">SEDA Dublin</h2>
                <h3 className="text-xl font-medium text-seda-orange mb-6">Established in 2009</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our Dublin campus is a purpose-built college located in the heart of Dublin city centre, with 36 classrooms and dedicated spaces for learning and student support. The campus brings together students from around the world, creating a truly international learning community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Studying at SEDA Dublin gives students the opportunity to develop their English while experiencing life in Ireland's capital city, with the city's shops, cafés, cultural attractions and transport links all close by.
                </p>
              </div>
            </div>

            {/* Cork Campus */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-black text-seda-teal mb-2">SEDA Cork</h2>
                <h3 className="text-xl font-medium text-seda-orange mb-6">Opened in 2023</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our Cork campus offers stunning views of the historic city centre and features 20 classrooms, combining the character of its heritage surroundings with contemporary learning spaces.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Located in one of Ireland's most welcoming and vibrant cities, SEDA Cork provides a friendly and supportive environment for students from around the world. Students can develop their English, meet people from different cultures and experience life in Cork while studying in a modern learning environment.
                </p>
              </div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="/images/about-us.jpg"
                  alt="SEDA College Cork location"
                  fill
                  className="object-cover"
                />
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
