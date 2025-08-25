import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function EnhancedNavbar() {
  const location = useLocation();
  const [showInitiativesDropdown, setShowInitiativesDropdown] = useState(false);
  const [showThoughtLeadershipDropdown, setShowThoughtLeadershipDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  
  const [showConnectDropdown, setShowConnectDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
       const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
    const [isMobileInitiativesOpen, setIsMobileInitiativesOpen] = useState(false);
    
    const [isMobileConnectOpen, setIsMobileConnectOpen] = useState(false);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef(null);
  const initiativesDropdownRef = useRef(null);
  const thoughtLeadershipDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  
  const connectDropdownRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      offset: 100,
      easing: 'ease-out'
    });
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!navbarRef.current?.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // GSAP animations
  useGSAP(() => {
    // Initial navbar animation
    const tl = gsap.timeline();
    
    tl.fromTo(logoRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(navItemsRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  // Scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      if (scrollTop > 50) {
        gsap.to(navbarRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(navbarRef.current, {
          backgroundColor: "rgba(255, 255, 255, 1)",
          backdropFilter: "blur(0px)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown toggle functions
  const toggleDropdown = (dropdownType) => {
    // Toggle the selected dropdown
    switch(dropdownType) {
             case 'initiatives':
         setShowInitiativesDropdown(!showInitiativesDropdown);
         setShowThoughtLeadershipDropdown(false);
         setShowAboutDropdown(false);
         setShowConnectDropdown(false);
         break;
             case 'thoughtLeadership':
         setShowThoughtLeadershipDropdown(!showThoughtLeadershipDropdown);
         setShowInitiativesDropdown(false);
         setShowAboutDropdown(false);
         setShowConnectDropdown(false);
         break;
             case 'about':
         setShowAboutDropdown(!showAboutDropdown);
         setShowInitiativesDropdown(false);
         setShowThoughtLeadershipDropdown(false);
         setShowConnectDropdown(false);
         break;
      
             case 'connect':
         setShowConnectDropdown(!showConnectDropdown);
         setShowInitiativesDropdown(false);
         setShowThoughtLeadershipDropdown(false);
         setShowAboutDropdown(false);
         break;
      default:
        break;
    }
  };

     const closeAllDropdowns = () => {
     setShowInitiativesDropdown(false);
     setShowThoughtLeadershipDropdown(false);
     setShowAboutDropdown(false);
     setShowConnectDropdown(false);
   };

  // Mobile menu animations
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    gsap.fromTo(".mobile-menu-content",
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  };

  const closeMobileMenu = () => {
    gsap.to(".mobile-menu-content", {
      x: "100%",
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setIsMobileMenuOpen(false)
    });
  };

  // Hover animations for nav items
  const handleNavItemHover = (element) => {
    gsap.to(element, {
      y: -2,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleNavItemLeave = (element) => {
    gsap.to(element, {
      y: 0,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  return (
    <>
      <style>
        {`
          .connect-btn {
            width: 6.5em;
            height: 2.3em;
            margin: 0.5em;
            background: #F97316;
            color: white;
            border: none;
            border-radius: 0.625em;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            position: relative;
            z-index: 1;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .connect-btn:hover {
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
          }

          .connect-btn:after {
            content: "";
            background: white;
            position: absolute;
            z-index: -1;
            left: -20%;
            right: -20%;
            top: 0;
            bottom: 0;
            transform: skewX(-45deg) scale(0, 1);
            transition: all 0.5s;
          }

          .connect-btn:hover:after {
            transform: skewX(-45deg) scale(1, 1);
            transition: all 0.5s;
          }

          .connect-btn span {
            position: relative;
            z-index: 2;
            transition: color 0.3s ease;
          }

          .connect-btn:hover span {
            color: #F97316;
          }
        `}
      </style>
      <div 
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        id="nav-links"
      >
        <nav className="flex justify-between items-center bg-white py-4 text-sm text-[#1D1D1D] px-5 lg:px-20">
          {/* Logo */}
          <div ref={logoRef}>
            <a href="/" className="block">
              <img 
                src='https://res.cloudinary.com/drhfrgahv/image/upload/v1752755506/sflogo_gkilxc.png' 
                alt="SF Logo" 
                className="logo w-[70px] transition-transform duration-300 hover:scale-105" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div 
            ref={navItemsRef}
            className="hidden lg:flex justify-between items-center gap-12 relative"
          >
            <Link to="/">
              <div 
                className={`transition-all duration-300 hover:text-[#F97316] ${
                  location.pathname === "/" ? "text-[#F97316]" : ""
                }`}
                onMouseEnter={(e) => handleNavItemHover(e.target)}
                onMouseLeave={(e) => handleNavItemLeave(e.target)}
              >
                Home
              </div>
            </Link>
            
                         {/* About Dropdown */}
             <button
               onClick={() => toggleDropdown('about')}
               className={`group relative focus:outline-none cursor-pointer transition-all duration-300 hover:text-[#F97316] ${
                 location.pathname === "/about" || location.pathname === "/team" || location.pathname === "/gallery" ? "text-[#F97316]" : ""
               }`}
               onMouseEnter={(e) => handleNavItemHover(e.target)}
               onMouseLeave={(e) => handleNavItemLeave(e.target)}
             >
               <span>About</span>
               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></div>
             </button>

                         {/* Initiatives Dropdown */}
             <button
               onClick={() => toggleDropdown('initiatives')}
               className={`group relative focus:outline-none cursor-pointer transition-all duration-300 hover:text-[#F97316] ${
                 location.pathname.includes("/initiatives") ? "text-[#F97316]" : ""
               }`}
               onMouseEnter={(e) => handleNavItemHover(e.target)}
               onMouseLeave={(e) => handleNavItemLeave(e.target)}
             >
               <span>Initiatives</span>
               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></div>
             </button>

                                      {/* Thought Leadership Link */}
              <Link to="/thought_leadership">
                <div 
                  className={`group relative transition-all duration-300 hover:text-[#F97316] ${
                    location.pathname === "/thought_leadership" ? "text-[#F97316]" : ""
                  }`}
                  onMouseEnter={(e) => handleNavItemHover(e.target)}
                  onMouseLeave={(e) => handleNavItemLeave(e.target)}
                >
                  <span>Thought Leadership</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            
                                      {/* Services Link */}
              <Link to="/services">
                <div 
                  className={`group relative transition-all duration-300 hover:text-[#F97316] ${
                    location.pathname === "/services" ? "text-[#F97316]" : ""
                  }`}
                  onMouseEnter={(e) => handleNavItemHover(e.target)}
                  onMouseLeave={(e) => handleNavItemLeave(e.target)}
                >
                  <span>Services</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>

                                                   {/* Connect Dropdown */}
              <button
                onClick={() => toggleDropdown('connect')}
                className={`connect-btn relative focus:outline-none cursor-pointer ${
                  location.pathname === "/contact" ? "text-[#F97316]" : "text-[#1D1D1D]"
                }`}
                onMouseEnter={(e) => handleNavItemHover(e.target)}
                onMouseLeave={(e) => handleNavItemLeave(e.target)}
              >
                <span>Connect</span>
              </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden" id="menu" onClick={openMobileMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <path
                d="M3 7H21"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </nav>

        {/* About Dropdown */}
        {showAboutDropdown && (
          <div 
            ref={aboutDropdownRef}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-50"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <div className="max-w-7xl mx-auto px-20 py-12">
              <div className="grid grid-cols-3 gap-8">
                                 <Link to="/about" className="group" onClick={closeAllDropdowns}>
                   <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                     <img 
                       src="https://i.imgur.com/4z3J1aA.jpeg" 
                       alt="About Vision" 
                       className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                       <h3 className="text-xl font-bold text-white mb-2">About / Vision</h3>
                       <p className="text-sm text-gray-200">Discover our mission and vision for transforming Nigeria's future through innovation</p>
                     </div>
                   </div>
                 </Link>
                
                                 <Link to="/team" className="group" onClick={closeAllDropdowns}>
                   <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                     <img 
                       src="https://i.imgur.com/GOlihut.jpeg" 
                       alt="Team Partners" 
                       className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                       <h3 className="text-xl font-bold text-white mb-2">Team / Partners</h3>
                       <p className="text-sm text-gray-200">Meet our expert team and strategic partners driving change</p>
                     </div>
                   </div>
                 </Link>
                
                                 <Link to="/gallery" className="group" onClick={closeAllDropdowns}>
                   <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                     <img 
                       src="https://i.imgur.com/Ys7KNKw.jpeg" 
                       alt="Gallery" 
                       className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                       <h3 className="text-xl font-bold text-white mb-2">Gallery</h3>
                       <p className="text-sm text-gray-200">Explore our work, events, and impact through visual stories</p>
                     </div>
                   </div>
                 </Link>
              </div>
            </div>
          </div>
        )}

                                   {/* Initiatives Dropdown */}
          {showInitiativesDropdown && (
            <div 
              ref={initiativesDropdownRef}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-50"
              data-aos="fade-down"
              data-aos-duration="300"
            >
              <div className="max-w-7xl mx-auto px-20 py-12">
                <div className="grid grid-cols-3 gap-8">
                  <Link to="/initiatives/foundations" className="group" onClick={closeAllDropdowns}>
                    <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <img 
                        src="https://i.imgur.com/4z3J1aA.jpeg" 
                        alt="Foundation" 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Foundation</h3>
                        <p className="text-sm text-gray-200">Building sustainable solutions for economic development</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/initiatives/digital_ekiti_initiative" className="group" onClick={closeAllDropdowns}>
                    <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <img 
                        src="https://i.imgur.com/GOlihut.jpeg" 
                        alt="Digital Ekiti Initiative" 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Digital Ekiti Initiative</h3>
                        <p className="text-sm text-gray-200">Transforming Ekiti through digital innovation</p>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="group">
                    <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <img 
                        src="https://i.imgur.com/Ys7KNKw.jpeg" 
                        alt="Future Programs" 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Future Programs</h3>
                        <p className="text-sm text-gray-200">Youth Enterprise Support Hub, Open Government Lab, Smart Schools Program</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Thought Leadership Dropdown */}
        {showThoughtLeadershipDropdown && (
          <div 
            ref={thoughtLeadershipDropdownRef}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-50"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <div className="max-w-7xl mx-auto px-20 py-12">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#1D1D1D] mb-6">Research & Analysis</h3>
                  <div className="space-y-4">
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">📚 Articles</p>
                      <p className="text-sm text-gray-600 mt-1">Perspectives and insights from field experts, shaping the global innovation and policy conversation.</p>
                    </div>
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">📋 White Papers</p>
                      <p className="text-sm text-gray-600 mt-1">In-depth research reports exploring emerging trends, challenges, and solutions across industries and policy.</p>
                    </div>
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">📄 Policy Papers</p>
                      <p className="text-sm text-gray-600 mt-1">Strategic briefs offering actionable recommendations for governments and institutions worldwide.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1D1D1D] mb-6">Publications & Media</h3>
                  <div className="space-y-4">
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">✍️ Op Eds</p>
                      <p className="text-sm text-gray-600 mt-1">Opinion pieces sparking debate and influence across media on key global issues.</p>
                    </div>
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">📖 Books</p>
                      <p className="text-sm text-gray-600 mt-1">Comprehensive volumes authored by thought leaders, informing the future of research and leadership.</p>
                    </div>
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">🔬 Papers</p>
                      <p className="text-sm text-gray-600 mt-1">Academic and peer-reviewed papers advancing foundational knowledge in your areas of focus.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1D1D1D] mb-6">Strategic Insights</h3>
                  <div className="space-y-4">
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">🎯 Vision Synthesis</p>
                      <p className="text-sm text-gray-600 mt-1">Strategic summaries that distill research into coherent, forward-looking frameworks.</p>
                    </div>
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">🏛️ Public Sector Leadership</p>
                      <p className="text-sm text-gray-600 mt-1">Case studies and reflections on leading change in governance, development, and public service globally.</p>
                    </div>
                    <div className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                      <p className="font-medium text-[#1D1D1D] group-hover:text-[#F97316] transition-colors duration-200">🛡️ Intelligence & Security Studies</p>
                      <p className="text-sm text-gray-600 mt-1">Critical analyses on global security, intelligence, and resilience in an evolving world.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        

                 {/* Connect Dropdown */}
         {showConnectDropdown && (
           <div 
             ref={connectDropdownRef}
             className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-50"
             data-aos="fade-down"
             data-aos-duration="300"
           >
             <div className="max-w-7xl mx-auto px-20 py-12">
               <div className="grid grid-cols-3 gap-8">
                                  <Link to="/marketplace" className="group" onClick={closeAllDropdowns}>
                    <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <img 
                       src="https://i.imgur.com/4zUo9Hr.jpeg" 
                        alt="Marketplace" 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Marketplace</h3>
                        <p className="text-sm text-gray-200 mb-3">A curated hub for knowledge, solutions, and partnerships.</p>
                        <div className="space-y-1 text-xs text-gray-200">
                          <div>• Knowledge Products</div>
                          <div>• Digital Tools</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                 
                                  <Link to="/contact" className="group" onClick={closeAllDropdowns}>
                    <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <img 
                       src="https://i.imgur.com/OlQ8pcB.jpeg" 
                        alt="Contact" 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                        <p className="text-sm text-gray-200 mb-3">Get in touch with our team to discuss your needs and explore collaboration opportunities.</p>
                        <div className="space-y-1 text-xs text-gray-200">
                          <div>• General Inquiries</div>
                          <div>• Partnership Discussions</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                 
                                  <Link to="/book-call" className="group" onClick={closeAllDropdowns}>
                    <div className="relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <img 
                       src="https://i.imgur.com/tAEK0m3.jpeg" 
                        alt="Book a Call" 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="text-xl font-bold text-white mb-2">Book a Call</div>
                        <p className="text-sm text-gray-200 mb-3">Schedule a consultation with our experts to discuss your specific needs and requirements.</p>
                        <div className="space-y-1 text-xs text-gray-200">
                          <div>• Free Consultation</div>
                          <div>• Expert Guidance</div>
                        </div>
                      </div>
                    </div>
                  </Link>
               </div>
             </div>
           </div>
         )}

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu-container absolute top-0 left-0 text-sm w-full h-screen bg-black bg-opacity-50 z-50">
            <div className="mobile-menu-content absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div>
                  <a href="/">
                    <img
                      src='https://res.cloudinary.com/drhfrgahv/image/upload/v1752755506/sflogo_gkilxc.png'
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
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                  <path
                    d="M17.3431 28.6567L28.6568 17.343"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.6568 28.657L17.3431 17.3433"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-120px)]">
                <Link to="/" onClick={closeMobileMenu} className="block py-3 hover:text-[#F97316] transition-colors duration-200">
                  Home
                </Link>
                
                <div className="py-3">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsMobileSubMenuOpen((prev) => !prev)}
                  >
                    <p className="font-medium text-[#1D1D1D] mb-2">About</p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${
                        isMobileSubMenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {isMobileSubMenuOpen && (
                    <div className="mt-3 ml-4 space-y-2 text-sm">
                      <Link to="/about" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                        About / Vision
                      </Link>
                      <Link to="/team" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                        Team / Partners
                      </Link>
                      <Link to="/gallery" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                        Gallery
                      </Link>
                    </div>
                  )}
                </div>

                                 <div className="py-3">
                   <div
                     className="flex justify-between items-center cursor-pointer"
                     onClick={() => setIsMobileInitiativesOpen((prev) => !prev)}
                   >
                     <p className="font-medium text-[#1D1D1D] mb-2">Initiatives</p>
                     <svg
                       width="20"
                       height="20"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                       className={`transition-transform duration-300 ${
                         isMobileInitiativesOpen ? "rotate-180" : ""
                       }`}
                     >
                       <path
                         d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                         stroke="#292D32"
                         strokeWidth="1.5"
                         strokeMiterlimit="10"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </svg>
                   </div>
                                       {isMobileInitiativesOpen && (
                      <div className="mt-3 ml-4 space-y-2 text-sm">
                        <Link to="/initiatives/foundations" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                          🏛️ Foundations
                        </Link>
                        <Link to="/initiatives/digital_ekiti_initiative" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                          💻 Digital Ekiti Initiative
                        </Link>
                        <div className="block py-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">
                          🚀 Youth Enterprise Support Hub
                        </div>
                        <div className="block py-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">
                          🏛️ Open Government Lab
                        </div>
                        <div className="block py-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">
                          🎓 Smart Schools Program
                        </div>
                      </div>
                    )}
                 </div>

                                 <Link to="/thought_leadership" onClick={closeMobileMenu} className="block py-3 hover:text-[#F97316] transition-colors duration-200">
                   Thought Leadership
                 </Link>
                 
                 <Link to="/services" onClick={closeMobileMenu} className="block py-3 hover:text-[#F97316] transition-colors duration-200">
                   Services
                 </Link>

                                 <div className="py-3">
                   <div
                     className="flex justify-between items-center cursor-pointer"
                     onClick={() => setIsMobileConnectOpen((prev) => !prev)}
                   >
                     <p className="font-medium text-[#1D1D1D] mb-2">Connect</p>
                     <svg
                       width="20"
                       height="20"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                       className={`transition-transform duration-300 ${
                         isMobileConnectOpen ? "rotate-180" : ""
                       }`}
                     >
                       <path
                         d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                         stroke="#292D32"
                         strokeWidth="1.5"
                         strokeMiterlimit="10"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </svg>
                   </div>
                   {isMobileConnectOpen && (
                     <div className="mt-3 ml-4 space-y-2 text-sm">
                       <Link to="/marketplace" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                         Marketplace
                       </Link>
                       <Link to="/contact" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                         Contact
                       </Link>
                       <Link to="/book-call" onClick={closeMobileMenu} className="block py-2 hover:text-[#F97316] transition-colors duration-200">
                         Book a Call
                       </Link>
                     </div>
                   )}
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default EnhancedNavbar;
