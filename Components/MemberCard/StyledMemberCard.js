import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledMemberCard = styled.div`
  width: 345px;

  ${media.up("sm")} {
    width: 370px;
  }

  .thumbnail {
    margin-bottom: 18px;
  }

  .header {
    margin-bottom: 8px;
  }

  .meta {
    margin-bottom: 18px;
  }

  .description {
    margin-bottom: 18px;
  }
  
  .link {
    font-family: ${THEME.fontFamily.manrope};
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: ${THEME.colors.textPrimary};
    font-style: normal;
    font-weight: ${THEME.fontWeight.weightSemiBold};
  }
`;

export default StyledMemberCard;
