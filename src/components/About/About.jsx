import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            <TypeWriterEffect
              textStyle={{ fontFamily: "Raleway" }}
              startDelay={100}
              cursorColor="transparent"
              text="About"
              typeSpeed={100}
              eraseSpeed={100}
            />
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm an enthusiastic and detail-oriented Frontend developer seeking an
          entry-level position with сompany to use my skills in coding,
          troubleshooting complex problems, and assisting in the timely
          completion of projects. Skilled in HTML, CSS, and JavaScript. Excels
          at creating pixel-perfect designs and working with cross-browser
          compatibility issues. I am a collaborative person who loves code and
          generating better desition that helps automate processes.
        </p>
        <br />
        <p className="text-xl">
          I have some achievements in study development: was a team lead in
          two group projects and successfully deployed in GitHub. Also developed an
          algorithm of suggested movies based on the user's preferences. Proficient in 
          creating a responsive application, according to the design layout.
        </p>
      </div>
    </section>
  );
};

export default About;
