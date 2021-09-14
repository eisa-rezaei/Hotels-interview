import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import { MdKeyboardArrowRight, MdLocationOn } from "react-icons/md";
import { HomePageSliderOne } from "../../../data/data";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade";

import { Link } from "react-router-dom";
import {
  StyledSliderContainer,
  StyledSliderSingleItem,
  StyledSliderSingleItemInfo,
  StyledSliderSingleItemInfoIcon,
} from "./Slider.styles";

const Slider = () => {
  SwiperCore.use(Pagination, Autoplay, EffectFade);
  return (
    <StyledSliderContainer>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        pagination={{ el: "pagination" }}
        autoplay
      >
        {HomePageSliderOne.map(({ img, title, location, id }, index) => (
          <SwiperSlide key={index}>
            <StyledSliderSingleItem>
              <Link to={`/hotelPage/${id}`}>
                <img src={img} alt={title} />
              </Link>
              <StyledSliderSingleItemInfo>
                <span>
                  <h5>{title}</h5>
                  <p>
                    <MdLocationOn /> {location}
                  </p>
                </span>
                <StyledSliderSingleItemInfoIcon>
                  <MdKeyboardArrowRight />
                </StyledSliderSingleItemInfoIcon>
              </StyledSliderSingleItemInfo>
            </StyledSliderSingleItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSliderContainer>
  );
};

export default Slider;
