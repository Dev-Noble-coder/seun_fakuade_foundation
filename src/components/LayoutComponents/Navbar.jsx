import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import sflogo from "../../assets/icons/sflogo.png";

function Navbar() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimatingClose, setIsAnimatingClose] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

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

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsAnimatingClose(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimatingClose(false);
    }, 300); // match your CSS animation duration
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-40 shadow-sm" id="nav-links">
        <nav className="flex justify-between items-center bg-white py-3 text-sm text-[#1D1D1D] px-5 lg:px-20">
          <div>
            <a href="/">
              <img src={sflogo} alt="SF Logo" className="logo w-[70px]" />
            </a>
          </div>

          <div className="hidden lg:flex justify-between items-center gap-14 relative">
            <Link to="/">
              <p className={location.pathname === "/" ? "text-[#F97316]" : ""}>
                Home
              </p>
            </Link>
            <Link to="/about">
              <p
                className={
                  location.pathname === "/about" ? "text-[#F97316]" : ""
                }
              >
                About
              </p>
            </Link>

            {/* Initiatives with dropdown */}
            <button
              ref={triggerRef}
              onClick={toggleDropdown}
              className={`flex gap-1 items-center focus:outline-none cursor-pointer ${
                location.pathname === "/initiatives" ? "text-[#F97316]" : ""
              }`}
            >
              Initiatives
              <svg
                width="18"
                height="15"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
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
              <div
                className="absolute top-12 left-[calc(50%-90px)] bg-white shadow-md rounded-sm w-80 z-50 text-[12px]"
                ref={dropdownRef}
              >
                <ul className="">
                  <li
                    onClick={handleDropdownClick}
                    className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-t-sm"
                  >
                    <Link to="">Foundations</Link>
                  </li>
                  <li
                    onClick={handleDropdownClick}
                    className="hover:bg-gray-200 cursor-pointer px-3 py-3"
                  >
                    <Link to="">Digital Ekiti Initiative</Link>
                  </li>
                  <li
                    onClick={handleDropdownClick}
                    className="hover:bg-gray-200 cursor-pointer px-3 py-3"
                  >
                    <Link to="">Youth Enterprise Support Hub (YES Hub)</Link>
                  </li>
                  <li
                    onClick={handleDropdownClick}
                    className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-sm"
                  >
                    <Link to="">Open Government & Citizen Engagement Lab</Link>
                  </li>
                  <li
                    onClick={handleDropdownClick}
                    className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-sm"
                  >
                    <Link to="">Smart Schools & Future Skills Program</Link>
                  </li>
                </ul>
              </div>
            )}

            <Link to="/thought_leadership">
              <p
                className={
                  location.pathname === "/thought_leadership"
                    ? "text-[#F97316]"
                    : ""
                }
              >
                Thought Leadership
              </p>
            </Link>
            <Link to="/contact">
              <p
                className={
                  location.pathname === "/contact" ? "text-[#F97316]" : ""
                }
              >
                Contact
              </p>
            </Link>
          </div>

          <div className="hidden lg:block ">
            <Link to="/">
              <button className="bg-[#F97316] py-2 px-4 rounded-full text-white cursor-pointer">
                Get In Touch
              </button>
            </Link>
          </div>

          <div className="lg:hidden" id="menu" onClick={openMobileMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1D1D1D"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 12H21"
                stroke="#1D1D1D"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#1D1D1D"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>

          {(isMobileMenuOpen || isAnimatingClose) && (
            <div
              className={`lg:hidden mobile-menu-container absolute top-0 left-0 text-base w-full px-2 pl-5 pb-5 pt-2 z-50 ${
                isAnimatingClose ? "slideUp" : "slideDown"
              }`}
            >
              <div className="mobile-menu-content">
                <div className="flex justify-between">
                  <div>
                    <a href="/">
                      <img
                        src={sflogo}
                        alt="SF Logo"
                        className="logo w-[70px]"
                      />
                    </a>
                  </div>
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={closeMobileMenu}
                  >
                    <path
                      d="M17.3431 28.6567L28.6568 17.343"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.6568 28.657L17.3431 17.3433"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <Link to="/" onClick={() => setShowMobileMenu(false)}>
                  Home
                </Link>
                <Link to="/about" onClick={() => setShowMobileMenu(false)}>
                  About
                </Link>

                <div
                  className="flex justify-between items-center "
                  onClick={() => setIsMobileSubMenuOpen((prev) => !prev)}
                >
                  <p className="">Initiatives</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      isMobileSubMenuOpen ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                {isMobileSubMenuOpen && (
                  <div>
                    <ul className="">
                      <li
                        onClick={() => setIsMobileSubMenuOpen((prev) => !prev)}
                        className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-t-sm"
                      >
                        <Link to="">Foundations</Link>
                      </li>
                      <li
                        onClick={() => setIsMobileSubMenuOpen((prev) => !prev)}
                        className="hover:bg-gray-200 cursor-pointer px-3 py-3"
                      >
                        <Link to="">Digital Ekiti Initiative</Link>
                      </li>
                      <li
                        onClick={() => setIsMobileSubMenuOpen((prev) => !prev)}
                        className="hover:bg-gray-200 cursor-pointer px-3 py-3"
                      >
                        <Link to="">
                          Youth Enterprise Support Hub (YES Hub)
                        </Link>
                      </li>
                      <li
                        onClick={() => setIsMobileSubMenuOpen((prev) => !prev)}
                        className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-sm"
                      >
                        <Link to="">
                          Open Government & Citizen Engagement Lab
                        </Link>
                      </li>
                      <li
                        onClick={() => setIsMobileSubMenuOpen((prev) => !prev)}
                        className="hover:bg-gray-200 cursor-pointer px-3 py-3 rounded-sm"
                      >
                        <Link to="">Smart Schools & Future Skills Program</Link>
                      </li>
                    </ul>
                  </div>
                )}

                <Link
                  to="/thought_leadership"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Thought Leadership
                </Link>
                <Link to="/contact" onClick={() => setShowMobileMenu(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
