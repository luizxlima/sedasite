import type { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";

export const metadata: Metadata = {
  title: "About Us | SEDA College",
  description: "Learn more about About Us at SEDA College.",
};

export default function Page() {
  return (
    <PageLayout title="About Us" imageSrc="/images/about-us.jpg" imageAlt="About Us">
<h2>SEDA COLLEGE</h2>

<p>SEDA College has been delivering English language courses in the centre of Dublin since 2009. Everyone who works at SEDA is passionate and committed: they love what they do! We are ready to provide the ultimate exchange experience! SEDA College occupies a campus on Capel Street in Dublin alongside our Cork campus at Clarkes Bridge House. Across both locations, we are proud to host a diverse student body from across Latin America, Europe, and Asia, providing a truly international and multicultural learning environment.</p>

<h2>Our Mission and Values</h2>

<h3>Our Mission</h3>

<p>At SEDA, we are committed to providing high-quality, learner-centred English language education that enables students to communicate effectively, succeed academically and professionally, and participate confidently in a global society. Our programmes are aligned with the CEFR and international standards and are delivered in inclusive, supportive and academically rigorous learning environments. We develop learners' communicative competence, critical thinking and autonomy through structured programmes, ongoing teacher development, academic support, and effective assessment and feedback. We are committed to continuous improvement through reflective teaching, academic governance and stakeholder feedback, while providing the student support and welfare structures that help every learner make the most of their experience at SEDA.</p>

<h3>Our Values</h3>

<p>At SEDA, our work is guided by a commitment to quality, learner-centred education and continuous improvement. We maintain high standards in teaching, learning and assessment, while designing programmes that respond to our students' needs, goals and progression pathways. We value equality, diversity and inclusion and strive to create a welcoming environment where every learner is respected and supported. Professional integrity and accountability guide the way we work, with transparent and responsible practices across the organisation. We also believe in collaboration, actively engaging students, staff and management in quality assurance and improvement. Through ongoing monitoring, reflection and feedback, we continually look for ways to enhance the learning experience and the services we provide.</p>

<h2>Our Team and Methodology</h2>

<h3>Our Team</h3>

<p>Our teaching staff are specialists in their fields, and we are investing in exciting new technology to ensure that we will be the leading name in training and learning in Ireland. Everyone who works at SEDA is committed to making it a supportive and friendly place to learn. You will find inspiration and support here, as well as an excellent education.</p>



<h3>Our Methodology</h3>

<p>At SEDA College , we encourage our students to be active, involved learners. Our teaching-learning process is designed to support lifelong learning, providing extensive opportunities for students and our academic team to interact as a cooperative community. We believe in learning from one another, fostering a truly collaborative educational environment where every individual contributes to our shared success.</p>

<h3>Teacher Training</h3>

<p>SEDA College is a recognised teacher training centre for Trinity College London. This ensures high standards of teaching, strong learner engagement, and the use of up-to-date, effective teaching methodologies.</p>

<p>As part of our training programmes, trainee teachers may occasionally teach classes under the close supervision of a highly qualified teacher trainer. All lessons are carefully planned, approved in advance, and supported throughout to ensure a high-quality learning experience.</p>
    </PageLayout>
  );
}
