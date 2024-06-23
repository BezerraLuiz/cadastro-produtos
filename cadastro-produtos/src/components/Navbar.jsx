import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to="/cadastrar" activeclassname="active">
          Cadastrar Produto
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/editar/:id" activeclassname="active">
          Editar Produto
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/filtragem" activeclassname="active">
          Filtragem por Categoria
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/visualizar" activeclassname="active">
          Visualização Detalhada
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/exportar" activeclassname="active">
          Exportar Relatório
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/login" activeclassname="active">
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
