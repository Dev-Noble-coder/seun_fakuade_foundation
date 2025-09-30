import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServicesPage() {
  const [currentService, setCurrentService] = useState(0);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const services = [
    {
      title: "Policy & Strategy Advisory",
      description:
        "Helping governments and institutions design and execute transformative policies that drive sustainable development and economic growth.",
      icon: "📋",
      cta: "Book a Consultation",
      features: [
        "Strategic Planning",
        "Policy Development",
        "Implementation Support",
        "Impact Assessment",
      ],
      color: "from-blue-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Capacity Building & Training",
      description:
        "Equipping leaders, professionals, and youth with the skills for the future economy through comprehensive training programs.",
      icon: "🎓",
      cta: "Explore Programs",
      features: [
        "Leadership Development",
        "Technical Skills",
        "Digital Literacy",
        "Certification Programs",
      ],
      color: "from-green-500 to-green-600",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    },
    {
      title: "Innovation & Technology Consulting",
      description:
        "Guiding organizations to adopt and scale frontier technologies that enhance efficiency and drive innovation.",
      icon: "🚀",
      cta: "Get Started",
      features: [
        "Digital Transformation",
        "Technology Integration",
        "Innovation Strategy",
        "Process Optimization",
      ],
      color: "from-purple-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    },
    {
      title: "Research & Data Services",
      description:
        "Delivering actionable insights through rigorous analysis and global benchmarking to inform strategic decisions.",
      icon: "📊",
      cta: "Learn More",
      features: [
        "Market Research",
        "Data Analytics",
        "Performance Metrics",
        "Strategic Insights",
      ],
      color: "from-orange-500 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });

    // Auto-advance service showcase
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  // GSAP animations
  useGSAP(() => {
    // Hero section animation
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        servicesRef.current.children,
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
          .service-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .service-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
          
          .service-icon {
            transition: all 0.3s ease;
          }
          
          .service-card:hover .service-icon {
            transform: scale(1) rotate(5deg);
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

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#F97316]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div
            ref={heroRef}
            className="max-w-7xl mx-auto px-5 lg:px-20 text-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
              Our Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering <span className="text-[#F97316]">Innovation</span> &{" "}
              <span className="text-[#F97316]">Growth</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Practical solutions and advisory services designed to empower
              governments, organizations, and innovators to achieve
              transformative change.
            </p>
          </div>
        </section>

        {/* Featured Service Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Service
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how our expertise can transform your organization
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentService * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="p-12 lg:p-16 flex flex-col justify-center">
                        <div className="text-6xl mb-6 service-icon">
                          {service.icon}
                        </div>
                        <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
                          {service.title}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, featureIndex) => (
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

                        <button className="cta-button inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-fit">
                          {service.cta}
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
                      <div className="relative h-96 lg:h-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-8xl opacity-20">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center pb-8">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 mx-1 ${
                      index === currentService
                        ? "bg-[#F97316] scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div ref={servicesRef} className="max-w-7xl mx-auto px-5 lg:px-20">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                All Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group service-card bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-8">
                    <div className="text-5xl mb-6 service-icon group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#F97316] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-4">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-[#F97316] mr-2"
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
                      {service.cta}
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
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our services can help you achieve your goals and
              drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-button bg-white text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Book a Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#F97316] transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesPage;
