import React from "react";

function MarketplacePage() {
  const marketplaceItems = [
    {
      title: "Knowledge Products",
      description: "Access white papers, reports, and thought leadership content.",
      icon: "📚",
      cta: "Explore Products",
      features: ["White Papers", "Research Reports", "Policy Briefs", "Case Studies"]
    },
    {
      title: "Digital Tools",
      description: "Practical apps, platforms, and resources for innovation and governance.",
      icon: "🛠️",
      cta: "Try Tools",
      features: ["Innovation Platforms", "Governance Apps", "Data Analytics", "Collaboration Tools"]
    },
    {
      title: "Partnerships & Collaboration",
      description: "Connect with global institutions, experts, and change-makers.",
      icon: "🤝",
      cta: "Connect Now",
      features: ["Global Networks", "Expert Matching", "Collaboration Opportunities", "Joint Ventures"]
    },
    {
      title: "Learning Resources",
      description: "Courses, masterclasses, and toolkits for continuous growth.",
      icon: "🎯",
      cta: "Start Learning",
      features: ["Online Courses", "Masterclasses", "Toolkits", "Certification Programs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated hub for knowledge, solutions, and partnerships.
          </p>
        </div>
      </div>

      {/* Marketplace Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketplaceItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              {/* Features List */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-[#F97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-[#F97316] text-white px-6 py-3 rounded-full hover:bg-[#EA580C] transition-colors duration-300 w-full">
                {item.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#F97316] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Marketplace
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Discover resources, connect with experts, and accelerate your growth journey.
          </p>
          <button className="bg-white text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarketplacePage;
