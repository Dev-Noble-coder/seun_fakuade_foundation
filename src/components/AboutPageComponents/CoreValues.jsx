import React from "react";

function CoreValues() {
  const values = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Innovation",
      description: "Constantly seeking creative and tech-forward solutions to public challenges."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Integrity",
      description: "Upholding transparency, accountability, and ethical leadership in all dealings."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C23 18.1137 22.6488 17.2528 22.0007 16.5858C21.3526 15.9188 20.446 15.5 19.5 15.5H18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.012 6.12083 19.012 7.005C19.012 7.88917 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Empowerment",
      description: "Championing opportunities for youth, women, and underserved communities."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Excellence",
      description: "Driving high standards in project delivery, stakeholder engagement, and policymaking."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 3 15.9391 3 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 8V6C20 4.93913 19.0609 4 18 4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Service",
      description: "Prioritizing people-centered governance and responsive leadership."
    }
  ];

  return (
    <section className="bg-white py-24 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                Foundation
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1D] leading-tight">
                Our <span className="text-[#F97316]">Core Values</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our core values are the compass that directs every initiative we take, every partnership we build, and every life we aim to improve. They reflect our unwavering commitment to excellence, accountability, and service.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F97316]/10 rounded-lg flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#1D1D1D] mb-2 text-lg">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/drhfrgahv/image/upload/v1752913806/IMG-20250718-WA0094_s8bgno.jpg" 
                alt="Core Values" 
                className="w-full h-[600px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#F97316] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F97316] to-orange-400 rounded-3xl opacity-20 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
