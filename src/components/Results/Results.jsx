import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import CountryList from "./CountryList";
import DetailedCountry from "../Country/DetailedCountry";

const Results = ({ array }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    setSelectedCountry(null);
  }, [array]);
  const showCountry = (cca3) => {
    setSelectedCountry(...array.filter((country) => country.cca3 === cca3));
  };
  return (
    <div className="results">
      {array.length >= 1 && array.length <= 10 && (
        <CountryList array={array} showCountry={showCountry} />
      )}
      {selectedCountry !== null && (
        <DetailedCountry selectedCountry={selectedCountry} />
      )}
      {array.length > 10 && (
        <p>Demasiadas coincidencias, por favor, especifique más</p>
      )}
    </div>
  );
};

Results.propTypes = {
  array: PropTypes.array,
};

export default Results;
