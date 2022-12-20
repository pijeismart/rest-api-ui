import React, { useContext, useState } from "react";
import SearcIconWhite from "../assets/SearchIconWhite";
import SearchIcon from "../assets/SearchIcon";
import ModeContext from "../context/ModeContext";
import CountriesContext from "../context/CountriesContext";
import Countries from "./Countries";
import Search from "../constants/Search";
import Filter from "../constants/Filter";
import { API_URL } from "../util/api";

const Main = () => {
  const { mode } = useContext(ModeContext);
  const { setCountries } = useContext(CountriesContext);


  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${API_URL}/region/${regionName}`);
      if (!res.ok) throw new Error("Failed..........");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      setError(false);
    }
  };

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
        <Filter onSelect={getCountryByRegion} />
      </div>

      <div className="bottom pt-[40px] flex flex-wrap justify-between">
        <Countries />
      </div>
    </main>
  );
};

export default Main;
