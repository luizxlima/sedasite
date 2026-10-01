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
        Applying to SEDA is simple. You can apply through one of our local agents in your country or apply directly to the school. Whichever option you choose, our team will guide you through the process and help you prepare for your time in Ireland.
      </p>

      <ol className="list-decimal pl-6 space-y-4 mt-6">
        <li>
          You can apply through one of our local agents or directly to SEDA. If you would like to apply directly, contact us at <a href="mailto:info@seda.ie">info@seda.ie</a> or call us on <a href="tel:+35314734915">+353 1 473 4915</a>.
        </li>
        <li>
          Depending on your nationality and the length of your course, you may need a visa to study in Ireland. EU students do not need a study visa, while some students from outside the EU may need one.
        </li>
        <li>
          Our team can help you understand the documents you need and prepare for your immigration appointment, where applicable. If you need accommodation, we can also help you arrange a place to stay during your time in Ireland.
        </li>
        <li>
          If you would like help getting from the airport to your accommodation, SEDA can arrange an airport transfer for you. A member of our transfer service will meet you at the airport and take you directly to your accommodation.
        </li>
        <li>
          Before starting your course, you will complete an English level test. This allows us to place you in the class that is most suitable for your level. Students start their course on a Monday. On your first day, you will take part in our induction and receive the information you need to settle into life at SEDA. You will meet the team, learn more about the school and your course, and get to know the campus and the services available to you.
        </li>
      </ol>
    </AdmissionsLayout>
  );
}
