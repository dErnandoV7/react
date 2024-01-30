import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar";

import SearchForm from "./components/SearchForm";

function App() {
  
  return (
    <>
      <header>
        <Navbar />
        <SearchForm/>
      </header>
      <Outlet/>
      <footer>equipe, footer</footer>
    </>
  );
}

export default App;
