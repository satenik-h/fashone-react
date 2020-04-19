import React, { useEffect } from "react";
import DocumentMeta from "react-document-meta";

import Landing from "../../components/landing";
import Footer from "../../components/footer";

const register = "register";

function StaRegister() {
  const meta = {
    title:
      "Pre-Register Fashionista-Get Ready for Next Fashion Trend or Earn Money at Home as Fashionista-Fashone.",
    description: "Fashionista Pre-register in minutes for fashion revolution",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const active = "sta";
  return (
    <>
      <DocumentMeta {...meta}>
        <Landing active={active} register={register}></Landing>
        <Footer></Footer>
      </DocumentMeta>
    </>
  );
}

function SeekerRegister() {
  const meta = {
    title:
      "Pre-Register Fashion Seeker-Get Ready for Next Fashion Trend or Earn Money at Home as Fashionista-Fashone.",
    description:
      "Fashion Seeker Pre-register in minutes for fashion revolution",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const active = "seeker";
  return (
    <>
      <DocumentMeta {...meta}>
        <Landing active={active} register={register}></Landing>
        <Footer></Footer>
      </DocumentMeta>
    </>
  );
}

export { StaRegister, SeekerRegister };
