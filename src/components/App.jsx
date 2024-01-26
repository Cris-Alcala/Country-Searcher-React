import { useState } from "react";
import { useEffect } from "react";
import { Searchbox } from "./SearchBox/Searchbox";
import Results from "./Results/Results";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  let filteredCountries =
    search.length === 0
      ? []
      : [
          ...countries.filter((country) =>
            country.name.common
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          ),
        ];
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries([...data]))
      .catch((error) => console.log("Error: ", error));
  }, []);
  const searchCountry = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="main">
      <Searchbox value={search} onChange={searchCountry} />
      <Results array={filteredCountries} />
    </div>
  );
}

export default App;
