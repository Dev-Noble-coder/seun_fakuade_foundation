import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import sflogo from "../../assets/icons/sflogo.png";

function Navbar() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const toggleDropdown = () => {
      setShowDropdown((prev) => !prev);
  };

  const handleDropdownClick = () => {
    setShowDropdown(false); // close when dropdown item is clicked
  };


   useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 shadow-sm" id="nav-links">
        <nav className="flex justify-between items-center bg-white py-3 text-sm text-[#1D1D1D] px-5 lg:px-20">
          <div>
            <a href="/">
              <img src={sflogo} alt="SF Logo" className="logo w-[70px]" />
            </a>
          </div>

          <div className="hidden lg:flex justify-between items-center gap-14 relative">
            <Link to="/"><p className={location.pathname === '/' ? 'text-[#F97316]' : ''}>Home</p></Link>
            <Link to="/about"><p className={location.pathname === '/about' ? 'text-[#F97316]' : ''}>About</p></Link>

            {/* Initiatives with dropdown */}
            <button
            ref={triggerRef}
              onClick={toggleDropdown}
              className={`flex gap-1 items-center focus:outline-none cursor-pointer ${location.pathname === '/initiatives' ? 'text-[#F97316]' : ''}`}
            >
              Initiatives
              <svg
                width="18"
                height="15"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}
              >
                <path
                  d="M20.42 8.94995L13.9 15.47C13.13 16.24 11.87 16.24 11.1 15.47L4.58002 8.94995"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown content with ref */}
            {showDropdown && (
              <div className="absolute top-12 left-[calc(50%-90px)] bg-white shadow-md rounded-sm w-48 z-50 text-[12px]" ref={dropdownRef}>
                <ul className="">
                  <li onClick={handleDropdownClick} className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-t-sm"><Link to="">Knowledge Zone</Link></li>
                  <li onClick={handleDropdownClick} className="hover:bg-gray-200 cursor-pointer px-3 py-3"><Link to="">Startup Garage</Link></li>
                  <li onClick={handleDropdownClick} className="hover:bg-gray-200 cursor-pointer px-3 py-3"><Link to="">GovLab Ekiti</Link></li>
                  <li onClick={handleDropdownClick} className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-sm"><Link to="">Youth Leadership</Link></li>
                </ul>
              </div>
            )}

            <Link to="/thought_leadership"><p className={location.pathname === '/thought_leadership' ? 'text-[#F97316]' : ''}>Thought Leadership</p></Link>
            <Link to="/contact"><p className={location.pathname === '/contact' ? 'text-[#F97316]' : ''}>Contact</p></Link>
          </div>

          <div className="hidden lg:block ">
            <Link to="/"><button className="bg-[#F97316] py-2 px-4 rounded-full text-white cursor-pointer">Get In Touch</button></Link>
          </div>

          <div className="lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 12H21" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 17H21" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round"/>
</svg>

          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
