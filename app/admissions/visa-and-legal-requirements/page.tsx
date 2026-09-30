import type { Metadata } from "next";
import AdmissionsLayout from "@/app/components/AdmissionsLayout";

export const metadata: Metadata = {
  title: "Visa and Legal Requirements | SEDA College",
  description: "Information regarding visa and legal requirements for EU and non-EU students to study in Ireland.",
};

export default function VisaLegalRequirementsPage() {
  return (
    <AdmissionsLayout title="Visa and Legal Requirements">
      <p>
        SEDA College will support you in your visa application process. We will provide all the information and assistance you need to go through this process in the best way. Read the information about visa and legal requirements to plan your study experience in Ireland.
      </p>

      <h2>EU Students</h2>
      <p>
        EU students do not need any special visa to study in Ireland. Students from countries that do not need a visa to enter Ireland can study on a course of up to 90 days without getting a student visa.
      </p>

      <h2>Non-EU Students</h2>
      <p>
        NON-EU students who wish to study in Ireland for longer than 90 days will need to get a student visa to cover the duration of their stay in Ireland. In many cases, you can get your student visa after you arrive in Ireland. You will need to have an enrolment letter when you enter the country and state your intention to study when you arrive.
      </p>
    </AdmissionsLayout>
  );
}
