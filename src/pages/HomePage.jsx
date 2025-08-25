import React from "react";
import HeroPage from "../components/HomePageComponents/HeroPage";
import LeadingChange from "../components/HomePageComponents/LeadingChange";
import FeaturedProjects from "../components/HomePageComponents/FeaturedProjects";
import StrategicEngagements from "../components/HomePageComponents/StrategicEngagements";
import LatestArticles from "../components/HomePageComponents/LatestArticles";

function HomePage() {
  return (
    <div>
      <HeroPage />
      <LeadingChange />
      <FeaturedProjects />
      <StrategicEngagements />
      <LatestArticles />
    </div>
  );
}

export default HomePage;
