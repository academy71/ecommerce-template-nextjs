import React from "react";
import StyledSignIn from "./StyledSignIn";
import {LgPara, MdPara} from "../../styles/ShareStyles";
import Button from "../Button/Button";
import Link from "next/link";
import Google from "./../icons/Google";
import Facebook2 from "../icons/FaceBook2";

const SignIn = () => {
  return (
    <StyledSignIn>
      <MdPara className="sign__in__title">
        Fill the below box to get started
      </MdPara>

      <form className="sign__in__form">
        <input
          type="email"
          placeholder="Email"
          className="sign__in__form__input"
        />

        <input
          type="password"
          placeholder="Password"
          className="sign__in__form__input"
        />

        <div className="sign__in__form__text">
          <MdPara className="sign__in__form__text__label">
            <input
              type="checkbox"
              className="sign__in__form__text__checkbox"
            />
            Remember me
          </MdPara>

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
