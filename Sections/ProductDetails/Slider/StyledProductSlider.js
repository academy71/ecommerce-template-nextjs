import styled from "styled-components";
import THEME from "./../../../styles/Theme";
import { media } from "./../../../styles/Responsive";

const StyledSlider = styled.div`
  .image-gallery-fullscreen-button {
    display: none;
  }
  .image-gallery-play-button {
    display: none;
  }
  .image-gallery-left-nav,
  .image-gallery-right-nav {
    ${media.up("md")} {
      top: auto;
      bottom: -18px;
      padding: 0;
    }

    .image-gallery-svg {
      height: 50px;
      color: ${THEME.colors.textPrimary};
    }
  }
  .image-gallery-slide {
    ${media.up("md")} {
      margin-bottom: 100px;
    }
  }
  .image-gallery-thumbnails {
    margin-top: -90px;
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
    ${media.down("md")} {
      display: none;
    }
  }

  .image-gallery-thumbnail:hover {
    border: 1px solid ${THEME.colors.textPrimary};
  }
  .active {
    border: 1px solid ${THEME.colors.textPrimary};
  }
`;

export default StyledSlider;
