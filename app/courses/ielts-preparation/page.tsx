import type { Metadata } from "next";

export const metadata: Metadata = { title: "IELTS Preparation" };

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-md border-t-4 border-seda-primary p-10">
        <h1 className="text-4xl font-bold text-seda-teal mb-6">IELTS Preparation</h1>
        <p className="text-lg text-gray-600">
          Prepare for the IELTS exam with our expert-led preparation course. Content coming soon.
        </p>
      </div>
    </section>
  );
}
