import styled from "styled-components";
import THEME from "./../../styles/Theme";

const StyledOrderSum = styled.div`
  width: 100%;
  .order__summury {
    padding-bottom: 18px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${THEME.colors.chineseSilver};
    }
  }
  .checkout__price {
    color: ${THEME.colors.textSecondary};
    &:not(:first-child) {
      margin-top: 12px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .total__price {
    padding-top: 18px;
    margin-top: 2px;
    margin-bottom: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #c4d1d0;
    }
  }
  .primary {
    width: 470px;
    @media (max-width: 500px) {
      width: 339px;
    }
  }
`;

export default StyledOrderSum;
