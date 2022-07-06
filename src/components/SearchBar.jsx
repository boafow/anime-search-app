import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

function SearchBar(){
  const [query, setQuery] = useState("");
  const [searchBar, setSearchBar] = useState("");
  const [results, setResults] = useState([]);
  const [image_src, setImage_src] = useState("");
  const [airing, setAiring] = useState("");

  function getInfo(){
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${query}`)
      .then(({ data }) => {
        setResults(data.results);
        setImage_src(data.image_url);
        setAiring(data.airing);
      });
  };

  function handleInputChange(evt) {
    setSearchBar(evt.target.value);
    setQuery(searchBar);
    if (query && query.length > 1) {
        if (query.length > 3) {
            getInfo();
        }
    } else if (!query) {

    }
  };


  return (
    <form /*onSubmit={this.onSubmit}*/>
      <input
        placeholder="Enter an anime or manga"
        // ref={(input) => (searchBar = input)}
        onChange={e => handleInputChange(e)}
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
