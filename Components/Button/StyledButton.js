import styled from "styled-components";
import THEME from "./../../styles/Theme";

const StyledButton = styled.div`
  display: inline-block;

  .btn {
    font-family: ${THEME.fontFamily.manrope};
    font-style: normal;
    font-weight: ${THEME.fontWeight.weightSemiBold};
    text-decoration: none;
    outline: none;
    border: none;
    background: transparent;
    text-align: center;
    display: inline-block;
    cursor: pointer;
  }

  .smBtn {
    padding: 8px 24px;
    font-size: 16px;
    line-height: 28px;
    color: ${THEME.colors.textPrimary};
    background-color: ${THEME.colors.btnSecondary};
    transition: all ease-in-out 0.15s;

    &:hover {
      background-color: ${THEME.colors.btnHover};
    }
  }

  /* primary btn  */
  
  .primary {
    padding: 15px 35px;
    font-size: 18px;
    line-height: 30px;
    color: ${THEME.colors.white};
    border: 1px solid transparent;
    background-color: ${THEME.colors.btnPrimary};
    transition: all ease-in-out 0.15s;

    &:hover {
      color: ${THEME.colors.textPrimary};
      background-color: ${THEME.colors.white};
      border: 1px solid ${THEME.colors.chineseSilver};
    }
  }

  /* transparent btn  */
  .transparent {
    padding: 8px 96px;
    font-size: 16px;
    line-height: 28px;
    color: ${THEME.colors.textPrimary};
    border: 1px solid ${THEME.colors.chineseSilver};
    transition: all ease-in-out 0.15s;

    &:hover {
      color: ${THEME.colors.white};
      border: 1px solid transparent;
      background-color: ${THEME.colors.btnPrimary};
    }
  }
`;

export default StyledButton;
