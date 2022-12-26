import React from "react";
import Container from "../../Components/Container/Container";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import StyledCheckOutSection from "./StyledCheckoutSection";
import { H5, MdPara } from "./../../styles/ShareStyles";

import Link from "next/link";
import paypalImg from "./../../Images/paypal.svg";
import Image from "next/image";
import OredrSummury from "../../Components/OrderSummmury/OredrSummury";

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
            <OredrSummury
              btnText="Proceed to Check Out"
              price="246.00"
              salesText="4.00"
              savings="00.00"
              shipping="FREE"
              title="Order Summury"
            />
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
