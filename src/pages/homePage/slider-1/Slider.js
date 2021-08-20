import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { HomePageSliderOne } from "../../../data/data";
import {
  StyledSliderContainer,
  StyledSliderSingleItem,
  StyledSliderSingleItemPagination,
} from "./Slider.styles";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

SwiperCore.use([Pagination, EffectCoverflow]);
//, Scrollbar, Autoplay, A11y

const Slider = () => {
  return (
    <StyledSliderContainer>
      <Swiper
        spaceBetween={50}
        // a11y
        // effect
        pagination={{
          el: ".pagination",
        }}
        // grabCursor
        centeredSlides
        // effect={"coverflow"}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        loop
        // autoplay={5}
        slidesPerView={2}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        effect="coverflow"
      >
        {HomePageSliderOne.map(({ img, title, location, id }, index) => (
          <SwiperSlide key={index}>
            <StyledSliderSingleItem>
              <Link to={`/hotelPage/${id}`}>
                <img src={img} alt={title} />
              </Link>
              <h5>{title}</h5>
              <h6>
                <MdLocationOn /> {location}
              </h6>
              <StyledSliderSingleItemPagination className="pagination"></StyledSliderSingleItemPagination>
            </StyledSliderSingleItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSliderContainer>
  );
};

export default Slider;
