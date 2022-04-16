import React from "react"
import { Link } from "react-router-dom"
import LOGO from "../Images/Logo.png"

const Header = () => {
  return (
    <div className="Header">
      <img className="Header-img" src={LOGO} alt="logo" />
      <Link to="/SignUp">
        <button className="Header-button">SignUp</button>
      </Link>
      <Link to="/Login">
        <button className="Header-button">Login</button>
      </Link>
    </div>
  )
}

export default Header
