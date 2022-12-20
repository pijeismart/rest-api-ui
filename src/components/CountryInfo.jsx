import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModeContext from "../context/ModeContext";
import { API_URL } from "../util/api";

const CountryInfo = () => {
  const params = useParams();
  const [country, setCountry] = useState([]);
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
      } catch (error) {
        setError(error.message);
      }
    };

    getCountryByName();
  }, [singleCountry]);

  console.log(country);

  return (
    <>
      <div className="country-wrapper">
        <div className="img">

        </div>
        <div className="info">
            
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
