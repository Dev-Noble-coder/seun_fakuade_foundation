import React from "react";
import Navbar from "../components/LayoutComponents/Navbar"
import Footer from "../components/LayoutComponents/Footer"
import { Outlet } from "react-router-dom";

function LandingLayout({ children }){
    return (
        <>
        <div className="landing-layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default LandingLayout