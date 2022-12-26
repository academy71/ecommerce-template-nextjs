import React from "react";
import Container from "../../Components/Container/Container";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import StyledCheckOutSection from "./StyledCheckoutSection";
import { H5, MdPara } from "./../../styles/ShareStyles";
import Button from "../../Components/Button/Button";
import Link from "next/link";
import paypalImg from "./../../Images/paypal.svg";
import Image from "next/image";

const CheckOutSection = () => {
  return (
    <StyledCheckOutSection>
      <Container>
        <div className="row">
          {/* From */}
          <div className="checkout__form">
            <CheckoutForm />
            {/* Paypal Button */}
            <H5 className="paypal">Pay With Paypal</H5>
            <button className="payment__method__btn">
              <Image src={paypalImg} alt="" height="auto" width="auto" />
            </button>
          </div>
          <div className="checkout__price__details">
            <H5 className="order__summury">Order Summury</H5>
            <MdPara className="checkout__price">
              <span>Original Price</span>
              <span>$246.00</span>
            </MdPara>
            <MdPara className="checkout__price">
              <span>Savings</span>
              <span>$00.00</span>
            </MdPara>
            <MdPara className="checkout__price">
              <span>Shipping</span>
              <span>FREE</span>
            </MdPara>
            <MdPara className="checkout__price">
              <span>Estimated Sales Tax</span>
              <span>$4.00</span>
            </MdPara>
            <H5 className="total__price">
              <span>Total</span>
              <span>$250.00</span>
            </H5>
            <Button text="Proceed to Check Out" variant="primary" />
          </div>
        </div>
        {/* Check Out Footer */}
        <div className="checkout__bottom">
          <MdPara className="left__text">
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </MdPara>
          <MdPara className="copyright__text">
            Copyright © 2022 UIHUT All Rights Reserved
          </MdPara>
        </div>
      </Container>
    </StyledCheckOutSection>
  );
};

export default CheckOutSection;
