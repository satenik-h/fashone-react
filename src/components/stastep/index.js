import React from "react";
import Testimonial from "../testimonial";
import ChooseFashion from "../choosefashion";
import "./style.scss";

function Stastep({ title, step1, step2, step3 }) {
  return (
    <div className="stastep">
      <div className="stastep-title">
        <div className="app-container">
          <div className="stastep-title-tag"></div>
          <div className="stastep-title-section">{title.left}</div>
        </div>
      </div>
      <div className="stastep-step1">
        <div className="app-container">
          <div className="stastep-step1-section">
            <div className="stastep-step1-left">
              <div className="stastep-step-num">{step1.num}</div>
              <div className="stastep-step-title">{step1.title}</div>
              <div className="stastep-step-desc">{step1.desc}</div>
            </div>
            <div className="stastep-step1-right">
              <img src={step1.img} alt="step1back"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="stastep-step2">
        <div className="app-container">
          <div className="stastep-step2-section">
            <div className="stastep-step2-left">
              <img src={step2.img} alt="step2back"></img>
            </div>
            <div className="stastep-step2-right">
              <div className="stastep-step-num">{step2.num}</div>
              <div className="stastep-step-title">{step2.title}</div>
              <div className="stastep-step-desc">{step2.desc}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="stastep-step3">
        <div className="app-container">
          <div className="stastep-step3-section">
            <div className="stastep-step3-left">
              <div className="stastep-step-num">{step3.num}</div>
              <div className="stastep-step-title">{step3.title}</div>
              <div className="stastep-step-desc">{step3.desc}</div>
            </div>
            <div className="stastep-step3-right">
              <img src={step3.img} alt="step3back"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="stastep-testimonial">
        <div className="app-container">
          <div className="stastep-testimonial-tag"></div>
          <div className="stastep-testimonial-title">Client Testimonial</div>
        </div>
        <div className="app-container stastep-testimonial-container">
          <Testimonial></Testimonial>
        </div>
      </div>
      <ChooseFashion></ChooseFashion>
    </div>
  );
}

export default Stastep;
