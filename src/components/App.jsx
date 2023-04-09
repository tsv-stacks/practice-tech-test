import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import nasaLogo from "../assets/nasa-worm-logo.jpg";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  // searchResults.map((result, i) => console.log(result, i));

  return (
    <div className="app">
      <img className="app--nasa-logo" src={nasaLogo} alt="NASA logo" />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
