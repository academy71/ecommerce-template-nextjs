import React from 'react'
import StyledHero from './StyledHero'
import Container from './../../../Components/Container/Container';
import { H1, LgPara } from '../../../styles/ShareStyles';
import Button from '../../../Components/Button/Button';
import StartShop from './StartShop';
import Image from 'next/image';
import rose from "../../../Images/hero/hero-phone-rose.png"
import rose2 from "../../../Images/hero/rose.png";

const Hero = () => {
  return (
    <StyledHero image={rose2}>

      <Container>
        
          <div className="hero__header">

            <H1 className="hero__header__title">
              Beautiful{" "}
              <span className="hero__header__title__style">& Gorgeous</span>{" "}
              Flowers.
            </H1>

            <LgPara className="hero__header__description">
              Access our extraordinary collection of flowers, with step-by-step
              guidance at every stage. Explore flowers that transform your
              creative design into a floral masterpiece.
            </LgPara>

            <Button href="/" variant="primary" text="Browse Flower" />

          </div>


          <div className="thumbnail__1">
            <Image src={rose} alt="img" className="thumbnail__1__img__1" />
          </div>

          <div className="thumbnail__2">
            <Image src={rose2} alt="img" className="thumbnail__2__img__2" />
          </div>
        
      </Container>

      <div className="hero__bottom">
        <StartShop />
      </div>
      
    </StyledHero>
  );
}

export default Hero