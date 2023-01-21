import styled from "styled-components";
import THEME from "../../styles/Theme";

const StyledProductCard = styled.div`
  width: 270px;
  height: auto;

  .thumbnail {
    position: relative;

    &__link {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &__seller {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 8px 10px;
      background-color: ${THEME.colors.btnSecondary};
      font-family: ${THEME.fontFamily.manrope};
      font-style: normal;
      font-weight: ${THEME.fontWeight.weightSemiBold};
      font-size: 14px;
      line-height: 24px;
      color: ${THEME.colors.textPrimary};
      cursor: pointer;
    }
  }
  .text {
    margin-top: 16px;
    cursor: pointer;

    &__price {
      font-weight: ${THEME.fontWeight.weightSemiBold};
      font-size: 18px;
      line-height: 30px;
      color: ${THEME.colors.textPrimary};
      margin: 6px 0;
    }
    &__desc {
      margin-bottom: 18px;
    }
  }

  .btn {
    padding: 8px 0;
    text-align: center;
    width: 270px;
  }
`;

export default StyledProductCard;
