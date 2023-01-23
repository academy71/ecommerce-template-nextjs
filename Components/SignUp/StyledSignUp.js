import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledSignUp = styled.div`
  padding: 38px 28px 28px;
  .sign__up__title {
    margin-bottom: 32px;
    text-align: center;
    color: ${THEME.colors.textSecondary};

    ${media.up("lg")} {
      margin-bottom: 55px;
    }
  }

  .sign__up__form {
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

    &__checkbox {
      margin-top: 0;
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 32px;
    }

    .primary {
      width: 315px;
      padding: 10px 0;

      ${media.up("sm")} {
        width: 424px;
      }
    }
  }
`;

export default StyledSignUp;
