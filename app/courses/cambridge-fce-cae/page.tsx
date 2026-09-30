import type { Metadata } from "next";
import CourseLayout from "@/app/components/CourseLayout";

export const metadata: Metadata = {
  title: "Cambridge FCE / CAE | SEDA College",
  description: "Preparation for Cambridge English qualifications including B2 First (FCE) and C1 Advanced (CAE).",
};

export default function CambridgeFCECAEPage() {
  return (
    <CourseLayout
      title="Cambridge FCE / CAE"
      imageSrc="/images/location.jpg"
      imageAlt="Students studying for Cambridge exams"
      sidebarProps={{
        levels: "Upper-Intermediate to Advanced",
        hours: "15 hours",
        campuses: "Dublin & Cork",
        timetable: "Morning or Afternoon",
      }}
    >
      {/* TODO: Content could not be recovered from old site export. Review this factual placeholder. */}
      <p>
        Cambridge English qualifications are among the most respected English language exams globally. We offer dedicated preparation for B2 First (formerly FCE) and C1 Advanced (formerly CAE).
      </p>

      <h2>Who is this course for?</h2>
      <p>
        This course is for students who want to prove their English language ability for university admission or to future employers with an internationally recognised qualification that does not expire. You need an Upper-Intermediate (B2) level to start FCE preparation and an Advanced (C1) level to start CAE preparation.
      </p>

      <h2>How SEDA prepares you</h2>
      <p>
        Our Cambridge exam preparation courses provide rigorous training in all five papers: Reading, Writing, Use of English, Listening, and Speaking. We use official preparation materials and conduct regular mock exams to ensure you are familiar with the timing and format of the test, while developing the advanced grammar and vocabulary required to pass.
      </p>

      <h2>Exam Fees</h2>
      <p>
        See our Fees page for current exam fees.
      </p>
    </CourseLayout>
  );
}
