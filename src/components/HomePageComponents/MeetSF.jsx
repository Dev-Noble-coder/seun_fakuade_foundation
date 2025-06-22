import React from "react";
import images from "../../utils/images.js";

function MeetSF() {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-center sm:max-h-[600px] bg-[#01103B]">
        <div className="flex-1">
          <img src={images["seun_fakuade_img.png"]}
          className="w-full h-full object-cover "
          alt="" />
        </div>
        <div className="sm:flex-1 text-white px-5 py-10 sm:p-10">
          <h3 className="text-4xl font-semibold pb-3">Meet H.C Seun Fakuade</h3>
          <p className="pb-3">
            I am ‘Seun Fakuade — a purpose-driven public servant, innovation
            strategist, and impact communicator, committed to building inclusive
            digital economies, empowering young entrepreneurs, and transforming
            public institutions for a smarter, more prosperous Ekiti State. With
            a heart rooted in service and a mind shaped by innovation, I believe
            that true progress happens when technology, good governance, and
            community development intersect. My work focuses on crafting
            policies and solutions that not only address today’s challenges but
            also lay the foundation for long-term growth.
          </p>
          <p className="pb-3">
            Through collaborative leadership, I have championed initiatives that
            drive youth empowerment, digital skills acquisition, and
            institutional transparency — all in pursuit of a future where no one
            is left behind. Whether it's reimagining public service delivery,
            mentoring emerging leaders, or advocating for inclusive innovation,
            I am driven by the belief that we rise by lifting others.
          </p>
          <p className=""> 
            Together, we can build a thriving Ekiti — one idea, one opportunity,
            and one bold step at a time.
          </p>
        </div>
      </section>
    </>
  );
}

export default MeetSF;
