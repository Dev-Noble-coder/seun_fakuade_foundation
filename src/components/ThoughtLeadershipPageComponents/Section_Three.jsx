import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section_Three(){
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

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
    );
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    // Here you would typically handle video playback
    console.log('Video play/pause toggled');
  };

  return (
    <>
      <style>
        {`
          .video-overlay {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
          }
          
          .play-button {
            transition: all 0.3s ease;
          }
          
          .play-button:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(249, 115, 22, 0.3);
          }
        `}
      </style>

      <section className="py-20 bg-gray-50">
        <div ref={sectionRef} className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
              Personal Vision
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What <span className="text-[#F97316]">Thought Leadership</span> Means To Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the personal philosophy and vision that drives our commitment to transforming Nigeria's future through strategic leadership and innovative thinking.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="relative bg-center bg-cover h-96 lg:h-[500px] flex justify-center items-center"
              style={{backgroundImage : `url(https://res.cloudinary.com/drhfrgahv/image/upload/v1752755495/leadership_img_traada.jpg)`}}
            >
              {/* Overlay */}
              <div className="absolute inset-0 video-overlay"></div>
              
              {/* Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-[#F97316]/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              </div>

              {/* Play Button */}
              <button 
                onClick={handlePlayClick}
                className="play-button relative z-10 cursor-pointer group"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#F97316] ml-1"
                  >
                    {isPlaying ? (
                      <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="currentColor"/>
                    ) : (
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    )}
                  </svg>
                </div>
              </button>

              {/* Video Title Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Leadership in Action
                  </h3>
                  <p className="text-gray-200">
                    Watch as Dr. Seun Fakuade shares his vision for transforming Nigeria through strategic leadership and innovative policy development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F97316]">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Vision</h3>
              <p className="text-gray-600 text-sm">Long-term thinking that shapes policy and drives sustainable change</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F97316]">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insight</h3>
              <p className="text-gray-600 text-sm">Deep knowledge and experience guiding informed decision-making</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F97316]">
                  <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600 text-sm">Forward-thinking approaches to complex challenges and opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section_Three