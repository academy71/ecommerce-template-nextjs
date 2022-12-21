import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "../../styles/Theme";

const StyledSignIn = styled.div`
  padding: 38px 28px 28px;
  .sign__in__title {
    margin-bottom: 32px;
    text-align: center;
    color: ${THEME.colors.textSecondary};

    ${media.up("lg")} {
      margin-bottom: 55px;
    }
  }

  .sign__in__form {
    &__input {
      width: 100%;
      padding-bottom: 13px;
      outline: none;
      border: none;
      border-bottom: 1px solid ${THEME.colors.chineseSilver};
      margin-bottom: 18px;

      ${media.up("lg")} {
        margin-bottom: 32px;
      }

      &::placeholder {
        font-family: ${THEME.fontFamily.manrope};
        font-style: normal;
        font-weight: ${THEME.fontWeight.weightNormal};
        font-size: 16px;
        line-height: 28px;
        color: ${THEME.colors.textSecondary};
      }
    }

    &__text {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__label {
        color: ${THEME.colors.textSecondary};
      }

      &__checkbox {
        border: 1px solid ${THEME.colors.chineseSilver};
        width: 14px;
        height: 14px;
        margin-right: 6px;
      }
      &__link {
        color: ${THEME.colors.textSecondary};
      }
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 32px 0;
    }

    .primary {
      width: 315px;
      padding: 10px 0;

      ${media.up("sm")} {
        width: 424px;
      }
    }
  }

  .or {
    color: ${THEME.colors.textSecondary};
    text-align: center;
    position: relative;
    margin-bottom: 22px;

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

  .auth__buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 16px;

    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 13px;
      padding: 12px 26px 12px 12px;
      border: 1px solid ${THEME.colors.chineseSilver};
      background-color: ${THEME.colors.white};
      outline: none;

      &__text {
        font-family: ${THEME.fontFamily.manrope};
        font-style: normal;
        font-weight: ${THEME.fontWeight.weightNormal};
        font-size: 16px;
        line-height: 28px;
        color: ${THEME.colors.btnPrimary};
      }
    }
  }
`;

export default StyledSignIn;
