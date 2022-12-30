import React from "react";
import StyledCartSection from "./StyledCartSection";
import Container from "./../../Components/Container/Container";
import OredrSummury from "../../Components/OrderSummmury/OredrSummury";
import Card from "../../Components/Card/Card";
import { H5 } from "../../styles/ShareStyles";

const CartSection = () => {
  return (
    <StyledCartSection>
      <Container>
        <div className="row">
          <div className="cart__item">
            <H5 className="cart">Cart (3)</H5>
            <Card />
            <Card />
            <Card />
          </div>
          <div className="cart__order__summury">
            <OredrSummury
              btnText="Check Out"
              price="246.00"
              salesText="4.00"
              savings="00.00"
              shipping="FREE"
              title="Order Summury"
            />
          </div>
        </div>
      </Container>
    </StyledCartSection>
  );
};

export default CartSection;
