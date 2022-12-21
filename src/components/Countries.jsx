import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../context/CountriesContext";
import ModeContext from "../context/ModeContext";

const Countries = () => {
  const { countries } = useContext(CountriesContext);
  const { isLoading } = useContext(CountriesContext);
  const { mode } = useContext(ModeContext);

  return (
    <>
      {isLoading ? (
        <div className="w-[100px] h-[100vh] mt-[200px] font-[800]">
          <h2 className="text-3xl tracking-widest">Loading...</h2>
        </div>
      ) : (
        countries.map((country, idx) => {
          return (
            <Link to={`/country/${country.name}`}
              className="w-[300px] rounded-lg shadow-lg cursor-pointer basis-[21%] mb-[80px]"
              key={idx}
            >
              <div className="image h-[200px] w-[100%]">
                <img
                  className="h-[100%] w-[100%] object-cover block rounded-t-lg"
                  src={country.flag}
                  alt="flag"
                />
              </div>
              <div
                className={`${
                  mode ? "bg-white" : "bg-dark-darkBlue"
                } text min-h-[230px] pl-5 rounded-b-lg`}
              >
                <h2 className="font-[600] text-xl py-6">{country.name}</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-[600]">Population: </span>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-[600]">Region: </span>
                    {country.region}
                  </p>
                  <p>
                    <span className="font-[600]">Capital: </span>{" "}
                    {country.capital}
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
};

export default Countries;
