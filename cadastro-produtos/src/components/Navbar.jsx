import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <NavLink to={'/cadastrar'} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Cadastrar Produto
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to={'/editar/:id'} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Editar Produto
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to={'/excluir/:id'} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Excluir Produto
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to={'/visualizar'} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Visualização Detalhada
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to={'/exportar'} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Exportar Relatório
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to={'/login'} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Login
                    </NavLink>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
