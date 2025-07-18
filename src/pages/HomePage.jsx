import React from "react";
import HeroPage from "../components/HomePageComponents/HeroPage.jsx";
import ImpactPage from "../components/HomePageComponents/ImpactPage.jsx";
import FeaturedPage from "../components/HomePageComponents/FeaturedPage.jsx";
import PartnershipPage from "../components/HomePageComponents/PartnershipPage.jsx";

function HomePage() {
  return (
    <>
      <HeroPage />
      <ImpactPage />
      <FeaturedPage />
      <PartnershipPage />
    </>
  );
}

export default HomePage;
