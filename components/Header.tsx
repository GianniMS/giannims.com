'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex items-center justify-between max-w-[1728px] w-full">
        {/* Logo Image with Link to Home */}
        <div className="pl-[40px] pt-[20px]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Menu Icon */}
        <div className="pr-[40px] pt-[20px]">
          <span
            className="material-symbols-outlined text-chi-purple cursor-pointer"
            style={{
              fontSize: '40px',
              fontVariationSettings: "'OPSZ' 40"
            }}
          >
            menu
          </span>
        </div>
      </div>
    </header>
  );
}
