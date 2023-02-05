import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/javascript.png";
import github from "../../assets/github.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux-icon.webp";
import sass from "../../assets/sass.png";
import swagger from "../../assets/swagger.png";
import tailwind from "../../assets/tailwind.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: sass,
      title: "SASS/SCSS",
      style: "shadow-pink-400",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-purple-600",
    },
    {
      id: 8,
      src: swagger,
      title: "Swagger",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];
  return (
    <section
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          <TypeWriterEffect
              textStyle={{ fontFamily: "Raleway" }}
              startDelay={100}
              cursorColor="transparent"
              text="Experience"
              typeSpeed={100}
              eraseSpeed={100}
            /> 
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={ title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
