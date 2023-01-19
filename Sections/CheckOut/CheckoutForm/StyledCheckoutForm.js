import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from "./../../../styles/Theme";

const StyledCheckoutForm = styled.form`
  width: 100%;
  .billing__details {
    max-width: 570px;
  }
  .checkout__form__title {
    margin-bottom: 18px;
  }
  .checkout__form__sub__title {
    margin-bottom: 12px;
    font-weight: ${THEME.fontWeight.weightSemiBold};
  }
  .input__group {
  }
  /* input Common Style */
  .input {
    border: none;
    outline: none;
    padding: 15px 0 15px 15px;
    width: 100%;
    background-color: ${THEME.colors.white};
    margin-bottom: 20px;
    appearance: none;
    min-height: 60px;
    &::placeholder {
      font: normal ${THEME.fontWeight.weightNormal} 18px
        ${THEME.fontFamily.manrope};
      line-height: 30px;
      color: ${THEME.colors.textSecondary};
    }
  }
  input[name="fName"],
  input[name="lName"] {
    ${media.up("sm")} {
      width: calc(50% - 10px);
    }
  }
  .full__name {
    ${media.up("sm")} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  /* custom__select */

  select {
    border: none;
    outline: none;
    padding: 15px 0 15px 15px;
    width: 100%;
    margin-bottom: 20px;
    appearance: none;
    font: normal ${THEME.fontWeight.weightNormal} 18px
      ${THEME.fontFamily.manrope};
    line-height: 30px;
    color: ${THEME.colors.textSecondary};
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAyMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEwTDAgMEgyMEwxMCAxMFoiIGZpbGw9IiM1NjYzNjMiLz4KPC9zdmc+Cg==");
    background-repeat: no-repeat;
    background-position: right 15px center;
    option {
      border-radius: 0 !important;
      border: 1px solid #c4d1d0;
      padding: 5px 0;
    }
  }

  .city__zipcode {
    ${media.up("sm")} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    input,
    select {
      ${media.up("sm")} {
        width: calc(33% - 10px);
      }
    }
  }
  .optional__text {
    font-weight: ${THEME.fontWeight.weightSemiBold};
    margin-bottom: 12px;
    span {
      font-weight: ${THEME.fontWeight.weightNormal};
      color: ${THEME.colors.textSecondary};
    }
  }
  textarea {
    resize: none;
    min-height: 180px !important;
  }

  /* card Information */
  .card__information {
    ${media.up("xl")} {
      width: 670px;
    }
    &__title {
      margin-bottom: 12px;
    }
    .input {
      margin-bottom: 20px;
      ${media.up("sm")} {
        margin-bottom: 30px;
      }
    }
    .full__name {
      input {
        ${media.up("sm")} {
          width: calc(50% - 15px);
        }
      }
    }
  }
`;
export default StyledCheckoutForm;
