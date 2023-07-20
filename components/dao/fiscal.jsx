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
            	Consultoría Fiscal
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
              Nuestro equipo de consultoría fiscal presta servicios sofisticados, con una visión clara de los aspectos financieros y legales que puedan impactar a  los negocios de nuestros clientes.
            </p>
            <p className="dark:text-jacarta-300">
              Nuestra visión es completamente integral y evalúa los aspectos financieros y legales de todos los asuntos que afectan al cliente. Esto se traduce directamente en un manejo multidisciplinario de cada caso que nos es encomendado, para prestar un servicio “a la medida” y proporcionar un valor agregado tangible a nuestros clientes. Asimismo, nuestro equipo fiscal se destaca por su integración total en las áreas de consultoría y de litigio, donde sus miembros prestan servicios legales integrales.
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- end intro -->
  );
};

export default Fiscal;
