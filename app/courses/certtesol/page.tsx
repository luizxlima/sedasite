import type { Metadata } from "next";
import CourseLayout from "@/app/components/CourseLayout";

export const metadata: Metadata = {
  title: "Trinity College London CertTESOL | SEDA College",
  description: "Trinity College London CertTESOL fully in-person teacher development programme in Dublin and Cork. 130 contact hours.",
};

export default function CertTESOLPage() {
  return (
    <CourseLayout
      title="CertTESOL"
      imageSrc="/images/staff-students.jpg"
      imageAlt="Teachers and students at SEDA College"
      sidebarProps={{
        levels: "C1 Minimum",
        hours: "130 contact hours",
        campuses: "Dublin & Cork",
        timetable: "Afternoon and Evening",
      }}
    >
      <p>
        SEDA offers the Trinity College London CertTESOL as a fully in-person teacher development programme in Dublin and Cork. Designed for people with little or no previous teaching experience; provides the essential skills and an internationally recognised initial teacher-training qualification to teach English in Ireland, the UK and overseas. The CertTESOL is regulated by Ofqual in England, CCEA Regulation in Northern Ireland and Qualifications Wales.
      </p>

      <h2>Course format</h2>
      <p>
        5 weeks, 130 contact hours, fully in person, afternoon and evening timetable.
      </p>

      <h2>Entry criteria</h2>
      <ul>
        <li>QQI-recognised Level 7 qualification or equivalent undergraduate degree (candidates without it may join if they show relevant experience, skills and aptitude, but will not comply with Irish employment standards for English teachers)</li>
        <li>Aged over 18</li>
        <li>C1 English proficiency</li>
        <li>Willingness to work within a group and respond constructively to feedback</li>
        <li>Successful completion of a pre-course task and an entrance interview</li>
      </ul>

      <h2>Course dates</h2>
      <p>
        For current course dates, contact us at <a href="mailto:info@seda.ie">info@seda.ie</a>.
      </p>

      <h2>Fees</h2>
      <p>
        Course fee €1,300, including the Trinity College London moderation fee and one course book. A non-refundable deposit of €400 is payable on successful completion of the entrance interview. If a place is cancelled fewer than 14 days before the course starts, the full course fee is charged.
      </p>

      <h2>Assessment</h2>
      <p>
        Assessed internally by SEDA College and externally by Trinity College London (certificate classification: pass/fail; candidates must pass the externally assessed Unit 4 to be awarded the certificate). SEDA also grades Distinction / Merit / Pass / Fail. 
      </p>
      <ul>
        <li>Unit 1 Teaching Skills</li>
        <li>Unit 2 Language awareness including grammar and phonology</li>
        <li>Unit 3 Learner profile</li>
        <li>Unit 4 Materials assignment</li>
        <li>Unit 5 Unknown language</li>
      </ul>
    </CourseLayout>
  );
}
