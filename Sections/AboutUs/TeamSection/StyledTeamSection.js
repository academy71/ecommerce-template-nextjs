import styled from "styled-components";
import THEME from "./../../../styles/Theme";
import media from "./../../../styles/Responsive";

const StyledTeamSection = styled.section`
  padding: 100px 0;
  background-color: ${THEME.colors.bgPrimary};

  .title {
    text-align: center;
    margin-bottom: 70px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 0;
    row-gap: 18px;

    ${media.up("sm")} {
      column-gap: 30px;
      row-gap: 30px;
    }
  }
`;

export default StyledTeamSection;
