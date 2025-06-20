import React from "react";
import images from "../../utils/images";

function AboutHeroPage() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${images["about_hero_lines.png"]})` }}
        className="min-h-screen bg-cover bg-no-repeat bg-[#FFFAF6] lg:py-[10%] text-sm flex justify-center items-center flex-col lg:block"
      >
        <div className="flex justify-center items-center flex-col text-center px-5 sm:px-0">
          <div className=" sm:max-w-3/4 lg:max-w-2/4 flex flex-col justify-center items-center ">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-5">
              Visionary Leadership for{" "}
              <span className="text-[#FF6600]">Sustainable Impact</span>
            </h1>
            <div className="lg:max-w-3/4 mb-4">
                  <p className="opacity-80">
              Dedicated to transforming communities through strategic
              innovation, inclusive development, and empowering leadership that
              creates lasting positive change.
            </p>
            </div>
          
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5">
            <img
                src={images["about_hero_img1.png"]}
                alt="About Hero"
                className="hidden lg:block w-[28%] h-auto  object-cover"
            />
            <img
                src={images["about_hero_img2.png"]}
                alt="About Hero"
                className="hidden sm:block sm:w-[60%] lg:w-[28%] h-auto  object-cover"
            />
            <img
                src={images["about_hero_img3.png"]}
                alt="About Hero"
                className=" sm:hidden lg:block w-full px-5 sm:px-0 lg:w-[28%] h-auto object-cover"
            />
        </div>
      </div>
    </>
  );
}

export default AboutHeroPage;
