import React from 'react'
import styled from 'styled-components'
import {H2, LgPara} from "../../../styles/ShareStyles"
import Button from './../../../Components/Button/Button';
import THEME from './../../../styles/Theme';

const StyledZipCodeResult = styled.div`
  max-width: 270px;
  width: 100%;
  padding: 30px;
  background-color: ${THEME.colors.white};
  border: 1px solid ${THEME.colors.chineseSilver};

  .title {
    margin: 18px 0;
  }
`;

const ZipCodeResult = ({className}) => {
  return (
    <StyledZipCodeResult className={className}>
      <LgPara className="desc">Showing Gifts In:</LgPara>
      <H2 className="title">75215</H2>
      <Button variant="smBtn" text="Start Over" />
    </StyledZipCodeResult>
  );
}

export default ZipCodeResult