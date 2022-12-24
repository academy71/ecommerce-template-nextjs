import styled from "styled-components";
import { media } from "./../../../styles/Responsive";
import THEME from "./../../../styles/Theme";

const StyleedTestimonial = styled.section`
  background-color: ${THEME.colors.bgPrimary};
  padding: 100px 0;
  .testimonial__title {
    ${media.down("lg")} {
      margin-bottom: 28px;
    }
    ${media.up("lg")} {
      max-width: 470px;
      margin-bottom: -55px;
    }
    ${media.up("lg")} {
      max-width: 470px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    right: 0;
    color: ${THEME.colors.textPrimary};
    border: 1px solid ${THEME.colors.chineseSilver};
    width: 48px;
    height: 48px;
    transition: all 0.3s ease-in-out;
    top: 25px;
    ${media.down("lg")} {
      top: auto;
      bottom: 0;
      right: 50%;
    }

    &:hover {
      background-color: ${THEME.colors.btnPrimary};
      color: ${THEME.colors.white};
    }
  }
  .swiper-button-next {
    ${media.down("lg")} {
      margin-right: -90px;
    }
  }
  .swiper-button-prev {
    ${media.down("lg")} {
      left: 50%;
      margin-left: -90px;
    }
    ${media.up("lg")} {
      left: auto;
      right: 120px;
    }
  }
  .swiper-button-next::after {
    content: ">";
    font-size: 25px;
  }
  .swiper-button-prev::after {
    content: "<";
    font-size: 25px;
  }
  .swiper-pagination {
    top: 13px;
    width: 70px !important;

    ${media.up("lg")} {
      right: 0 !important;
      margin-left: auto;
      margin-right: 49px;
    }
    ${media.down("lg")} {
      top: auto;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
    }

    .swiper-pagination-bullet {
      background-color: ${THEME.colors.textPrimary};
    }
  }

  .card {
    text-align: center;
    max-width: 370px;
    padding: 30px;
    background-color: ${THEME.colors.white};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    ${media.up("lg")} {
      margin-top: 140px;
      margin-bottom: 0;
    }
    img {
      margin: 0 auto;
    }
    .card__title {
      font-family: "Noto Serif";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 32px;
      text-align: center;
      color: #3e012f;
      margin-top: 30px;
    }
    &__description {
      margin-top: 30px;
      color: ${THEME.colors.textSecondary};
    }
    .name {
      margin-top: 18px;
      margin-bottom: 8px;
    }
    .star {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 6px;
      img {
        margin: 0;
      }
    }
  }
`;

export default StyleedTestimonial;
