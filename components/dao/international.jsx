import Image from "next/image";
import TradeVolume from "./TradeVolume";

const International = () => {
  return (
    // <!-- Intro -->
    <section className="bg-gradient-to-r from-[transparent_33%] to-[#F5F8FA_33%] py-36 dark:to-[#101436_33%]">
      <div className="container">
        <div className="lg:flex lg:justify-between">
          {/* <!-- Image --> */}
          <div className="relative lg:w-[45%]">
            <figure className="relative">
              <img
                src="https://ruvicia.com/wp-content/uploads/2022/03/consultoria-fiscal-v2-min.jpg"
                className="rounded-2.5xl"
                alt="web protocol"
              />
            </figure>
          </div>

          {/* <!-- Info --> */}
          <div className="py-10 lg:w-[55%] lg:pl-24">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
              Consultoría Internacional
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
              Planifique sus compañías offshore y su operativa bancaria internacional
            </p>
            <p className="dark:text-jacarta-300">
            Las sociedades offshore se acogen a regulaciones legales y fiscales muy favorables. Conozca la jurisdicción que mejor se adapte a sus necesidades y déjese recomendar por nuestro grupo multidisciplinario de abogados.
            </p>

            <p className="dark:text-jacarta-300">
            Una cuenta offshore es una cuenta bancaria ubicada en una de las muchas entidades bancarias situadas fuera del país de residencia del titular de la cuenta.

            </p>

            <p className="dark:text-jacarta-300 py-10">
            “Entendemos a las empresas de e-commerce.” <br />
“Diseña el futuro, actúa en el presente”


            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- end intro -->
  );
};

export default International;
