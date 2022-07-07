import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  //   const [searchBar, setSearchBar] = useState("");
  const [results, setResults] = useState([]);

  const getInfo = () => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${query}&sfw=true`)
      .then(({ data }) => {
        setResults(data.data);
      });
  };

  async function handleInputChange(evt) {
    // setSearchBar();
    setQuery(evt.target.value);
    if (query.length > 1) {
      await getInfo();
    } else if (!query) {
    }
  }

  return (
    <form>
      <input
        placeholder="Enter an anime or manga"
        onChange={(e) => handleInputChange(e)}
        style={searchStyle}
      />
      <Results results={results} />
    </form>
  );
};

// Proptypes
const searchStyle = {
  width: "100%",
};

export default SearchBar;
