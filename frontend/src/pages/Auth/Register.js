import "./Auth.css"

//components
import {Link} from 'react-router-dom'

// Hooks
import { useState, useEffect } from "react"

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>File Manager</h2>
      <p className="subtitle">Cadastre-se para organizar seus arquivos</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a Senha" />
        <input type="submit" value="Cadastrar"/>
      </form>
      <p>
        Já possui conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  )
}

export default Register
