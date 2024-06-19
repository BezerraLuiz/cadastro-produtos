import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


// CRUD COM JSON SERVER

function App() {
  

  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
