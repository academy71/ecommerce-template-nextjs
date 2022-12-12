import React from "react";
import Button from "../../../Components/Button/Button";
import Container from "../../../Components/Container/Container";
import {H4, SmPara} from "../../../styles/ShareStyles";
import bgImg from "../../../Images/hero/start-shop-bg.png";
import StyledStartShop from "./StyledStartShop";

const StartShop = () => {
  return (
    <StyledStartShop image={bgImg}>

      <Container>

        <div className="content">

          <H4 className="content__title">Start here</H4>

          <form className="form">

            <div className="form__area">
              <SmPara className="form__area__label">Sending to</SmPara>
              <input
                type="text"
                placeholder="Delivery ZIP Code"
                className="form__area__input"
              />
            </div>

            <div className="form__area">
              <SmPara className="form__area__label">Delivery date</SmPara>
              <input type="date" className="form__area__input" />
            </div>

            <Button href="/" variant="primary" text="Shop Now" />

          </form>

        </div>

      </Container>
      
    </StyledStartShop>
  );
};

export default StartShop;
