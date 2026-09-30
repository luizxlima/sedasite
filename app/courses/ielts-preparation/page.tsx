import type { Metadata } from "next";
import CourseLayout from "@/app/components/CourseLayout";

export const metadata: Metadata = {
  title: "IELTS Preparation | SEDA College",
  description: "Prepare for the IELTS exam at SEDA College. Focused preparation to help you achieve your required band score for study, work or migration.",
};

export default function IELTSPreparationPage() {
  return (
    <CourseLayout
      title="IELTS Preparation"
      imageSrc="/images/classroom.jpg"
      imageAlt="Students studying for the IELTS exam"
      sidebarProps={{
        levels: "Intermediate and above",
        hours: "15 hours",
        campuses: "Dublin & Cork",
        timetable: "Morning or Afternoon",
      }}
    >
      {/* TODO: Content could not be recovered from old site export. Review this factual placeholder. */}
      <p>
        The International English Language Testing System (IELTS) is one of the world&apos;s most popular English language proficiency tests for higher education and global migration.
      </p>

      <h2>Who is this course for?</h2>
      <p>
        This course is designed for students who need to achieve a specific IELTS band score for university admission, professional registration, or visa applications. It is suitable for learners at an Intermediate level (CEFR B1) or above.
      </p>

      <h2>How SEDA prepares you</h2>
      <p>
        Our IELTS preparation course focuses on the four key skills assessed in the exam: Listening, Reading, Writing, and Speaking. You will familiarise yourself with the test format, learn specific exam techniques, and practice with past papers. Our experienced teachers provide regular feedback to help you target areas for improvement and maximize your potential score.
      </p>

      <h2>Exam Fees</h2>
      <p>
        See our Fees page for current exam fees.
      </p>
    </CourseLayout>
  );
}
