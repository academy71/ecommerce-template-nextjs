import styled from "styled-components";
import THEME from "./Theme";

// H1
const H1 = styled.h1`
  font: normal ${THEME.fontWeight.weightBold} 70px ${THEME.fontFamily.notoSerif};
  line-height: 80px;
  color: ${THEME.colors.textPrimary};
`;

// H2
const H2 = styled.h2`
  line-height: 52px;
  font: normal ${THEME.fontWeight.weightBold} 42px ${THEME.fontFamily.notoSerif};
  color: ${THEME.colors.textPrimary};
`;

// H3
const H3 = styled.h3`
  line-height: 42px;
  font: normal ${THEME.fontWeight.weightBold} 32px ${THEME.fontFamily.notoSerif};
  color: ${THEME.colors.textPrimary};
`;

// H4
const H4 = styled.h4`
  line-height: 32px;
  font: normal ${THEME.fontWeight.weightBold} 22px ${THEME.fontFamily.notoSerif};
  color: ${THEME.colors.textPrimary};
`;

// H5
const H5 = styled.h5`
  font: normal ${THEME.fontWeight.weightBold} 20px ${THEME.fontFamily.notoSerif};
  line-height: 30px;
  color: ${THEME.colors.textPrimary};
`;

const lgDesc = styled.p``;
const mdDesc = styled.p``;
const smDesc = styled.p``;

export {H1, H2, H3, H4, H5, lgDesc, mdDesc, smDesc};
