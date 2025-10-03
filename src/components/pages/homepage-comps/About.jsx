import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-4 py-6">
          Hey! I'm Naeem Raza, a passionate Frontend Developer from Gilgit,
          Pakistan. I enjoy turning ideas into responsive and user-friendly
          websites. My journey started with HTML, CSS, and JavaScript, and now I
          work with modern tools like React, Tailwind CSS, and Bootstrap.
        </p>

        <p>
          With creativity, attention to detail, and a constant drive to learn,
          I’m building projects that bring designs to life. I’m fascinated by
          how technologies connect people and create possibilities, and I’m
          excited to keep improving my skills and contributing to meaningful
          projects.
        </p>

        <Link
          to="/about-me"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
        >
          See more
          <span className="">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
