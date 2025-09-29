'use client';

import Image from 'next/image';

export default function BackgroundLayer() {
  return (
    <div className="absolute inset-0 z-20 overflow-hidden">
          <div
            className="
              relative w-full h-full
              -mt-[20%]
              sm:-mt-[15%]
              md:-mt-[5%]
              lg:-mt-[-5%]
              xl:mt-0
              2xl:mt-0
              transition-all
              duration-500
              ease-in-out
            "
          >
            <Image
              src="/images/chi-base.JPG"
              alt="Background Base"
              fill
              className="
                object-cover
                scale-[1.6]
                md:scale-[1.2]
                lg:scale-[1.2]
                xl:scale-100
                object-[center_60%]
                xl:object-[center_55%]
                transition-transform
                duration-500
                ease-in-out
              "
              priority
              sizes="100vw"
            />
          </div>
        </div>
  );
}
