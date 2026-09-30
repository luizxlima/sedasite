import type { Metadata } from "next";
import CourseLayout from "@/app/components/CourseLayout";

export const metadata: Metadata = {
  title: "Trinity ISE | SEDA College",
  description: "Prepare for Trinity College London Integrated Skills in English (ISE) exams at SEDA College, a recognised exam centre.",
};

export default function TrinityISEPage() {
  return (
    <CourseLayout
      title="Trinity ISE"
      imageSrc="/images/about-us.jpg"
      imageAlt="Students studying for Trinity ISE exams"
      sidebarProps={{
        levels: "All levels",
        hours: "15 hours",
        campuses: "Dublin & Cork",
        timetable: "Morning or Afternoon",
      }}
    >
      {/* TODO: Content could not be recovered from old site export. Review this factual placeholder. */}
      <p>
        The Integrated Skills in English (ISE) exams by Trinity College London are internationally recognised qualifications that assess your ability to interact in English in an authentic and meaningful way. The qualifications are regulated by Ofqual in England.
      </p>

      <h2>Who is this course for?</h2>
      <p>
        Trinity ISE is ideal for students who want a communicative exam that focuses on real-life English skills, and is commonly used for visa renewals and university applications in Ireland. SEDA College is a recognised exam centre for Trinity ISE.
      </p>

      <h2>How SEDA prepares you</h2>
      <p>
        Our preparation classes integrate seamlessly with your General English study. We focus on the specific tasks required for both the Reading &amp; Writing module and the Speaking &amp; Listening module. You will practice portfolio building, collaborative conversation, and presentation skills to build your confidence ahead of the test.
      </p>

      <h2>Exam Fees</h2>
      <p>
        See our Fees page for current exam fees.
      </p>
    </CourseLayout>
  );
}
