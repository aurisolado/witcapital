import React, { useEffect, useState } from "react";
import Benifits from "../../components/dao/Benifits";
import Intro from "../../components/dao/Intro";
import Participate from "../../components/dao/Participate";
import NewseLatter2 from "../../components/dao/newseLatter2";
import { Partners } from "../../components/component";
import Hero_9 from "../../components/hero/hero_9";
import Hero_7 from "../../components/hero/hero_7";
import Hero_bus from "../../components/hero/hero_bus";
import Meta from "../../components/Meta";
import TrustedPartner from "../../components/dao/TrustedPartner";
import Promo from "../../components/promo/promo";
import LaboralAssistance from "../../components/promo/laboralAssistance";
import BancaAndFinan from "../../components/promo/bancarioAndFinancial";
import Fiscal from "../../components/dao/fiscal";
import Fiscal2 from "../../components/dao/fiscal2";
import CallToActionsGeneral from "../../components/ico-landing/CallToActionsGeneral";
import Cta from "../../components/cta/cta";
import International from "../../components/dao/international";

const Home_9 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="Home 9" />
      <Hero_bus />
      <LaboralAssistance />
      <BancaAndFinan />
      <Fiscal />
      <Fiscal2 />
      <International />
      {/* <Partners /> */}
      {/* <Intro />
      <Benifits />
      <Participate /> 
      <TrustedPartner />*/}
      <Cta />
    </>
  );
};

export default Home_9;
