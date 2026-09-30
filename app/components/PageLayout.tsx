import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface PageLayoutProps {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  children: ReactNode;
}

export default function PageLayout({ title, imageSrc, imageAlt, children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-seda-bg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-seda-primary">
          {imageSrc && (
            <div className="relative w-full h-64 md:h-80">
              <Image src={imageSrc} alt={imageAlt || title} fill className="object-cover" />
            </div>
          )}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-black text-seda-teal mb-8 border-b-2 border-gray-100 pb-6">
              {title}
            </h1>
            <div className="prose prose-lg prose-headings:text-seda-teal prose-a:text-seda-primary hover:prose-a:text-seda-orange max-w-none text-gray-700">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
