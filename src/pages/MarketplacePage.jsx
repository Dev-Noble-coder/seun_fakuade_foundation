import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function MarketplacePage() {
  const [currentItem, setCurrentItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  const heroRef = useRef(null);
  const itemsRef = useRef(null);
  const ctaRef = useRef(null);

  const marketplaceItems = [
    {
      title: "Knowledge Products",
      description:
        "Access white papers, reports, and thought leadership content.",
      icon: "📚",
      cta: "Explore Products",
      features: [
        "White Papers",
        "Research Reports",
        "Policy Briefs",
        "Case Studies",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Digital Tools",
      description:
        "Practical apps, platforms, and resources for innovation and governance.",
      icon: "🛠️",
      cta: "Try Tools",
      features: [
        "Innovation Platforms",
        "Governance Apps",
        "Data Analytics",
        "Collaboration Tools",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      title: "Partnerships & Collaboration",
      description:
        "Connect with global institutions, experts, and change-makers.",
      icon: "🤝",
      cta: "Connect Now",
      features: [
        "Global Networks",
        "Expert Matching",
        "Collaboration Opportunities",
        "Joint Ventures",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Learning Resources",
      description:
        "Courses, masterclasses, and toolkits for continuous growth.",
      icon: "🎯",
      cta: "Start Learning",
      features: [
        "Online Courses",
        "Masterclasses",
        "Toolkits",
        "Certification Programs",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });

    // Auto-advance featured item
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % marketplaceItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [marketplaceItems.length]);

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        itemsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  return (
    <>
      <style>
        {`
          .marketplace-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .marketplace-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
          
          .feature-icon {
            transition: all 0.3s ease;
          }
          
          .feature-icon:hover {
            transform: scale(1.1) rotate(5deg);
          }
          
          .cta-button {
            position: relative;
            overflow: hidden;
          }
          
          .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .cta-button:hover::before {
            left: 100%;
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F97316]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
            Curated Hub
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="text-[#F97316]">Marketplace</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated hub for knowledge, solutions, and partnerships designed to
            accelerate your growth and impact.
          </p>
        </div>
      </section>

      {/* Featured Item Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Resource
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular marketplace offerings
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentItem * 100}%)` }}
            >
              {marketplaceItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-12 lg:p-16 flex flex-col justify-center">
                      <div className="text-6xl mb-6 feature-icon">
                        {item.icon}
                      </div>
                      <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        {item.title}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {item.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-gray-300"
                          >
                            <svg
                              className="w-5 h-5 text-[#F97316] mr-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-fit">
                        {item.cta}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`h-96 lg:h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                    >
                      <div className="text-8xl opacity-20">{item.icon}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center pb-8">
              {marketplaceItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentItem(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 mx-1 ${
                    index === currentItem
                      ? "bg-[#F97316] scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Grid */}
      <section className="py-20 bg-gray-50">
        <div ref={itemsRef} className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              All Marketplace Items
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of resources and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketplaceItems.map((item, index) => (
              <div
                key={index}
                className="group marketplace-card bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#F97316] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4">
                      What's Included:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-[#F97316] mr-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="cta-button w-full bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    {item.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-[#F97316] to-[#EA580C]"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Marketplace
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover resources, connect with experts, and accelerate your growth
            journey with our curated marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#F97316] transition-all duration-300 transform hover:scale-105">
              Browse Resources
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketplacePage;
