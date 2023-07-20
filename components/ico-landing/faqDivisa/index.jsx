import Faq from "./Faq";

const index = () => {
  return (
    <section className="bg-light-base py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            ¿Sabes los beneficios de las divisas?
          </h2>
          <p className="text-lg dark:text-jacarta-300 text-jacarta-800">
            Nosotros nos dedicamos al servicio de compra y venta de las más importantes divisas y criptomonedas del mundo, cumpliendo con los más altos estándares de ética profesional, transparencia y normativas vigentes.
          </p>
        </div>
        <div className="lg:flex lg:flex-nowrap">
          <div className="lg:w-[59%]">
            <figure className="relative mb-8 overflow-hidden rounded-3xl">
              <img
                src="/images/ico-landing/ico_landing_promo.png"
                alt="icon landing"
              />
            </figure>
          </div>
          <div className="lg:w-[41%] lg:pl-24">
            <p className="mt-10 mb-5 dark:text-jacarta-300">
            El cambio de divisas, también conocido como forex o FX (Foreign Exchange), ofrece una serie de beneficios a diferentes actores del mercado financiero. Aquí tienes cinco puntos clave sobre los beneficios del cambio de divisas:
            </p>
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
