import type { Metadata } from "next";
import AdmissionsLayout from "@/app/components/AdmissionsLayout";

export const metadata: Metadata = {
  title: "Entry Requirements | SEDA College",
  description: "Entry requirements for English courses and certificate programmes at SEDA College.",
};

export default function EntryRequirementsPage() {
  return (
    <AdmissionsLayout title="Entry Requirements">
      <p>
        Are you planning to study English in Ireland? We would be happy to be part of this incredible experience with you! Check the Entry Requirements and be prepared to make new friends, travel around and live your dreams!
      </p>

      <h2>English Courses</h2>
      <p>
        We offer English classes at all levels from Beginner to Advanced, so the only entry requirements are:
      </p>
      <ul>
        <li>An interest in learning English.</li>
        <li>An interest in learning about another culture.</li>
        <li>The ability to attend all your classes and do a final exam.</li>
      </ul>

      <h2>Certificate Programmes</h2>
      <p>
        If you are interested in certificate programmes, there are some additional requirements:
      </p>
      <ul>
        <li>You must have completed your secondary or high school education and have taken the final exams. You may need to show the school these results.</li>
        <li>A level of English which is B2 or higher. This is equivalent to a pass in the Cambridge First Certificate (FCE) or IELTS 5.0.</li>
        <li>You must be able to study independently for your exams, and attend all your classes.</li>
      </ul>
    </AdmissionsLayout>
  );
}
