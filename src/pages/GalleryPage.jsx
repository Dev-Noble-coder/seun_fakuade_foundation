import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const slideshowRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const categories = [
    { id: "all", name: "All", icon: "🌟" },
    { id: "events", name: "Events", icon: "🎉" },
    { id: "projects", name: "Projects", icon: "🚀" },
    { id: "team", name: "Team", icon: "👥" },
    { id: "partnerships", name: "Partnerships", icon: "🤝" },
    { id: "community", name: "Community", icon: "🏘️" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Policy Summit 2024",
      category: "events",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      description: "Annual gathering of policy makers and thought leaders",
      date: "March 2024",
      tags: ["Policy", "Leadership", "Networking"],
    },
    {
      id: 2,
      title: "Community Development Initiative",
      category: "projects",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description:
        "Transforming local communities through sustainable development",
      date: "February 2024",
      tags: ["Development", "Sustainability", "Community"],
    },
    {
      id: 3,
      title: "Team Building Workshop",
      category: "team",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Strengthening our team bonds and collaboration skills",
      date: "January 2024",
      tags: ["Team", "Workshop", "Collaboration"],
    },
    {
      id: 4,
      title: "World Bank Partnership",
      category: "partnerships",
      image:
        "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755485/about_hero_img2_seqb1c.png",
      description: "Strategic collaboration for economic development",
      date: "December 2023",
      tags: ["Partnership", "Finance", "Development"],
    },
    {
      id: 5,
      title: "Youth Empowerment Program",
      category: "community",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Empowering the next generation of leaders",
      date: "November 2023",
      tags: ["Youth", "Leadership", "Empowerment"],
    },
    {
      id: 6,
      title: "Innovation Hub Launch",
      category: "projects",
      image:
        "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755486/about_hero_img3_wqp3ly.png",
      description: "Launching our technology innovation center",
      date: "October 2023",
      tags: ["Innovation", "Technology", "Launch"],
    },
    {
      id: 7,
      title: "Policy Roundtable",
      category: "events",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Expert discussions on key policy issues",
      date: "September 2023",
      tags: ["Policy", "Discussion", "Experts"],
    },
    {
      id: 8,
      title: "Community Outreach",
      category: "community",
      image:
        "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913806/IMG-20250718-WA0103_es1daj.jpg",
      description: "Connecting with local communities",
      date: "August 2023",
      tags: ["Community", "Outreach", "Local"],
    },
    {
      id: 9,
      title: "Strategic Planning Session",
      category: "team",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Planning our future strategic initiatives",
      date: "July 2023",
      tags: ["Strategy", "Planning", "Future"],
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 50,
    });

    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredItems.length]);

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        filterRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        slideshowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.1"
      );
  }, []);

  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <style>
        {`
          .gallery-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .gallery-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
          
          .filter-button {
            transition: all 0.3s ease;
          }
          
          .filter-button:hover {
            transform: translateY(-2px);
          }
          
          .modal-overlay {
            backdrop-filter: blur(8px);
          }
        `}
      </style>

      <div className="min-h-screen bg-white pt-20">
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
              Visual Stories
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#F97316]">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the moments, projects, and partnerships that define our
              journey in creating positive change.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-5 lg:px-20">
            <div
              ref={filterRef}
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`filter-button flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#F97316] text-white shadow-lg shadow-[#F97316]/25"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Slideshow */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Featured Highlights
            </h2>

            <div
              ref={slideshowRef}
              className="relative overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {filteredItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="h-96 lg:h-[500px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-1 bg-[#F97316]/10 text-[#F97316] px-3 py-1 rounded-full text-sm font-medium">
                            {
                              categories.find((cat) => cat.id === item.category)
                                ?.icon
                            }
                            {
                              categories.find((cat) => cat.id === item.category)
                                ?.name
                            }
                          </span>
                          <span className="text-gray-500 text-sm">
                            {item.date}
                          </span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => openModal(item)}
                          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 w-fit"
                        >
                          View Full Image
                          <svg
                            width="16"
                            height="16"
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
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 pb-8">
                {filteredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 mx-1 ${
                      index === currentSlide
                        ? "bg-[#F97316] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              All Gallery Items
            </h2>

            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group gallery-card bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => openModal(item)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {
                          categories.find((cat) => cat.id === item.category)
                            ?.icon
                        }
                        {
                          categories.find((cat) => cat.id === item.category)
                            ?.name
                        }
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F97316] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20" data-aos="fade-up">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No items found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different category or check back later.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 modal-overlay z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/75 transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-96 lg:h-[600px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 bg-[#F97316]/10 text-[#F97316] px-3 py-1 rounded-full text-sm font-medium">
                    {
                      categories.find(
                        (cat) => cat.id === selectedImage.category
                      )?.icon
                    }
                    {
                      categories.find(
                        (cat) => cat.id === selectedImage.category
                      )?.name
                    }
                  </span>
                  <span className="text-gray-500 text-sm">
                    {selectedImage.date}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedImage.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div
            ref={ctaRef}
            className="max-w-4xl mx-auto text-center px-5 lg:px-20"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-[#F97316]">Connect</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us in our mission to create positive change and build a
              better future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Involved
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200">
                Learn More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GalleryPage;
