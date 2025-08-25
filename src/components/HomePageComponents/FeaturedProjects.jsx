import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FeaturedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Ekiti Knowledge Zone",
      description: "A comprehensive ecosystem for research, technology development, and entrepreneurship that has become a model for other African states.",
      impact: "2,000+ startups incubated",
      status: "Active",
      image: "https://i.imgur.com/upJBiVJ.jpeg",
      features: [
        "State-of-the-art research facilities",
        "Technology incubation programs",
        "Entrepreneurship training workshops",
        "Industry partnership networks",
        "Innovation funding support"
      ]
    },
    {
      id: 2,
      title: "Digital Ekiti Initiative",
      description: "Transforming public services through digital innovation and smart city technologies, creating a more connected and efficient Ekiti State.",
      impact: "500+ digital services launched",
      status: "Active",
      image: "https://i.imgur.com/OikyVRI.jpeg",
      features: [
        "E-government platforms",
        "Smart city infrastructure",
        "Digital payment systems",
        "Public service automation",
        "Citizen engagement portals"
      ]
    },
    {
      id: 3,
      title: "Youth Empowerment Hub",
      description: "Empowering young entrepreneurs with skills, resources, and mentorship to build sustainable businesses and drive economic growth.",
      impact: "10,000+ youth trained",
      status: "Active",
      image: "https://i.imgur.com/PvBY7pR.jpeg",
      features: [
        "Business development training",
        "Mentorship programs",
        "Access to funding opportunities",
        "Networking events",
        "Skills development workshops"
      ]
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6" data-aos="fade-up">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
            Transformative initiatives that have created lasting change across communities, setting new standards for development and innovation in West Africa.
          </p>
          <button className="group bg-gray-100 hover:bg-gray-200 text-[#1D1D1D] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 mx-auto border border-gray-200" data-aos="fade-up" data-aos-delay="300">
            View all projects
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:block relative">
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white text-[#1D1D1D] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white text-[#1D1D1D] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 min-h-[600px]">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10"></div>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      <div className="absolute top-6 left-6 z-20">
                        <span className="bg-white text-[#1D1D1D] px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <h3 className="text-4xl font-bold text-[#1D1D1D] leading-tight">{project.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                        
                        {/* Features List */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-[#1D1D1D]">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4">
                          <div className="text-lg">
                            <span className="text-gray-600">Impact: </span>
                            <span className="font-bold text-[#1D1D1D]">{project.impact}</span>
                          </div>
                        </div>
                        <div className="pt-6">
                          <button className="group bg-[#F97316] hover:bg-[#EA580C] text-white p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#F97316] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-[#1D1D1D] px-3 py-1 rounded-full text-sm font-medium">{project.status}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1D1D1D] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Features List for Mobile */}
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-[#1D1D1D] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-lg mb-4">
                  <span className="text-gray-600">Impact: </span>
                  <span className="font-bold text-[#1D1D1D]">{project.impact}</span>
                </div>
                <button className="bg-[#F97316] hover:bg-[#EA580C] text-white p-3 rounded-lg transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
