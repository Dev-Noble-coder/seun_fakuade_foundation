import React from "react";
import { Link, useLocation } from "react-router-dom";
import sflogo from "../../assets/icons/sflogo.png";


function Navbar(){

    const location = useLocation();

    return(
        <>
         <div className="fixed top-0 left-0 w-full z-50 shadow-sm" id="nav-links">
            <nav className="flex justify-between items-center bg-white py-3 text-sm text-[#1D1D1D] px-20">
                <div>
                 
                        <a href="">
                              <img src={sflogo} alt="SF Logo" className="logo w-[70px]" />
                        </a>
                      
          
                </div>
                <div className="flex justify-between items-center gap-14">
                    <Link to='/'><p className={location.pathname === '/' ? 'text-[#F97316]' : ''}>Home</p></Link>
                    <Link to='/'><p className={location.pathname === '/about' ? 'text-[#F97316]' : ''}>About</p></Link>
                    <Link to='/'><p className={location.pathname === '/initiatives' ? 'text-[#F97316]' : ''}>Initiatives</p></Link>
                    <Link to='/'><p className={location.pathname === '/thought_leadership' ? 'text-[#F97316]' : ''}>Thought Leadership</p></Link>
                    <Link to='/'><p className={location.pathname === '/contact' ? 'text-[#F97316]' : ''}>Contact</p></Link>
                </div>
                <div>
                    <Link to='/'><button className="bg-[#F97316] py-2 px-4 rounded-full text-white cursor-pointer">Get In Touch</button></Link>
                </div>
            </nav>
         </div>
        </>
    )
}

export default Navbar