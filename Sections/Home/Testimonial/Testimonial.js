import React, { useRef } from "react";
import StyleedTestimonial from "./StyledTestimonial";
import Container from "./../../../Components/Container/Container";
import { H2, H4, H5, MdPara } from "./../../../styles/ShareStyles";
import Image from "next/image";
import DATA from "./../../../Data/Data";
import star from "./../../../Images/Star.svg";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <StyleedTestimonial>
      <Container>
        <H2 className="testimonial__title">
          Here’s What Our Customers Are Saying
        </H2>
        <div className="testimonial__slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {DATA.testimonial_card_data.map(
              ({ img, title, name, number_of_star, description }, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="card">
                      <Image src={img} alt="" height="auto" width="auto" />
                      <H4 className="card__title">{title}</H4>
                      <MdPara className="card__description">
                        "{description}"
                      </MdPara>
                      <H5 className="name">{name}</H5>
                      <div className="star">
                        {number_of_star.map((i) => {
                          return (
                            <Image
                              key={i}
                              src={star}
                              alt="Star Icon"
                              height="auto"
                              width="auto"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </Container>
    </StyleedTestimonial>
  );
};

export default Testimonial;
