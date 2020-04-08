import React from "react";
import Landing from "../../components/landing";
import Intro from "../../components/intro";
import Stastep from "../../components/stastep";
import Footer from "../../components/footer";

import STEP1BACK from "../../assets/img/step1-back.png";
import STEP2BACK from "../../assets/img/step2-back.png";
import STEP3BACK from "../../assets/img/step3-back.png";

import "./style.scss";

const stadata = {
  title: {
    left: (
      <>
        3 Step use for Fashionista<br></br>
        <span>EARN EASILY AT HOME</span>
      </>
    ),
  },
  step1: {
    num: "01",
    title: "Schedule your Work",
    desc: "Showcase who you are, your past work and what you are looking for",
    img: STEP1BACK,
  },
  step2: {
    num: "02",
    title: "Accept and Manage appointments",
    desc:
      "Find and get contacted by the most relevant influencers for your brand or company with complete transparency on their profile audience statistics, portfolio, past reviews)",
    img: STEP2BACK,
  },
  step3: {
    num: "03",
    title: "Earn easily from anywhere",
    desc:
      "Discuss directly with the influencer and agree on the terms of the collaboration",
    img: STEP3BACK,
  },
};
const active = "sta";

function DefaultFashionista() {
  return (
    <>
      <Landing></Landing>
      <Intro active={active}></Intro>
      <Stastep {...stadata}></Stastep>
      <Footer></Footer>
    </>
  );
}

function MainFashionista() {
  return (
    <>
      <Landing active={active}></Landing>
      <Intro active={"main"}></Intro>
      <Stastep {...stadata}></Stastep>
      <Footer></Footer>
    </>
  );
}

export { DefaultFashionista, MainFashionista };
