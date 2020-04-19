import React, { useEffect } from "react";
import DocumentMeta from "react-document-meta";

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
    desc:
      "We have different categories of Fashionista according to your fashion requirements. Search them instantly based on your needs.",
    img: STEP1BACK,
  },
  step2: {
    num: "02",
    title: "Pay and Book Fashionista",
    desc:
      "Pay and Book Fashionista with easy steps . Dont forget to write your fashion queries to help them understand your fashion problems.",
    img: STEP2BACK,
  },
  step3: {
    num: "03",
    title: "Connect easily with video and chat",
    desc:
      "After every consulting credits will be given to you which you can encash through your paypal account.",
    img: STEP3BACK,
  },
};
const active = "seeker";

function DefaultFashionseeker() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
  const meta = {
    title:
      "Fashion Seeker-Get Ready for Next Fashion Trend or Earn Money at Home as Fashionista-Fashone.",
    description: "3 Step use for Fashion Seeker TO BOOK AND CONSULT",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <DocumentMeta {...meta}>
        <Landing active={active}></Landing>
        <Intro active={"main"}></Intro>
        <Stastep {...seekerdata}></Stastep>
        <Footer></Footer>
      </DocumentMeta>
    </>
  );
}

export { DefaultFashionseeker, MainFashionseeker };
