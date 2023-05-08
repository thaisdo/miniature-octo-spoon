import React from 'react'
import '../components/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
        <li>
            <NavLink to={"/"}>
                Meus Contatos
            </NavLink>
        </li>
        <li>
            <NavLink exact to={"/novo"}>
                Novo Contato
            </NavLink>
        </li>
    </ul>
  )
}

export default Navbar