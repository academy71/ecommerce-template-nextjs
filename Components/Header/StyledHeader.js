import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from './../../styles/Theme';

const StyledHeader = styled.header`
  position: relative;
  padding: 36px 0;
  background-color: ${THEME.colors.bgPrimary};

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .middle {
    display: none;

    ${media.down("lg")} {
      position: fixed;
      top: 0;
      left: 0;
      /* width: 100%; */
      /* height: 100%; */
      transition: all ease-in-out 0.15s;
      /* background: rgba(62, 1, 47, .7); */
      padding: 18px 0 0 18px;
    }
  }

  .open__menu {
    display: block;
    transform: translateY(0);
    transition: all ease-in-out 0.15s;
  }

  .close__menu {
    display: none;
    transform: translateY(-100%);
    transition: all ease-in-out 0.15s;

    ${media.up("lg")} {
      display: block;
      transform: translateY(0);
    }
  }

  .right {
    display: flex;
    align-items: center;

    .cart {
      margin-right: 28px;
    }

    .btn {
      &__signIn {
        display: none;

        ${media.up("lg")} {
          display: block;
        }
      }
      &__mobile {
        display: block;

        ${media.up("lg")} {
          display: none;
        }
      }
    }
  }
`;

export default StyledHeader;
