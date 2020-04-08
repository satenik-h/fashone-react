import React, { useState } from "react";
import FOOTERLOGO from "../../assets/img/footer-logo.png";
import "./style.scss";

function Footer() {
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

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

  const handleSubmit = () => {
    setSubmit(true);
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
                  onClick={() => {
                    handleSubmit();
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
                <a href="/#">Terms</a>
                <a href="/#">Privacy</a>
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
              <a href="/#">Terms</a>
              <a href="/#">Privacy</a>
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
