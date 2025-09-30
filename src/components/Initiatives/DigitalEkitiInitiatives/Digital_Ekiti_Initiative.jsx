import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Digital_Ekiti_Initiatives_Data from "./Digital_Ekiti_Initiatives_Data";
import images from "../../../utils/images"; // Make sure this import is correct
import { Link } from "react-router-dom";

const tabCategories = [
  { label: "All", value: "All" },
  { label: "Innovation", value: "Innovation" },
  { label: "Foundations", value: "Foundations" },
  { label: "Enterpreneurship", value: "Enterpreneurship" },
  { label: "Goverance", value: "Goverance" },
  { label: "Youth Development", value: "Youth Development" },
  { label: "Community", value: "Community" },
  { label: "Economic Development", value: "Economic Development" },
];

// Map your data to categories (add a 'category' field to each item if needed)
const categorizedData = Digital_Ekiti_Initiatives_Data.map((item, idx) => ({
  ...item,
  category:
    idx % 2 === 0
      ? "Innovation"
      : idx % 3 === 0
      ? "Enterpreneurship"
      : "Goverance", // Example logic, adjust as needed
}));

function Digital_Ekiti_Initiative() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All"
      ? categorizedData
      : categorizedData.filter((item) => item.category === activeTab);

  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
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
        tabsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        gridRef.current?.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
  }, [filteredData]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <style>
        {`
          .initiative-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .initiative-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .tab-button {
            transition: all 0.3s ease;
          }
          
          .tab-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(249, 115, 22, 0.25);
          }
          
          .learn-more-btn {
            position: relative;
            overflow: hidden;
          }
          
          .learn-more-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .learn-more-btn:hover::before {
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
              Digital Transformation
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Ekiti <span className="text-[#F97316]">Initiatives</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A program aimed at equipping youth, civil servants, and small
              businesses with digital skills, internet access, and e-governance
              tools — fostering a smarter, tech-enabled economy.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-16" ref={tabsRef}>
            <div className="overflow-x-auto lg:overflow-x-visible">
              <div
                className="flex lg:justify-center gap-3 min-w-max"
                ref={scrollRef}
              >
                {tabCategories.map((tab) => (
                  <button
                    key={tab.value}
                    className={`tab-button py-3 px-6 border border-gray-200 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                      activeTab === tab.value
                        ? "bg-[#F97316] text-white border-[#F97316] shadow-lg shadow-[#F97316]/25"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Initiatives Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          {filteredData.length === 0 ? (
            <div className="text-center py-20" data-aos="fade-up">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No initiatives found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category or check back later.
              </p>
            </div>
          ) : (
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredData.map((item, index) => (
                <div
                  key={item.id}
                  className="group initiative-card bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
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
                      {item.status}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#F97316]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
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
                      to={`/initiatives/digital_ekiti_initiative/${item.id}`}
                      className="learn-more-btn inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full justify-center"
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F97316] to-[#EA580C]">
        <div className="max-w-7xl mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get <span className="text-orange-100">Involved</span>?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our digital transformation journey and be part of building a
            smarter, more connected Ekiti State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Join Initiative
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#F97316] transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Digital_Ekiti_Initiative;
