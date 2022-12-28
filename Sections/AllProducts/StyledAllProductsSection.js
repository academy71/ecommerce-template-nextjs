import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledAllProductsSection = styled.section`
  padding-bottom: 50px;
  background-color: ${THEME.colors.bgPrimary};
  position: relative;

  /* all product section header  */

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 55px;

    ${media.up("md")} {
      justify-content: space-between;
      flex-direction: row;
    }

    &__left {
      margin-bottom: 18px;
      ${media.up("md")} {
        margin-bottom: 0;
      }
      &__desc {
        color: ${THEME.colors.textSecondary};
      }
      &__icon {
        display: block;
        margin-bottom: 18px;
        ${media.up("md")} {
          display: none;
          margin-bottom: 0;
        }
      }
    }
    &__right {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 12px;

      &__desc {
        color: ${THEME.colors.textSecondary};
      }
    }

    &__form {
      position: relative;
      display: inline-block;

      &__select {
        background-color: ${THEME.colors.white};
        border: 1px solid ${THEME.colors.chineseSilver};
        padding: 8px 0 8px 16px;
        width: 171px;
        margin: 0;
        outline: none;
        font-family: ${THEME.fontFamily.manrope};
        font-style: normal;
        font-weight: ${THEME.fontWeight.weightSemiBold};
        font-size: 18px;
        line-height: 30px;
        color: ${THEME.colors.textPrimary};
        appearance: none;
      }

      &__down__arrow {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  /* all product section header  */

  .inner__content {
    display: flex;
    column-gap: 30px;

    &__filter {
      min-width: 270px;
      transition: all ease-in-out 0.15s;
      ${media.down("md")} {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 11;
        background-color: rgba(62, 1, 47, 0.7);
        overflow: scroll;
      }
    }
    &__open__filter {
      display: block;
    }

    &__close__filter {
      ${media.down("md")} {
        display: none;
      }
    }
    &__products {
      &__btn {
        text-align: center;
        margin-top: 28px;
        ${media.up("lg")} {
          margin-top: 55px;
        }
      }
    }
    &__cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
`;

export default StyledAllProductsSection;
