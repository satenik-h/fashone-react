import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/img/logo.png";
import LOGOMOBILE from "../../assets/img/logo-mobile.png";
import "./style.scss";

function Header({ active }) {
  const onBurger = () => {
    document
      .getElementById("burgerMenu")
      .classList.toggle("header-mobile-active");
    document
      .getElementById("mobileMenu")
      .classList.toggle("header-mobile-menu-active");
  };

  return (
    <div className="header">
      <div className="header-container">
        <a href="/#">
          <img className="header-logo" src={LOGO} alt="log"></img>
          <img className="header-logo-mobile" src={LOGOMOBILE} alt="log"></img>
        </a>
        <div className="header-menu">
          <Link to="/Fashionista">
            <div className={`${active === "sta" ? "header-menu-active" : ""}`}>
              FASHIONISTA
            </div>
          </Link>
          <Link to="/FashionSeeker">
            <div
              className={`${active === "seeker" ? "header-menu-active" : ""}`}
            >
              FASHION SEEKER
            </div>
          </Link>
        </div>
        <div
          id="burgerMenu"
          className="header-mobile"
          onClick={() => {
            onBurger();
          }}
        >
          <div className="header-mobile-mark"></div>
        </div>
      </div>
      <div id="mobileMenu" className="header-mobile-menu">
        <Link to="/Fashionista">
          <div
            className={`${active === "sta" ? "header-menu-active" : ""}`}
            onClick={() => {
              onBurger();
            }}
          >
            FASHIONISTA
          </div>
        </Link>
        <Link to="/FashionSeeker">
          <div
            className={`${active === "seeker" ? "header-menu-active" : ""}`}
            onClick={() => {
              onBurger();
            }}
          >
            FASHION SEEKER
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
