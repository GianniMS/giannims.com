import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">Explore my skills and projects below.</p>

      <div className="mt-6 space-x-4">
        <Link
          href="/skills"
          className="text-blue-600 hover:underline text-lg"
        >
          View Skills
        </Link>
        <Link
          href="/portfolio"
          className="text-blue-600 hover:underline text-lg"
        >
          View Portfolio
        </Link>
      </div>
    </main>
  );
}
