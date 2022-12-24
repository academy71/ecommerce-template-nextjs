import React from "react";
import StyledFeature1 from "./StyledFeatures";
import Container from "./../../../Components/Container/Container";
import {H2, LgPara} from "../../../styles/ShareStyles";
import Button from "./../../../Components/Button/Button";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper";
import DATA from "../../../Data/Data";
import Image from "next/image";

const Features1 = () => {
  return (
    <StyledFeature1>
      <Container>
        <H2 className="section__header">Over 10,000 Available Varieties</H2>
    
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: false,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {DATA.features1.map(({id, img}) => {
              return (
                <SwiperSlide key={id}>
                  <Image src={img} alt="img" className="slider__img"/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        
        <div className="section__footer">
          <LgPara className="section__footer__desc">
            An endless variety of flowers & foliage.
          </LgPara>
          <LgPara className="section__footer__desc">
            Choose an assortment for your event, or pick a single stem and
            witness the beauty of a venue or dinner table come alive.
          </LgPara>
          <Button href="/" text="Browse Our Collection" variant="primary" />
        </div>
      </Container>
    </StyledFeature1>
  );
};

export default Features1;
