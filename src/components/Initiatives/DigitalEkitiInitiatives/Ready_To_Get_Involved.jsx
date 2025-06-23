import React from "react";
import { Link } from "react-router-dom";

function Ready_To_Get_Inovolved() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[#01103B] text-white text-center py-[8%] lg:py-[5%] px-5">
        <h3 className="font-semibold text-2xl mb-3">
          Ready to Get Inovolved ?
        </h3>
        <div className="max-w-xl">

        <p className="mb-5">
          Join our ecosystem of innovators, entrepreneurs, and change-makers
          working to transform communities and create sustainable impact.
        </p>
        </div>
        <Link to=''>
          <button className="bg-white text-[#F97316] py-2 px-5 rounded-full cursor-pointer"> Get in touch </button>
        </Link>
      </section>
    </>
  );
}

export default Ready_To_Get_Inovolved;
