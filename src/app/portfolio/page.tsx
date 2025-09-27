import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-4 text-lg">Here are some of my featured projects:</p>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/portfolio/project-one" className="text-blue-600 hover:underline">
            Project One
          </Link>
        </li>
      </ul>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
