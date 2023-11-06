"use client";

import styles from "./login.module.scss";
import Button from "@/app/components/Button/button";
import Image from "next/image";
import { useState } from "react";

export default function Login () {
    const [loading, setLoading] = useState(false);
    const [isEmailValid, setEmailValid] = useState(true);
    const [isPwdValid, setPwdValid] = useState(true);
    const [isFirstNameValid, setFirstNameValid] = useState(true);
    const [isLastNameValid, setLastNameValid] = useState(true);
    const [isRegister, setRegister] = useState(false);

    const handleSubmitBtnClick = (e) => {
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
            const form = e.target.form;
            const isFormValid = form.checkValidity();

            if (isFormValid) {
                if (!isRegister) {
                    // redirect to home page
                } else {
                    setRegister(true);
                }
            }

          form.classList.add("was-validated");
        }, 300);
    };

    const handleValidate = (e, type) => {
      const validity = e.target.checkValidity();

      switch (type) {
        case "email":
          setEmailValid(validity);
          break;
        case "pwd":
          setPwdValid(validity);
            break;
        case "firstName":
          setFirstNameValid(validity);
            break;
        case "lastName":
          setLastNameValid(validity);
            break;
        default:
          break;
      }

      if (type === "email") {
        setEmailValid(validity);

        return;
      }

      if (type === "pwd") {
        setPwdValid(validity);

        return;
      }
    };

    const handleRegister = () => {
      setEmailValid(true);
      setPwdValid(true);
      setRegister(true);
    };
    
    return (
      <div className="row row-cols-1 row-cols-md-2 g-0">
        <section className="col">
          <Image
            width={100}
            height={100}
            alt="cover" 
            priority
            className={`object-fit-cover w-100 ${styles["image-cover__login"]}`}
            src="/images/login-desktop.webp"
          />
        </section>

        <section className={`col d-flex ${styles["form__container"]}`}>
          <div className="mx-auto">
            {isRegister ? 
              <>
                <div
                  className="alert alert-success"
                  role="alert"
                >
                  This form will only take you one minute.
                </div>
                <h1 className="text-center mb-3">
                  👋 Hey there
                </h1>

              </>:
              <h1 className="text-center mb-5">
                🏡 Welcome
              </h1>}
            <form
              className={styles.form}
              noValidate
            >
              {isRegister && 
              <>
                <div className="mb-3">
                  <label
                    htmlFor="firstNameInput"
                    className="form-label fw-bold"
                  >
                    First Name
                  </label>
                  <input
                    id="firstNameInput"
                    type="text"
                    className={`form-control ${isFirstNameValid ? "" : "is-invalid"}`}
                    required
                    pattern="^[a-zA-z]+"
                    placeholder="Your first name"
                    onBlur={(e) => handleValidate(e, "firstName")}
                  />
                  <div className="invalid-feedback">
                    Please enter your first name.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="lastNameInput"
                    className="form-label fw-bold"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastNameInput"
                    type="text"
                    className={`form-control ${isLastNameValid ? "" : "is-invalid"}`}
                    required
                    pattern="^[a-zA-z]+"
                    placeholder="Your last name"
                    onBlur={(e) => handleValidate(e, "lastName")}
                  />
                  <div className="invalid-feedback">
                    Please enter your last name.
                  </div>
                </div>
              </>}
              <div className="mb-3">
                <label
                  htmlFor="emailInput"
                  className="form-label fw-bold"
                >
                  Email address
                </label>
                <input
                  id="emailInput"
                  className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
                  required
                  pattern="^[a-zA-Z](\.?[a-zA-Z]){2,}@northeastern\.edu$"
                  placeholder="your.name@northeastern.edu"
                  onBlur={(e) => handleValidate(e, "email")}
                />
                <div className="invalid-feedback">
                  Please enter a valid Northeastern email.
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="pwdInput"
                  className="form-label fw-bold"
                >
                  Password
                </label>
                <input
                  id="pwdInput"
                  type="password"
                  className={`form-control ${isPwdValid ? "" : "is-invalid"}`}
                  required
                  placeholder="Enter your password"
                  onBlur={(e) => handleValidate(e, "pwd")}
                />
                <div className="invalid-feedback">
                  Please enter a password.
                </div>
              </div>
              <Button
                className="mb-3 w-100"
                loading={loading}
                onClick={handleSubmitBtnClick}
              >
                Continue
              </Button>
              {!isRegister && 
              <>
                <div className="mb-5">
                  <span>
                    Don&rsquo;t have an account?
                  </span>
                  <Button
                    type="plain"
                    onClick={handleRegister}
                  >
                    Join now
                  </Button>
                </div>
              </>}
            </form>
          </div>
        </section>
      </div>
    );
}