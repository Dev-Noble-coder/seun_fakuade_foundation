import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function Thought_Leadership_Heropage (){
  const heroRef = useRef(null);
  const contentRef = useRef(null);

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
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <style>
        {`
          .hero-overlay {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
          }
          
          .hero-title {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>

      <section
        ref={heroRef}
        className="relative text-[#1D1D1D] min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat bg-fixed overflow-hidden"
        style={{ backgroundImage: `url(https://res.cloudinary.com/drhfrgahv/image/upload/v1752913875/IMG-20250718-WA0122_wnti6q.jpg)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F97316]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div ref={contentRef} className="relative z-10 sm:max-w-3/4 lg:max-w-2/4 text-center flex flex-col justify-center items-center px-5 lg:px-0">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
              Strategic Insights
            </div>
            
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Thought{" "}
              <span className="text-[#F97316]">Leadership</span> 
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Ideas that shape Nigeria's future — one pillar at a time through strategic research, expert insight, and visionary leadership.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Thought_Leadership_Heropage