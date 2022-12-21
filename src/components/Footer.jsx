import React, { useContext } from "react";
import ModeContext from "../context/ModeContext";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div>
      <h4
        className={`${mode ? "bg-white" : "bg-dark-darkBlue"} ${
          mode ? "text-dark-veryDarkBlue" : "text-white"
        } font-[600] text-center py-[20px] shadow-2xl`}
      >
        &copy; Nikola Dojcinovic 2022
      </h4>
    </div>
  );
};

export default Footer;