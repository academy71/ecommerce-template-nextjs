import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from "../../../styles/Theme";

const StyledFeature1 = styled.section`
  padding: 100px 0;
  background-color: ${THEME.colors.white};
  ${media.up("lg")} {
    padding: 150px 0;
  }

  .section__header {
    text-align: center;
    margin-bottom: 40px;
  }

  .mySwiper {
    ${media.up("lg")} {
      padding-left: 12px;
    }
    .swiper-slide {
      padding-bottom: 70px;
      padding-top: 30px;

      &:nth-child(1) {
        .slider__img {
          ${media.up("lg")} {
            rotate: -10deg;
          }
        }
      }

      &:nth-child(2) {
        .slider__img {
          ${media.up("lg")} {
            rotate: 0;
          }
        }
      }

      &:nth-child(3) {
        .slider__img {
          ${media.up("lg")} {
            rotate: 10deg;
          }
        }
      }
    }

    .slider__img {
      margin: 0 auto;
    }

    .swiper-pagination-bullet-active {
      background: ${THEME.colors.textPrimary};
    }

    .swiper-pagination-bullet-active {
      background: ${THEME.colors.btnHover};
    }
  }

  .section__footer {
    text-align: center;
    max-width: 570px;
    width: 100%;
    margin: 0 auto;

    &__desc {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 35px;
      }
    }
  }
`;

export default StyledFeature1;
