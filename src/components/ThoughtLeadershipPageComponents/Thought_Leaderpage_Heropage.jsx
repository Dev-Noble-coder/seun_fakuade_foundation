import React from "react";
import images from "../../utils/images";

function Thought_Leadership_Heropage (){
    return (
        <>
         <section
        className="text-[#1D1D1D] min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat bg-fixed "
        style={{ backgroundImage: `url(${images["heroimg.png"]})` }}
      >
        <div className=" sm:max-w-3/4 lg:max-w-2/4 text-center flex flex-col justify-center items-center px-5 lg:px-0">
          <div className="text-white ">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-3">
              Thought{" "}
              <span className="text-[#FF6600]">Leadership</span> 
            </h1>
            <p>
              Ideas that shape Ekiti's future — one pillar at a time.
            </p>
       
          </div>
        </div>
      </section>
        </>
    )
}

export default Thought_Leadership_Heropage