import Link from 'next/link';

export default function SkillsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Skills</h1>
      <ul className="mt-4 list-disc list-inside text-lg">
        <li>JavaScript / TypeScript</li>
        <li>React / Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>UI/UX Design</li>
      </ul>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
