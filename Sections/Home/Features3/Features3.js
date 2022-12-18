import React from 'react'
import StyledFeature3 from './StyledFeatures3';
import Card from './Card'
import img1 from "../../../Images/features3/calendar.svg";
import img2 from "../../../Images/features3/flower.svg";
import img3 from "../../../Images/features3/flower-2.svg";
import bgImg from "../../../Images/features3/bg.png";
import Container from './../../../Components/Container/Container';
import { H2 } from '../../../styles/ShareStyles';
import Button from './../../../Components/Button/Button';


const Features3 = () => {
  return (
    <StyledFeature3 image={bgImg}>
      <Container>

        <H2 className="title">Get The Best Here</H2>

        <div className="cards">
            
          <Card
            className="bg__papaya__whip"
            img={img1}
            title="Time Flexible"
            description="Customize each delivery or set your recipient & frequency and we'll do the rest for you"
          />
          
          <Card
            className="bg__pastel__gray"
            img={img2}
            title="Maximum Freshness"
            description="Farm-to-doorstep sourcing means our exclusive collection of Bouqs last longer easily."
          />
          
          <Card
            className="bg__piggy__pink"
            img={img3}
            title="Easy To Manage"
            description="Skip or cancel in your dashboard anytime after your first order. Proviidng the best."
          />
          
        </div>

        <div className="btn">
          <Button href="/" variant="smBtn" text="Browse Flower" />
        </div>

      </Container>
    </StyledFeature3>
  );
}

export default Features3