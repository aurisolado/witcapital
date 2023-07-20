/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const itemContent = [
  {
    id: 1,
    title: " Facilita el comercio internacional",
    descriptions: ` El cambio de divisas permite a las empresas y particulares convertir una moneda a otra, lo que resulta esencial para facilitar el comercio internacional. Los exportadores e importadores pueden realizar transacciones en monedas diferentes y, al utilizar el mercado de divisas, protegerse de las fluctuaciones de los tipos de cambio, garantizando un precio estable y predecible para sus bienes y servicios.`,
  },
  {
    id: 2,
    title: " Oportunidades de inversión y diversificación",
    descriptions: ` El mercado de divisas ofrece a los inversionistas la posibilidad de diversificar sus carteras de inversión. Al operar en diferentes monedas, los inversores pueden aprovechar oportunidades en mercados extranjeros y reducir el riesgo asociado con la concentración en un solo país o moneda.`,
  },
  {
    id: 3,
    title: " Cobertura contra riesgo cambiario",
    descriptions: ` Las empresas que tienen exposición a riesgos cambiarios debido a operaciones en monedas extranjeras pueden utilizar instrumentos financieros derivados, como contratos de futuros o opciones de divisas, para protegerse contra posibles pérdidas causadas por fluctuaciones desfavorables en los tipos de cambio.`,
  },
  {
    id: 4,
    title: " Liquidez y acceso las 24 horas",
    descriptions: ` El mercado de divisas es uno de los mercados financieros más líquidos del mundo. Opera las 24 horas del día, cinco días a la semana, permitiendo a los participantes ejecutar transacciones en cualquier momento, independientemente de la ubicación geográfica. Esto brinda una mayor flexibilidad y capacidad de respuesta a los cambios económicos y políticos que puedan afectar los tipos de cambio.`,
  },
  {
    id: 5,
    title: " Especulación y oportunidades de ganancias",
    descriptions: ` El cambio de divisas también atrae a traders y especuladores que buscan obtener beneficios a través de la fluctuación de los tipos de cambio. A través del análisis técnico y fundamental, los traders intentan predecir las tendencias futuras de las monedas y realizar operaciones que les permitan obtener ganancias en función de las variaciones del mercado.`,
  },
];

const FaqAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {itemContent.map((item) => (
        <Accordion
          className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600 h-auto"
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
            onClick={() => handleOpen(item.id)}
          >
            {item.title}
          </AccordionHeader>
          <div className="hidden-style">
            <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
              {item.descriptions}
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default FaqAccordion;
