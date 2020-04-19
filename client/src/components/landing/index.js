import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Register from "../register";
import "./style.scss";

function Landing({ active, register }) {
  return (
    <div className="landing">
      <Header active={active}></Header>
      <div
        className={`landing-container app-container ${
          active === "sta" && register === "register"
            ? "landing-changeimgsta"
            : active === "seeker" && register === "register"
            ? "landing-changeimgseeker"
            : ""
        }`}
      >
        <div
          className={`landing-left ${
            register === "register" ? "landing-hide" : ""
          }`}
        >
          <div className="landing-left-tag"></div>
          <div className="landing-left-desc">
            Fashion Consulting For everyone
          </div>
          <div
            className={`landing-left-button ${
              active === "sta" || active === "seeker" ? "landing-hide" : ""
            }`}
          >
            <Link to="/FashionistaRegister">
              <div className="landing-left-button-sta">
                <p>Fashionista Pre-register</p>
              </div>
            </Link>
            <Link to="/FashionRegister">
              <div className="landing-left-button-seek">
                <p>Fashion Seeker Pre-register</p>
              </div>
            </Link>
          </div>
          <Link to={`/${active === "sta" ? "Fashionista" : "Fashion"}Register`}>
            <div
              className={`landing-sta-button ${
                active === "sta" || active === "seeker" ? "landing-show" : ""
              }`}
            >
              {active === "sta" ? (
                <span>Fashionista Pre-register</span>
              ) : (
                <span>Fashion seeker pre-register</span>
              )}
            </div>
          </Link>
          <div className="landing-left-mobile"></div>
        </div>

        <div
          className={`landing-right ${
            register === "register" ? "landing-hide" : ""
          }`}
        ></div>
        {register === "register" && <Register active={active}></Register>}
      </div>
    </div>
  );
}

export default Landing;
