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

<p>SEDA College fosters a community of learners that challenges our students to expand their horizons and equip them with the communication skills our globalized world requires.</p>

<h3>Our Values</h3>

<p>Quality is our Core Value. At SEDA, quality is delivered through our dedication and passion for Language and Communication Education.</p>

<p>We guarantee excellence through meticulous attention to detail and operational efficiency, ensuring our procedures and policies remain dynamic rather than static. We believe in “closing the quality loop”— a commitment to continuous evaluation and improvement that ensures the highest standards for every student.</p>

<h2>Our Team and Methodology</h2>

<h3>Our Team</h3>

<p>Our teaching staff are specialists in their fields, and we are investing in exciting new technology to ensure that we will be the leading name in training and learning in Ireland. Everyone who works at SEDA is committed to making it a supportive and friendly place to learn. You will find inspiration and support here, as well as an excellent education.</p>

<p>Our passion for the future is based on solid foundations. Our language learning courses are enhanced by the positive industry relationships we develop with our internship program. SEDA’s aim is to work closely with employers so interns gain the language skills they require to succeed in the real-life workplace.</p>

<h3>Our Methodology</h3>

<p>At SEDA College , we encourage our students to be active, involved learners. Our teaching-learning process is designed to support lifelong learning, providing extensive opportunities for students and our academic team to interact as a cooperative community. We believe in learning from one another, fostering a truly collaborative educational environment where every individual contributes to our shared success.</p>

<h3>Teacher Training</h3>

<p>SEDA College is a recognised teacher training centre for Trinity College London. This ensures high standards of teaching, strong learner engagement, and the use of up-to-date, effective teaching methodologies.</p>

<p>As part of our training programmes, trainee teachers may occasionally teach classes under the close supervision of a highly qualified teacher trainer. All lessons are carefully planned, approved in advance, and supported throughout to ensure a high-quality learning experience.</p>
    </PageLayout>
  );
}
