import type { Metadata } from "next";
import CourseLayout from "@/app/components/CourseLayout";

export const metadata: Metadata = {
  title: "Trinity CertTESOL | SEDA College",
  description: "Trinity College London CertTESOL fully in-person teacher development programme in Dublin and Cork. 130 contact hours.",
};

export default function CertTESOLPage() {
  return (
    <CourseLayout
      title="Trinity CertTESOL"
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
        Our 5-week, fully in-person programme consists of 130 contact hours and is designed to provide flexibility through an afternoon and evening timetable.
      </p>
      <p>
        The course provides an introduction to teaching English to adults and develops the knowledge, skills and practical experience needed to begin a career as an English language teacher. The CertTESOL is regulated by Ofqual in England, CCEA Regulation in Northern Ireland and Qualifications Wales.
      </p>

      <h2>Course format</h2>
      <p>
        5 weeks, 130 contact hours, fully in person, afternoon and evening timetable.
      </p>

      <h2>Entry criteria</h2>
      <ul>
        <li><strong>Education:</strong> A QQI-recognised Level 7 qualification or equivalent undergraduate degree (note: "A Level 7 qualification or equivalent is normally required to work as an English language teacher in Ireland. Candidates who do not hold a Level 7 qualification may be considered for admission where they can demonstrate relevant experience, skills and aptitude. However, completing the CertTESOL does not in itself meet the qualification requirements for employment as an English language teacher in Ireland.");</li>
        <li><strong>Minimum age:</strong> 18 years old;</li>
        <li><strong>English language proficiency:</strong> C1 level or above ("Candidates whose first language is not English should normally be able to demonstrate CEFR C1 English proficiency.");</li>
        <li><strong>Language awareness:</strong> ability to analyse and explain features of standard English;</li>
        <li><strong>Collaborative working and feedback:</strong> willing to work effectively as part of a group and respond constructively to feedback on their performance;</li>
        <li><strong>Course demands:</strong> potential to manage the demands of both practical teaching and academic study;</li>
        <li><strong>Selection process:</strong> successful completion of a pre-course task and an entrance interview.</li>
      </ul>

      <h2>Course dates</h2>
      <p>
        For current course dates, contact us at <a href="mailto:info@seda.ie">info@seda.ie</a>.
      </p>

      <h2>Fees</h2>
      <p>
        Course fee €1,300, including the Trinity College London moderation fee and the <i>CertTESOL Companion</i> training guide. A non-refundable deposit of €400 is payable on successful completion of the entrance interview. If a place is cancelled fewer than 14 days before the course starts, the full course fee is charged.
      </p>

      <h2>Assessment</h2>
      <p>
        Assessed internally by SEDA College and externally by Trinity College London (certificate classification: pass/fail).
      </p>
      <ul>
        <li>Unit 1 – Teaching Skills: Teaching practice, lesson planning, classroom teaching, reflection on teaching, and observation of experienced teachers. Trainees complete at least 6 hours of supervised teaching practice with real learners.</li>
        <li>Unit 2 – Language Awareness and Skills: Knowledge and understanding of English language systems and skills, including grammar, phonology and language use, assessed through a test.</li>
        <li>Unit 3 – The Learner Profile: Analysis of an individual learner's language needs, including identifying strengths and areas for development and using this information to plan appropriate teaching.</li>
        <li>Unit 4 – Materials Assignment: Ability to identify learners' needs, set appropriate linguistic objectives, design/adapt materials, anticipate difficulties, and explain and evaluate how the materials are used. This unit includes written work and an interview with a Trinity moderator.</li>
        <li>Unit 5 – The Unknown Language: Reflection on the experience of learning an unfamiliar language and what this reveals about the learner experience and the language-learning process.</li>
      </ul>
    </CourseLayout>
  );
}
