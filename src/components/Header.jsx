import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <nav className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>

        <ul className="header__nav">
          <li>
            <a href="">overview</a></li>
            <li>

            <a href="">news</a>
            </li>

            <li>
            <a href="">champions</a>

            </li>
            <li>
            <a href="">support</a>

            </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Header;
