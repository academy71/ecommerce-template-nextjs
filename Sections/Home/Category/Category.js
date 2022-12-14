import React from "react";
import StyledCategory from "./StyledCategory";
import Container from "./../../../Components/Container/Container";
import { H2, H5 } from "../../../styles/ShareStyles";
import Image from "next/image";
import DATA from "./../../../Data/Data";
// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

const Category = () => {
  return (
    <StyledCategory>
      <Container>
        <H2 className="category__title">Shop Most Popular Occasions</H2>
        <div className="category__slider">
          <Swiper
            slidesPerView={4}
            slidesPerGroupSkip={4}
            spaceBetween={30}
            modules={[Scrollbar]}
            scrollbar={true}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
          >
            {DATA.category_card_data.map(({ name, img }, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="category__card">
                    <Image src={img} alt="" width="auto" height="auto" />
                    <H5 className="card__title">{name}</H5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </StyledCategory>
  );
};

export default Category;
