import React, {useEffect, useRef, useState} from "react";
import StyledHeader from "./StyledHeader";
import Container from "./../Container/Container";
import Image from "next/image";
import logo from "../../Images/logo/Logo.svg";
import Navbar from "../Navbar/Navbar";
import Cart from "./../icons/Cart";
import Button from "../Button/Button";
import MobileBtn from "./../icons/mobileBtn";

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const MobileMenuClick = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
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
              <div className="btn__signIn">
                <Button variant="smBtn" text="Sign In" />
              </div>
              <div
                className="btn__mobile"
                onClick={MobileMenuClick}
              >
                <MobileBtn />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};
export default Header;
