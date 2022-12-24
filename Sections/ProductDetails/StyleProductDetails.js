import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledProductDetails = styled.section`
  background-color: ${THEME.colors.bgPrimary};
  padding: 100px 0;
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .product__slider {
    max-width: 570px;
    width: 100%;
    ${media.down("lg")} {
      margin-bottom: 30px;
    }
  }
  .product__details {
    max-width: 470px;
    width: 100%;
    &__sub__title {
      color: ${THEME.colors.textSecondary};
      margin-bottom: 12px;
    }
    &__title {
      font-size: 22px;
      line-height: 32px;
      margin-bottom: 18px;
    }
    &__price {
      margin-bottom: 28px;
    }
    .quality {
      margin-bottom: 14px;
      display: flex;
      column-gap: 14px;
      align-items: center;
      .radio {
        display: none;
      }
      label {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        span {
          margin-left: 37px;
          font: normal ${THEME.fontWeight.weightNormal} 18px
            ${THEME.fontFamily.manrope};
          line-height: 30px;
          color: ${THEME.colors.textPrimary};
        }
        &::before {
          content: "";
          position: absolute;
          width: 24px;
          height: 24px;
          border: 1px solid ${THEME.colors.btnPrimary};
          border-radius: 50%;
        }
        &::after {
          content: "";
          position: absolute;
          top: 9px;
          left: 6px;
          width: 12px;
          height: 12px;
          background-color: ${THEME.colors.btnPrimary};
          border-radius: 50%;
          opacity: 0;
        }
      }
      .radio[type="radio"]:checked + label::after {
        opacity: 1;
      }
    }
    .input__group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 14px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      row-gap: 20px;
      ${media.up("md")} {
        margin-bottom: 28px;
      }

      .input {
        border: none;
        outline: none;
        width: 225px;
        min-height: 60px;
        background-color: ${THEME.colors.white};
        font: normal ${THEME.fontWeight.weightNormal} 16px
          ${THEME.fontFamily.manrope};
        &::placeholder {
          line-height: 28px;
          color: ${THEME.colors.textSecondary};
          font: normal ${THEME.fontWeight.weightNormal} 16px
            ${THEME.fontFamily.manrope};
        }

        &[type="date"]::-webkit-calendar-picker-indicator {
          padding: 18px 23px;
          height: 24px;
          width: 24px;
          background-color: ${THEME.colors.textPrimary};
          color: ${THEME.colors.white} !important;
        }
      }
      .date {
        padding-left: 16px;
      }
      .zip__code {
        padding: 16px;
      }
    }
    .primary {
      width: 470px;
      @media (max-width: 500px) {
        width: 339px;
      }
    }
  }
`;
export default StyledProductDetails;
