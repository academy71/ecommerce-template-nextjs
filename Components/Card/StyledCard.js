import styled from "styled-components";
import THEME from "./../../styles/Theme";
import { media } from "./../../styles/Responsive";

const StyledCard = styled.div`
  margin-bottom: 30px;
  .card__header {
    padding-bottom: 18px;
    display: flex;
    border-bottom: 1px solid ${THEME.colors.chineseSilver};

    &__btn {
      margin-left: 133px;
      .card__btn {
        font: normal ${THEME.fontWeight.weightNormal} 14px
          ${THEME.fontFamily.manrope};
        line-height: 24px;
        color: ${THEME.colors.textSecondary};
        border-bottom: 1px solid ${THEME.colors.textSecondary};
        margin-left: 30px;
        padding-bottom: 5px;
      }
    }
  }
  .card__body {
    gap: 30px;
    margin-top: 18px;
    ${media.up("sm")} {
      display: flex;
    }
    .card__img {
      margin-bottom: 12px;
      ${media.down("sm")} {
      }
    }
  }

  .card__content {
    .card__title {
      font-weight: ${THEME.fontWeight.weightSemiBold};
    }
    .card__id {
      color: ${THEME.colors.textSecondary};
    }
    .price {
      font-weight: ${THEME.fontWeight.weightSemiBold};
      margin-bottom: 14px;
    }
    .quantity {
      width: 86px;
      height: 44px;
      display: flex;
      align-items: center;
      padding: 10px 0;
      border: 1px solid #c4d1d0;
      .common {
        border: none;
        outline: none;
        border: none;
        outline: none;
        background: transparent;
      }
      .btn {
        cursor: pointer;
        svg {
          font-size: 50px;
        }
      }
      input {
        width: 100%;
        text-align: center;
        font: normal ${THEME.fontWeight.weightSemiBold} 14px
          ${THEME.fontFamily.manrope};
        color: ${THEME.colors.textPrimary};
      }
    }
  }
`;

export default StyledCard;
