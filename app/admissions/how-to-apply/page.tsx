import type { Metadata } from "next";
import AdmissionsLayout from "@/app/components/AdmissionsLayout";

export const metadata: Metadata = {
  title: "How to Apply | SEDA College",
  description: "Learn how to apply to SEDA College directly or through an agent.",
};

export default function HowToApplyPage() {
  return (
    <AdmissionsLayout title="How To Apply">
      <p>
        You can apply to SEDA through a local agent in your country, or directly to the school. We’ll be happy to help you step out of your comfort zone and become part of this unforgettable experience!
      </p>

      <p>
        If you want to apply directly to the school, email us at <a href="mailto:info@seda.ie">info@seda.ie</a> or call us on <a href="tel:+35314734915">+353 1 473 4915</a>.
      </p>

      <p>
        Some students wishing to study in Ireland require a study visa, others do not. All EU students can study in Ireland without a study visa. Other non-EU students may need a study visa.
      </p>

      <p>
        We always have someone here in the school who can help you get all the paperwork ready for your visit to the immigration office.
      </p>

      <p>
        SEDA can arrange for someone to pick you up at the airport and take you directly to your accommodation.
      </p>

      <p>
        Once you have completed your level test, you will receive an email informing you of when your class will start, your level, and your class number. Students always start their course on a Monday.
      </p>
    </AdmissionsLayout>
  );
}
