import React from "react";
import StyledFooter from "./StyledFooter";
import Container from "./../Container/Container";
import { H3, H5, LgPara, MdPara } from "../../styles/ShareStyles";
import Image from "next/image";
import Logo from "./../../Images/logo/Logo.svg";
import DATA from "./../../Data/Data";
import Link from "next/link";
import ChatIcon from "./../icons/ChatIcon";
import FacebookIcon from "./../icons/Facebook";
import LinkdinIcon from "./../icons/Linkdin";
import TwitterIcon from "./../icons/Twitter";

const Footer = () => {
  const data = DATA.footer;
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
          {/* Shop */}
          <div className="col shop">
            <H5 className="title">Shop</H5>
            <ul className="links">
              {data.shop.map(({ name, to }, i) => {
                return (
                  <li key={i} className="link">
                    <Link href={to}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Company */}
          <div className="col company">
            <H5 className="title">Company</H5>
            <ul className="links">
              {data.company.map(({ name, to }, i) => {
                return (
                  <li key={i} className="link">
                    <Link href={to}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Help */}
          <div className="col help">
            <H5 className="title">Help</H5>
            <ul className="links">
              {data.help.map(({ name, to }, i) => {
                return (
                  <li key={i} className="link">
                    <Link href={to}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contact */}
          <div className="col contact">
            <H5 className="title">Contact</H5>
            <MdPara className="contact__description">
              <span>We are here for you 24 hours a day. </span>
              <br />
              <Link href="#">(000) 123 456 789</Link>
            </MdPara>
            <Link className="click__to__chat" href="#">
              <ChatIcon />
              Click Here To Chat
            </Link>
            {/* Social Links */}
            <div className="social__links">
              <H5 className="follow_us">Follow Us</H5>

              <Link href="#">
                <FacebookIcon />
              </Link>
              <Link href="#">
                <LinkdinIcon />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer__bottom">
          <MdPara className="left__text">
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </MdPara>
          <MdPara className="copyright__text">
            Copyright © 2022 UIHUT All Rights Reserved
          </MdPara>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
