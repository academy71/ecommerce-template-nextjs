import React from "react";
import StyledNavbar from "./StyledNavbar";
import Search from "./../icons/Search";
import DownArrow from "./../icons/DownArrow";
import Link from "next/link";
import DATA from './../../Data/Data';
import Button from './../Button/Button';

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul className="nav">
        <li className="nav__item item menu">
          <Link href="/" className="nav__link link">
            <span className="nav__link__text">Occasions</span>
            <span className="nav__link__arrow__icon">
              <DownArrow />
            </span>
          </Link>

          <ul className="sub__menu">
            {DATA.header.Occasions.map(({to, name}, index) => {
              return (
                <li className="sub__menu__item item" key={index}>
                  <Link href={to} className="sub__menu__link link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>

        <li className="nav__item item menu">
          <Link href="/" className="nav__link link">
            <span className="nav__link__text">Flowers</span>
            <span className="nav__link__arrow__icon">
              <DownArrow />
            </span>
          </Link>

          <ul className="sub__menu">
            {DATA.header.Flowers.map(({to, name}, index) => {
              return (
                <li className="sub__menu__item item" key={index}>
                  <Link href={to} className="sub__menu__link link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>

        <li className="nav__item item">
          <Link href="/about_us" className="nav__link link">
            About us
          </Link>
        </li>

        <li className="nav__item item">
          <Link href="/contact" className="nav__link link">
            Contact us
          </Link>
        </li>

        <li className="nav__item item">
          <Link href="/" className="nav__link link">
            <span className="nav__link__search__icon">
              <Search />
            </span>
            <span className="nav__link__text">Search</span>
          </Link>
        </li>

        <li className="nav__item item signIn__btn">
          <Button variant="smBtn" text="Sign In" />
        </li>
      </ul>
    </StyledNavbar>
  );
};
export default Navbar;
