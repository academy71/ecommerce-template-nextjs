import React from "react";
import styled from "styled-components";
import THEME from "./../../../styles/Theme";

const StyledCheckbox = styled.div`
  margin-top: 14px;
  
  .input {
    display: none;
  }
  .label {
    position: relative;
    padding-left: 26px;
    font: normal ${THEME.fontWeight.weightNormal} 16px
      ${THEME.fontFamily.manrope};
    line-height: 28px;
    color: ${THEME.colors.textSecondary};

    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border: 1px solid ${THEME.colors.btnPrimary};
      border-radius: 2px;
      left: 0px;
      bottom: 50%;
      transform: translateY(50%);
    }
    &::after {
      content: "";
      position: absolute;
      top: -6px;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: ${THEME.colors.btnPrimary};
      border-radius: 2px;
      left: 0px;
      bottom: 50%;
      transform: translateY(50%);
      opacity: 0;
    }
  }
  .input[type="checkbox"]:checked + label::after {
    opacity: 1;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0iIzAwNTc0RSIvPgo8cGF0aCBkPSJNNCA4Ljg1NzE0TDYuNCAxMUwxMiA2IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==");
  }
`;

const Checkbox = ({title}) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" name={title} id={title} className="input" />
      <label htmlFor={title} className="label">
        {title}
      </label>
    </StyledCheckbox>
  );
};

export default Checkbox;
