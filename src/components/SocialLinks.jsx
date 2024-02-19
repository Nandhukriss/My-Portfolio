import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

export const SocialLinks = () => {
  const social = [
    {
      id: 1,
      child: (
        <>
          LinkedIn &nbsp;
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/rs-nandhu-krishna-653567258/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github &nbsp;
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/Nandhukriss",
    },
    {
      id: 3,
      child: (
        <>
          Mail Me &nbsp;
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:rsnandhukrishna@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Contact &nbsp;
          <IoIosContact size={25} />
        </>
      ),
      href: "tel:+919074192503",
    },
  ];
  return (
    <div className=" md:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {social.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-5
                    bg-cyan-700  ml-[-82px] hover:ml-[-10px] duration-500 mb-1 rounded-md ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
