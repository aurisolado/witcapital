import React, { useEffect } from "react";
import Hero_12 from "../../components/hero/hero_12";
import Meta from "../../components/Meta";
import CryptoPrice from "../../components/cryto-trading/divisasList";
import TrustedPartner from "../../components/dao/TrustedPartner";
import ProSaleBanner from "../../components/ico-landing/ProSaleBanner";
import CallToActions from "../../components/ico-landing/CallToActions";
import Testimonial2 from "../../components/testimonial/Testimonial2";
import RoadMap from "../../components/ico-landing/RoadMap";
import Team from "../../components/ico-landing/Team";
import Faq from "../../components/ico-landing/faqDivisa";
import Benifits from "../../components/ico-landing/Benifits";
import BenifitsDivisas from "../../components/ico-landing/BenifitsDivisa";
import CallToActionsDivisas from "../../components/ico-landing/CallToActionsDivisa";

const Home_12 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="Home 12" />
      <Hero_12 />
      <CryptoPrice />
      {/* <ProSaleBanner />
      <TrustedPartner /> */}
      <Faq />
      <BenifitsDivisas />
      {/* <Team />
      <RoadMap />
      <Testimonial2 /> */}
      <CallToActionsDivisas />
    </>
  );
};

export default Home_12;
