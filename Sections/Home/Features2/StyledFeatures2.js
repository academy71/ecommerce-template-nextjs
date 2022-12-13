import styled from "styled-components";
import { media } from "./../../../styles/Responsive";
import THEME from "./../../../styles/Theme";

const StyledFeatures2 = styled.section`
  padding: 100px 0;
  background-color: ${THEME.colors.bgPrimary};
  .features2__row {
    justify-content: center;
    ${media.up("lg")} {
      display: flex;
      justify-content: space-between;
    }
  }
  .features2__images {
    display: flex;
    justify-content: center;
    margin-bottom: 38px;
    ${media.up("lg")} {
      margin-bottom: 0;
    }
    img {
      object-fit: cover;
      width: 50%;
      height: auto;

      &:first-child {
        margin-right: -20px;
        align-self: flex-start;
        ${media.up("sm")} {
          margin-right: -35px;
        }
      }
      &:last-child {
        align-self: flex-end;
        margin-bottom: -20px;
        ${media.up("lg")} {
          margin-bottom: 0;
        }
      }
    }
  }
  .features2__content {
    ${media.up("lg")} {
      max-width: 470px;
    }
    .features2__title {
      margin-bottom: 12px;
      ${media.up("md")} {
        margin-bottom: 18px;
      }
    }
    .features2__description {
      margin-bottom: 28px;
      ${media.up("md")} {
        margin-bottom: 38px;
      }
    }
  }
`;

export default StyledFeatures2;
