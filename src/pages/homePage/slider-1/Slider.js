import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomePageSliderOne } from "../../../data/data";
import { StyledSliderContainer, StyledSliderSingleItem } from "./Slider.styles";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

SwiperCore.use([Pagination]);
//, Scrollbar, Autoplay, A11y

const Slider = () => {
  return (
    <>
      <Swiper
        // spaceBetween={50}
        // a11y
        pagination
        // autoplay={5}
        slidesPerView={1}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <StyledSliderContainer>
          {HomePageSliderOne.map(({ img, title, location, id }, index) => (
            <SwiperSlide key={index}>
              <StyledSliderSingleItem>
                <Link to={`/hotelPage/${id}`}>
                  <img src={img} alt={title} />
                </Link>
                <h4>{title}</h4>
                <h5>
                  <MdLocationOn /> {location}
                </h5>
              </StyledSliderSingleItem>
            </SwiperSlide>
          ))}
        </StyledSliderContainer>
      </Swiper>
    </>
  );
};

export default Slider;
