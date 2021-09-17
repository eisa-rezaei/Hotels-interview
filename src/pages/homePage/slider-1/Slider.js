import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { MdKeyboardArrowRight, MdLocationOn } from "react-icons/md";
import { HomePageSliderOne } from "../../../data/data";
import { useSizeCheckker } from "../../Hooks/SizeCheckker";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

import { Link } from "react-router-dom";
import {
  StyledSliderContainer,
  StyledSliderSingleItem,
  StyledSliderSingleItemInfo,
  StyledSliderSingleItemInfoIcon,
} from "./Slider.styles";

const Slider = () => {
  SwiperCore.use(Autoplay);
  const size = useSizeCheckker();
  return (
    <StyledSliderContainer>
      <Swiper
        slidesPerView={size ? 2.5 : 1.5}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        loop
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
                  <Link to={`/locations`}>
                    <MdLocationOn /> {location}
                  </Link>
                </span>
                <StyledSliderSingleItemInfoIcon>
                  <Link to={`/hotelPage/${id}`}>
                    <MdKeyboardArrowRight />
                  </Link>
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
