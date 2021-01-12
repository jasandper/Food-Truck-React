import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Signinform from "./components/Signinform"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signinform />
    </div>
  );
}

export default App;
