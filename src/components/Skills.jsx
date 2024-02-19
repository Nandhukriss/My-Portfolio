import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import django from "../assets/django.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import jquery from "../assets/jquery.png";
import flask from "../assets/flask.png";
import fastapi from "../assets/fastapi.png";
import selenium from "../assets/selenium.png";
import mysql from "../assets/mysql.png";
import postgres from "../assets/postgres.png";
import sqlite from "../assets/sqlite.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import docker from "../assets/docker.png";

const Skills = () => {
  const skills = [
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
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: jquery,
      title: "Jquery",
      style: "shadow-blue-700",
    },
    {
      id: 7,
      src: react,
      title: "React",
      style: "shadow-teal-500",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: django,
      title: "Django",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: flask,
      title: "Flask",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: fastapi,
      title: "Fastapi",
      style: "shadow-green-300",
    },
    {
      id: 12,
      src: selenium,
      title: "Selenium",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: mysql,
      title: "Mysql",
      style: "shadow-orange-400",
    },
    {
      id: 14,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-700",
    },
    {
      id: 15,
      src: sqlite,
      title: "SQlite",
      style: "shadow-blue-300",
    },
    {
      id: 16,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 17,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 18,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 19,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 20,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold leading-tight dark:text-gray-300 text-center">
            {" "}
            Skills
          </p>
          <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded mx-auto">
            <div className="flex-1 h-2 bg-cyan-200"></div>
            <div className="flex-1 h-2 bg-cyan-400"></div>
            <div className="flex-1 h-2 bg-cyan-600"></div>
          </div>
          <p className="py-6 text-2xl  text-center">Skills and tools</p>
        </div>

        <div className="w-full grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-8 text-center py-2 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html logo" className="w-20 mx-auto mb-2" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
