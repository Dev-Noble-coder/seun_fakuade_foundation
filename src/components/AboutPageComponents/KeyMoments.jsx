import React from "react";
import { Link } from "react-router-dom";

function KeyMoments() {
  const desktopImages = [
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913805/IMG-20250718-WA0092_cboltk.jpg",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913838/IMG-20250718-WA0108_k6o3vx.jpg",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913902/IMG-20250718-WA0127_cfo6sq.jpg",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913852/IMG-20250718-WA0113_jr2mq2.jpg",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755505/key_moments_5_cn4bue.png",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913822/IMG-20250718-WA0095_szl4on.jpg",
  ];

  const mobileImages = [
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755488/key_moments_1_pkjui5.png",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755490/key_moments_2_aea90y.png",
    "https://res.cloudinary.com/drhfrgahv/image/upload/v1752755642/key_moments_3_ick7sf.png",
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
            Community Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1D] mb-6">
            In <span className="text-[#F97316]">Action</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Moments from key initiatives and community engagements that showcase our commitment to transforming lives and building sustainable communities.
          </p>
          
          {/* Desktop View All Button */}
          <div className="hidden sm:block">
            <Link to="/gallery">
              <button className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                View All Moments
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Gallery - Masonry Style */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 mb-8">
          {desktopImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src={image}
                alt={`Key Moment ${index + 1}`}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Moment {index + 1}</div>
                  <div className="text-xs text-gray-200">Community Impact</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Gallery */}
        <div className="sm:hidden grid grid-cols-1 gap-4 mb-8">
          {mobileImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image}
                alt={`Key Moment ${index + 1}`}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Moment {index + 1}</div>
                  <div className="text-xs text-gray-200">Community Impact</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden text-center">
          <Link to="/gallery">
            <button className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              View All Moments
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F97316] mb-2">500+</div>
            <div className="text-gray-600">Community Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F97316] mb-2">50K+</div>
            <div className="text-gray-600">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F97316] mb-2">25+</div>
            <div className="text-gray-600">Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyMoments;
