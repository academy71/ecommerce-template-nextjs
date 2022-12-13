import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from "./../../../styles/Theme";

const StyledFeature3 = styled.section`
  padding: 55px 0;
  background-color: ${THEME.colors.textPrimary};

  ${media.up("md")} {
    padding: 70px 0;
  }

  ${media.up("lg")} {
    background-image: url(${(props) => props.image.src});
    background-position: top right;
    background-repeat: no-repeat;
    padding: 100px 0;
  }

  .title {
    color: ${THEME.colors.white};
    margin-bottom: 18px;
    text-align: center;

    ${media.up("md")} {
      margin-bottom: 30px;
    }

    ${media.up("lg")} {
      margin-bottom: 70px;
    }
  }

  .cards {
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 18px;

    ${media.up("md")} {
      flex-direction: row;
      column-gap: 18px;
    }

    ${media.up("lg")} {
      margin-bottom: 55px;
      column-gap: 30px;
    }
  }
  .btn {
    text-align: center;

    .smBtn {
      padding: 15px 35px;
    }
  }
`;

export default StyledFeature3;
