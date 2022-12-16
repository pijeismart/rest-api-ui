import React, { useState } from "react";
import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";

const Navbar = () => {
  const [lightMode, setLightMode] = useState(false);

  const handleLightMode = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <nav
      className={`${lightMode ? "bg-white" : "bg-dark-darkBlue"} ${
        lightMode ? "text-light-veryDarkBlue" : "text-white"
      } flex justify-between items-center px-[80px] py-[25px]`}
    >
      <div className="left">
        <h1 className="text-2xl font-[800]">Where in the world?</h1>
      </div>
      <div
        onClick={handleLightMode}
        className="right flex items-center space-x-3 cursor-pointer"
      >
        {lightMode ? (
          <>
            <MoonIcon />
            <p className="font-[800]">Dark Mode</p>
          </>
        ) : (
          <>
            <SunIcon />
            <p className="font-[600]">Light Mode</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
