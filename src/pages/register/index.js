import React from "react";
import Landing from "../../components/landing";
import Footer from "../../components/footer";

const register = "register";

function StaRegister() {
  const active = "sta";
  return (
    <>
      <Landing active={active} register={register}></Landing>
      <Footer></Footer>
    </>
  );
}

function SeekerRegister() {
  const active = "seeker";
  return (
    <>
      <Landing active={active} register={register}></Landing>
      <Footer></Footer>
    </>
  );
}

export { StaRegister, SeekerRegister };
