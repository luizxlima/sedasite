"use client";

import { useState } from "react";
import { WEBHOOK_URL } from "@/lib/config";

export default function QuickQuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const website = formData.get("website") as string;
    
    // Honeypot check
    if (website) {
      // Silently succeed for bots
      setStatus("success");
      e.currentTarget.reset();
      return;
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      tel: formData.get("tel"),
      country: formData.get("country"),
      message: formData.get("message"),
      source: "seda-site",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-seda-primary">
      <h2 className="text-2xl font-black text-seda-teal mb-6">Quick Quotation</h2>

      {status === "success" ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg font-medium">
          Thank you! We will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field - hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name *</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-seda-primary focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-seda-primary focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="tel" className="block text-sm font-bold text-gray-700 mb-1">Tel *</label>
            <input type="tel" id="tel" name="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-seda-primary focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-bold text-gray-700 mb-1">Country *</label>
            <select id="country" name="country" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-seda-primary focus:border-transparent bg-white">
              <option value="">Select a country...</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Spain">Spain</option>
              <option value="Italy">Italy</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="Turkey">Turkey</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message (optional)</label>
            <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-seda-primary focus:border-transparent"></textarea>
          </div>

          {status === "error" && (
            <div className="bg-red-50 text-red-800 p-4 rounded-lg font-medium text-sm">
              Something went wrong. Please email us at <a href="mailto:info@seda.ie" className="underline">info@seda.ie</a>.
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full bg-seda-primary text-seda-teal font-bold py-3 px-6 rounded-full hover:bg-seda-orange hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-md"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
