import React, { useContext, useState } from "react";
import SearcIconWhite from "../assets/SearchIconWhite";
import SearchIcon from "../assets/SearchIcon";
import ModeContext from "../context/ModeContext";
import Countries from "./Countries";
import Search from "../constants/Search";
import Filter from "../constants/Filter";

const Main = () => {
  const { mode } = useContext(ModeContext);

  return (
    <main
      className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${
        mode ? "text-light-veryDarkBlue" : "text-white"
      } transition-all duration-500  px-[80px] py-[40px]`}
    >
      <div className="top flex justify-between items-center">
        <div className="search relative">
          {mode ? <SearchIcon /> : <SearcIconWhite />}
          <Search />
        </div>
        <Filter />
      </div>

      <div className="bottom pt-[40px] flex flex-wrap justify-between">
        <Countries />
      </div>
    </main>
  );
};

export default Main;
