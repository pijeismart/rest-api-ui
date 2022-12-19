import React, { useContext,useState } from "react";
import ModeContext from "../context/ModeContext";
import CountriesContext from "../context/CountriesContext";
import { API_URL } from "../util/api";

const Search = () => {
  const { mode } = useContext(ModeContext);
  const { setCountries } = useContext(CountriesContext);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_URL}/name/${input}`)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));

    event.target.name.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`${
          mode ? "bg-white" : "bg-dark-darkBlue"
        }  font-[600] px-[100px] py-[15px] rounded-md shadow-lg transition-all duration-1000 focus:opacity-50 focus:outline-0`}
        type="text"
        name="name"
        placeholder="Search for a country..."
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
