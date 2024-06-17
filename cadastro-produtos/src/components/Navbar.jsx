import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'
import React from 'react'
function Navbar() {
    return (
        <>
            <Outlet/>
            <nav>
                <ul>
                    <span> <NavLink to={'/cadastrar'} className={({isActive}) => (isActive ? 'active': '')}><a href=''>Cadastrar Produto</a></NavLink></span>
                </ul>
                <ul>
                    <span> <NavLink to={'/editar/:id'} className={({isActive}) => (isActive ? 'active': '')}><a href="">Editar Produto</a></NavLink></span>
                </ul>
                <ul>
                    <span> <NavLink to={'/excluir/:id'} className={({isActive}) => (isActive ? 'active': '')}><a href="">Excluir Produto</a></NavLink></span>
                </ul>
                <ul>
                    <span> <NavLink to={'/visualizar'} className={({isActive}) => (isActive ? 'active': '')}><a href="">Visualização Detalhada</a></NavLink></span>
                </ul>
                <ul>
                    <span><NavLink to={'/exportar'} className={({isActive}) => (isActive ? 'active': '')}><a href="">Exportar Relatório</a></NavLink></span>
                    </ul>
            </nav>
        </>
    )
}

export default Navbar