import React from "react";


function AboutHeroPage() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(https://res.cloudinary.com/drhfrgahv/image/upload/v1752755486/about_hero_lines_l2rhrv.png)` }}
        className="min-h-screen bg-cover  bg-no-repeat bg-[#FFFAF6] lg:py-[10%] text-sm flex justify-center items-center flex-col lg:block"
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
                src='https://res.cloudinary.com/drhfrgahv/image/upload/v1752755486/about_hero_img1_eaqwpt.png'
                alt="About Hero Img1"
                className="hidden lg:block w-[28%] h-auto  object-cover"
            />
            <img
                src='https://res.cloudinary.com/drhfrgahv/image/upload/v1752755485/about_hero_img2_seqb1c.png'
                alt="About Hero Img2"
                className="hidden sm:block sm:w-[60%] lg:w-[28%] h-auto  object-cover"
            />
            <img
                src='https://res.cloudinary.com/drhfrgahv/image/upload/v1752755486/about_hero_img3_wqp3ly.png'
                alt="About Hero Img3"
                className=" sm:hidden lg:block w-full px-5 sm:px-0 lg:w-[28%] h-auto object-cover"
            />
        </div>
      </section>
    </>
  );
}

export default AboutHeroPage;
