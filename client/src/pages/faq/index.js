import React, { useEffect } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import CollapseItem from "../../components/collapseitem";
import "./style.scss";

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="faq app-container">
        <div className="faq-title">FAQs</div>
        <CollapseItem title="What is Fashone">
          <p>
            Fashion is fashion consulting platform where visitors / users can
            book fashion experts/fashionistas around the world for solving their
            fashion, styling , beauty etc problems online.
          </p>
        </CollapseItem>
        <CollapseItem title="How does Video, Voice & Chat work ?">
          <p>
            Fashionistas and users have connection to video room only after
            successful booking and only at respective appointments.
          </p>
          <p>
            If any person not comfortable with Video , they can switch to voice
            calls.
          </p>
          <p>
            Users and Fashionistas can chat anytime before or after appointments
            . Exchange of images , video are possible not exceeding 25MB .
          </p>
        </CollapseItem>

        <div className="faq-subtitle">Credits.</div>
        <CollapseItem title="How can I purchase Credits ?">
          <p>
            Credits purchase is fast and easy to an existing account . Verify
            that you’re logged in. Click on “Buy Credits” in app
          </p>
          <ul className="page-number">
            <li>Choose a payment method</li>
            <li>Choose the desired credit package</li>
            <li>
              Complete the Credits purchase process by entering the necessary
              details
            </li>
          </ul>
        </CollapseItem>
        <CollapseItem title="What do I do if a credit purchase is unsuccessful?">
          <p>
            If you experience an unsuccessful credit purchase please check your
            registered e-mail address. Don´t forget to check Spam/Junk/Bulk
            folders as well! If you received an email from "Instafashion LTD"
            regarding the transaction, please reply to the email as soon as
            possible. Our representative will shortly contact you. If you don’t
            receive an email from Instafashion Ltd regarding the transaction,
            you may contact our customer service in the following ways:
          </p>
          <ul className="page-number">
            <li>
              1. Send a message from the email address that you registered for
              your Fashone account to{" "}
              <a href="mailto:help@fashone.com">help@fashone.com</a>.
            </li>
          </ul>
        </CollapseItem>
        <CollapseItem title="How can I check my Credit balance?">
          <p>
            In our Android or iPhone App under Credits tab you can check your
            purchased or available credits. If you any question please feel free
            to ask us at <a href="mailto:help@fashone.com">help@fashone.com</a>.
          </p>
        </CollapseItem>
        <CollapseItem title="I tried to buy Credits with a bank card but my transaction was declined, why?">
          <p>
            There could be several reasons why your card might get declined.
            Please check the available funds on your account as well as the
            card’s expiration date.{" "}
          </p>
          <p>
            Some issuing banks may also block online transactions, if they
            reoccur in an unusual frequency. Please contact your bank to clarify
            their payment policy.{" "}
          </p>
          <p>
            If the problem still exists, send an email to help@fashone.com
            describing what type of card you attempt to use. If we can’t provide
            you with a solution, we may offer other billing options.
          </p>
        </CollapseItem>

        <div className="faq-subtitle">Member Account</div>
        <CollapseItem title="I forgot my password. What can I do?">
          <p>
            If you can’t recall your password, please go to the Forgot Password
            button on Signup page. After providing your registered email address
            check your email to complete your password reset.
          </p>
        </CollapseItem>

        <div className="faq-subtitle">Billing Help</div>
        <CollapseItem title="Why haven’t I received an email sales confirmation/receipt?">
          <p>
            Please note that many email accounts are also protected by spam
            filters which may automatically place some of our emails into spam
            folders.{" "}
          </p>
          <p>
            If you happen to find your wanted email there, just mark it as a
            regular mail, not junk/trash to receive all future messages in your
            regular mailbox.
          </p>
        </CollapseItem>
        <CollapseItem title="The dates of the charges on my bank statement do not match my purchases. Why?">
          <p>
            Some of the banks do not deduct the amount at the time of the
            transaction but later when your account is totally cleared.{" "}
          </p>
          <p>
            This might cause a delay between the actual date of the charge and
            the date it appears on your bank statement.
          </p>
        </CollapseItem>

        <div className="faq-subtitle">General/Miscellaneous</div>
        <CollapseItem title="Does Fashone Team contact"></CollapseItem>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Faq;
