import React, {useContext} from "react";
import ModeContext from "../context/ModeContext";

const Filter = () => {
  const { mode } = useContext(ModeContext);
  

  return (
    <select
      className={`${
        mode ? "bg-white" : "bg-dark-darkBlue"
      } w-[250px] px-[30px] py-[15px] rounded-md shadow-lg transition-all duration-500 border-0 cursor-pointer focus:outline-0`}
      name="filter"
      id=""
    >
      <option>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
