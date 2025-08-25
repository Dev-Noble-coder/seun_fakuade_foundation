import React from "react";
import EnhancedNavbar from "../components/LayoutComponents/EnhancedNavbar"
import Footer from "../components/LayoutComponents/Footer"
import { Outlet } from "react-router-dom";

function LandingLayout({ children }){
    return (
        <>
        <div className="landing-layout">
            <EnhancedNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default LandingLayout