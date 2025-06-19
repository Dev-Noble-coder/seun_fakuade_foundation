import React from "react";
import Partners from "./PartnershipPageData";

function PartnershipPage() {
  return (
    <>
      <div className="bg-white text-sm  py-20">
        <div className=" flex flex-col justify-center items-center text-center mb-10">
          <h2 className="text-2xl pb-1 font-semibold text-[#1D1D1D]">
            Strategic Partnerships
          </h2>
          <div className="max-w-sm sm:max-w-xl ">
            <p className="text-[#777777]">
              Collaborating with world-class organizations to amplify our impact
              and create sustainable change at scale.
            </p>
          </div>
        </div>
        <div className="px-5 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center ">
            {Partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white border border-gray-200 rounded-lg py-4 px-3 flex flex-col items-center"
              >
                <img
                  src={partner.partner_logo}
                  alt={partner.partner_name}
                  className="rounded-md h-24 mb-4"
                />
                <h3 className="text-lg font-light text-[#01103B] mb-1">
                  {partner.partner_name}
                </h3>
                <p className="text-[#01103B] font-semibold">
                  {partner.partner_description}
                </p>
                <p className="text-[#777777] pb-3">{partner.partner_info}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <p className="text-[#777777]">
          Interested in partnership opportunities? 
          </p>
          <div className="flex justify-center items-center pl-1">
            <p className="text-[#F97316]"> <a href="">Get in touch</a></p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.43 5.93018L20.5 12.0002L14.43 18.0702"
                stroke="#F97316"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#F97316"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnershipPage;
