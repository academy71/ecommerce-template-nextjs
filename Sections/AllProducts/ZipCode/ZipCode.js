import React from "react";
import styled from "styled-components";
import Button from "../../../Components/Button/Button";
import media from "../../../styles/Responsive";
import {LgPara} from "../../../styles/ShareStyles";
import THEME from "../../../styles/Theme";

const StyledZipCode = styled.div`
  max-width: 270px;
  width: 100%;
  padding: 18px;
  background-color: ${THEME.colors.btnSecondary};
  

  .title {
    margin-bottom: 18px;
  }
  .form {
    &__input {
      width: 100%;
      height: 60px;
      border: none;
      outline: none;
      padding-left: 16px;
      font-family: ${THEME.fontFamily.manrope};
      font-style: normal;
      font-weight: ${THEME.fontWeight.weightNormal};
      font-size: 16px;
      line-height: 28px;
      color: ${THEME.colors.textSecondary};
      margin-bottom: 18px;
    }

    input[type="date"] {
      text-transform: uppercase;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
      padding: 18px;
      height: 24px;
      width: 24px;
      background-color: ${THEME.colors.textPrimary};
      color: ${THEME.colors.white} !important;
    }
  }
`;

const ZipCode = ({className}) => {
  return (
    <StyledZipCode className={className}>
      
      <LgPara className="title">Find Available Products</LgPara>

      <form className="form">

        <input
          type="text"
          placeholder="Delivery ZIP Code"
          className="form__input"
        />

        <input type="date" className="form__input" />

        <Button href="/" variant="primary" text="Shop Now" />

      </form>
    </StyledZipCode>
  );
};

export default ZipCode;
