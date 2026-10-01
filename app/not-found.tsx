import Link from 'next/link';
import PageLayout from '@/app/components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout title="Page not found">
      <div className="text-center py-10">
        <p className="text-xl mb-10 text-gray-700">
          The page you are looking for doesn't exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-seda-teal text-white font-bold px-8 py-3 rounded-full hover:bg-seda-orange transition-all shadow-md"
          >
            Go to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-seda-teal font-bold px-8 py-3 rounded-full border-2 border-seda-teal hover:bg-seda-teal hover:text-white transition-all shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
