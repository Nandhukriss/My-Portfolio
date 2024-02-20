import React from "react";
import { useState } from "react";
import { FaBars, FaGithub, FaTimes, FaLaptopCode } from "react-icons/fa";
import { IoHomeOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";

// import { GiLaptop } from "react-icons/gi";
// import { FaBlog } from "react-icons/fa6";
import { Link } from "react-scroll";
import { IoIosContact } from "react-icons/io";

export const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const links = [
    {
      id: 1,
      GoLink: "home",
      link: (
        <div className="flex items-center ">
          <IoHomeOutline size={25} /> &nbsp;Home
        </div>
      ),
    },
    {
      id: 2,
      GoLink: "experience",
      link: (
        <div className="flex items-center ">
          <MdOutlineWork size={25} /> &nbsp;Experience
        </div>
      ),
    },
    {
      id: 3,
      GoLink: "skills",
      link: (
        <div className="flex items-center ">
          <RiToolsFill size={25} /> &nbsp;Skills
        </div>
      ),
    },
    {
      id: 4,
      GoLink: "projects",
      link: (
        <div className="flex items-center">
          <FaLaptopCode size={25} /> &nbsp;Projects
        </div>
      ),
    },

    {
      id: 5,
      GoLink: "contact",
      link: (
        <div className="flex items-center ">
          <IoIosContact size={25} /> &nbsp;Contact
        </div>
      ),
    },
    {
      id: 6,
      GoLink:
        "https://drive.google.com/file/d/1KOPbIYtnWwHMDR_ldTKruc21ovONNGwj/view",
      link: (
        <div className="flex items-center ">
          Resume&nbsp; <IoDocumentTextOutline size={25} />
        </div>
      ),
      download: true,
    },
    {
      id: 7,
      GoLink:'https://github.com/Nandhukriss/My-Portfolio',
      anchor:true,
      link: (
        <div className="flex items-center ">
          <FaGithub size={25} />
        </div>
      ),
    },
    // {
    //     id:8,
    //     link:(
    //         <div className='flex items-center '>
    //           Blog&nbsp; <FaBlog size={25} />
    //         </div>
    //       )
    // },
    // {
    //     id:9,
    //     link:(
    //         <div className='flex items-center '>
    //           My Laptop&nbsp; <GiLaptop  size={25} />
    //         </div>
    //       )
    // },
  ];
  return (
    <div className={
      navColour?(

        `flex justify-between items-center w-full h-12 text-white bg-cyan-800  fixed px-4  z-10`
      ):`flex justify-between items-center w-full h-12 text-white bg-black  fixed px-4  z-10`
      }>
      <div></div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link, GoLink, download ,anchor}) => (
          <li
            key={id}
            className="px-4 cursor-pointer  capitalize font-medium text-lg text-white-500 hover:scale-105 duration-200"
            download={download}
          >
            {download |anchor ? (
              <a
                href={GoLink}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            ) : (
              <Link to={GoLink || ""} smooth duration={500}>
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-3 z-10 text-gray-500  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 capitalize md:hidden">
          {links.map(({ id, link, GoLink, download,anchor }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-2xl py-6  text-gray-500 hover:scale-105 duration-200"
              download={download}
            >
              {download |anchor ? (
                <a
                  href={GoLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              ) : (
                <Link
                  to={GoLink || ""}
                  smooth
                  duration={500}
                  onClick={() => setnav(!nav)}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
