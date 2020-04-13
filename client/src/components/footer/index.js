import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FOOTERLOGO from "../../assets/img/footer-logo.png";
import "./style.scss";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = (error) => {
    let valid = true;
    if (error.length > 0) valid = false;
    return valid;
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    let temperror = error;
    temperror =
      value.length === 0
        ? ""
        : value.length > 0 && validEmailRegex.test(value)
        ? ""
        : "Please check your email";
    setEmail(value);
    setError(temperror);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let temperror = error;
    if (email === "") {
      temperror = "Please check your email";
    }
    setError(temperror);

    if (validateForm(temperror)) {
      let data = {
        email: email,
        name: "Fashone",
        socialmedia: "Fashone",
      };
      await axios
        .post("http://localhost:3030/api/sendmail", data)
        .then(() => {
          setSubmit(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="footer">
      <div className="footer-subscribe">
        <div className="footer-container app-container">
          <div className="footer-subscribe-container">
            <div className="footer-subscribe-title">
              Subscribe
              <p>To get our latest updates</p>
            </div>
            {!submit && (
              <div className="footer-subscribe-button">
                <input
                  name="email"
                  type="email"
                  className={`footer-subscribe-button-email ${
                    error.length > 0 && "footer-subscribe-error-border"
                  }`}
                  placeholder="EMAIL"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                ></input>
                {error.length > 0 && (
                  <div className="footer-subscribe-error">{error}</div>
                )}
                <div
                  className="footer-subscribe-button-submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <span>SUBMIT</span>
                </div>
              </div>
            )}
            {submit && (
              <div className="footer-subscribe-submit">
                Thanks for subscribe!
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-container app-container">
          <div className="footer-contact-container">
            <div className="footer-contact-logo">
              <a href="/#">
                <img src={FOOTERLOGO} alt="footerlogo"></img>
              </a>
              <div className="footer-contact-logo-copyright">
                © Fashione, All Rights Reserved
              </div>
            </div>
            <div className="footer-contact-social">
              <div className="footer-contact-social-link">
                <Link to="/terms">Terms</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/faq">Faq</Link>
              </div>
              <div className="footer-contact-social-icon">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
              </div>
            </div>
            <div className="footer-contact-mobile-logo">
              <a href="/#">
                <img src={FOOTERLOGO} alt="footerlogo"></img>
              </a>
            </div>
            <div className="footer-contact-mobile-social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="footer-contact-mobile-privacy">
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/faq">Faq</Link>
            </div>
            <div className="footer-contact-mobile-copyright">
              © Fashione, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
