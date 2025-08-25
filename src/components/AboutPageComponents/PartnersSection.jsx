import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Custom CSS for scrolling animation
const scrollAnimation = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`;

function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const partners = [
    {
      id: 1,
      name: "World Bank Group",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Development Finance",
      description: "Supporting economic development in West Africa through strategic partnerships and funding initiatives."
    },
    {
      id: 2,
      name: "African Union",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "Policy & Governance",
      description: "International partnerships established for continental policy development and governance reforms."
    },
    {
      id: 3,
      name: "UNDP Nigeria",
      logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Sustainable Development",
      description: "Collaborating on sustainable development goals and community empowerment programs."
    },
    {
      id: 4,
      name: "Nigerian Government",
      logo: "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755485/about_hero_img2_seqb1c.png",
      category: "Public Policy",
      description: "Strategic partnerships for national policy development and implementation."
    },
    {
      id: 5,
      name: "Tech Innovation Hub",
      logo: "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755486/about_hero_img3_wqp3ly.png",
      category: "Technology",
      description: "Fostering digital transformation and technological advancement across Nigeria."
    },
    {
      id: 6,
      name: "Community Foundation",
      logo: "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913806/IMG-20250718-WA0103_es1daj.jpg",
      category: "Community Development",
      description: "Building sustainable communities through grassroots initiatives and local partnerships."
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Seun Fakuade",
      role: "Founder & CEO",
      image: "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755485/about_hero_img2_seqb1c.png",
      expertise: "Public Policy, Leadership, Innovation"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      expertise: "Project Management, Community Development"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      expertise: "Digital Transformation, Innovation"
    },
    {
      id: 4,
      name: "Aisha Bello",
      role: "Policy Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      expertise: "Public Policy, Governance"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [partners.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Inject Custom CSS */}
      <style>{scrollAnimation}</style>
      
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-20 left-10 w-32 h-32 bg-[#F97316]/20 rounded-full blur-3xl transition-transform duration-1000 ${
            isVisible ? 'translate-y-0' : 'translate-y-20'
          }`}
        ></div>
        <div 
          className={`absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl transition-transform duration-1000 delay-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-20'
          }`}
        ></div>
        <div 
          className={`absolute top-1/2 left-1/2 w-24 h-24 bg-[#F97316]/10 rounded-full blur-2xl transition-transform duration-1000 delay-500 ${
            isVisible ? 'scale-100' : 'scale-75'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
            Strategic Alliances
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-[#F97316]">Partners</span> & <span className="text-[#F97316]">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Collaborating with world-class organizations and assembling exceptional talent to amplify our impact and create sustainable change at scale.
          </p>
        </div>

        {/* Partners Logo Cloud */}
        <div className="mb-24" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Strategic Partners</h3>
          
          {/* Main Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16">
            {partners.map((partner, index) => (
              <div 
                key={partner.id}
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-20 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#F97316] transition-colors duration-300">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{partner.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Logo Cloud Background */}
         
        </div>

        {/* Additional Logo Cloud - Scrolling Row */}
        <div className="mb-24" data-aos="fade-up" data-aos-delay="300">
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`scrolling-${index}`}
                  className="flex-shrink-0 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Panorama Slider */}
        <div className="mb-24" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Featured Partnerships</h3>
          <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm p-8">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {partners.map((partner) => (
                <div key={partner.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        {partner.category}
                      </div>
                      <h4 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        {partner.name}
                      </h4>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                    <div className="relative">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#F97316] scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#F97316] transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-[#F97316] font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <button className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Join Our Network
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
