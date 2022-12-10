import React from "react";
import StyledFooter from "./StyledFooter";
import Container from "./../Container/Container";
import { H3, LgPara } from "../../styles/ShareStyles";
import Image from "next/image";
import Logo from "./../../Images/logo/Logo.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <H3 className="footer__title footer__text__center">
          Join Over 7 Million Satisfied Customers
        </H3>
        <LgPara className="footer__description footer__text__center">
          Same Day Flower Delivery, We Guarantee the Florist Arranged Flowers
          will be Delivered Today!
        </LgPara>
        <div className="footer__logo">
          <Image src={Logo} alt="Choicest Logo" width="auto" height="auto" />
        </div>
        <div className="footer__body">
          <div className="col shop"></div>
          <div className="col company"></div>
          <div className="col help"></div>
          <div className="col Contact"></div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
