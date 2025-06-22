import React from "react";
import { Link } from "react-router-dom";
import images from "../../utils/images.js";

function KeyMoments() {
  return (
    <>
      <section className="bg-white py-20 px-5 lg:px-20 text-sm">
        <h3 className="text-2xl font-semibold text-[#1D1D1D] pb-2">
          In action
        </h3>
        <div className="text-[#1D1D1D] flex justify-between items-center pb-5">
          <div className="max-w-xl text-[#777777] text-sm">
            <p className="">
              Moments from key initiatives and community engagements.
            </p>
          </div>

          <Link to="/" className="hidden sm:block">
            <button className="flex justify-center items-center gap-2 text-[#1D1D1D] border border-gray-200 py-3 px-5 rounded-full cursor-pointer">
              View all
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
        <div className="hidden sm:grid  sm:grid-cols-3 gap-1">
          {[
            "key_moments_1.png", // index 0
            "key_moments_2.png", // index 1
            "key_moments_3.png", // index 2
            "key_moments_4.png", // index 3
            "key_moments_5.png", // index 4
            "key_moments_6.png", // index 5
          ].map((name, i) => {
            let borderClass = "";

            if (i === 0) borderClass = "rounded-tl-lg"; // top-left
            if (i === 2) borderClass = "rounded-tr-lg"; // top-right
            if (i === 3) borderClass = "rounded-bl-lg"; // bottom-left
            if (i === 5) borderClass = "rounded-br-lg"; // bottom-right

            return (
              <div key={i} className="w-full">
                <img
                  src={images[name]}
                  alt=""
                  className={`w-full h-[300px] object-cover ${borderClass}`}
                />
              </div>
            );
          })}
        </div>
        <div className="sm:hidden grid grid-cols-1  gap-1">
          {[
            "key_moments_1.png", // index 0
            "key_moments_2.png", // index 1
            "key_moments_3.png", // index 2
          ].map((name, i) => {
            let borderClass = "";

            if (i === 0) borderClass = "rounded-t-lg"; // top-left
            if (i === 2) borderClass = "rounded-b-lg"; // top-right
            return (
              <div key={i} className="w-full">
                <img
                  src={images[name]}
                  alt=""
                  className={`w-full h-[300px] object-cover ${borderClass}`}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center  "> 
               <Link to="/" className="block sm:hidden mt-5">
            <button className="flex justify-center items-center gap-2 text-[#1D1D1D] border border-gray-200 py-3 px-5 rounded-full cursor-pointer">
              View all
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
      </section>
    </>
  );
}

export default KeyMoments;
