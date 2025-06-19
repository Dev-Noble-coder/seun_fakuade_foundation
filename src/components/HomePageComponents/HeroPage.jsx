import React from "react";
import { Link } from "react-router-dom";
import images from "../../utils/images.js";

function HeroPage() {
  return (
    <>
      <div
        className="text-[#1D1D1D] min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat bg-fixed "
        style={{ backgroundImage: `url(${images["heroimg.png"]})` }}
      >
        <div className="max-w-2/4 text-center flex flex-col justify-center items-center">
          <div className="text-center text-[#F97316] bg-white text-sm border border-[#F97316] rounded-full px-4 py-0.5 mb-2 w-fit ">
            <ul className="list-disc list-inside">
              <li>Active in Development & Policy</li>
            </ul>
          </div>
          <div className="text-white ">
            <h1 className="text-5xl font-bold  mb-3">
              Transforming{" "}
              <span className="text-[#FF6600]">Nigeria's Future</span> Through
              Innovation
            </h1>
            <p>
              Building sustainable solutions for economic development,
              governance innovation, and youth empowerment across West Africa.
              Creating impact that lasts generations.
            </p>
            <div className="flex flex-row justify-center items-center gap-2 mt-4">
              <button className="flex justify-center items-center gap-1 bg-[#FF6600] py-2 px-4 rounded-full text-white text-sm cursor-pointer">
                Explore my impact
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="flex justify-center items-center gap-1 bg-white py-2 px-4 rounded-full text-[#1D1D1D] text-sm cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                    stroke="#1D1D1D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Watch my story
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;

// c={images['image1.png']}
