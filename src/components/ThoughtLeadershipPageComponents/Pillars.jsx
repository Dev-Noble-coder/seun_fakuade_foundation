import React from "react";
import { Link } from "react-router-dom";
import Thought_Leadership_Data from './Thought_Leadership_Data'

function Pillars() {
    return (
        <>
            <div className="py-[10%] lg:py-[3%] text-[#1D1D1D] px-5 lg:px-0">
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="font-semibold text-2xl pb-3">The Pillars of Thought</h3>
            <p className="text-[#777777]">
             Core principles that guide our vision for a transformed Ekiti State.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5  lg:px-20 py-10">
            {Thought_Leadership_Data.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-md">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt="featured_projects_img"
                    className="w-full h-full object-cover rounded-t-md"
                  />
             <div className="absolute top-4 left-4 bg-white text-[#F97316] w-10 h-10 flex items-center justify-center rounded-full">
  {item.icon}
</div>

                </div>

                <div className="py-6 px-4">
                  <h3 className="text-sm font-semibold text-[#1D1D1D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#777777] mb-4 text-sm">
                    {item.description}
                  </p>

                  <div>
                    <div>
                        <p className="text-[#777777] font-semibold">Key initiatives :</p>
                        <div>
                            <ul className="text-sm leading-6 pl-2 text-[#777777]">
                                {item.key_initiative.map((item, index) => {
                                    return <li key={index} className="list-disc list-inside">{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        </>
    )
}

export default Pillars