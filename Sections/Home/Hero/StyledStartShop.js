import styled from "styled-components";
import THEME from "../../../styles/Theme";
import media from "../../../styles/Responsive";



const StyledStartShop = styled.div`
  background-color: ${THEME.colors.btnSecondary};
  padding: 55px 0;
  width: 100%;

  ${media.up("lg")} {
    padding: 46px 0;
    background-image: url(${(props) => props.image.src});
    background-repeat: no-repeat;
    background-position: center;
  }

  .content {
    margin-bottom: 16px;

    ${media.up("lg")} {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 16px;
      margin-bottom: 0;
    }

    &__title {
      font-size: 22px;
      line-height: 32px;
    }

    .form {
      ${media.up("md")} {
        display: flex;
        align-items: flex-end;
        column-gap: 12px;
      }
    }

    .form__area {
      margin-bottom: 16px;

      ${media.up("md")} {
        margin-bottom: 0;
      }

      &__label {
        margin-bottom: 8px;
      }

      &__input {
        width: 251px;
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
  }
`;

export default StyledStartShop;
