import React from "react";
import AboutSection from '../components/HomePageComponents/AboutSection';
import Milestones from "../components/AboutPageComponents/Milestones";
import CoreValues from "../components/AboutPageComponents/CoreValues";
import KeyMoments from "../components/AboutPageComponents/KeyMoments";
import AboutMeContent from "../components/AboutPageComponents/AboutMeContent.jsx";
import CurtainIntro from '../components/AboutPageComponents/CurtainIntro';

function AboutPage() {
    return(
        <>
            <CurtainIntro />
            <AboutSection />
            <AboutMeContent />
            <Milestones />
            <CoreValues />
            <KeyMoments />
        </>
    )
}

export default AboutPage