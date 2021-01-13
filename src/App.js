import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Signinform from "./components/Signinform"
import SearchBox from "./components/Searchbox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBox />
    </div>
  );
}

export default App;
