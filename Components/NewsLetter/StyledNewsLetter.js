import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyledNewsLetter = styled.section`
  overflow: hidden;
  background-color: ${THEME.colors.bgPrimary};
  .newsletter__container {
    max-width: 1170px;
    margin: 0 auto;
    background-color: ${THEME.colors.btnPrimary};
    padding: 55px 0;
    ${media.up("md")} {
      padding: 75px 45px 75px 70px;
    }
  }
  .newsletter__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${media.down("lg")} {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
  }
  .newsletter__text {
    max-width: 500px;
    ${media.down("sm")} {
      padding: 0 18px;
    }
    .newsletter__title {
      /* max-width: 470px; */
      color: ${THEME.colors.white};
      margin-bottom: 12px;
      ${media.up("sm")} {
        margin-bottom: 18px;
      }
    }
    .newsletter__description {
      color: ${THEME.colors.white};
      margin-bottom: 28px;
      ${media.up("md")} {
        margin-bottom: 38px;
      }
    }
  }
  /* Input style */
  .newsletter__subscribe {
    display: flex;
    align-items: center;
    ${media.down("sm")} {
      flex-direction: column;
    }
    input {
      align-self: flex-start;

      border: none;
      outline: none;
      padding: 16px;
      background-color: ${THEME.colors.white};
      min-height: 58px;
      width: 325px;
      ::placeholder {
        font: normal ${THEME.fontWeight.weightNormal} 16px
          ${THEME.fontFamily.manrope};
        line-height: 28px;
        color: #5b6766;
      }
      margin-right: 0;
      margin-bottom: 16px;
      ${media.up("sm")} {
        margin-bottom: 0;
        margin-right: 18px;
      }
    }
    input + div {
      align-self: flex-start;
    }
  }

  .newsletter__img {
    img {
      object-fit: cover;
    }
    margin-bottom: 20px;
    ${media.up("lg")} {
      margin-bottom: 0;
    }
  }
  /* Button */
  .smBtn {
    padding: 15px 35px;
  }
`;

export default StyledNewsLetter;
