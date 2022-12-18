import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from './../../../styles/Theme';

const StyledHeroSection = styled.section`
  background-color: ${THEME.colors.bgPrimary};
  border-bottom: 1px solid ${THEME.colors.btnSecondary};

  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 38px;

    ${media.down("lg")} {
      row-gap: 0;
    }
  }

  .header {
    grid-column-start: 1;
    grid-column-end: 13;

    &__title {
      max-width: 100%;
      width: 100%;

      ${media.up("lg")} {
        max-width: 868px;
        width: 100%;
      }

      &__style {
        ${media.up("lg")} {
          margin-left: 140px;
          display: block;
        }
      }
    }

    ${media.down("lg")} {
      grid-row-start: 2;
      margin-bottom: 12px;
    }
  }

  .thumbnail {
    grid-column-start: 1;
    grid-column-end: 6;

    ${media.down("lg")} {
      grid-row-start: 1;
      grid-column-start: 1;
      grid-column-end: 13;
      margin-bottom: 30px;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .para {
    grid-column-start: 6;
    grid-column-end: 13;
    margin-left: 30px;
    max-width: 670px;
    width: 100%;

    ${media.down("lg")} {
      grid-column-start: 1;
      grid-column-end: 13;
      margin-left: 0;
      max-width: 100%;
      width: 100%;
    }

    &__description {
      margin-bottom: 40px;
    }
  }
`;

export default StyledHeroSection