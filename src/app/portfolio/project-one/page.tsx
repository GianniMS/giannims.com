import Link from 'next/link';

export default function ProjectOnePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Project One</h1>
      <p className="mt-4 text-lg">
        This project showcases my ability to build performant, scalable applications using Next.js and modern frontend technologies.
      </p>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
