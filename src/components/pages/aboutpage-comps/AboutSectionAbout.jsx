import React from "react";
import { Link as ScrollLink } from "react-scroll";

const AboutSectionAbout = () => {
  return (
    <section name="About" className="relative w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-center h-full px-4 py-16 md:py-24 lg:gap-8">
        
        {/* Image Section */}
        <div className="flex mt-8 md:mt-0">
          <img
            src="/images/naeemabout.webp"
            alt="My profile"
            className="
              rounded-2xl mx-auto
              w-full max-w-[320px]   
              sm:max-w-[400px]       
              md:max-w-sm
              lg:w-[400px] lg:h-[450px]
              object-cover
              shadow-2xl shadow-primary-color/20
            "
            style={{ filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" }}
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center mt-6 md:mt-8 lg:mt-0 h-auto md:h-full text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Who I am?
          </h1>

          <div className="flex items-center bg-primary-color/20 rounded-md py-2 px-4 mb-3">
            <img className="h-[40px] w-auto mr-2" src="/icons/pak.png" alt="" />
            <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-white">
              Pakistan - 19 years old
            </h2>
          </div>

          <p className="text-sm md:text-lg text-gray-300 py-2 text-justify">
            I am a professional front-end developer with experience in building
            modern, responsive, and user-friendly web applications. Over the
            past years, I have specialized in React, Next.js, Tailwind CSS, and
            Bootstrap, while also using GitHub for version control and
            collaborative development. My focus is on delivering clean code,
            optimized performance, and interfaces that work beautifully across
            devices.
          </p>

          <p className="text-sm md:text-lg text-gray-300 text-justify">
            This experience has given me incredible opportunities to collaborate
            with diverse teams and take on challenging projects. By working with
            React, Next.js, Tailwind CSS, Bootstrap, and GitHub version control,
            I have strengthened my ability to build scalable, responsive
            interfaces and ensure high-quality results that meet both client and
            user needs.
          </p>
        </div>
      </div>

      {/* Optional Scroll Button */}
      {/* <ScrollLink
        to="Edition"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink> */}
    </section>
  );
};

export default AboutSectionAbout;
