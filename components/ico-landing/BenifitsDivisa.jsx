import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const BenifitsDivisas = () => {
  const singleBenifits = [
    {
      id: 1,
      icon: "w1",
      title: "El mejor tipo de cambio",
      text: `Nuestra experiencia en el mercado nos permite garantizarte los mejores precios que puedas encontrar.`,
    },
    {
      id: 2,
      icon: "w2",
      title: "La mejor atención",
      text: `Nuestro personal está altamente capacitado para brindarte la mejor atención y seguridad`,
    },
    {
      id: 3,
      icon: "w3",
      title: "Marco regulatorio",
      text: `Contamos con las debidas concesiones necesarias ante las autoridades como la CNBV con el número de registro #341234.`,
    },
  ];
  return (
    <>
      <section className="py-24 dark:bg-jacarta-900 benifit-section">
        <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Propuesta de valor
          </h2>
          <p className="text-lg dark:text-jacarta-300 text-jacarta-800">
            Para nosotros el cliente siempre es primero, y buscamos por todos los medios necesario generar no solo un servicio, crear una experiencia en todo el proceso.
          </p>
        </div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              565: {
                slidesPerView: 2,
              },
              995: {
                slidesPerView: 3,
              },
            }}
            className="!pt-10"
          >
            {singleBenifits.map((item) => {
              const { id, icon, title, text } = item;
              return (
                <SwiperSlide className="text-white overflow-visible" key={id}>
                  <div
                    className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700"
                    key={id}
                  >
                    <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                      <img
                        src={`/images/crypto-app/${icon}.svg`}
                        alt="icon"
                        width="24"
                        height="24"
                        className="h-12 w-12"
                      />
                    </div>

                    <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                      {title}
                    </h3>
                    <p className="dark:text-jacarta-300 text-jacarta-700">
                      {text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BenifitsDivisas;
