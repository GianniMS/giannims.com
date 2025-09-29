import Header from '@/components/Header';
import './styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Home | Getting the Undeniable Seen</title>
        <meta name="description" content="Landing page" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
