import React from 'react'
import StyledHeroSection from './StyledHeroSection'
import Container from './../../../Components/Container/Container';
import {H1, LgPara} from "../../../styles/ShareStyles"
import Image from 'next/image';
import img from "../../../Images/hero/about-us-hero.png"

const HeroSection = () => {
  return (
    <StyledHeroSection>
        <Container>
            <div className="inner">
                <div className="header">
                    <H1 className="header__title">
                        We’ve created an
                        <span className="header__title__style">exciting destination</span> for gifting and sharing.
                    </H1>
                </div>
                <div className="thumbnail">
                    <Image src={img} alt="flower" />
                </div>
                <div className="para">
                    <LgPara className="para__description">
                        For over 50 years, as the floral-gifting experts, we’ve been helping you give with more care, with greater ease, and with more meaning.
                    </LgPara>
                    <LgPara className="para__description">
                        Established in 1999 as a collective of 10 florists, Florists’ Transworld Delivery (FTD) used the telegraph to transform the age-old practice of flower-giving. We understood then the unique power of flowers to express a sentiment and helped people across the world “Say it with flowers.” Today, we have grown into an extensive network made up of thousands of local florists — each one an artisan who is handcrafting and hand-delivering fine bouquets all across the country.
                    </LgPara>
                    <LgPara className="para__description">
                        When you’re giving with us you’re giving the gift of joy, strength, and love and you're giving it with meaning.
                    </LgPara>
                </div>
            </div>
        </Container>
    </StyledHeroSection>
  )
}

export default HeroSection