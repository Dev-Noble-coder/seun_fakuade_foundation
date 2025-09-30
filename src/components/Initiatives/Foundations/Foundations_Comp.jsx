import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Foundation_Data from "./Foundations_Data.js";

function Foundations_Comp() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const programsRef = useRef(null);
  const ctaRef = useRef(null);

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        missionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        programsRef.current?.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <style>
        {`
          .foundation-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .foundation-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .cta-button {
            position: relative;
            overflow: hidden;
          }
          
          .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .cta-button:hover::before {
            left: 100%;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F97316]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-20 text-center relative z-10">
          <div ref={heroRef} className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
              Our Foundation
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#F97316]">Foundation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Committed to creating lasting positive change in communities
              through strategic philanthropy, education support, and sustainable
              development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="cta-button bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Get Involved
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-white hover:bg-gray-50 text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200">
                  Contribute Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div
            ref={missionRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8" data-aos="fade-right">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/drhfrgahv/image/upload/v1752755495/found_comp_puky2l.jpg"
                  alt="Foundation Mission Vision"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="space-y-12" data-aos="fade-left">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#F97316]"
                    >
                      <path
                        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Vision Statement
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To inspire a generation of transformational leaders and
                  innovators by building an inclusive, digitally empowered
                  society where creativity, entrepreneurship, and public service
                  drive sustainable development.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#F97316]"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Mission Statement
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To inspire a generation of transformational leaders and
                  innovators by building an inclusive, digitally empowered
                  society where creativity, entrepreneurship, and public service
                  drive sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Foundation Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic initiatives designed to address critical needs and
              create sustainable impact in communities.
            </p>
          </div>

          <div
            ref={programsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Foundation_Data.map((item, index) => (
              <div
                key={item.id}
                className="group foundation-card bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#F97316] px-3 py-1 rounded-full text-sm font-semibold">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F97316] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#F97316] hover:text-[#EA580C] transition-colors duration-300 font-semibold"
                  >
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-[#F97316] to-[#EA580C]"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Make a <span className="text-orange-100">Difference</span> Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our mission to create positive change in communities. Whether
            through donations, volunteering, or partnerships, every contribution
            makes a meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="cta-button bg-white text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Contribute Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#F97316] transition-all duration-300 transform hover:scale-105">
                Get Involved
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Foundations_Comp;
