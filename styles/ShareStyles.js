import styled from "styled-components";
import THEME from "./Theme";
import {media} from "./Responsive";

// H1
const H1 = styled.h1`
  font: normal ${THEME.fontWeight.weightBold} 32px ${THEME.fontFamily.notoSerif};
  line-height: 42px;
  color: ${THEME.colors.textPrimary};
  ${media.up("md")} {
    line-height: 80px;
    font-size: 70px;
  }
`;

// H2
const H2 = styled.h2`
  font: normal ${THEME.fontWeight.weightBold} 26px ${THEME.fontFamily.notoSerif};
  line-height: 36px;
  color: ${THEME.colors.textPrimary};
  ${media.up("md")} {
    line-height: 52px;
    font-size: 42px;
  }
`;

// H3
const H3 = styled.h3`
  line-height: 28px;
  font: normal ${THEME.fontWeight.weightBold} 18px ${THEME.fontFamily.notoSerif};
  color: ${THEME.colors.textPrimary};
  ${media.up("md")} {
    line-height: 42px;
    font-size: 32px;
  }
`;

// H4 
const H4 = styled.h4`
  line-height: 32px;
  font: normal ${THEME.fontWeight.weightBold} 22px ${THEME.fontFamily.notoSerif};
  color: ${THEME.colors.textPrimary};
  ${media.up("md")} {
    line-height: 80px;
    font-size: 70px;
  }
`;

// H5
const H5 = styled.h5`
  font: normal ${THEME.fontWeight.weightBold} 20px ${THEME.fontFamily.notoSerif};
  line-height: 30px;
  color: ${THEME.colors.textPrimary};
`;

// lg p
const LgPara = styled.p`
  color: ${THEME.colors.textPrimary};
  font: normal ${THEME.fontWeight.weightNormal} 18px ${THEME.fontFamily.manrope};
  line-height: 30px;
`;

// md p
const MdPara = styled.p`
  color: ${THEME.colors.textPrimary};
  font: normal ${THEME.fontWeight.weightNormal} 16px ${THEME.fontFamily.manrope};
  line-height: 28px;
`;

// sm p
const SmPara = styled.p`
  color: ${THEME.colors.textPrimary};
  font: normal ${THEME.fontWeight.weightNormal} 14px ${THEME.fontFamily.manrope};
  line-height: 24px;
`;

export {H1, H2, H3, H4, H5, LgPara, MdPara, SmPara};
