import React from "react";
import { Link } from "react-scroll";
import heroImage from "../../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <section
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#141E30] to-[#243B55]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white sm:w-[32rem]">
            <TypeWriterEffect
              textStyle={{ fontFamily: "Raleway" }}
              startDelay={100}
              cursorColor="transparent"
              text="I'm a Front End Developer"
              typeSpeed={100}
              eraseSpeed={100}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Frontend developer with experience in maintaining and
            building web pages. Seeking for new opportunities and challenges
            that will expand my skill set.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
