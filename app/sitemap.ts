export const dynamic = "force-static";

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/privacy-policy',
    '/courses/general-english',
    '/courses/ielts-preparation',
    '/courses/certtesol',
    '/courses/trinity-ise',
    '/courses/cambridge-fce-cae',
    '/admissions/how-to-apply',
    '/admissions/visa-and-legal-requirements',
    '/admissions/fees',
    '/admissions/refund-policy',
    '/admissions/terms-and-conditions',
    '/services/accommodation',
    '/services/health-insurance',
    '/services/social-activities',
    '/services/first-day-induction',
  ];

  return routes.map((route) => ({
    url: `https://seda.college${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
