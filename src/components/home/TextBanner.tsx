interface TextBannerProps {
  text: string;
}

export default function TextBanner({ text }: TextBannerProps) {
  return (
    <div
      className="
        absolute 
        top-[22%]
        sm:top-[26%]
        md:top-[30%]
        lg:top-[37%]
        xl:top-[40%]

        left-[20px]
        sm:left-[80px]
        md:left-[120px]
        lg:left-[135px]
        xl:left-[110px]

        w-[300px]
        sm:w-[400px]
        md:w-[500px]
        lg:w-[600px]
        xl:w-[800px]

        -translate-y-1/2
        z-10
        flex items-center
        pointer-events-none
      "
    >
      <h1
        className="
          text-chi-purple
          font-proxima
          text-start
          text-[40px]
          sm:text-[45px]
          md:text-[60px]
          lg:text-[75px]
          xl:text-[95px]
        "
      >
        {text}
      </h1>
    </div>
  );
}
