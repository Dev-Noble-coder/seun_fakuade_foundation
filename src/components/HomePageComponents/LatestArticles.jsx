import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LatestArticles() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Articles", color: "bg-gray-600" },
    { id: "politics", name: "Politics & Governance", color: "bg-blue-600" },
    { id: "policies", name: "Policies", color: "bg-green-600" },
    { id: "whitepapers", name: "Whitepapers", color: "bg-purple-600" },
    { id: "opinion", name: "Opinion Pieces", color: "bg-orange-600" },
    { id: "strategic", name: "Strategic", color: "bg-red-600" }
  ];

  const articles = [
    {
      id: 1,
      title: "Digital Transformation in Nigerian Governance: A Roadmap to 2030",
      excerpt: "Exploring the critical role of technology in modernizing public administration and improving service delivery across Nigeria.",
      category: "politics",
      author: "Dr. Seun Fakuade",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Development Goals: Nigeria's Implementation Strategy",
      excerpt: "A comprehensive analysis of how Nigeria can achieve its SDG targets through innovative policy frameworks and community engagement.",
      category: "policies",
      author: "Policy Research Team",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 3,
      title: "Youth Empowerment Through Digital Skills: A Whitepaper",
      excerpt: "Research findings on the impact of digital literacy programs on youth employment and economic development in West Africa.",
      category: "whitepapers",
      author: "Research Division",
      date: "Dec 10, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "The Future of Smart Cities in Africa: Lessons from Ekiti State",
      excerpt: "How Ekiti State is pioneering smart city initiatives and what other African states can learn from this innovative approach.",
      category: "strategic",
      author: "Innovation Team",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Community-Led Development: A New Paradigm for African Growth",
      excerpt: "Why community-driven initiatives are the key to sustainable development and how to implement them effectively.",
      category: "opinion",
      author: "Community Development Expert",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 6,
      title: "Innovation Policy Framework: Driving Economic Growth in Nigeria",
      excerpt: "A strategic approach to fostering innovation ecosystems and supporting entrepreneurship across different sectors.",
      category: "policies",
      author: "Economic Policy Unit",
      date: "Dec 3, 2024",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : "bg-gray-600";
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
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
            Latest Articles
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Stay informed with our latest insights on politics, policies, and strategic developments shaping Nigeria's future.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={categories.indexOf(category) * 100}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === "all" && (
          <div className="mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getCategoryColor("politics")}`}>
                      {getCategoryName("politics")}
                    </span>
                    <span className="text-gray-500 text-sm">Featured</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#1D1D1D] leading-tight">
                    Digital Transformation in Nigerian Governance: A Roadmap to 2030
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Exploring the critical role of technology in modernizing public administration and improving service delivery across Nigeria.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>By Dr. Seun Fakuade</span>
                    <span>Dec 15, 2024</span>
                    <span>8 min read</span>
                  </div>
                  <button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    Read Full Article
                  </button>
                </div>
                <div className="relative">
                  <img 
                                      src="https://res.cloudinary.com/drhfrgahv/image/upload/v1752755485/about_hero_img2_seqb1c.png"
                    alt="Featured Article"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles
            .filter(article => !article.featured || activeCategory !== "all")
            .map((article, index) => (
            <div 
              key={article.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(article.category)}`}>
                    {getCategoryName(article.category)}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1D1D1D] leading-tight group-hover:text-[#F97316] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="text-[#F97316] hover:text-[#EA580C] font-semibold transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="group bg-gray-100 hover:bg-gray-200 text-[#1D1D1D] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 mx-auto border border-gray-200"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            View All Articles
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;
