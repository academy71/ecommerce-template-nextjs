import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledNavbar = styled.nav`
  .nav {
    display: flex;
    align-items: center;

    ${media.down("lg")} {
      width: 170px;
      flex-direction: column;
      background-color: ${THEME.colors.white};
      box-shadow: 0px 12px 34px rgba(0, 87, 78, 0.05);
    }

    .menu {
      position: relative;

      &:hover {
        .sub__menu {
          display: block;
        }
      }
    }
    .sub__menu {
      display: none;
      position: absolute;
      top: 0;
      left: 168px;
      width: 174px;
      height: auto;
      background: ${THEME.colors.white};
      box-shadow: 0px 12px 34px rgba(0, 87, 78, 0.05);
      transition: all ease-in-out 0.15s;

      ${media.up("lg")} {
        top: 50px;
        left: -30px;
      }
      &__item {
        border-bottom: 1px solid ${THEME.colors.chineseSilver};
        &:last-child {
          border: none;
        }
      }
      &__link {
        padding: 8px 24px;
        display: inline-block;
        width: 100%;
        transition: all ease-in-out 0.15s;

        &:hover,
        &:active {
          background-color: ${THEME.colors.btnPrimary};
          color: ${THEME.colors.white} !important;
        }
      }
    }

    &__item {
      padding: 8px 24px;
      border-bottom: 1px solid ${THEME.colors.chineseSilver};
      width: 100%;

      ${media.up("lg")} {
        border: none;
        margin: 0 19px;
        padding: 0;
        width: auto;
      }

      &:first-child {
        ${media.up("lg")} {
          margin-left: 0;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      padding: 0;

      ${media.up("lg")} {
        padding: 15px 0;
      }

      &__arrow__icon {
        margin-left: 8px;
        transform: rotate(270deg);
        ${media.up("lg")} {
          transform: rotate(0);
        }
      }
      &__search__icon {
        margin-right: 6px;
      }
    }

    .item {
      list-style: none;

      .link {
        text-decoration: none;
        font-family: ${THEME.fontFamily.manrope};
        font-style: normal;
        font-weight: ${THEME.fontWeight.weightNormal};
        font-size: 16px;
        line-height: 28px;
        color: ${THEME.colors.textSecondary};
      }
    }
  }

  .signIn__btn {
    display: block;

    ${media.up("lg")} {
      display: none;
    }
  }

  
`;

export default StyledNavbar;
