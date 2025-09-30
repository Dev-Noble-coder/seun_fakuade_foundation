import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section_Four() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

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
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        contentRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  const resources = [
    "Digital Transformation Whitepaper",
    "Youth Empowerment Report 2024",
    "Governance Innovation Framework",
    "Partnership Impact Assessment",
    "Policy Development Guidelines",
    "Innovation Strategy Blueprint",
  ];

  return (
    <>
      <style>
        {`
          .resource-item {
            transition: all 0.3s ease;
          }
          
          .resource-item:hover {
            transform: translateX(8px);
            color: #F97316;
          }
          
          .download-btn {
            position: relative;
            overflow: hidden;
          }
          
          .download-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .download-btn:hover::before {
            left: 100%;
          }
        `}
      </style>

      <section className="py-20 bg-white">
        <div ref={sectionRef} className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-2xl">
            {/* Left: Resources & Reports */}
            <div
              ref={contentRef}
              className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex flex-col justify-center px-8 lg:px-12 py-16 lg:py-20"
              data-aos="fade-right"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                  Knowledge Hub
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  Resources & <span className="text-[#F97316]">Reports</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Access our comprehensive collection of research papers, policy
                  briefs, and strategic insights that drive innovation and
                  transformation.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">
                  Featured Resources:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="resource-item flex items-center text-gray-300 hover:text-[#F97316] cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <svg
                        className="w-5 h-5 text-[#F97316] mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="download-btn bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 15.75L6 9.75H9V3H15V9.75H18L12 15.75Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 21H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download Resources
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full px-8 py-4 transition-all duration-300 transform hover:scale-105">
                  View All
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div
              ref={imageRef}
              className="relative h-96 lg:h-auto overflow-hidden"
              data-aos="fade-left"
            >
              <img
                src="https://res.cloudinary.com/drhfrgahv/image/upload/v1752755497/section_four_g6sbc2.jpg"
                alt="Resources"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Research Excellence
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Our research team produces cutting-edge insights that inform
                    policy and drive innovation across Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section_Four;
