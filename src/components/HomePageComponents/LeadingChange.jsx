import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function LeadingChange() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Refresh AOS when component updates
    return () => {
      AOS.refresh();
    };
  }, []);

  // Sample data for the initiatives - replace with your actual content
  const initiatives = [
    {
      id: 1,
      title: "Public Policy Initiative",
      description: "A comprehensive innovation ecosystem fostering research, technology and knowledge-based economic growth.",
      image: "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913797/IMG-20250718-WA0091_p22rk1.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "The Ekiti Knowledge Zone",
      description: "Developing scalable solutions that serve as models for sustainable development across Africa and beyond.",
      image: "https://i.imgur.com/4z3J1aA.jpeg",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Opinions",
      description: "A comprehensive innovation ecosystem fostering research, technology and knowledge-based economic growth.",
      image: "https://i.imgur.com/GOlihut.jpeg",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Social Work",
      description: "Developing scalable solutions that serve as models for sustainable development across Africa and beyond.",
      image: "https://i.imgur.com/Ys7KNKw.jpeg",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Filmmaking & Story-telling",
      description: "A comprehensive innovation ecosystem fostering research, technology and knowledge-based economic growth.",
      image: "https://i.imgur.com/4zUo9Hr.jpeg",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  // GSAP animations
  useGSAP(() => {
    // Initial animation for the container
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Animate initiative cards on mount
    slidesRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            delay: index * 0.1,
            ease: "power2.out"
          }
        );
      }
    });
  }, []);

  return (
    <>
      <style>
        {`
          .slide-transition {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .slide-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .slide-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          
          .gradient-overlay {
            background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
          }
          
          .stats-glow {
            text-shadow: 0 0 20px rgba(249, 115, 22, 0.8);
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <section 
        ref={containerRef}
        className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-[#F97316] rounded-full blur-3xl"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="300"
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="700"
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6 leading-tight"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Leading <span className="text-[#F97316]">Change</span>
            </h2>
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Driving transformation across Nigeria through innovative initiatives, strategic partnerships, 
              and visionary leadership that creates lasting impact.
            </p>
          </div>

          {/* Dynamic Carousel Slider */}
          <div 
            ref={sliderRef}
            className="relative"
          >
            {/* Initiative Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <div 
                  key={initiative.id}
                  ref={(el) => (slidesRef.current[index] = el)}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={100 + (index * 100)}
                  data-aos-offset="200"
                >
                  {/* Card Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-30`}></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 
                      className="text-xl lg:text-2xl font-bold mb-3 leading-tight"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="200"
                    >
                      {initiative.title}
                    </h3>
                    <p 
                      className="text-sm lg:text-base text-gray-100 mb-4 leading-relaxed opacity-90"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="300"
                    >
                      {initiative.description}
                    </p>
                                         <button 
                       className="group/btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 w-fit cursor-pointer"
                       data-aos="fade-up"
                       data-aos-duration="600"
                       data-aos-delay="400"
                     >
                      Explore Initiative
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore All Initiatives Link */}
            <div 
              className="text-center mt-12"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <a 
                href="/initiatives" 
                className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Explore All Initiatives
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Communities Impacted" },
              { number: "25+", label: "Policies Developed" },
              { number: "1000+", label: "Youth Empowered" },
              { number: "15+", label: "Countries Reached" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={700 + (index * 100)}
                data-aos-offset="150"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#F97316] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LeadingChange;
