import React from "react";
import AboutHeroPage from '../components/AboutPageComponents/AboutHeroPage'
import Milestones from "../components/AboutPageComponents/Milestones";
import CoreValues from "../components/AboutPageComponents/CoreValues";
import KeyMoments from "../components/AboutPageComponents/KeyMoments";

function AboutPage() {
    return(
        <>
            <AboutHeroPage />
            <Milestones />
            <CoreValues />
            <KeyMoments />
        </>
    )
}

export default AboutPage