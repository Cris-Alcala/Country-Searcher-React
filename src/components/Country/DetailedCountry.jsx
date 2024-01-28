/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";
import Weather from "./Weather";

const DetailedCountry = ({ selectedCountry }) => {
  const [weather, setWeather] = useState(null);
  const api_key = "bfb65ad763202efcc3ebd8595ef6da48";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital},${selectedCountry.cca2}&appid=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [selectedCountry]);
  return (
    <div className="detailedCountry">
      <Country selectedCountry={selectedCountry} />
      {weather !== null && <Weather weather={weather} />}
    </div>
  );
};

DetailedCountry.propTypes = {
  selectedCountry: PropTypes.object,
};

export default DetailedCountry;
