'use client';

import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        flex
        items-center
        justify-between
        px-8
        py-8
      "
    >
      <Link href="/" className="pointer-events-auto">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          priority
        />
      </Link>

      <button
        className="pointer-events-auto"
        aria-label="Open menu"
      >
        <MenuIcon className="text-chi-purple" fontSize="large" />
      </button>
    </header>
  );
}
