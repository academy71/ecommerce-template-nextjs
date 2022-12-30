import styled from "styled-components";
import THEME from "./../../styles/Theme";

const StyledCartSection = styled.section`
  padding: 100px 0;
  background-color: ${THEME.colors.bgPrimary};

  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .cart__item {
    max-width: 570px;
    .cart {
      margin-bottom: 18px;
    }
  }

  .cart__order__summury {
    max-width: 470px;
  }
`;
export default StyledCartSection;
