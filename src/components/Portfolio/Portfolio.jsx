import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import mpg from "../../assets/portfolio/memory.png";
import ttt from "../../assets/portfolio/ttt.png";
import acc from "../../assets/portfolio/acc.png";
import contacts from "../../assets/portfolio/contacts.png";
import corona from "../../assets/portfolio/corona.png";
import film from "../../assets/portfolio/filmoteka.png";
import ice from "../../assets/portfolio/ice.png";
import meet from "../../assets/portfolio/meetups.png";
import puls from "../../assets/portfolio/pusl.png";
import wallet from "../../assets/portfolio/wallet.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mpg,
      code: "https://yuliiadikun.github.io/memory-game/",
      git: "https://github.com/YuliiaDikun/memory-game",
    },
    {
      id: 2,
      src: ttt,
      code: "https://yuliiadikun.github.io/Tic-tac-toe-game/",
      git: "https://github.com/YuliiaDikun/Tic-tac-toe-game",
    },
    {
      id: 3,
      src: wallet,
      code: "https://sennarion.github.io/react-team-project/",
      git: "https://github.com/Sennarion/react-team-project",
    },
    {
      id: 4,
      src: contacts,
      code: "https://yuliiadikun.github.io/goit-react-hw-08-phonebook/",
      git: "https://github.com/YuliiaDikun/goit-react-hw-08-phonebook",
    },
    {
      id: 5,
      src: acc,
      code: "https://yuliiadikun.github.io/accounting/",
      git: "https://github.com/YuliiaDikun/accounting",
    },
    {
      id: 6,
      src: meet,
      code: "https://yuliiadikun.github.io/react-route-practice-meetup/",
      git: "https://github.com/YuliiaDikun/react-route-practice-meetup",
    },
    {
      id: 7,
      src: corona,
      code: "https://corona.yuliiadikun.com.ua/",
      git: "https://github.com/YuliiaDikun",
    },
    {
      id: 8,
      src: ice,
      code: "https://yuliiadikun.github.io/Pied-Piper/",
      git: "https://github.com/YuliiaDikun/Pied-Piper",
    },
    {
      id: 9,
      src: puls,
      code: "https://pulse.yuliiadikun.com.ua/",
      git: "https://github.com/YuliiaDikun/Tic-tac-toe-game",
    },
    {
      id: 10,
      src: film,
      code: "https://yuliiadikun.github.io/Film-searcher-library/",
      git: "https://github.com/YuliiaDikun/Film-searcher-library",
    },
  ];

  const openDemo = (id) => {
    const demo = portfolios[id - 1].code;
    window.open(demo, "_blank");
  };
  const openGit = (id) => {
    const demo = portfolios[id - 1].git;
    window.open(demo, "_blank");
  };
  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
           <TypeWriterEffect
              textStyle={{ fontFamily: "Raleway" }}
              startDelay={100}
              cursorColor="black"
              text="Portfolio"
              typeSpeed={100}
              eraseSpeed={100}
            /> 
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => openDemo(id)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => openGit(id)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
