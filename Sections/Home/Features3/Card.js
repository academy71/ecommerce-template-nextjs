import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../../../styles/Responsive";
import {H4, LgPara} from "../../../styles/ShareStyles";
import THEME from "../../../styles/Theme";


const StyledCard = styled.div`
  .bg__papaya__whip {
    background-color: ${THEME.colors.papayaWhip};
  }

  .bg__pastel__gray {
    background-color: ${THEME.colors.pastelGray};
  }

  .bg__piggy__pink {
    background-color: ${THEME.colors.piggyPink};
  }

  .card {
    padding: 50px 30px;
    text-align: center;
    width: 345px;
    height: 318px;
    
    ${media.up("sm")} {
      width: 370px;
      height: auto;
    }

    &__img {
      margin: 0 auto;
    }

    &__title {
      padding: 30px 0 18px;
      font-size: 22px;
      line-height: 32px;
    }
  }
`;

const Card = ({ className, img, title, description }) => {
  return (
    <StyledCard>
      <div className={`card ${className}`}>
        <Image src={img} alt="card img" className="card__img" />
        <H4 className="card__title">{title}</H4>
        <LgPara>
          {description}
        </LgPara>
      </div>
    </StyledCard>
  );
};

export default Card;
