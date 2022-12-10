import React from "react";
import StyledHeader from "./StyledHeader";
import Container from "./../Container/Container";
import Image from "next/image";
import logo from "../../Images/logo/Logo.svg";
import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="header__inner">
          <div className="left">
            <a href="/" className="logo">
              <Image src={logo} alt="logo" />
            </a>
          </div>
          <div className="middle">
            <Navbar />
          </div>
          <div className="right"></div>
        </div>
      </Container>
    </StyledHeader>
  );
};
export default Header;
