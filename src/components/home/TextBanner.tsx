interface TextBannerProps {
  text: string;
}

export default function TextBanner({ text }: TextBannerProps) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-chi-purple font-proxima text-center">
        {text}
      </h1>
    </div>
  );
}
