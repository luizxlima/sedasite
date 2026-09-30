import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CourseLayoutProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  sidebarProps: {
    levels: string;
    hours: string;
    campuses: string;
    timetable: string;
  };
}

export default function CourseLayout({
  title,
  imageSrc,
  imageAlt,
  children,
  sidebarProps,
}: CourseLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Small Hero Strip */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-seda-teal/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full mt-12 md:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-md">
            {title}
          </h1>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 prose prose-lg prose-headings:text-seda-teal prose-a:text-seda-primary hover:prose-a:text-seda-orange max-w-none text-gray-700">
              {children}
            </div>

            {/* Sidebar: At a glance */}
            <div className="lg:w-1/3">
              <div className="bg-seda-bg rounded-2xl shadow-lg p-8 border-t-4 border-seda-primary sticky top-24">
                <h3 className="text-2xl font-bold text-seda-teal mb-6">At a glance</h3>
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Levels</span>
                    <span className="text-lg text-gray-800 font-medium">{sidebarProps.levels}</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Hours per week</span>
                    <span className="text-lg text-gray-800 font-medium">{sidebarProps.hours}</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Campuses</span>
                    <span className="text-lg text-gray-800 font-medium">{sidebarProps.campuses}</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Timetable</span>
                    <span className="text-lg text-gray-800 font-medium">{sidebarProps.timetable}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow CTA Band */}
      <section className="bg-seda-primary py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
          <h2 className="text-2xl md:text-3xl font-black text-seda-teal m-0">
            Ready to start?
          </h2>
          <Link
            href="/contact-us"
            className="inline-block bg-seda-teal text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-seda-teal transition-all text-lg shadow-md"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
