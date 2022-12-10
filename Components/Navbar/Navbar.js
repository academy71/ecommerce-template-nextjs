import Image from "next/image";
import React from "react";
import StyledNavbar from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul className="nav">
        <li className="nav__item">
          <a href="/" className="nav__links">
            <span className="nav__links__text">Occasions</span>
            {/* <Image src={downArrow} alt="down svg" className="nav__links__svg" /> */}
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__links">
            <span className="nav__links__text">Flowers</span>
            {/* <Image src={downArrow} alt="down svg" className="nav__links__svg" /> */}
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__links">
            About us
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__links">
            Contact us
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__links">
            {/* <Image src={search} alt="search" className="nav__links__svg" /> */}
            <span className="nav__links__text">Search</span>
          </a>
        </li>
      </ul>
    </StyledNavbar>
  );
};
export default Navbar;
