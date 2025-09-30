import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 right-10 w-32 h-32 bg-[#F97316] rounded-full blur-3xl"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="300"
        ></div>
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="600"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Box */}
          <div
            className="relative group"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-2">
              {/* Video Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black">
                <video
                  autoPlay
                  muted
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://i.imgur.com/3HYLdvC.png"
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/chumwallet.appspot.com/o/videoplayback.mp4?alt=media&token=ec363a65-a3cf-4343-a995-bb09cccda322"
                    type="video/mp4"
                  />
                  <img
                    src="https://i.imgur.com/3HYLdvC.png"
                    alt="Author Portrait"
                    className="w-full h-full object-cover"
                  />
                </video>

                {/* Play Icon Overlay */}
                {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div> */}
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F97316] via-orange-400 to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-105"></div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -left-4 w-8 h-8 bg-[#F97316] rounded-full opacity-60 animate-pulse"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: "1s" }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            ></div>
          </div>

          {/* Content */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {/* Section Header */}
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1D] mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                A <span className="text-[#F97316]">Visionary Leader</span> for
                Nigeria's Future
              </h2>
              <div
                className="w-20 h-1 bg-gradient-to-r from-[#F97316] to-orange-400 rounded-full"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              ></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p
                className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                A visionary leader and innovative thinker dedicated to
                transforming Nigeria's future through strategic policy
                development, technological advancement, and sustainable
                community development initiatives.
              </p>

              <p
                className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                With over a decade of experience in public policy and social
                innovation, Seun has pioneered numerous initiatives that have
                impacted thousands of lives across Nigeria and beyond.
              </p>
            </div>

            {/* Key Highlights */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="800"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#F97316]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D1D1D] mb-1">
                    Innovation Leader
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Pioneering digital transformation and policy innovation
                    across Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#F97316]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D1D1D] mb-1">
                    Community Builder
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Empowering communities through sustainable development
                    initiatives
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className="pt-6"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="900"
            >
              <button className="group bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 cursor-pointer">
                Learn More About Seun
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
