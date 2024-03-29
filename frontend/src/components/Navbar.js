import "./Navbar.css"

//componets
import { NavLink, Link } from "react-router-dom"
import {BsSearch, BsHouseDoorFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">File Manager</Link>
      <form id="search-form">
        <BsSearch />
        <input type="text" placeholder="Buscar documento"/>
      </form>
      <ul id="nav-links">
        <li>
        <NavLink to="/">
          <BsHouseDoorFill/>
        </NavLink>
        </li>
        <li>
        <NavLink to="/login">
          Entrar
        </NavLink>
        </li>
        <li>
        <NavLink to="/register">
          Cadastrar
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
