import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const BancaAndFinan = () => {
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
                            Bancario y Financiero
						</h2>
						<p className="text-lg dark:text-jacarta-300">
                        Wit Capital maximiza la generación de valor a través de una combinación estratégica de experiencia y un profundo entendimiento de los negocios de nuestros clientes.
						</p>
					</div>
                    <div className="lg:flex lg:justify-between">
                        

                        {/* <!-- Info --> */}
                        <div className="py-10 lg:w-[50%] lg:pr-28">
                        
                            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                                Los socios de esta práctica proporcionan asesoría regulatoria y transaccional a Instituciones de Tecnología Financiera (Fintech), sociedades financieras de objeto múltiple (SOFOMS), fideicomisos de inversión en bienes raíces (FIBRAs), fideicomisos públicos (CKDs), entre otras.
                            </p>

                            <p className="mb-8 leading-normal dark:text-jacarta-300">
                                Nuestros líderes de práctica cuentan con una comprensión amplia de las transacciones, reestructuraciones crediticias, ofertas de valores estructurados y respaldados por activos, operaciones de deuda y capital y en licitaciones públicas. Además, el departamento bancario y financiero se enriquece con la práctica de fusiones y adquisiciones, con énfasis en transacciones de capital privado, reestructuraciones corporativas, financiamiento mezzanine y mercados de capital.
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

export default BancaAndFinan;
