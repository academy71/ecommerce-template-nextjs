import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from "../../../styles/Theme";

const StyledFilter = styled.div`
  width: 90%;
  padding-left: 18px;
  background-color: ${THEME.colors.bgPrimary};
  position: relative;

  ${media.up("md")} {
    padding-left: 0;
    max-width: 270px;
    width: 100%;
  }

  .close__icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;

    ${media.up("md")} {
      display: none;
    }
  }

  .filter__box {
    padding: 28px 0 28px 18px;
    border-bottom: 1px solid ${THEME.colors.chineseSilver};
    max-width: 270px;
    width: 100%;

    ${media.up("md")} {
      max-width: 100%;
      width: 100%;
    }

    &__header {
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .color {
    border: none;
  }

  .filter__btn {
    margin-top: 28px;
    text-align: center;
    max-width: 270px;
    width: 100%;
    
    &__button {
      border: none;
      outline: none;
      padding: 0;
      background-color: transparent;
      border-bottom: 1px solid ${THEME.colors.textPrimary};
      margin-bottom: 30px;
      font: normal ${THEME.fontWeight.weightNormal} 18px
        ${THEME.fontFamily.manrope};
      line-height: 30px;
      color: ${THEME.colors.textPrimary};
    }
  }
`;

export default StyledFilter;
