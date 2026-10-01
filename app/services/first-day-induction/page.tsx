import type { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";

export const metadata: Metadata = {
  title: "First Day Induction | SEDA College",
  description: "Join our Campus Welcome & Tour before your course begins to explore our facilities, meet the team, and get settled in.",
};

export default function Page() {
  return (
    <PageLayout title="First Day Induction" imageSrc="/images/hero.jpg" imageAlt="First Day Induction">
<h2>FIRST DAY INDUCTION</h2>

<p>You will have your induction day before you start your course. This day introduces you to SEDA, rules, and visa tips, followed by a fantastic and useful free walking tour around Dublin City Centre.</p>

<h3>Held on the Friday before your course begins.</h3>

<ul>
  <li>Campus Welcome & Tour: Take a guided tour of the school to explore our facilities and get settled in before your first day.</li>
  <li>Essential Orientation: We will walk you through the school rules, coursebooks, exams, and important attendance policies (including Irish government regulations).</li>
  <li>Final Level Assessment: Complete your speaking placement test to ensure you are placed in the perfect class for your level.</li>
  <li>Your Personal Schedule: You will receive an email confirming your English level, teacher’s name, classroom, and full timetable (including your course start and end dates).</li>
</ul>

<ul>
  <li>1 - We’ll show you around the school and inform you of the facilities available (returning students will have already done this).</li>
  <li>2 - You’ll meet the Director of Studies.</li>
  <li>3 - You’ll meet the ADOS, who will give a short presentation about the College.</li>
  <li>4 - We’ll tell you about the school rules.</li>
  <li>5 - We’ll email you a copy of the student handbook.</li>
  <li>6 - You’ll learn about our Health & Safety Policy.</li>
  <li>7 - We’ll tell you the rules and policies we have for attendance (the Irish government has rules about this, too).</li>
  <li>8 - You’ll meet the student liaison officer and someone in the school who speaks your first language. We have people at SEDA who speak Spanish, Russian, French, Portuguese, Bengali, Italian, and Irish.</li>
  <li>9 - You will do a speaking placement test.</li>
  <li>10 - You will be notified by email of your level, class time, teacher, and the name of your classroom. Please ensure we have your correct email address.</li>
  <li>11 - We’ll give you the timetable for your class and tell you when your course will start and should finish.</li>
  <li>12 - We’ll tell you the date of your final IELTS or Cambridge exam.</li>
  <li>13 - You will be shown where you can buy your New English File Course Book.</li>
</ul>
    </PageLayout>
  );
}
