import Image from "next/image";
import TradeVolume from "./TradeVolume";

const Fiscal = () => {
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
              Comercio exterior y aduanas
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
              Asesoramos a nuestros clientes para expandirse más allá de las fronteras en un marco de certeza jurídica
            </p>
            <p className="dark:text-jacarta-300">
            Nuestro equipo profesional tiene experiencia desempeñándose tanto en el sector público, como en la práctica privada, y adicionalmente experiencia profesional en la legislación doméstica en materia de comercio exterior y las fuentes de derecho internacional aplicables en la materia, incluyendo los tratados de libre comercio (TLC) y los acuerdos de la OMC suscritos por México. Esto nos permite tener una visión exhaustiva y panorámica para asistir con una mayor calidad a nuestros clientes.
            </p>

            <p className="dark:text-jacarta-300">
            Lo que hace único a nuestro equipo profesional es el dominio de esta práctica desde la perspectiva doméstica, regional e internacional. 
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- end intro -->
  );
};

export default Fiscal;
