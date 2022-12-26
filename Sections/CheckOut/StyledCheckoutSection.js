import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledCheckOutSection = styled.section`
  background-color: ${THEME.colors.bgPrimary};
  padding: 50px 0;
  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ${media.up("lg")} {
      justify-content: space-between;
    }
  }
  .checkout__form {
    max-width: 670px;

    .or {
      color: ${THEME.colors.textSecondary};
      text-align: center;
      position: relative;
      margin-bottom: 20px;

      &::before {
        position: absolute;
        content: "";
        left: 0;
        bottom: 50%;
        width: 42%;
        height: 1px;
        background-color: ${THEME.colors.chineseSilver};
      }
      &::after {
        position: absolute;
        content: "";
        right: 0;
        bottom: 50%;
        width: 42%;
        height: 1px;
        background-color: ${THEME.colors.chineseSilver};
      }
    }
    .payment__method__btn {
      border: none;
      outline: none;
      background-color: ${THEME.colors.white};
      padding: 15px 35px;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 12px;
    }
  }

  .checkout__price__details {
    max-width: 470px;
    margin-top: 30px;
    ${media.up("lg")} {
      margin-top: 0;
    }
  }
  .checkout__bottom {
    align-items: center;
    justify-content: space-between;
    padding-top: 28px;
    border-top: 1px solid ${THEME.colors.btnSecondary};
    margin-top: 30px;
    ${media.up("sm")} {
      margin-top: 150px;
    }
    ${media.up("md")} {
      display: flex;
    }

    .left__text {
      a {
        text-decoration: none;
        color: ${THEME.colors.textSecondary};
        display: block;
        &:first-child {
          margin-right: 28px;
          margin-bottom: 8px;
          ${media.up("md")} {
            margin-bottom: 0;
          }
        }
        ${media.up("md")} {
          display: inline-block;
        }
      }
    }

    .copyright__text {
      color: ${THEME.colors.textSecondary};
      margin-top: 8px;
      ${media.up("md")} {
        margin-top: 0;
      }
    }
  }
`;

export default StyledCheckOutSection;
