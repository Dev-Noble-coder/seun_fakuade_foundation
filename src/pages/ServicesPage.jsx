import React from "react";

function ServicesPage() {
  const services = [
    {
      title: "Policy & Strategy Advisory",
      description: "Helping governments and institutions design and execute transformative policies.",
      icon: "📋",
      cta: "Book a Consultation"
    },
    {
      title: "Capacity Building & Training",
      description: "Equipping leaders, professionals, and youth with the skills for the future economy.",
      icon: "🎓",
      cta: "Explore Programs"
    },
    {
      title: "Innovation & Technology Consulting",
      description: "Guiding organizations to adopt and scale frontier technologies.",
      icon: "🚀",
      cta: "Get Started"
    },
    {
      title: "Research & Data Services",
      description: "Delivering actionable insights through rigorous analysis and global benchmarking.",
      icon: "📊",
      cta: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical solutions and advisory services designed to empower governments, organizations, and innovators.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-[#F97316] text-white px-6 py-3 rounded-full hover:bg-[#EA580C] transition-colors duration-300">
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#F97316] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <button className="bg-white text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Book a Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
