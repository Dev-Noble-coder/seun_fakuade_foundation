import React from "react";
import Thought_Leadership_Heropage from "../components/ThoughtLeadershipPageComponents/Thought_Leaderpage_Heropage";
import Pillars from "../components/ThoughtLeadershipPageComponents/Pillars";
import Section_Three from "../components/ThoughtLeadershipPageComponents/Section_Three";
import Section_Four from "../components/ThoughtLeadershipPageComponents/Section_Four";


function ThoughtLeadership_Page(){
    return(
        <>
            <Thought_Leadership_Heropage />
            <Pillars />
            <Section_Three />
            <Section_Four />
        </>
    )
}

export default ThoughtLeadership_Page