import React from "react";
import StyledOrderSum from "./StyledOredrSummury";
import Button from "./../Button/Button";
import { H5, MdPara } from "../../styles/ShareStyles";

const OredrSummury = ({
  title,
  price,
  savings,
  shipping,
  salesText,
  btnText,
}) => {
  return (
    <StyledOrderSum>
      <H5 className="order__summury">{title}</H5>
      <MdPara className="checkout__price">
        <span>Original Price</span>
        <span>${price}</span>
      </MdPara>
      <MdPara className="checkout__price">
        <span>Savings</span>
        <span>${savings}</span>
      </MdPara>
      <MdPara className="checkout__price">
        <span>Shipping</span>
        <span>{shipping}</span>
      </MdPara>
      <MdPara className="checkout__price">
        <span>Estimated Sales Tax</span>
        <span>${salesText}</span>
      </MdPara>
      <H5 className="total__price">
        <span>Total</span>
        <span>$250.00</span>
      </H5>
      <Button text={btnText} variant="primary" />
    </StyledOrderSum>
  );
};

export default OredrSummury;
