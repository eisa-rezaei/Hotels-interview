import React from "react";
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomePageSliderOne } from "../../../data/data";
import { StyledSliderContainer, StyledSliderSingleItem } from "./Slider.styles";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination, Scrollbar, Autoplay, A11y]);

const Slider = () => {
  return (
    <>
      <Swiper
        // spaceBetween={50}
        a11y
        pagination
        autoplay={5}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <StyledSliderContainer>
          {HomePageSliderOne.map(({ img, title, location, id }, index) => (
            <SwiperSlide key={index}>
              <Link to={`/hotelPage/${id}`}>
                <StyledSliderSingleItem>
                  <img src={img} alt={title} />
                  <h4>{title}</h4>
                  <h5>{location}</h5>
                </StyledSliderSingleItem>
              </Link>
            </SwiperSlide>
          ))}
        </StyledSliderContainer>
      </Swiper>
    </>
  );
};

export default Slider;
