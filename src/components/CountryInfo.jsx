import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Arrow from "../assets/Arrow";
import ArrowWhite from "../assets/ArrowWhite";
import ModeContext from "../context/ModeContext";
import { API_URL } from "../util/api";

const CountryInfo = () => {
  const params = useParams();
  const [country, setCountry] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  let value = Object.values(params);
  let singleCountry = value[0];

  const { mode } = useContext(ModeContext);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${API_URL}/name/${singleCountry}`);
        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();
        setCountry(data);
        setBorderCountries(data?.borders);
        console.log(borderCountries);
      } catch (error) {
        setError(error.message);
      }
    };

    getCountryByName();
  }, [singleCountry]);

  // console.log(country[0]);

  return (
    <>
      <div
        className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${
          mode ? "text-light-veryDarkBlue" : "text-white"
        } px-[80px] py-[40px] h-[90vh] flex items-center gap-[150px]`}
      >
        {country.map((item, idx) => {
          return (
            <>
              <div className="img w-[600px] h-[500px] space-y-20">
                <Link
                  to="/"
                  className={`${
                    mode ? "bg-white" : "bg-dark-darkBlue"
                  } py-2 px-10 rounded-md shadow-lg border-0 cursor-pointer`}
                >
                  {mode ? <Arrow /> : <ArrowWhite />}
                  Back
                </Link>
                <img
                  className="w-[100%] h-[300px] object-cover block"
                  src={item.flag}
                  alt=""
                />
              </div>
              <div className="info mt-[100px] h-[400px] w-[500px] flex flex-col justify-evenly">
                <h1 className="text-3xl font-[800]">{item.name}</h1>
                <div className="country-info flex justify-between">
                  <div className="left space-y-2">
                    <p>
                      Native Name:{" "}
                      <span className="text-light-darkGray">
                        {item.nativeName}
                      </span>
                    </p>
                    <p>
                      Population:{" "}
                      <span className="text-light-darkGray">
                        {item.population.toLocaleString()}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span className="text-light-darkGray">{item.region}</span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span className="text-light-darkGray">
                        {item.subregion}
                      </span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span className="text-light-darkGray">
                        {item.capital}
                      </span>
                    </p>
                  </div>
                  <div className="right space-y-2">
                    <p>
                      Top Level Domain:{" "}
                      <span className="text-light-darkGray">
                        {item.topLevelDomain}
                      </span>
                    </p>
                    <p>
                      Currencies:{" "}
                      <span className="text-light-darkGray">
                        {item.currencies[0].name}
                      </span>
                    </p>
                    <p>
                      Languages:{" "}
                      <span className="text-light-darkGray">
                        {item.languages[0].name}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="borders space-x-2 flex items-center flex-wrap">
                  <p className="mt-2">Border Countries:</p>
                  {item.borders?.length ? (
                    item.borders.map((country, index) => (
                      <Link
                        key={index}
                        className={`${
                          mode ? "bg-white" : "bg-dark-darkBlue"
                        } py-2 px-8 mt-2 rounded-md shadow-lg cursor-pointer`}
                        to={`/`}
                      >
                        <span> {country} </span>
                      </Link>
                    ))
                  ) : (
                    <p className="mt-2 text-2xl">No borders...</p>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CountryInfo;
