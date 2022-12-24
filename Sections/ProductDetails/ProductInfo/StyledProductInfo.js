import styled from "styled-components";
import THEME from "./../../../styles/Theme";

const StyledProductInfo = styled.div`
  margin-top: 48px;
  max-width: 570px;
  padding: 30px;
  background-color: ${THEME.colors.btnSecondary};
  .product__info__title {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 18px;
  }
  .product__info__description {
    margin-bottom: 30px;
  }

  .Details__list {
    padding-left: 30px;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }

    &__item {
      list-style: auto;
      list-style-type: circle;
      font: normal ${THEME.fontWeight.weightNormal} 16px
        ${THEME.fontFamily.manrope};
      line-height: 28px;
      color: ${THEME.colors.textPrimary};
    }
  }
`;

export default StyledProductInfo;
