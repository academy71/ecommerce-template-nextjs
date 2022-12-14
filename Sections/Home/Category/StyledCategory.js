import styled from "styled-components";
import THEME from "./../../../styles/Theme";
import { media } from "./../../../styles/Responsive";

const StyledCategory = styled.section`
  background-color: ${THEME.colors.bgPrimary};
  padding: 100px 0;
  .category__title {
    max-width: 470px;
    margin: 0 auto;
    margin-bottom: 28px;
    ${media.up("md")} {
      margin-bottom: 70px;
      text-align: center;
    }
  }
  .category__slider {
    .category__card {
      margin-bottom: 28px;
      ${media.up("md")} {
        margin-bottom: 70px;
      }
      img {
        margin: 0 auto;
      }
      .card__title {
        margin-top: 16px;
        text-align: center;
      }
    }
    .swiper-scrollbar {
      background-color: ${THEME.colors.btnSecondary};
      border-radius: 0;
      height: 4px;
    }
    .swiper-scrollbar-drag {
      background-color: ${THEME.colors.btnPrimary};
      border-radius: 0;
    }
  }
`;

export default StyledCategory;
