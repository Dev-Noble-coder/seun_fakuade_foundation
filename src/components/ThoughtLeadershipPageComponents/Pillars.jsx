import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Thought_Leadership_Data from './Thought_Leadership_Data'

function Pillars() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

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
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.5"
      );
  }, []);

  return (
    <>
      <style>
        {`
          .pillar-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .pillar-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
          
          .pillar-icon {
            transition: all 0.3s ease;
          }
          
          .pillar-card:hover .pillar-icon {
            transform: scale(1.1) rotate(5deg);
          }
        `}
      </style>

      <section className="py-20 bg-white">
        <div ref={sectionRef} className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
              Core Principles
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The <span className="text-[#F97316]">Pillars</span> of Thought
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Core principles that guide our vision for a transformed Nigeria through strategic research, expert insight, and visionary leadership.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Thought_Leadership_Data.map((item, index) => (
              <div 
                key={item.id} 
                className="group pillar-card bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 left-4 pillar-icon bg-white/90 backdrop-blur-sm text-[#F97316] w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg">
                    {item.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F97316] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Initiatives:</h4>
                    <ul className="space-y-2">
                      {item.key_initiative.map((initiative, initiativeIndex) => (
                        <li key={initiativeIndex} className="flex items-start text-gray-600">
                          <svg
                            className="w-4 h-4 text-[#F97316] mr-2 mt-1 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pillars