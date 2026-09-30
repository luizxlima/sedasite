import type { Metadata } from "next";
import CourseLayout from "@/app/components/CourseLayout";

export const metadata: Metadata = {
  title: "General English | SEDA College",
  description: "General English courses at all levels: Beginner to Advanced (CEFR A1 to C1). 15 hours of tuition per week, morning or afternoon, in Dublin and Cork.",
};

export default function GeneralEnglishPage() {
  return (
    <CourseLayout
      title="General English"
      imageSrc="/images/classroom.jpg"
      imageAlt="Students studying General English in a SEDA College classroom"
      sidebarProps={{
        levels: "A1 to C1 (CEFR)",
        hours: "15 hours",
        campuses: "Dublin & Cork",
        timetable: "Morning or Afternoon",
      }}
    >
      <p>
        SEDA College runs General English courses at all levels: Beginner, Elementary, Pre-Intermediate, Intermediate, Upper-Intermediate and Advanced (CEFR A1 to C1). 15 hours of tuition per week, morning or afternoon, in Dublin and Cork.
      </p>

      <p>
        Our curriculum helps you improve all aspects of the language using a variety of materials and activities. You track your progress through weekly assessments with immediate feedback, followed by a comprehensive progress test every six weeks to make sure you are ready to move to the next level.
      </p>

      <h2>Methodology</h2>
      <p>
        Collaborative learning built on Communicative Language Teaching, focused on real-world interaction.
      </p>

      <h2>Quality</h2>
      <p>
        Courses follow the CEFR framework and are delivered by qualified teachers, with regular assessment to guarantee your progress.
      </p>

      <h2>Level placement</h2>
      <p>
        Before your Friday induction you complete a placement test in advance; after a short speaking assessment during the induction your level is confirmed and your final timetable issued, ready to start on Monday.
      </p>
    </CourseLayout>
  );
}
