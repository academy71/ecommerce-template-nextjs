import styled from "styled-components";
import THEME from "./../../styles/Theme";
import { media } from "./../../styles/Responsive";

const StyledFooter = styled.footer`
  background-color: ${THEME.colors.bgPrimary};
  padding: 100px 0 28px 0;
  ${media.up("md")} {
    padding: 83px 0;
  }

  .footer__text__center {
    text-align: center;
    max-width: 507px;
    margin: 0 auto;
  }

  .footer__title {
    margin-bottom: 12px;

    ${media.up("md")} {
      margin-bottom: 18px;
    }
  }

  .footer__description {
    margin-bottom: 38px;

    ${media.up("md")} {
      margin-bottom: 75px;
    }
  }

  .footer__logo {
    margin-bottom: 28px;
    display: block;

    ${media.up("md")} {
      margin-bottom: 33px;
    }
  }

  .footer__body {
    display: flex;
    flex-wrap: wrap;

    .title {
      margin-bottom: 24px;
    }
    .col {
      width: 100%;
      margin-bottom: 28px;
      ${media.up("sm")} {
        margin-left: 80px;
        width: auto;
      }
    }

    .links {
      .link {
        &:not(:last-child) {
          margin-bottom: 16px;
        }

        a {
          font: normal ${THEME.fontWeight.weightNormal} 16px
            ${THEME.fontFamily.manrope};
          line-height: 28px;
          color: ${THEME.colors.textSecondary};
          text-decoration: none;
        }
      }
    }

    .contact__description {
      margin-bottom: 16px;
      color: ${THEME.colors.textSecondary};
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    .click__to__chat {
      display: flex;
      align-items: center;
      gap: 4px;
      font: normal ${THEME.fontWeight.weightNormal} 16px
        ${THEME.fontFamily.manrope};
      text-decoration: none;
      color: ${THEME.colors.textSecondary};
      margin-bottom: 24px;
    }
    .social__links {
      display: flex;
      flex-wrap: wrap;
      .follow_us {
        width: 100%;
        margin-bottom: 16px;
      }
      a {
        width: 36px;
        height: 36px;
        background-color: ${THEME.colors.btnSecondary};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 14px;
        transition: all 0.15s ease-in-out;
        svg {
          transition: all 0.15s ease-in-out;
        }

        &:hover {
          background-color: ${THEME.colors.btnPrimary};
          svg {
            fill: ${THEME.colors.white};
          }
        }
      }
    }
  }
  .footer__bottom {
    align-items: center;
    justify-content: space-between;
    padding-top: 28px;
    border-top: 1px solid ${THEME.colors.btnSecondary};

    ${media.up("md")} {
      display: flex;
    }

    .left__text {
      a {
        text-decoration: none;
        color: ${THEME.colors.textSecondary};
        display: block;
        &:first-child {
          margin-right: 28px;
          margin-bottom: 8px;
          ${media.up("md")} {
            margin-bottom: 0;
          }
        }
        ${media.up("md")} {
          display: inline-block;
        }
      }
    }

    .copyright__text {
      color: ${THEME.colors.textSecondary};
      margin-top: 8px;
      ${media.up("md")} {
        margin-top: 0;
      }
    }
  }
`;

export default StyledFooter;
