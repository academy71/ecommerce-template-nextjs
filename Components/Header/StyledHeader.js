import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledHeader = styled.header`
  position: relative;
  padding: 36px 0;
  background-color: ${THEME.colors.bgPrimary};

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .middle {
    display: none;

    ${media.down("lg")} {
      position: fixed;
      top: 0;
      left: 0;
      /* width: 100%; */
      /* height: 100%; */
      transition: all ease-in-out 0.15s;
      /* background: rgba(62, 1, 47, .7); */
      padding: 18px 0 0 18px;
    }
  }

  .open__menu {
    display: block;
    transform: translateY(0);
    transition: all ease-in-out 0.15s;
  }

  .close__menu {
    display: none;
    transform: translateY(-100%);
    transition: all ease-in-out 0.15s;

    ${media.up("lg")} {
      display: block;
      transform: translateY(0);
    }
  }

  .right {
    display: flex;
    align-items: center;

    .cart {
      margin-right: 28px;
    }

    .btn {
      &__signIn {
        display: none;

        ${media.up("lg")} {
          display: block;
        }
      }
      &__mobile {
        display: block;

        ${media.up("lg")} {
          display: none;
        }
      }
    }
  }

  /* sign in sign up form  */

  .sign__in__up__form {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100vh;
    padding: 18px;
    z-index: 11;
    display: none;
    background: rgba(62, 1, 47, 0.7);

    .content {
      max-width: 470px;
      width: 100%;
      height: auto;
      background-color: ${THEME.colors.white};
      margin: 0 auto;

      ${media.up("lg")} {
        margin-top: 65px;
      }
    }

    .buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      row-gap: 12px;

      &__btn__active {
        background-color: ${THEME.colors.btnSecondary} !important;
      }

      &__btn {
        width: 235px;
        font-family: ${THEME.fontFamily.manrope};
        font-style: normal;
        font-weight: ${THEME.fontWeight.weightSemiBold};
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        color: ${THEME.colors.textPrimary};
        border: 1px solid ${THEME.colors.chineseSilver};
        outline: none;
        padding: 15px 0;
        background-color: transparent;
        transition: all ease-in-out 0.15s;
        cursor: pointer;

        &:hover {
          background-color: ${THEME.colors.btnSecondary};
        }
      }
    }
  }

  .auth__form__open {
    display: block;
  }

  .auth__form__close {
    display: none;
  }

  .close__sign__in {
    display: none;
  }

  .open__sign__in {
    display: block;
  }

  .close__sign__up {
    display: none;
  }

  .open__sign__up {
    display: block;
  }

  /* sign in sign up form  */
`;

export default StyledHeader;
