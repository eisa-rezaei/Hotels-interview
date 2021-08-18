import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import {
  StyledHomePageContainer,
  StyledSearchPart,
  StyledSearchPartIcons,
  StyledSearchPartInput,
  StyledSearchPartResultsli,
  StyledSearchPartResultsUl,
  StyledSearchPartTitle,
} from "./home.styles";
import { HomePageSearchSvg, HomePageSliderOne } from "../../data/data";
import Slider from "./slider-1/Slider";
import HotelsList from "./hotelsList/HotelsList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const hotelSearchHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const hotel = HomePageSliderOne.filter((hotel) => {
    if (searchValue === "") {
      return [];
    } else if (hotel.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return hotel;
    } else {
      return false;
    }
  });

  return (
    <StyledHomePageContainer>
      <StyledSearchPart>
        <StyledSearchPartTitle>choose your best hotel!</StyledSearchPartTitle>
        <span>
          <RiSearch2Line /> <RiSearch2Line />
        </span>
        <StyledSearchPartInput
          placeholder="search"
          id="search"
          type="text"
          onChange={(e) => hotelSearchHandler(e)}
        />
        <StyledSearchPartResultsUl isOpen={searchValue}>
          {hotel.map((hotel) => {
            return (
              <StyledSearchPartResultsli key={hotel.id}>
                <p>{hotel.title}</p>
                <span>
                  {hotel.rate}
                  <FaStar />
                </span>
              </StyledSearchPartResultsli>
            );
          })}
        </StyledSearchPartResultsUl>
        <StyledSearchPartIcons>
          {HomePageSearchSvg.map((Icon, index) => (
            <Icon key={index} />
          ))}
          <IoGridOutline />
        </StyledSearchPartIcons>
      </StyledSearchPart>
      <Slider />
      <HotelsList />
      <Footer />
    </StyledHomePageContainer>
  );
};

export default Home;
