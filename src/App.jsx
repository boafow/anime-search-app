import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h1 style={h1Style}>Anime Search App</h1>
      <SearchBar />
    </div>
  );
}

export default App;

const h1Style = {
  // width: '100%',
  // textAlign: 'center'
};
