import React from "react";
import { Link } from "react-router-dom";

import featuredProjects from "./FeaturedPageData";

function FeaturedPage() {
  return (
    <>
      <div className="bg-white py-20 mx-5 lg:mx-20 text-sm">
        <div>
          <h3 className="text-2xl font-semibold text-[#1D1D1D] pb-2">
            Featured Projects
          </h3>
          <div className="text-[#1D1D1D] flex justify-between items-center pb-5">
            <div className="max-w-xl text-[#bfb5b5] text-sm">
              <p className="">
                Transformative initiatives that have created lasting change
                across communities, setting new standards for development and
                innovation in West Africa.
              </p>
            </div>

            <Link to="/" className="hidden sm:block">
              <button className="flex justify-center items-center gap-2 text-[#1D1D1D] border border-gray-200 py-3 px-5 rounded-full cursor-pointer">
                View all projects
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {featuredProjects.map((featuredProject) => (
              <div
                key={featuredProject.id}
                className="border border-gray-200 rounded-md"
              >
                <div className="relative h-48">
                  <img
                    src={featuredProject.image}
                    alt="featured_projects_img"
                    className="w-full h-full object-cover rounded-t-md"
                  />
                  <div className="absolute top-4 left-4 bg-white text-[#1D1D1D] px-3 py-1 rounded-full text-sm font-semibold ">
                    {featuredProject.status}
                  </div>
                </div>

                <div className="py-6 px-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {featuredProject.topic}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {featuredProject.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <button className="flex gap-1 items-center text-[#777777]  transition-colors text-sm">
                      Impact :
                      <span className="font-semibold text-[#1D1D1D]">
                        {featuredProject.no_of_startups}
                      </span>
                    </button>
                    <div>
                      <Link to="">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4999 9.16683L18.3333 2.3335"
                            stroke="#F97316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.9999 5.6665V1.6665H14.9999"
                            stroke="#F97316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.83331 1.6665H8.16665C3.99998 1.6665 2.33331 3.33317 2.33331 7.49984V12.4998C2.33331 16.6665 3.99998 18.3332 8.16665 18.3332H13.1666C17.3333 18.3332 19 16.6665 19 12.4998V10.8332"
                            stroke="#F97316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 sm:hidden mt-5 text-[#F97316] cursor-pointer">
<p>View all projects</p>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.43 5.93018L20.5 12.0002L14.43 18.0702" stroke="#F97316" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 12H20.33" stroke="#F97316" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedPage;
