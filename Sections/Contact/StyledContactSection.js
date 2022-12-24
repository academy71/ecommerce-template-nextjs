import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledContactSection = styled.section`
  padding-top: 30px;
  background-color: ${THEME.colors.bgPrimary};

  ${media.up("lg")} {
    border-bottom: 1px solid ${THEME.colors.btnSecondary};
    padding-top: 54px;
  }

  .inner {
    ${media.up("lg")} {
      display: flex;
      justify-content: space-between;
    }
  }

  .contact__address {
    display: flex;
    flex-direction: column-reverse;
    
    ${media.up("lg")} {
      display: flex;
      flex-direction: column;
    }

    /* contact heading style start here  */

    &__header {
      margin-bottom: 12px;

      ${media.up("lg")} {
        margin-bottom: 38px;
      }

      &__style {
        ${media.up("lg")} {
          display: block;
          margin-right: -140px;
          text-align: right;
        }
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      margin-bottom: 16px;

      ${media.up("lg")} {
        flex-direction: row;
        align-items: center;
        row-gap: 0;
      }
    }

    &__title {
      min-width: 154px;
    }

    &__desc {
      color: ${THEME.colors.textSecondary};
    }

    /* contact heading style end here  */

    &__thumbnail {
      margin-top: 0;
      margin-bottom: 40px;

      ${media.up("lg")} {
        margin-top: 120px;
        margin-bottom: 0;
      }

      &__img {
        margin: 0 auto;
        width: 345px;
        height: auto;

        ${media.up("sm")} {
          width: auto;
          height: auto;
        }

        ${media.up("lg")} {
          margin: 0;
        }
      }
    }
  }

  .contact__form {
    max-width: 100%;
    width: 100%;

    ${media.up("lg")} {
      max-width: 570px;
      width: 100%;
      margin-top: 198px;
    }

    &__item {
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 16px;
      }
    }

    &__label {
      margin-bottom: 16px;
      color: ${THEME.colors.textSecondary};
    }

    &__input {
      width: 100%;
      padding: 16px;
      border: 1px solid ${THEME.colors.chineseSilver};
      outline: none;

      &::placeholder {
        font-family: ${THEME.fontFamily.manrope};
        font-style: normal;
        font-weight: ${THEME.fontWeight.weightNormal};
        font-size: 16px;
        line-height: 28px;
        color: ${THEME.colors.textSecondary};
      }
    }

    &__textarea {
      height: 180px;
      resize: none;
    }

    &__condition {
      color: ${THEME.colors.textSecondary};
      margin-bottom: 30px;
      ${media.up("lg")} {
        margin-bottom: 55px;
      }

      &__link {
        color: ${THEME.colors.btnPrimary};
        font-weight: ${THEME.fontWeight.weightSemiBold};
        display: block;

        ${media.up("md")} {
          display: inline;
        }
      }
    }
  }
`;

export default StyledContactSection;
