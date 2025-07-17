import React from "react";

function Section_Four() {
  return (
    <div className="w-full flex flex-col lg:flex-row my-20 text-sm">
      {/* Left: Resources & Reports */}
      <div className="bg-[#00113D] text-white flex-1 flex flex-col justify-center px-8 py-12">
        <h2 className="text-xl  sm:text-2xl font-semibold mb-6">Resources &amp; Reports</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 grid grid-cols-1 sm:grid-cols-2 ">
          <li>Digital Transformation Whitepaper</li>
          <li>Youth Empowerment Report 2024</li>
          <li>Governance Innovation Framework</li>
          <li>Partnership Impact Assessment</li>
        </ul>
        <button className="bg-white text-[#FF6600] font-medium rounded-full px-6 py-3 transition hover:bg-[#FF6600] hover:text-white">
          Download resources
        </button>
      </div>
      {/* Right: Image */}
      <div className="flex-1 hidden lg:block">
        <img
          src="https://res.cloudinary.com/drhfrgahv/image/upload/v1752755497/section_four_g6sbc2.jpg"
          alt="Resources"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Section_Four;