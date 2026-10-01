This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Redirects

The following redirects from the old WordPress URLs must be maintained. A `vercel.json` file is provided for Vercel deployments. Note that Vercel handles trailing-slash variants automatically. If you deploy to Firebase Hosting, this same map must be added to `firebase.json`.

- `/general-english` → `/courses/general-english`
- `/certtesol` → `/courses/certtesol`
- `/ielts` → `/courses/ielts-preparation`
- `/trinity-ise` → `/courses/trinity-ise`
- `/fce` → `/courses/cambridge-fce-cae`
- `/pet` → `/courses/cambridge-fce-cae`
- `/how-to-apply` → `/admissions/how-to-apply`
- `/entry-requirements` → `/admissions/how-to-apply`
- `/visa-and-legal-requirements` → `/admissions/visa-and-legal-requirements`
- `/refund-policy` → `/admissions/refund-policy`
- `/terms-conditions` → `/admissions/terms-and-conditions`
- `/accommodation` → `/services/accommodation`
- `/health-insurance` → `/services/health-insurance`
- `/social-activities` → `/services/social-activities`
- `/first-day-induction` → `/services/first-day-induction`
- `/team` → `/about-us`
- `/notice-board` → `/`