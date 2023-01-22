import styled from "styled-components";
import THEME from "./../../styles/Theme";

const StyledSearchPopup = styled.div`
  position: fixed;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  z-index: 999;
  width: 570px;
  background-color: red;
  background: ${THEME.colors.white};
  box-shadow: 0px 12px 34px rgba(0, 87, 78, 0.05);
  padding: 30px;
  .search__input__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
    img {
      cursor: pointer;
    }
  }
  .input__group {
    max-width: 411px;
    width: 100%;
    position: relative;
    .search__icon {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }

  .search__input {
    border: none;
    outline: none;
    width: 100%;
    padding: 12px;
    min-height: 48px;
    background-color: ${THEME.colors.bgPrimary};
    &::placeholder {
      font: normal ${THEME.fontWeight.weightNormal} 14px
        ${THEME.fontFamily.manrope};
      line-height: 24px;
      color: ${THEME.colors.textSecondary};
    }
  }
  .search__content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    .search__heading {
      font: normal ${THEME.fontWeight.weightSemiBold} 18px
        ${THEME.fontFamily.manrope};
      line-height: 30px;
      color: ${THEME.colors.textPrimary};
    }
    .search__key__word {
      &__text {
        font: normal ${THEME.fontWeight.weightNormal} 14px
          ${THEME.fontFamily.manrope};
        line-height: 24px;
        color: ${THEME.colors.textSecondary};
        margin-top: 14px;
        text-transform: capitalize;
      }
    }
  }
  .flower__color {
    max-width: 150px;
    .search__key__word {
      display: flex;
      flex-wrap: wrap;
      &__text {
        width: 50%;
        span {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #000;
          margin-right: 3px;
        }
        .red {
          background-color: ${THEME.colors.red};
        }
        .yellow {
          background-color: ${THEME.colors.yellow};
        }
        .purple {
          background-color: ${THEME.colors.purple};
        }
        .orange {
          background-color: ${THEME.colors.orange};
        }
        .blue {
          background-color: ${THEME.colors.blue};
        }
        .pink {
          background-color: ${THEME.colors.pink};
        }
        .green {
          background-color: ${THEME.colors.green};
        }
        .white {
          background-color: ${THEME.colors.white};
          border: 1px solid ${THEME.colors.chineseSilver};
        }
      }
    }
  }
`;

export default StyledSearchPopup;
