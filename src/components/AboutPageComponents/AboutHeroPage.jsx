import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutHeroPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="800">
            <div>
              <div className="text-lg uppercase tracking-widest text-gray-600 font-serif mb-4">
                ABOUT SEUN FAKUADE
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1D] leading-tight">
                A Visionary Leader for <span className="text-[#F97316]">Nigeria's Future</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F97316] to-orange-400 rounded-full mt-6"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over a decade of experience in public policy and social innovation, Seun Fakuade has pioneered numerous initiatives 
                that have impacted thousands of lives across Nigeria and beyond.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As a purpose-driven public servant and innovation strategist, Seun is committed to building inclusive digital economies, 
                empowering young entrepreneurs, and transforming public institutions for a smarter, more prosperous Nigeria.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D1D1D] mb-1">Innovation Leader</h4>
                  <p className="text-gray-600 text-sm">Pioneering digital transformation and policy innovation</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D1D1D] mb-1">Community Builder</h4>
                  <p className="text-gray-600 text-sm">Empowering communities through sustainable development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image */}
          <div className="relative" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://res.cloudinary.com/drhfrgahv/image/upload/v1752755485/about_hero_img2_seqb1c.png"
                alt="Seun Fakuade - Professional Portrait"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-[#F97316]/20"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#F97316] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroPage;
