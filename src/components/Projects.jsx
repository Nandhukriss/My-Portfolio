import React, { useEffect, useState } from "react";
import ProjectSkeletonLoader from "./Skeletons/ProjectSkeletonLoader";
import clickbuy from "../assets/projects/clickbuy.png";
import hospital from "../assets/projects/hospital.png";
function Projects() {
  const [loading, setLoading] = useState(true);
  const [Allprojects, setProjects] = useState([]);

  useEffect(() => {

    const fetchProjectsData = () => {
      setTimeout(() => {
        setProjects([
          {
            id: 1,
            title:
              "Automatic Censorable Content Identification in Movies Using Deeplearning ",
            src: "https://github.com/Nandhukriss/Automatic-Censorable-Content-Identification-In-movies-Using-DeepLearning-Flask/assets/103727372/31120b3d-9775-4a67-a983-5774da7a55fb",
            tags: ["Python,flask,javascript,Jquery,Ajax,DL,Yolo5"],
            demo: false,
            code: true,
            demoLink: "",
            codeLink:
              "https://github.com/Nandhukriss/Automatic-Censorable-Content-Identification-In-movies-Using-DeepLearning-Flask",
          },
          {
            id: 2,
            title: "ClickBuy An E-Commerce Website",
            src: clickbuy,
            tags: ["Python,javascript,Jquery,Bootstrap,Ajax,RazorPay"],
            demo: false,
            code: false,
            demoLink: "",
            codeLink: "",
          },
          {
            id: 3,
            title: "Public Tech/Entertainment Blog",
            src: "https://github.com/Nandhukriss/Public-Tech-Entertainment-Blog-using-Django/assets/103727372/cb06e9cc-382e-4b44-a0e4-950df5a2d63c",
            tags: ["Python,javascript,Bootstrap,PostgreSQL"],
            demo: false,
            code: true,
            demoLink: "",
            codeLink:
              "https://github.com/Nandhukriss/Public-Tech-Entertainment-Blog-using-Django",
          },
          {
            id: 4,
            title: "Hospital Appointment booking System",
            src: hospital,
            tags: ["Python,javascript", "Django"],
            demo: true,
            code: true,
            demoLink: "http://nandhukris.pythonanywhere.com/",
            codeLink:
              "https://github.com/Nandhukriss/Hospital-Appointment-booking-django",
          },
        ]);
        setLoading(false);
      }, 2000); // Simulated delay of 2 seconds
    };

    fetchProjectsData();
  }, []);


  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold leading-tight dark:text-gray-300 text-center">
            {" "}
            Projects
          </p>
          <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded mx-auto">
            <div className="flex-1 h-2 bg-cyan-200"></div>
            <div className="flex-1 h-2 bg-cyan-400"></div>
            <div className="flex-1 h-2 bg-cyan-600"></div>
          </div>

          <p className="py-6 text-2xl  text-center">
            These Are Some Of my Recent Works
          </p>
        </div>

        <div className="grid sm:grid-cols-1 place-items-center md:grid-cols-2  gap-10  sm:px-0">
        {loading ? (
            <ProjectSkeletonLoader item={Allprojects.length} /> 
          ) : (
            Allprojects.map(({ id, src, tags, title, demo, code, demoLink, codeLink }) => (
              <div
                key={id}
                className="w-full h-full rounded-md overflow-hidden shadow-sm  shadow-gray-50
            hover:shadow-md  duration-500 cursor-pointer hover:shadow-cyan-400 border border-gray-800"
              >
                <div className=" w-full h-48 overflow-hidden group">
                  <img
                    className="w-full h-full object-fill rounded-md  "
                    src={src}
                    alt="Project Thumbnail"
                  />
                </div>

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {tags[0].split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center ">
                  {demo ? (
                    <a
                      href={demoLink}
                      className="text-white bg-[#24292F] duration-200 hover:scale-105 hover:bg-[#24292F]/90 focus:ring-4 
focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg 
text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500
 dark:hover:bg-[#050708]/30 me-2 mb-6 hover:shadow-md hover:shadow-cyan-400 border border-cyan-300 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}
                  {code ? (
                    <a
                      href={codeLink}
                      className="text-white bg-[#24292F] duration-200 hover:scale-105 hover:bg-[#24292F]/90 focus:ring-4 
focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg 
text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500
 dark:hover:bg-[#050708]/30 me-2 mb-6 hover:shadow-md hover:shadow-cyan-400  border border-cyan-300 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-4 h-4 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;