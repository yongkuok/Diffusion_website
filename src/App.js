import React from "react";
// Router
import { Routes, Route } from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Organisation from "./components/Organisation";
import Home from "./components/Home";
import UsefulLinks from "./components/UsefulLinks";
// Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/organisation/:team" element={<Organisation />} />
        <Route path="/usefulLinks" element={<UsefulLinks />} />
      </Routes>
    </div>
  );
}

export default App;
