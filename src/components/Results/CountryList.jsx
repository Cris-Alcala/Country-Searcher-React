import PropTypes from "prop-types";

const CountryList = ({ array, showCountry }) => {
  return (
    <ul>
      {
        array.map((country) => (
          <li key={country.name.common}>
            <div className="name">
              {country.name.common}
            </div>
            <div className="button">
              <button onClick={() => showCountry(country.cca3)}>More Info</button>
            </div>
          </li>
        ))
      }
    </ul>
  )
};

CountryList.propTypes = {
  array: PropTypes.array,
  showCountry: PropTypes.func,
};

export default CountryList;
