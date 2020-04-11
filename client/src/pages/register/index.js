import React, { useEffect } from "react";
import Landing from "../../components/landing";
import Footer from "../../components/footer";

const register = "register";

function StaRegister() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const active = "sta";
  return (
    <>
      <Landing active={active} register={register}></Landing>
      <Footer></Footer>
    </>
  );
}

function SeekerRegister() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const active = "seeker";
  return (
    <>
      <Landing active={active} register={register}></Landing>
      <Footer></Footer>
    </>
  );
}

export { StaRegister, SeekerRegister };
