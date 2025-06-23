import React from "react";
import { Link, useParams } from "react-router-dom";
import Digital_Ekiti_Initiatives_Data from "./Digital_Ekiti_Initiatives_Data";
import images from "../../../utils/images";

function Digital_Ekiti_Initiatives_Detail() {
  const { initiativeID } = useParams();

  const initiative = Digital_Ekiti_Initiatives_Data.find(
    (item) => String(item.id) === initiativeID
  );

  if (!initiative) {
    return <div className="pt-20 pb-5 text-center">Initiative not found</div>;
  }
  return (
    <section className="text-[#1D1D1D] text-sm">
      <div
        className="min-h-96 bg-center bg-cover flex flex-col justify-center text-white pl-10 relative"
        style={{ backgroundImage: `url(${initiative.image})` }}
      >
        <Link to="/initiatives/digital_ekiti_initiative/" className="z-10">
          <div className="flex justify-start items-center gap-1 pb-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.57 6.42993L3.5 12.4999L9.57 18.5699"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.4999 12.5H3.66992"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Back to Initiatives</p>
          </div>
          <div>
            <h2 className="text-3xl text-[#FF6600] font-semibold pb-1">
              {initiative.title}
            </h2>
            <div className="max-w-xl">
              <p>
                A comprehensive initiative designed to position Ekiti State as a
                leading knowledge-based economy in West Africa.
              </p>
            </div>
          </div>
        </Link>
        <div className="absolute bg-black inset-0 opacity-50 z-0"></div>
      </div>
      <div className="p-10">
 <div className="flex flex-col lg:flex-row gap-5 justify-between">
        <div className="">
          <h3 className="font-semibold text-2xl pb-5">About This Initiative</h3>
          <p className="text-[#777777] max-w-xl">{initiative.description}</p>
        </div>
        <div>
          <div className="bg-[#F7F7F7] p-6 rounded-md">
            <h3 className="font-semibold text-base pb-5">Initiative Details</h3>
            <div className="flex justify-start gap-3 items-center pb-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#F97316"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#F97316"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.09009H20.5"
                  stroke="#F97316"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#F97316"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 13.7H15.7037"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 16.7H15.7037"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 16.7H12.0045"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h5 className="font-semibold">Timeline</h5>
                <p className="text-[#777777]">Launched 2020 - Ongoing</p>
              </div>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                  stroke="#F97316"
                  stroke-width="1.5"
                />
                <path
                  d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                  stroke="#F97316"
                  stroke-width="1.5"
                />
              </svg>

              <div>
                <h5 className="font-semibold ">Location</h5>
                <p className="text-[#777777]">
                  Ado-Ekiti, Ekiti State, Nigeria.
                </p>
              </div>
            </div>
          </div>
          {/* Impact and Reach */}
          <div className="pt-6 grid gap-6 grid-cols-1">
            <div className="bg-[#FFFAF6] rounded-md p-6 flex flex-col items-center">
              <h3 className="text-base font-semibold text-[#1D1D1D] mb-6">
                Impact and Reach
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full text-center">
                <div>
                  <p className="text-2xl font-bold text-[#F97316]">200+</p>
                  <p className="text-[#777]">Startups</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#F97316]">2,000+</p>
                  <p className="text-[#777]">Jobs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#F97316]">$25,000</p>
                  <p className="text-[#777]">Investments</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#F97316]">1,000+</p>
                  <p className="text-[#777]">Participants</p>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-[#00113D] rounded-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-base font-bold text-white mb-3">
                Get Involved
              </h3>
              <p className="text-white text-center mb-6">
                Interested in learning more or getting involved with this
                initiative?
              </p>
              <button className="bg-white text-[#F97316] font-semibold rounded-full px-8 py-3 transition hover:bg-[#F97316] hover:text-white cursor-pointer w-full">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </section>
  );
}

export default Digital_Ekiti_Initiatives_Detail;
