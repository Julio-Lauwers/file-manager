import "./Navbar.css"

//componets
import { NavLink, Link } from "react-router-dom"
import {BsSearch, BsHouseDoorFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">File Manager</Link>
      <form>
        <BsSearch />
        <input type="text"/>
      </form>
      <ul id="nav-links">
        <NavLink to="/">
          <BsHouseDoorFill/>
        </NavLink>
        <NavLink to="/login">
          Entrar
        </NavLink>
        <NavLink to="/register">
          Cadastrar
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
