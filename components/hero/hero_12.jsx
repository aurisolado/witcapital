import Link from "next/link";

const hero_12 = () => {
  return (
    <section className="relative h-screen">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
        <img src="/images/gradient.jpg" alt="gradient" />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img src="/images/gradient_dark.jpg" alt="gradient dark" />
      </picture>

      <picture className="pointer-events-none absolute inset-y-0 right-6 -z-10 hidden items-center justify-end md:flex xl:right-[10%]">
        <img
          src="/images/ico-landing/pngegg.png"
          alt="hero"
          className="w-3/4 xxl:w-auto"
        />
      </picture>

      <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start lg:py-20">
            <p className="mb-5 inline-block bg-gradient-to-r from-[#F43771] to-[#FF9567] bg-clip-text text-lg text-transparent">
              Cambio de divisas
            </p>
            <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
              Más que un servicio, es una experiencia.
            </h1>
            <div className="flex space-x-4">
              <Link href="/#">
                <a className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                  Comenzar
                </a>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero_12;
