import BeniftContent from "./BeniftContent";

const Benifits = () => {
  return (
    <>
      {/* <!-- Benefits --> */}
      <section className="py-24 dark:bg-jacarta-900">
        <div className="container">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              ¿Sabes qué son las criptomonedas?
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              Conoce aquí las características de las criptomonedas y cómo puedes sacarles provecho.

            </p>
          </div>
          <BeniftContent />
        </div>
      </section>
      {/* <!-- end benefits --> */}
    </>
  );
};

export default Benifits;
