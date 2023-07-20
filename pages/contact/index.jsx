import React from "react";
import ImageTitle from "../../components/imageTitle";
import Meta from "../../components/Meta";
import ContactForm from "../../components/contact/ContactForm";
import Address from "../../components/contact/address";

const Contact = () => {
  const bgImage = "https://xhibiter-nextjs.netlify.app/images/page-title/knowledge_base_banner.jpg";

  return (
    <div>
      <Meta title="Contact || Wit Capital | Asesoría de vanguardia Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        <ImageTitle text="Ponte en contacto con nosotros" image={bgImage} />

        {/* <!-- Contact --> */}
        <section className="dark:bg-jacarta-800 relative py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <div className="lg:flex">
              {/* <!-- Contact Form --> */}
              <div className="mb-12 lg:mb-0 lg:w-2/3 lg:pr-12">
                <h2 className="font-display text-jacarta-700 mb-4 text-xl dark:text-white">
                  Contáctanos
                </h2>
                <p className="dark:text-jacarta-300 mb-16 text-lg leading-normal">
                  {
                    " ¿Tienes alguna pregunta? ¿Quieres saber más sobre nosotros? ¡No dudes en ponerte en contacto con nosotros!"
                  }
                </p>

                <ContactForm />
              </div>

              {/* <!-- Info --> */}
              <Address />
            </div>
          </div>
        </section>
        {/* <!-- end contact --> */}
      </div>
    </div>
  );
};

export default Contact;
