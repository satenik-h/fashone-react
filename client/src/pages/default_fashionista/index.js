import React, { useEffect } from "react";
import DocumentMeta from "react-document-meta";

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
    desc:
      "Schedule your work time direct in app, we help you stress free bookings and earning.",
    img: STEP1BACK,
  },
  step2: {
    num: "02",
    title: "Accept and Manage appointments",
    desc:
      "After you accept requests from users , you can see all your upcoming appointments easily in appointments tab.",
    img: STEP2BACK,
  },
  step3: {
    num: "03",
    title: "Earn easily from anywhere",
    desc:
      "After every consulting credits will be given to you which you can encash through your paypal account.",
    img: STEP3BACK,
  },
};
const active = "sta";

function DefaultFashionista() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
  const meta = {
    title:
      "Fashionista-Get Ready for Next Fashion Trend or Earn Money at Home as Fashionista-Fashone.",
    description: "3 Step use for Fashionista EARN EASILY AT HOME",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <DocumentMeta {...meta}>
        <Landing active={active}></Landing>
        <Intro active={"main"}></Intro>
        <Stastep {...stadata}></Stastep>
        <Footer></Footer>
      </DocumentMeta>
    </>
  );
}

export { DefaultFashionista, MainFashionista };
