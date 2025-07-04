import React from "react";
import { Link } from "react-router-dom";

function Schedule(){
    return(
        <>
          <div className="flex flex-col justify-center items-center bg-[#01103B] text-white text-center py-[10%] lg:py-[5%] px-5 text-sm">
          <h3 className="font-semibold text-2xl mb-3">
           Schedule a Meeting
          </h3>
          <div className="max-w-xl">
            <p className="mb-5">
              Prefer a direct conversation? Book a meeting to discuss your ideas and how we can work together.
            </p>
          </div>
          <Link to="">
            <button className="bg-white text-[#F97316] py-2 px-5 rounded-full cursor-pointer">
              {" "}
              Book a meeting{" "}
            </button>
          </Link>
        </div>
        </>
    )
}

export default Schedule