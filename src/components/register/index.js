import React, { useState } from "react";
import "./style.scss";

function Register({ active }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [socialName, setSocialName] = useState();
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", socialName: "" });
  const [title, setTitle] = useState(true);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validateForm(errors)) {
    //   console.log("Valide Form");
    // } else {
    //   console.log("Invalide Form");
    // }
    setTitle(false);
    // alert(title);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let temperrors = errors;

    switch (name) {
      case "name":
        temperrors.name =
          value.length > 0 && value.length < 5
            ? "Please check your name"
            : value.length >= 5
            ? "right"
            : "";
        setName(value);
        break;
      case "email":
        temperrors.email =
          value.length === 0
            ? ""
            : value.length > 0 && validEmailRegex.test(value)
            ? "right"
            : "Please check your email";
        setEmail(value);
        break;
      case "socialname":
        temperrors.socialName =
          value.length > 0 && value.length < 5
            ? "Please check your social user name"
            : value.length >= 5
            ? "right"
            : "";
        setSocialName(value);
        break;
      default:
        break;
    }
    setErrors({ ...temperrors });
  };

  return (
    <div className="register">
      <div className="register-tag"></div>
      <div className="register-title">
        {title && active === "sta"
          ? "Fashionista Pre-register"
          : title && active === "seeker"
          ? "Fashion Seeker Pre-register"
          : ""}
        {!title && active === "sta" && "Thanks for Fashionista Pre-register!"}
        {!title &&
          active === "seeker" &&
          "Thanks for Fashion Seeker Pre-register!"}
      </div>
      {!title && (
        <span className="register-subtitle">
          Our team will contact you by mail
        </span>
      )}
      <form className={`register-form ${!title && "register-form-hide"}`}>
        <div
          className={`register-form-input ${
            errors.name.length > 0 &&
            errors.name !== "right" &&
            "register-error-border"
          }`}
        >
          <input
            name="name"
            type="text"
            placeholder="NAME"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          {errors.name === "right" && <span></span>}
        </div>
        {errors.name.length > 0 && errors.name !== "right" && (
          <span className="register-error">{errors.name}</span>
        )}
        <div
          className={`register-form-input ${
            errors.email.length > 0 &&
            errors.email !== "right" &&
            "register-error-border"
          }`}
        >
          <input
            name="email"
            type="email"
            placeholder="EMAIL"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          {errors.email === "right" && <span></span>}
        </div>
        {errors.email.length > 0 && errors.email !== "right" && (
          <span className="register-error">{errors.email}</span>
        )}
        {active === "sta" && (
          <>
            <div
              className={`register-form-input ${
                errors.socialName.length > 0 &&
                errors.socialName !== "right" &&
                "register-error-border"
              }`}
            >
              <input
                name="socialname"
                placeholder="SOCIAL MEDIA USERNAME"
                onChange={(e) => {
                  handleChange(e);
                }}
              ></input>
              {errors.socialName === "right" && <span></span>}
            </div>
            {errors.socialName.length > 0 && errors.socialName !== "right" && (
              <span className="register-error">{errors.socialName}</span>
            )}
          </>
        )}
        <div className="register-checkbox-container">
          <div
            className="register-checkbox"
            onClick={() => {
              setCheck(!check);
            }}
          >
            <span
              className={`register-checkmark ${
                check ? "register-checkmark-checked" : ""
              }`}
            ></span>
          </div>
          <div>
            By signing up you confirm that you accept the Terms & Conditions.
          </div>
        </div>
        <div
          className="register-form-button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          <span>PRE-REGISTER</span>
        </div>
      </form>
    </div>
  );
}

export default Register;
