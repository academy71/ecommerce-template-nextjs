import React from "react";
import StyledNewsLetter from "./StyledNewsLetter";
import { H2, LgPara } from "./../../styles/ShareStyles";
import Button from "../Button/Button";
import Image from "next/image";
import image from "./../../Images/NewsLetter/Images.png";

const NewsLetter = () => {
  return (
    <StyledNewsLetter className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__row">
          <div className="newsletter__text">
            <H2 className="newsletter__title">
              Get The Best Flowers Update to You
            </H2>
            <LgPara className="newsletter__description">
              Access our extraordinary collection of flowers, with step-by-step
              guidance at every stage.
            </LgPara>
            <form className="newsletter__subscribe">
              <input type="text" placeholder="Your email address" />
              <Button text="Subscribe" variant="smBtn" />
            </form>
          </div>
          <div className="newsletter__img">
            <Image src={image} alt="Flower Image" width="auto" height="auto" />
          </div>
        </div>
      </div>
    </StyledNewsLetter>
  );
};

export default NewsLetter;
