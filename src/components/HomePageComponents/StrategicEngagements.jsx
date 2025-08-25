import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function StrategicEngagements() {
  const engagements = [
    {
      id: 1,
      title: "World Bank Group",
      subtitle: "Development Finance",
      description: "Supporting economic development in West Africa",
      image: "https://i.imgur.com/qTUcXDN.jpeg"
    },
    {
      id: 2,
      title: "Africa Union",
      subtitle: "Policy & Governance",
      description: "International partnerships established",
      image: "https://i.imgur.com/qCF7gGL.jpeg"
    },
    {
      id: 3,
      title: "UNDP",
      subtitle: "Sustainable Development",
      description: "Implementing SDG-aligned programs for human development",
      image: "https://i.imgur.com/GOlihut.jpeg"
    },
    {
      id: 4,
      title: "Ford Foundation",
      subtitle: "Social Justice",
      description: "Supporting grassroots movements and community empowerment",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Math Wiz Kid Program",
      subtitle: "Education Innovation",
      description: "Revolutionary mathematics education for young minds",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 6,
      title: "Steam Bootcamp",
      subtitle: "Skills Development",
      description: "Intensive training in Science, Technology, Engineering, Arts, and Mathematics",
      image: "https://i.imgur.com/4zUo9Hr.jpeg"
    },
    {
      id: 7,
      title: "Robotics Academy",
      subtitle: "Technology Training",
      description: "Advanced robotics and automation education programs",
      image: "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755486/about_hero_img3_wqp3ly.png"
    },
    {
      id: 8,
      title: "Mentorship and Fellowship",
      subtitle: "Leadership Development",
      description: "Comprehensive mentorship programs for emerging leaders",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 right-10 w-32 h-32 bg-[#F97316] rounded-full blur-3xl"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="300"
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="600"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Strategic Engagements
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Collaborating with world-class organizations to amplify our impact and create sustainable change at scale.
          </p>
        </div>

        {/* Engagement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((engagement, index) => (
            <div 
              key={engagement.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/20 z-10"></div>
                <img 
                  src={engagement.image} 
                  alt={engagement.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1D1D1D] leading-tight group-hover:text-[#F97316] transition-colors duration-300">
                    {engagement.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">
                    {engagement.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {engagement.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="mt-4">
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#F97316] to-orange-400 transition-all duration-500"></div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="group bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            Explore All Partnerships
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StrategicEngagements;
