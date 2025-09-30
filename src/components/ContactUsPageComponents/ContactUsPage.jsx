import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const heroRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);
  const ctaRef = useRef(null);

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        contactInfoRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        contactCardsRef.current?.children,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        formRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <style>
        {`
          .contact-card {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .contact-icon {
            transition: all 0.3s ease;
            flex-shrink: 0;
          }
          
          .contact-icon:hover {
            transform: scale(1.1);
            background: rgba(249, 115, 22, 0.2);
          }
          
          .form-input {
            transition: all 0.3s ease;
            min-height: 48px;
          }
          
          .form-input:focus {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(249, 115, 22, 0.15);
            border-color: #F97316;
          }
          
          .submit-btn {
            position: relative;
            overflow: hidden;
            min-height: 48px;
          }
          
          .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .submit-btn:hover::before {
            left: 100%;
          }

          .contact-info-card {
            min-height: 120px;
            display: flex;
            align-items: flex-start;
          }

          .contact-info-content {
            flex: 1;
            min-width: 0;
          }

          .contact-info-content h3 {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .contact-info-content p {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .contact-info-content a {
            word-break: break-all;
          }

          @media (max-width: 1024px) {
            .contact-grid {
              gap: 2rem;
            }
          }

          @media (max-width: 768px) {
            .contact-grid {
              gap: 1.5rem;
            }
            
            .contact-info-card {
              min-height: auto;
            }
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
            Get In Touch
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contact / <span className="text-[#F97316]">Get Involved</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got an innovative idea or research project in mind? Let's explore
            possibilities and bring it to life together!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contact Information */}
            <div ref={contactInfoRef} className="space-y-8">
              <div data-aos="fade-up" className="mb-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Connect
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to help you bring your innovative ideas to life.
                  Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div ref={contactCardsRef} className="space-y-6 mt-4">
                <div
                  className="group contact-card contact-info-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-start gap-4 w-full">
                    <div className="contact-icon bg-[#F97316]/10 p-3 rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#F97316]"
                      >
                        <path
                          opacity="0.2"
                          d="M28.001 7L16.001 18L4.00098 7H28.001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M28 7L16 18L4 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.8184 16L4.30859 24.7174"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.6916 24.7175L18.1816 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Send us an email anytime
                      </p>
                      <a
                        href="mailto:info@ekitiimpacthub.org"
                        className="text-[#F97316] hover:text-[#EA580C] transition-colors duration-300 break-all"
                      >
                        info@ekitiimpacthub.org
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="group contact-card contact-info-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-start gap-4 w-full">
                    <div className="contact-icon bg-[#F97316]/10 p-3 rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#F97316]"
                      >
                        <path
                          d="M15.9998 17.9067C18.2973 17.9067 20.1598 16.0442 20.1598 13.7467C20.1598 11.4492 18.2973 9.58667 15.9998 9.58667C13.7023 9.58667 11.8398 11.4492 11.8398 13.7467C11.8398 16.0442 13.7023 17.9067 15.9998 17.9067Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M4.8266 11.3201C7.45327 -0.226582 24.5599 -0.213249 27.1733 11.3334C28.7066 18.1068 24.4933 23.8401 20.7999 27.3868C18.1199 29.9734 13.8799 29.9734 11.1866 27.3868C7.5066 23.8401 3.29327 18.0934 4.8266 11.3201Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-600 mb-2">Our office location</p>
                      <p className="text-gray-800">
                        No. 2 Adebayo Street, Ado-Ekiti, Ekiti State, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="group contact-card contact-info-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex items-start gap-4 w-full">
                    <div className="contact-icon bg-[#F97316]/10 p-3 rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#F97316]"
                      >
                        <path
                          d="M29.2937 24.4401C29.2937 24.9201 29.187 25.4134 28.9603 25.8934C28.7337 26.3734 28.4403 26.8267 28.0537 27.2534C27.4003 27.9734 26.6803 28.4934 25.867 28.8267C25.067 29.1601 24.2003 29.3334 23.267 29.3334C21.907 29.3334 20.4537 29.0134 18.9203 28.3601C17.387 27.7067 15.8537 26.8267 14.3337 25.7201C12.8003 24.6001 11.347 23.3601 9.96032 21.9867C8.58699 20.6001 7.34699 19.1467 6.24033 17.6267C5.14699 16.1067 4.26699 14.5867 3.62699 13.0801C2.98699 11.5601 2.66699 10.1067 2.66699 8.72008C2.66699 7.81341 2.82699 6.94675 3.14699 6.14675C3.46699 5.33341 3.97366 4.58675 4.68033 3.92008C5.53366 3.08008 6.46699 2.66675 7.45366 2.66675C7.82699 2.66675 8.20033 2.74675 8.53366 2.90675C8.88033 3.06675 9.18699 3.30675 9.42699 3.65341L12.5203 8.01341C12.7603 8.34675 12.9337 8.65341 13.0537 8.94675C13.1737 9.22675 13.2403 9.50675 13.2403 9.76008C13.2403 10.0801 13.147 10.4001 12.9603 10.7067C12.787 11.0134 12.5337 11.3334 12.2137 11.6534L11.2003 12.7067C11.0537 12.8534 10.987 13.0267 10.987 13.2401C10.987 13.3467 11.0003 13.4401 11.027 13.5467C11.067 13.6534 11.107 13.7334 11.1337 13.8134C11.3737 14.2534 11.787 14.8267 12.3737 15.5201C12.9737 16.2134 13.6137 16.9201 14.307 17.6267C15.027 18.3334 15.7203 18.9867 16.427 19.5867C17.1203 20.1734 17.6937 20.5734 18.147 20.8134C18.2137 20.8401 18.2937 20.8801 18.387 20.9201C18.4937 20.9601 18.6003 20.9734 18.7203 20.9734C18.947 20.9734 19.1203 20.8934 19.267 20.7467L20.2803 19.7467C20.6137 19.4134 20.9337 19.1601 21.2403 19.0001C21.547 18.8134 21.8537 18.7201 22.187 18.7201C22.4403 18.7201 22.707 18.7734 23.0003 18.8934C23.2937 19.0134 23.6003 19.1867 23.9337 19.4134L28.347 22.5467C28.6937 22.7867 28.9337 23.0667 29.0803 23.4001C29.2137 23.7334 29.2937 24.0667 29.2937 24.4401Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-600 mb-2">Speak with our team</p>
                      <a
                        href="tel:+2341234567890"
                        className="text-[#F97316] hover:text-[#EA580C] transition-colors duration-300 break-all"
                      >
                        +234 (0) 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className="contact-card rounded-2xl p-6 lg:p-8 shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="mb-6 lg:mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-gray-50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Enter your organization"
                    className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your project or idea..."
                    className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-gray-50 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
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
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in our mission to transform Nigeria's future through
            innovation, policy development, and sustainable community
            initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#F97316] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Book a Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#F97316] transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
