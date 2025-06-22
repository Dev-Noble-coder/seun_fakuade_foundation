import React, { useState, useRef, useEffect } from "react";
import Digital_Ekiti_Initiatives_Data from "./Digital_Ekiti_Initiatives_Data";
import images from "../../../utils/images"; // Make sure this import is correct
import { Link } from "react-router-dom";

const tabCategories = [
  { label: "All", value: "All" },
  { label: "Innovation", value: "Innovation" },
  { label: "Foundations", value: "Foundations" },
  { label: "Enterpreneurship", value: "Enterpreneurship" },
  { label: "Goverance", value: "Goverance" },
  { label: "Youth Development", value: "Youth Development" },
  { label: "Community", value: "Community" },
  { label: "Economic Development", value: "Economic Development" },
];

// Map your data to categories (add a 'category' field to each item if needed)
const categorizedData = Digital_Ekiti_Initiatives_Data.map((item, idx) => ({
  ...item,
  category:
    idx % 2 === 0
      ? "Innovation"
      : idx % 3 === 0
      ? "Enterpreneurship"
      : "Goverance", // Example logic, adjust as needed
}));

function Digital_Ekiti_Initiative() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All"
      ? categorizedData
      : categorizedData.filter((item) => item.category === activeTab);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <>
      <section>
        <div className=" bg-[#FFFAF6] pt-[30%] sm:pt-[15%] lg:pt-[10%] pb-[5%] px-5 lg:px-0">
          <div className=" bg-cover  bg-no-repeat  text-sm flex justify-center items-center flex-col lg:block">
            <div className="flex justify-center items-center flex-col text-center px-5 sm:px-0">
              <div className=" sm:max-w-3/4 lg:max-w-2/4 flex flex-col justify-center items-center ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-5">
                  Digital Ekiti {""}
                  <span className="text-[#FF6600]">Initiatives</span>
                </h1>
                <div className="lg:max-w-4/5 mb-4">
                  <p className="opacity-80">
                    A program aimed at equipping youth, civil servants, and
                    small businesses with digital skills, internet access, and
                    e-governance tools — fostering a smarter, tech-enabled
                    economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll lg:overflow-x-visible ">
            <div className="flex lg:justify-center gap-3 mt-10">
              <div className="flex gap-3 min-w-max " ref={scrollRef}>
                {tabCategories.map((tab) => (
                  <button
                    key={tab.value}
                    className={`py-2 px-5 border border-gray-200 rounded-full cursor-pointer  hover:bg-[#F97316] hover:text-white ${
                      activeTab === tab.value
                        ? "bg-[#F97316] text-white"
                        : "bg-white"
                    }`}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 px-5 lg:px-20    ">
          {filteredData.length === 0 ? (
            <p className="text-center">
              No initiatives found for this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-md"
                >
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt="featured_projects_img"
                      className="w-full h-full object-cover rounded-t-md"
                    />
                    <div className="absolute top-4 left-4 bg-white text-[#1D1D1D] px-3 py-1 rounded-full text-sm font-semibold ">
                      {item.status}
                    </div>
                  </div>

                  <div className="py-6 px-4">
                    <h3 className="text-sm font-semibold text-[#1D1D1D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#777777] mb-4 text-sm">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center justify-end gap-1">
                      <button className="flex gap-1 items-center text-[#F97316]  transition-colors text-sm">
                        Learn More
                      </button>
                      <div>
                        <Link
                          to={`/initiatives/digital_ekiti_initiative/${item.id}`}
                        >
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
          )}
        </div>
      </section>
    </>
  );
}

export default Digital_Ekiti_Initiative;
