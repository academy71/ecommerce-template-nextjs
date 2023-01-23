import React, { useRef, useState } from "react";
import StyledSignIn from "./StyledSignIn";
import {LgPara, MdPara} from "../../styles/ShareStyles";
import Button from "../Button/Button";
import Link from "next/link";
import Google from "./../icons/Google";
import Facebook2 from "../icons/FaceBook2";
import Checkbox from "../Checkbox/Checkbox";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const formReset = () => {
    setUser({email: "", password: ""});
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formReset();
    setErrors({});

    let newErrors = false;

    if (!user.email) {
      newErrors = true;
      setErrors((prevErrors) => ({...prevErrors, email: "Email is required"}));
    }

    if (!user.password) {
      newErrors = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    }

    if (!newErrors) {
      console.log(user);
    }
  };
  return (
    <StyledSignIn>
      <MdPara className="sign__in__title">
        Fill the below box to get started
      </MdPara>

      <form className="sign__in__form" ref={formRef} onSubmit={handleSubmit}>
        {errors.email && <span>{errors.email}</span>}
        <input
          type="email"
          placeholder="Email"
          className="sign__in__form__input"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
        <input
          type="password"
          placeholder="Password"
          className="sign__in__form__input"
          value={user.password}
          name="password"
          onChange={handleChange}
        />

        <div className="sign__in__form__text">
          <Checkbox
            className="sign__in__form__text__checkbox"
            title="Remember me"
          />

          <MdPara className="sign__in__form__text__label">
            <Link href="/" className="sign__in__form__text__link">
              Forgot password?
            </Link>
          </MdPara>
        </div>

        <div className="sign__in__form__btn">
          <Button variant="primary" text="Sign In" />
        </div>
      </form>

      <LgPara className="or">OR</LgPara>
      <div className="auth__buttons">
        <button className="auth__buttons__btn">
          <Facebook2 />
          <span className="auth__buttons__btn__text">
            Continue with Facebook
          </span>
        </button>
        <button className="auth__buttons__btn">
          <Google />
          <span className="auth__buttons__btn__text">Continue with Google</span>
        </button>
      </div>
    </StyledSignIn>
  );
};

export default SignIn;
