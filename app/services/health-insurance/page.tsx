import type { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";

export const metadata: Metadata = {
  title: "Health Insurance | SEDA College",
  description: "Health insurance covers your medical costs should you require treatment or emergency care while studying in Ireland. Learn about the requirements for international students.",
};

export default function Page() {
  return (
    <PageLayout title="Health Insurance" imageSrc="/images/staff-students.jpg" imageAlt="Health Insurance">
<h2>HEALTH INSURANCE</h2>

<p>All non-EU/EEA students are required to have appropriate medical insurance for the duration of their stay in Ireland. This coverage is designed to protect students in the event of a medical emergency or hospital stay, ensuring that unexpected healthcare costs are managed during their studies.</p>

<p>What is health insurance?</p>

<p>⇒ Health insurance covers your medical costs should you require treatment or emergency care while studying in Ireland. It ensures you have access to necessary healthcare without the burden of high out-of-pocket expenses.</p>

<p>Do I need health insurance?</p>

<p>Non-EU/EEA Students:</p>

<p>⇒ It is a legal requirement for your student visa and your Irish Residence Permit (IRP) registration. You must provide proof of a government-approved private medical insurance policy that covers you for the entire duration of your stay. Without this, your permission to remain in Ireland will not be granted.</p>

<p>EU/EEA & Swiss Students:</p>

<p>⇒ You are entitled to public healthcare if you have a European Health Insurance Card (EHIC). This allows you to access public healthcare at the same rate as an Irish resident.</p>

<p>Important Note: Public healthcare is not always free. A standard GP (doctor) visit in Ireland currently costs between €60 and €75.</p>

<p>What is health insurance?</p>

<p>⇒ Health insurance covers your medical costs should you require treatment or emergency care while studying in Ireland. It ensures you have access to necessary healthcare without the burden of high out-of-pocket expenses.</p>

<p>Do I need health insurance?</p>

<p>Non-EU/EEA Students:</p>

<p>⇒ It is a legal requirement for your student visa and your Irish Residence Permit (IRP) registration. You must provide proof of a government-approved private medical insurance policy that covers you for the entire duration of your stay. Without this, your permission to remain in Ireland will not be granted.</p>

<p>EU/EEA & Swiss Students:</p>

<p>⇒ You are entitled to public healthcare if you have a European Health Insurance Card (EHIC). This allows you to access public healthcare at the same rate as an Irish resident.</p>

<p>Important Note: Public healthcare is not always free. A standard GP (doctor) visit in Ireland currently costs between €60 and €75.</p>

<h3>General English</h3>

<p>Study and Work in Ireland</p>
    </PageLayout>
  );
}
