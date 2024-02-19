// PageLoader.js
import React from "react";
import avatar from "../assets/avatar-thinking-3-svgrepo-com.svg";

const PageLoader = () => {
  return (
    <div class="relative flex justify-center items-center h-screen bg-gradient-to-b from-black  to-gray-800">
      <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white-500"></div>
      <img src={avatar} class="rounded-full h-28 w-28" />
    </div>
  );
};

export default PageLoader;
