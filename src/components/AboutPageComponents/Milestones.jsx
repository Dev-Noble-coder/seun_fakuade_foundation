import React from "react";
import { Link } from "react-router-dom";
import MilestonesData from "./MilestonesData";

function Milestones() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
            Our Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1D] mb-6">
            Key <span className="text-[#F97316]">Milestones</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A journey of impact and transformation that has shaped Nigeria's future through strategic leadership and innovative solutions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MilestonesData.map((milestone, index) => (
            <div
              key={milestone.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {milestone.year}
                </div>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1D1D1D] mb-3 leading-tight">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {milestone.description}
                </p>
                
                {/* Link Button */}
                <Link 
                  to="#" 
                  className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:text-[#EA580C] transition-colors duration-300 group/link"
                >
                  {milestone.link_info}
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  >
                    <path 
                      d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeMiterlimit="10" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M3.5 12H20.33" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeMiterlimit="10" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            to="/milestones" 
            className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View Full Timeline
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
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Milestones;
