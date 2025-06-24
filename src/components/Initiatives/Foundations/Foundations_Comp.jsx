import React from "react";
import { Link } from "react-router-dom";
import images from "../../../utils/images.js";
import Foundation_Data from "./Foundations_Data.js";

function Foundations_Comp() {
  return (
    <>
      <section className="text-sm">
        <div className=" bg-[#FFFAF6] pt-[30%] sm:pt-[15%] lg:pt-[10%] pb-[5%] px-5 lg:px-0">
          <div className=" bg-cover  bg-no-repeat  text-sm flex justify-center items-center flex-col lg:block">
            <div className="flex justify-center items-center flex-col text-center px-5 sm:px-0">
              <div className=" sm:max-w-3/4 lg:max-w-2/4 flex flex-col justify-center items-center ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-5">
                  Our {""}
                  <span className="text-[#FF6600]">Foundation</span>
                </h1>
                <div className="lg:max-w-4/5 mb-4">
                  <p className="opacity-80">
                    Committed to creating lasting positive change in communities
                    through strategic philanthropy, education support, and
                    sustainable development initiatives.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <Link to="">
                    <button className="py-2 px-5 rounded-full bg-[#F97316] text-white w-full">
                      Get Involved
                    </button>
                  </Link>
                  <Link to="">
                    <button className="py-2 px-5 rounded-full bg-white text-[#1D1D1D] w-full border border-gray-200">
                      Contribute Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 py-[10%] lg:py-[5%] lg:px-[7%]">
          <div className="flex-1 px-5 lg:px-0 ">
            <img
              src={images["found_comp.jpg"]}
              alt="mission_vision_image"
              className="object-cover lg:min-w-[450px]  rounded-sm"
            />
          </div>
          <div className="lg:min-w-md py-2 flex flex-col sm:flex-row lg:flex-col justify-between flex-1 px-5 gap-3 lg:px-0">
            <div className="pb-5">
              <h3 className="text-[#01103B] font-semibold pb-2 text-xl">
                Vision Statement
              </h3>
              <p className="text-[#777777] leading-6">
                To inspire a generation of transformational leaders and
                innovators by building an inclusive, digitally empowered society
                where creativity, entrepreneurship, and public service drive
                sustainable development.
              </p>
            </div>
            <div>
              <h3 className="text-[#01103B] font-semibold pb-2 text-xl">
                Mission Statement
              </h3>
              <p className="text-[#777777] leading-6">
                To inspire a generation of transformational leaders and
                innovators by building an inclusive, digitally empowered society
                where creativity, entrepreneurship, and public service drive
                sustainable development.
              </p>
            </div>
          </div>
        </div>

        <div className="py-[10%] lg:py-[3%] text-[#1D1D1D] px-5 lg:px-0">
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="font-semibold text-2xl pb-3">Foundation Programs</h3>
            <p className="text-[#777777]">
              Strategic initiatives designed to address critical needs and
              create sustainable impact in communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5  lg:px-20 py-10">
            {Foundation_Data.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-md">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt="featured_projects_img"
                    className="w-full h-full object-cover rounded-t-md"
                  />
                  <div className="absolute top-4 left-4 bg-white text-[#F97316] px-3 py-1 rounded-full text-sm font-light ">
                    {item.tag}
                  </div>
                </div>

                <div className="py-6 px-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-end gap-1">
                    <button className="flex gap-1 items-center text-[#F97316]  transition-colors text-sm">
                      Learn More
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
        </div>

        <div className="flex flex-col justify-center items-center bg-[#01103B] text-white text-center py-[10%] lg:py-[5%] px-5">
          <h3 className="font-semibold text-2xl mb-3">
            Make a Difference Today
          </h3>
          <div className="max-w-xl">
            <p className="mb-5">
              Join our mission to create positive change in communities. Whether
              through donations, volunteering, or partnerships, every
              contribution makes a meaningful impact.
            </p>
          </div>
          <Link to="">
            <button className="bg-white text-[#F97316] py-2 px-5 rounded-full cursor-pointer">
              {" "}
              Contribute now{" "}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Foundations_Comp;
