import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import "./style.scss";

function Intro({ active }) {
  return (
    <div className="intro">
      <div className="intro-back">
        <span>How it works</span>
      </div>
      <div className="intro-container app-container">
        <div className="intro-container-img">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jawJJJkpU8I"
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <div
          className={`intro-container-button ${
            active === "main" ? "intro-hide" : ""
          }`}
        >
          <div className="intro-container-button-title">
            Please choose who you are?
          </div>
          <div className="intro-container-button-group">
            <Link to="/">
              <div
                className={`intro-container-button-group-gen ${
                  active === "seeker"
                    ? "intro-container-button-group-active"
                    : ""
                }`}
              >
                <p>I`m Fashion Seeker</p>
              </div>
            </Link>
            <Link to="/defaultsta">
              <div
                className={`intro-container-button-group-gen ${
                  active === "sta" ? "intro-container-button-group-active" : ""
                }`}
              >
                <p>I`m Fashionista</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
