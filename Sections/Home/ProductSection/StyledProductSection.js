import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from "./../../../styles/Theme";

const StyledProductSection = styled.section`
  padding: 150px 0;
  background-color: ${THEME.colors.bgPrimary};
  position: relative;
  

  .header {
    margin-bottom: 28px;

    ${media.up("lg")} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 70px;
    }

    &__title {
      max-width: 470px;
      width: 100%;
    }

    &__btn {
      ${media.down("lg")} {
        position: absolute;
        bottom: 72px;
        left: 50%;
        transform: translateX(-50%);
      }
      .transparent{
        padding: 15px 35px;
      }
    }
  }
  .cards {
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
`;
export default StyledProductSection;
