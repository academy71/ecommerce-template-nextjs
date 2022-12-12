import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from "../../../styles/Theme";

const StyledHero = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${THEME.colors.bgPrimary};

  ${media.up("lg")} {
    background-image: url(${(props) => props.image.src});
    background-position: right;
    background-repeat: no-repeat;
  }

  .hero__header {
    max-width: 100%;
    width: 100%;
    margin-bottom: 100px;

    ${media.up("lg")} {
      max-width: 570px;
      width: 100%;
      margin-bottom: 100px;
    }

    &__title {
      margin-bottom: 12px;

      ${media.up("lg")} {
        margin-bottom: 18px;
      }
      
      &__style {
        margin-left: 60px;
        display: block;

        ${media.up("md")} {
          margin-left: 80px;
        }

        ${media.up("lg")} {
          margin-left: 120px;
        }
      }
    }

    &__description {
      margin-bottom: 28px;

      ${media.up("lg")} {
        margin-bottom: 38px;
      }
    }
  }
  
  .thumbnail__1 {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;

    &__img__1 {
      margin-bottom: -10.7%;
      margin-right: -15px;
      margin-left: auto;
      width: 85%;
      height: auto;
    }

    ${media.up("md")} {
      display: none;
    }
  }

  .thumbnail__2 {
    margin-left: auto;
    width: 100%;
    height: 100%;
    display: none;

    ${media.up("md")} {
      display: block;
    }

    ${media.up("lg")} {
      display: none;
    }

    &__img__2 {
      margin-right: -15px;
      margin-left: auto;
      width: 85%;
      height: auto;
    }
  }

  .hero__bottom {
    z-index: 11;
  }
`;

export default StyledHero;
