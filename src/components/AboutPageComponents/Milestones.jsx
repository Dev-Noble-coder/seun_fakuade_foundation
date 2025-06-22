import React from "react";
import { Link } from "react-router-dom";
import MilestonesData from "./MilestonesData";

function Milestones() {
  return (
    <>
      <section className="bg-white py-20 mx-5 lg:mx-20 text-sm">
        <div>
          <h3 className="text-2xl font-semibold text-[#1D1D1D] pb-2">
            Key Milestones
          </h3>
          <div className="text-[#1D1D1D] pb-5">
            <div className="max-w-xl text-[#777777] text-sm">
              <p className="">A journey of impact and transformation</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MilestonesData.map((milestone) => (
            <div
              key={milestone.id}
              className="border border-gray-200 rounded-md relative"
            >
              <div className="relative h-48">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              <div className="py-3 px-4">
                <h4 className="text-lg font-bold text-[#01103B] mb-2">
                  {milestone.year}
                </h4>

                <h5 className="text-sm font-semibold text-[#1D1D1D] pb-2">{milestone.title}</h5>
                <p className="text-[#777777] mb-4">{milestone.description}</p>
                <Link to="#" className="text-[#F97316]  flex justify-start items-center gap-1">
                  {milestone.link_info}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702" stroke="#F97316" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 12H20.33" stroke="#F97316" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Milestones;
