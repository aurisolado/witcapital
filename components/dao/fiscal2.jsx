import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Fiscal2 = () => {
    const [videoModal, setvideoModal] = useState(false);
    const [url, setUrl] = useState(null);
    return (
        <>
            {/* <!-- Promo --> */}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img
                        src="/images/gradient_light.jpg"
                        alt="gradient"
                        className="h-full w-full"
                    />
                </picture>
                <div className="container">
                    <div className="mx-auto mb-12 max-w-xl text-center">
						<h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Consultoría Fiscal 
						</h2>
						<p className="text-lg dark:text-jacarta-300">
            Nuestro equipo de Consultoría Fiscal presta servicios en transacciones sofisticadas y complejas, con una visión clara de los aspectos financieros y legales que puedan impactar a  los negocios de nuestros clientes.
						</p>

            <p className="dark:text-jacarta-300 py-10">
              Nuestra visión es completamente integral y evalúa los aspectos financieros y legales de todos los asuntos que afectan al cliente. Esto se traduce directamente en un manejo multidisciplinario de cada caso que nos es encomendado, para prestar un servicio “a la medida” y proporcionar un valor agregado tangible a nuestros clientes. Asimismo, nuestro equipo fiscal se destaca por su integración total en las áreas de consultoría y de litigio, donde sus miembros prestan servicios legales integrales.

  Nuestra práctica fiscal es reconocida por sus altos conocimientos técnicos e innovadora visión de negocios.

            </p>
					</div>
                    <div className="lg:flex lg:justify-between">
                        

                        {/* <!-- Info --> */}
                        <div className="py-10 lg:w-[50%] lg:pr-28">
                        
                            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                                Los socios de esta Práctica proporcionan asesoría regulatoria y transaccional a bancos, Instituciones de Tecnología Financiera (Fintech), sociedades financieras de objeto múltiple (SOFOMS), fideicomisos de inversión en bienes raíces (FIBRAs), fideicomisos públicos (CKDs), compañías aseguradoras, empresas de corretaje interbancario y administradoras de fondos de ahorro para el retiro (AFORES), entre otras.
                            </p>

                            
                        </div>

                        <div className="py-10 lg:w-[50%] lg:pr-28">
                        
                        <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                        Los servicios que ofrecemos están enfocados en planeación y consultoría fiscal, tanto en transacciones domésticas como transfronterizas para una amplia gama de industrias, así como en apoyar a nuestros clientes a interactuar con las autoridades tributarias y brindarles estrategias de litigio sólidas.
                        </p>

                        
                    </div>
                    

                        {/* <!-- Image --> */}
                        <div className="relative lg:w-[50%] ">
                            <img
                                src="/images/patterns/pattern_circle_1.png"
                                className="absolute -bottom-4 -left-8 animate-fly dark:opacity-10"
                                alt=""
                            />
                            <img
                                src="/images/patterns/pattern_circle_2.png"
                                className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
                                alt=""
                            />
                            <div className="flex items-center space-x-7 pt-20">
                                <figure className="relative">
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/sintec-uploads/wp-content/uploads/2019/03/28171405/Banca-Servicios-Financieros-y-Seguros-II.jpg"
                                        className="rounded-3xl"
                                        alt=""
                                    />
                                </figure>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end promo --> */}

            {/* <!-- YouTube Video Modal --> */}
            <div
                className={
                    videoModal
                        ? "modal lightbox fade show block"
                        : "modal lightbox fade"
                }
            >
                <div className="modal-dialog modal-dialog-centered modal-xl w-full">
                    <div className="modal-content border-0 bg-transparent">
                        <div className="modal-body p-0 relative">
                            <button
                                onClick={() => {
                                    setvideoModal(false);
                                    setUrl(null);
                                }}
                                type="button"
                                className="btn-close position-absolute top-0 end-0 p-3 z-10"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#fff"
                                    className="h-6 w-6"
                                >
                                    <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
                                </svg>
                            </button>
                            <div
                                id="lightboxCarousel-d7ewe4ig"
                                className="lightbox-carousel carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="position-absolute top-50 start-50 translate-middle text-white">
                                            <div
                                                className="spinner-border"
                                                role="status"
                                            ></div>
                                        </div>
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src={url}
                                                title="YouTube video player"
                                                allow="accelerometer clipboard-write encrypted-media gyroscope picture-in-picture autoplay"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fiscal2;
