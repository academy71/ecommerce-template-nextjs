import styled from "styled-components";
import THEME from "./../../styles/Theme";

const StyledFooter = styled.footer`
  background-color: ${THEME.colors.bgPrimary};

  .footer__text__center {
    text-align: center;
    max-width: 507px;
    margin: 0 auto;
  }
  .footer__title {
    margin-bottom: 18px;
  }
  .footer__description {
    margin-bottom: 75px;
  }
  .footer__logo {
    margin-bottom: 35px;
    display: block;
  }
`;

export default StyledFooter;
