import React from "react";
import images from "../../utils/images";

function ContactUsPage() {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen py-[30%] sm:py-[20%] lg:py-[10%]  px-5 lg:px-20 text-white flex flex-col lg:flex-row justify-between items-start text-sm gap-10 lg:gap-0 "
        style={{ backgroundImage: `url(https://res.cloudinary.com/drhfrgahv/image/upload/v1752755490/contact_img_wci7vx.png)` }}
      >
        <div className="z-30">
          <h3 className="font-semibold text-2xl pb-2">Get In Touch</h3>
          <p className="pb-5"> Got an innovative idea or research project in mind? <br /> Let’s explore possibilities and bring it to life together!</p>

          <div className="flex justify-start items-center gap-3 pb-3">
            <div className=" bg-[#5d63716d] flex justify-center items-center p-2 rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M28.001 7L16.001 18L4.00098 7H28.001Z"
                  fill="white"
                />
                <path
                  d="M28 7L16 18L4 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.8184 16L4.30859 24.7174"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.6916 24.7175L18.1816 16"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400">EMAIL US</p>
              <p>info@ekitiimpacthub.org</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 pb-3">
            <div className=" bg-[#5d63716d] flex justify-center items-center p-2 rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9998 17.9067C18.2973 17.9067 20.1598 16.0442 20.1598 13.7467C20.1598 11.4492 18.2973 9.58667 15.9998 9.58667C13.7023 9.58667 11.8398 11.4492 11.8398 13.7467C11.8398 16.0442 13.7023 17.9067 15.9998 17.9067Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M4.8266 11.3201C7.45327 -0.226582 24.5599 -0.213249 27.1733 11.3334C28.7066 18.1068 24.4933 23.8401 20.7999 27.3868C18.1199 29.9734 13.8799 29.9734 11.1866 27.3868C7.5066 23.8401 3.29327 18.0934 4.8266 11.3201Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400">LOCATION</p>
              <p>iNo. 2 ABdebayo</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-3">
            <div className=" bg-[#5d63716d] flex justify-center items-center p-2 rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.2937 24.4401C29.2937 24.9201 29.187 25.4134 28.9603 25.8934C28.7337 26.3734 28.4403 26.8267 28.0537 27.2534C27.4003 27.9734 26.6803 28.4934 25.867 28.8267C25.067 29.1601 24.2003 29.3334 23.267 29.3334C21.907 29.3334 20.4537 29.0134 18.9203 28.3601C17.387 27.7067 15.8537 26.8267 14.3337 25.7201C12.8003 24.6001 11.347 23.3601 9.96032 21.9867C8.58699 20.6001 7.34699 19.1467 6.24033 17.6267C5.14699 16.1067 4.26699 14.5867 3.62699 13.0801C2.98699 11.5601 2.66699 10.1067 2.66699 8.72008C2.66699 7.81341 2.82699 6.94675 3.14699 6.14675C3.46699 5.33341 3.97366 4.58675 4.68033 3.92008C5.53366 3.08008 6.46699 2.66675 7.45366 2.66675C7.82699 2.66675 8.20033 2.74675 8.53366 2.90675C8.88033 3.06675 9.18699 3.30675 9.42699 3.65341L12.5203 8.01341C12.7603 8.34675 12.9337 8.65341 13.0537 8.94675C13.1737 9.22675 13.2403 9.50675 13.2403 9.76008C13.2403 10.0801 13.147 10.4001 12.9603 10.7067C12.787 11.0134 12.5337 11.3334 12.2137 11.6534L11.2003 12.7067C11.0537 12.8534 10.987 13.0267 10.987 13.2401C10.987 13.3467 11.0003 13.4401 11.027 13.5467C11.067 13.6534 11.107 13.7334 11.1337 13.8134C11.3737 14.2534 11.787 14.8267 12.3737 15.5201C12.9737 16.2134 13.6137 16.9201 14.307 17.6267C15.027 18.3334 15.7203 18.9867 16.427 19.5867C17.1203 20.1734 17.6937 20.5734 18.147 20.8134C18.2137 20.8401 18.2937 20.8801 18.387 20.9201C18.4937 20.9601 18.6003 20.9734 18.7203 20.9734C18.947 20.9734 19.1203 20.8934 19.267 20.7467L20.2803 19.7467C20.6137 19.4134 20.9337 19.1601 21.2403 19.0001C21.547 18.8134 21.8537 18.7201 22.187 18.7201C22.4403 18.7201 22.707 18.7734 23.0003 18.8934C23.2937 19.0134 23.6003 19.1867 23.9337 19.4134L28.347 22.5467C28.6937 22.7867 28.9337 23.0667 29.0803 23.4001C29.2137 23.7334 29.2937 24.0667 29.2937 24.4401Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400">PHONE</p>
              <p>+234 (0) 123 456 7890</p>
            </div>
          </div>
        </div>
        <div className="contact-form w-full lg:max-w-xl bg-white rounded-md shadow p-8 text-[#1D1D1D]">
  <h2 className="text-2xl font-semibold mb-2">Send us a Message</h2>
  <p className="mb-6 text-[#777]">
    Got an innovative idea or research project in mind? Let’s explore possibilities and bring it to life together!
  </p>
  <form className="space-y-4">
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="block mb-1 font-medium">First name</label>
        <input
          type="text"
          placeholder="Full name"
          className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-[#FAFAFA]"
        />
      </div>
      <div className="flex-1">
        <label className="block mb-1 font-medium">Last name</label>
        <input
          type="text"
          placeholder="Email address"
          className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-[#FAFAFA]"
        />
      </div>
    </div>
    <div>
      <label className="block mb-1 font-medium">Email</label>
      <input
        type="email"
        placeholder="Input project title"
        className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-[#FAFAFA]"
      />
    </div>
    <div>
      <label className="block mb-1 font-medium">Organization (Optional)</label>
      <input
        type="text"
        placeholder="Input project title"
        className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-[#FAFAFA]"
      />
    </div>
    <div>
      <label className="block mb-1 font-medium">Subject</label>
      <input
        type="text"
        placeholder="Input project title"
        className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-[#FAFAFA]"
      />
    </div>
    <div>
      <label className="block mb-1 font-medium">Message</label>
      <textarea
        rows={4}
        placeholder="Tell us about your project..."
        className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-[#FAFAFA] resize-none"
      />
    </div>
    <button
      type="submit"
      className="bg-[#F97316] text-white font-semibold rounded-full px-8 py-3 mt-2 hover:bg-[#ff7f32] transition"
    >
      Send Message
    </button>
  </form>
</div>
      </div>
    </>
  );
}

export default ContactUsPage;
