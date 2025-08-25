import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CurtainIntro() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755485/about_hero_img2_seqb1c.png",
    "https://i.imgur.com/4z3J1aA.jpeg",
    "https://i.imgur.com/tAEK0m3.jpeg",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913806/IMG-20250718-WA0103_es1daj.jpg",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755486/about_hero_img3_wqp3ly.png"
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Start curtain animation after 3 seconds
    const curtainTimer = setTimeout(() => {
      setCurtainOpen(true);
    }, 3000);

    // Start image rotation after curtain opens
    const imageTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, 4000);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(imageTimer);
    };
  }, [images.length]);

  return (
    <section className="relative min-h-screen mt-18 md:mt-0 lg:mt-0 bg-white overflow-hidden">
      {/* Curtain Overlay */}
      <div 
        className={`absolute inset-0 bg-black z-20 transition-transform duration-2000 ease-in-out ${
          curtainOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Curtain Content */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <div 
              className="text-lg uppercase tracking-widest mb-4 font-serif"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              LEADERSHIP
            </div>
            <h1 
              className="text-5xl lg:text-7xl font-bold font-serif leading-tight max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              Leading with ambition and optimism
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content (Hidden behind curtain initially) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${curtainOpen ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main Container with Responsive Layout */}
        <div className="flex flex-col-reverse lg:flex-row h-full">
          {/* Left Side - Black Background with Text */}
          <div className="w-full lg:w-1/2 bg-black text-white flex items-center justify-center py-12 lg:py-0">
            <div className="px-8 lg:px-16 max-w-lg text-center lg:text-left">
              <div className="space-y-6">
                <div 
                  className="text-lg uppercase tracking-widest font-serif"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  LEADERSHIP
                </div>
                <h1 
                  className="text-4xl lg:text-6xl font-bold font-serif leading-tight"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  Leading with ambition and <span className="text-[#F97316]">optimism</span>
                </h1>
                <p 
                  className="text-lg text-gray-300 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="900"
                >
                  A visionary leader dedicated to transforming Nigeria's future through strategic policy development, technological advancement, and sustainable community development initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - White Background with Image */}
          <div className="w-full lg:w-1/2 bg-black relative h-96 lg:h-full">
            {/* Image Container */}
            <div className="relative w-full object-cover h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Leadership Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Image Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-[#F97316] scale-125' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
           
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      {!curtainOpen && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <div className="text-sm mb-2">Loading...</div>
          <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#F97316] rounded-full transition-all duration-3000 ease-linear"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default CurtainIntro;
