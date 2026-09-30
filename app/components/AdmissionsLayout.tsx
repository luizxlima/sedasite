import { ReactNode } from "react";
import Link from "next/link";

interface AdmissionsLayoutProps {
  title: string;
  children: ReactNode;
}

export default function AdmissionsLayout({ title, children }: AdmissionsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-seda-bg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-seda-primary">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-black text-seda-teal mb-8 border-b-2 border-gray-100 pb-6">
              {title}
            </h1>
            <div className="prose prose-lg prose-headings:text-seda-teal prose-a:text-seda-primary hover:prose-a:text-seda-orange max-w-none text-gray-700">
              {children}
            </div>
          </div>
        </div>

        {/* Navigation back to other admissions pages or home */}
        <div className="mt-12 text-center">
          <Link
            href="/contact-us"
            className="inline-block bg-seda-primary text-seda-teal font-bold px-8 py-4 rounded-full hover:bg-seda-orange hover:text-white transition-all text-lg shadow-lg"
          >
            Ready to apply? Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
