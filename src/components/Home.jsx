import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Type from "./Type.jsx";
import './floater.css';
import { Link } from "react-scroll";
export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen  mx-auto flex flex-col md:flex-column items-center justify-center px-4 h-full ">
        <h1 class="mb-4 mt-44 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          {" "}
          <span class="text-cyan-600 dark:text-cyan-500">
            Hi There{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
          </span>{" "}
          <span className="text-white"> 

          I'm R S Nandhu Krishna
          </span>
        </h1>

        <div className="flex flex-col justify-center items-center px-6">
          <div className="floating-image-container">

          <img
            src={HeroImage}
            alt="profile pic"
            className="rounded-lg mx-auto md:mx-6 w-2/3 md:w-full  shadow-md border-3 border-gray-400 shadow-cyan-500 "
          />
          </div>

          <p className="text-lg sm:text-3xl font-bold mt-10">
            <Type />
          </p>
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-200 text-sm py-5 max-w-sm  hover:text-cyan-100">
              I'am a Computer Science Engineering Graduate and Software
              Developer Who has Interest in Full Stack Development also have a
              key interest in Machine learning and Automation
            </p>
            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-lg md:text-xl text-white  w-full p-3 my-2 
                        rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 justify-center flex items-center cursor-pointer
                        "
              >
                Projects
                <span>
                  <FaRegArrowAltCircleRight
                    size={25}
                    className="mx-1 group-hover:ms-3 duration-300"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
