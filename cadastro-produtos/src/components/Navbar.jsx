import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(loggedInUser));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

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
        <NavLink to="/excluir/:id" activeclassname="active">
          Excluir Produto
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
      {isLoggedIn ? (
        <>
          <ul>
            <NavLink to="/usuarios" activeclassname="active">
              Usuários
            </NavLink>
          </ul>
          <ul>
            <NavLink to="/login" activeclassname="active">
              Logout
            </NavLink>
          </ul>
        </>
      ) : (
        <ul>
          <NavLink to="/login" activeclassname="active">
            Login
          </NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
