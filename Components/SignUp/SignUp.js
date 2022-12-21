import React from "react";
import StyledSignUp from "./StyledSignUp";
import {MdPara} from "../../styles/ShareStyles";
import Link from "next/link";
import Button from "../Button/Button";

const SignUp = () => {
  return (
    <StyledSignUp>
      <MdPara className="sign__up__title">
        Fill the below box to get started
      </MdPara>
      <form className="sign__up__form">
        <input
          type="email"
          placeholder="Email"
          className="sign__up__form__input"
        />
        <input
          type="text"
          placeholder="First name"
          className="sign__up__form__input"
        />
        <input
          type="text"
          placeholder="Last name"
          className="sign__up__form__input"
        />
        <input
          type="password"
          placeholder="Password"
          className="sign__up__form__input"
        />
        <input
          type="password"
          placeholder="Password confirmation"
          className="sign__up__form__input"
        />

        <MdPara className="sign__up__form__text">
          <input type="checkbox" className="sign__up__form__text__checkbox" />I
          agree to the{" "}
          <Link href="/" className="sign__up__form__text__link">
            Terms of Service
          </Link>
        </MdPara>

        <MdPara className="sign__up__form__text">
          <input type="checkbox" className="sign__up__form__text__checkbox" />
          Notify me about new features and special offers
        </MdPara>
        <div className="sign__up__form__btn">
          <Button variant="primary" text="Sign Up" />
        </div>
      </form>
    </StyledSignUp>
  );
};

export default SignUp;
