import PropTypes from "prop-types";

const Country = ({ selectedCountry }) => {
  let languages = Object.keys(selectedCountry.languages);
  return (
    <div className="country">
      <div className="principalInfo">
        <div className="main">
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Population: {selectedCountry.population.toLocaleString("es-ES")}</p>
        </div>
        <img src={selectedCountry.flags.svg} alt="Flag" />
      </div>
      <div className="languages">
        <h2>Languages</h2>
        <ul>
          {languages.map((language) => (
            <li key={language}>{selectedCountry.languages[language]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Country.propTypes = {
  selectedCountry: PropTypes.object,
};

export default Country;
