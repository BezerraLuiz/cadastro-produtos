import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useParams } from "react-router-dom";


// CRUD COM JSON SERVER

function App() {
  
  const { usuarioAtual } = useParams();

  return (
    <>
      <Navbar usuarioAtual={usuarioAtual} />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
