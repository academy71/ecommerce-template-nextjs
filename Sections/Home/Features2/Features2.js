import React from "react";
import Button from "../../../Components/Button/Button";
import Container from "../../../Components/Container/Container";
import { H2, LgPara } from "../../../styles/ShareStyles";
import StyledFeatures2 from "./StyledFeatures2";
import Image from "next/image";
import img1 from "./../../../Images/Features2/feature2_img1.png";
import img2 from "./../../../Images/Features2/feature2_img2.png";

const Features2 = () => {
  return (
    <StyledFeatures2>
      <Container>
        <div className="features2__row">
          <div className="features2__images">
            <Image src={img1} alt="" height="auto" width="auto" />
            <Image src={img2} alt="" height="auto" width="auto" />
          </div>
          <div className="features2__content">
            <H2 className="features2__title">
              Our Planet, Our Home, Producing the best Flowers
            </H2>
            <LgPara className="features2__description">
              Caring for the planet falls on everyone. And that’s why we’re
              doing our part to ensure a healthier home for generations to come.
            </LgPara>
            <Button text="Learn More" variant="primary" href="/" />
          </div>
        </div>
      </Container>
    </StyledFeatures2>
  );
};

export default Features2;
