import React, {useState} from "react";
import StyledHeader from "./StyledHeader";
import Container from "./../Container/Container";
import Image from "next/image";
import logo from "../../Images/logo/Logo.svg";
import Navbar from "../Navbar/Navbar";
import Cart from "./../icons/Cart";
import Button from "../Button/Button";
import MobileBtn from "./../icons/mobileBtn";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [authForm, setAuthForm] = useState(false);
  const [signInUpForm, setSignInUpForm] = useState(1);

  const MobileMenuClick = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  };

  const AuthFormClick = () => {
    setAuthForm((authForm) => !authForm);
  };

  const SignInUpFormClick = (index) => {
    setSignInUpForm(index);
  };


  return (
    <StyledHeader>
      <Container>
        <div className="header__inner">
          <div className="left">
            <a href="/" className="logo">
              <Image src={logo} alt="logo" />
            </a>
          </div>
          <div
            className={mobileMenu ? "middle open__menu" : "middle close__menu"}
          >
            <Navbar />
          </div>
          <div className="right">
            <div className="cart">
              <div className="cart__icon">
                <Cart />
              </div>
            </div>
            <div className="btn">
              <div className="btn__signIn" onClick={AuthFormClick}>
                <Button variant="smBtn" text="Sign In" />
              </div>
              <div className="btn__mobile" onClick={MobileMenuClick}>
                <MobileBtn />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* sign in sign up form  */}

      <div
        className={
          authForm
            ? "sign__in__up__form auth__form__open"
            : "sign__in__up__form auth__form__close"
        }
      >
        <div className="content">
          <div className="buttons">
            <button
              className={
                signInUpForm === 1
                  ? "buttons__btn buttons__btn__active"
                  : "buttons__btn"
              }
              onClick={() => SignInUpFormClick(1)}
            >
              Sign In
            </button>
            <button
              className={
                signInUpForm === 2
                  ? "buttons__btn buttons__btn__active"
                  : "buttons__btn"
              }
              onClick={() => SignInUpFormClick(2)}
            >
              Sign Up
            </button>
          </div>

          <div
            className={
              signInUpForm === 1 ? "open__Sign__in" : "close__sign__in"
            }
          >
            <SignIn />
          </div>

          <div
            className={
              signInUpForm === 2 ? "open__Sign__up" : "close__sign__up"
            }
          >
            <SignUp />
          </div>
        </div>
      </div>

      {/* sign in sign up form  */}
    </StyledHeader>
  );
};
export default Header;
