import Link from "next/link";

const CallToActionsDivisas = () => {
  const calltoActionContent = {
    title: "Descubre como ganar con divisas",
    text: `Descubra cómo funcionan las divisas específicas y obtenga toda la información que necesita.`,
    btnText: "Comienza ahora",
  };
  return (
    <div className="container">
      <div className="relative z-10 overflow-hidden rounded-2.5xl px-16 py-24 lg:px-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 h-[150%] dark:hidden">
          <img
            src="/images/gradient.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <picture className="pointer-events-none absolute inset-0 -z-10 hidden h-[150%] dark:block">
          <img
            src="/images/gradient_dark.jpg"
            alt="gradient dark"
            className="h-full w-full"
          />
        </picture>
        
        {/* End images */}

        <div className="lg:flex lg:justify-between">
          <div className="mb-6 max-w-lg lg:mb-0">
            <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
              {calltoActionContent.title}
            </h2>
            <p className="text-lg leading-normal dark:text-jacarta-300">
              {calltoActionContent.text}
            </p>
          </div>
          <Link href="/contact">
            <a
              className="inline-block self-center rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              {calltoActionContent.btnText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionsDivisas;
