import './styles/globals.css';
import type { Metadata } from 'next';
import Header from './../../components/Header';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A portfolio site built with Next.js 14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body>
        <Header />
        <main className="pt-32">{children}</main>
      </body>
    </html>
  );
}
