import React from "react";
import Landing from "../../components/landing";
import Intro from "../../components/intro";
import Stastep from "../../components/stastep";
import Footer from "../../components/footer";

import STEP1BACK from "../../assets/img/step4-back.png";
import STEP2BACK from "../../assets/img/step5-back.png";
import STEP3BACK from "../../assets/img/step6-back.png";
import "./style.scss";

const seekerdata = {
  title: {
    left: (
      <>
        3 Step use for Fashion Seeker<br></br>
        <span>TO BOOK AND CONSULT</span>
      </>
    ),
  },
  step1: {
    num: "01",
    title: "Search your Fashionista",
    desc: "Showcase who you are, your past work and what you are looking for",
    img: STEP1BACK,
  },
  step2: {
    num: "02",
    title: "Pay and Book Fashionista",
    desc:
      "Find and get contacted by the most relevant brands for your audience with complete transparency on what they have to offer",
    img: STEP2BACK,
  },
  step3: {
    num: "03",
    title: "Connect easily with video and chat",
    desc:
      "Discuss directly with the influencer and agree on the terms of the collaboration",
    img: STEP3BACK,
  },
};
const active = "seeker";

function DefaultFashionseeker() {
  return (
    <>
      <Landing></Landing>
      <Intro active={active}></Intro>
      <Stastep {...seekerdata}></Stastep>
      <Footer></Footer>
    </>
  );
}

function MainFashionseeker() {
  return (
    <>
      <Landing active={active}></Landing>
      <Intro active={"main"}></Intro>
      <Stastep {...seekerdata}></Stastep>
      <Footer></Footer>
    </>
  );
}

export { DefaultFashionseeker, MainFashionseeker };
