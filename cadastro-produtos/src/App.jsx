import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// CRUD COM JSON SERVER

function App() {
  

  return (
    <>
      <Navbar />
      <div>
            <h1>Bem vindo ao sistema de gestão de produtos</h1>
            <ul>
                <li>Cadastro de produtos</li>
                <li>Editar produtos</li>
                <li>Excluir produtos</li>
                <li>Visualizar produtos</li>
                <li>Exportar arquivo em csv</li>
            </ul>
        </div>
    

      <Footer/>
    </>
  );
}

export default App;
