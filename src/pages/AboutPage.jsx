import React from "react";
import AboutHeroPage from '../components/AboutPageComponents/AboutHeroPage'
import MeetSF from '../components/HomePageComponents/MeetSF.jsx';
import Milestones from "../components/AboutPageComponents/Milestones";
import CoreValues from "../components/AboutPageComponents/CoreValues";
import KeyMoments from "../components/AboutPageComponents/KeyMoments";
import AboutMeContent from "../components/AboutPageComponents/AboutMeContent.jsx";

function AboutPage() {
    return(
        <>
            <AboutHeroPage />
            <MeetSF />
            <AboutMeContent />
            <Milestones />
            <CoreValues />
            <KeyMoments />
        </>
    )
}

export default AboutPage