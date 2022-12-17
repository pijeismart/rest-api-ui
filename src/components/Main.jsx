import React, { useContext } from "react";
import SearchWhite from "../assets/SearchWhite";
import Search from "../assets/Search";
import ModeContext from "../context/ModeContext";

const Main = () => {
  const { mode } = useContext(ModeContext);

  return (
    <main
      className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${
        mode ? "text-light-veryDarkBlue" : "text-white"
      } px-[80px] py-[40px]`}
    >
      <div className="top">
        <div className="input relative">
          {mode ? (
            <>
              <Search />
              <input
                className="bg-white font-[600] px-[100px] py-[15px] rounded-md shadow-lg transition-all duration-1000 focus:opacity-50 focus:outline-0"
                type="text"
                placeholder="Search for a country..."
              />
            </>
          ) : (
            <>
              <SearchWhite />
              <input
                className="bg-dark-darkBlue text-light-veryDarkBlue font-[600] px-[100px] py-[15px] rounded-md shadow-lg transition-all duration-1000 focus:opacity-50 focus:outline-0"
                type="text"
                placeholder="Search for a country..."
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
