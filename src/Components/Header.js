import React from "react"
import LOGO from "../Images/Logo.png"
const Header = () => {
  return (
    <div className="Header">
      <img className="Header-img" src={LOGO} alt="logo" />
      <button className="Header-button">Login or SignUp</button>
    </div>
  )
}

export default Header
