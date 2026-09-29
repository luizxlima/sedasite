import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home" };

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-seda-teal mb-6">
        Welcome to <span className="text-seda-orange">SEDA College</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        This is a placeholder for the SEDA College home page. Content will be migrated
        from the WordPress export in the next phase of development.
      </p>
    </section>
  );
}
