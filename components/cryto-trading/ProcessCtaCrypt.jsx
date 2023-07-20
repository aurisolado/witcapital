import CallToActions from "./CallToActions";
import SingleProcessBlock from "./SingleProcessBlock";

const ProcessCtaCrypt = () => {
  return (
    <>
      {/* <!-- Process / CTA --> */}
      <section className="py-24 dark:bg-jacarta-800">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Comience en unos minutos
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              Admite una variedad de las monedas digitales más populares.
            </p>
          </div>
          {/* End mx-auto */}

          

          <CallToActions />
        </div>
      </section>
      {/* <!-- end process / cta -->  */}
    </>
  );
};

export default ProcessCtaCrypt;
