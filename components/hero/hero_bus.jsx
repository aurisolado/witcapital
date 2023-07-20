
import React from 'react';
import { case_studies_data } from '../../data/case-studies_data';
import { Partners } from '../../components/component';
import Link from 'next/link';
import Meta from '../../components/Meta';

const Hero_bus = () => {
  return (
		<div>
			<Meta title="Case_studies || Wit Capital | Asesoría de vanguardia Next.js Template" />
			{/* <!-- Page Title --> */}
			<section className="relative py-32 mt-[95px]">
				<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
					<img src="/images/gradient.jpg" alt="gradient" className="h-full w-full" />
				</picture>
				<picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
					<img src="/images/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
				</picture>
				<div className="container relative z-10">
					<div className="mx-auto max-w-xl text-center">
						<h1 className="mb-6 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                			Business  
						</h1>
						<p className="text-lg leading-normal dark:text-jacarta-200">
							Contamos con las mejores herramientas para que tu negocio crezca de manera exponencial.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero_bus;
