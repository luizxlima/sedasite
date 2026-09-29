import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-md border-t-4 border-seda-primary p-10">
        <h1 className="text-4xl font-bold text-seda-teal mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with the SEDA College team. We're happy to help with any enquiry. Contact details and form coming soon.
        </p>
      </div>
    </section>
  );
}
