import PropTypes from "prop-types";

const Weather = ({ weather }) => {
  const fahtenheitToCelsius = (fahrenheit) => {
    return (fahrenheit / 33.8).toFixed(1);
  };
  const mhpToKmh = (mph) => {
    return (mph * 1.60934).toFixed(1);
  };
  return (
    <div className="weather">
      <div className="main">
        <h2>Weather in {weather.name}</h2>
        <p>Temperature: {fahtenheitToCelsius(weather.main.temp)} ºC</p>
        <p>Wind: {mhpToKmh(weather.wind.speed)} Km/h</p>
        <p>Wind Direction: {weather.wind.deg} deg</p>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Icon"
      />
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.object,
};

export default Weather;
