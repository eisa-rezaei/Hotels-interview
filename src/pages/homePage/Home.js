import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { RiArrowDownSLine, RiEmotionUnhappyLine } from "react-icons/ri";

import { HomePageSearchSvg, HomePageSliderOne } from "../../data/data";
import Slider from "./slider-1/Slider";
import HotelsList from "./hotelsList/HotelsList";
import Footer from "../../components/footer/Footer";
import BgImage from "./../../assets/content/home1.png";

import {
  StHomeImageContainer,
  StHomeSeeMorePart,
  StyledHomePageContainer,
  StyledSearchPart,
  StyledSearchPartContant,
  StyledSearchPartIcon,
  StyledSearchPartIcons,
  StyledSearchPartInput,
  StyledSearchPartInputContainer,
  StyledSearchPartResultsli,
  StyledSearchPartResultsUl,
} from "./home.styles";

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

  const USER_INFO = {
    name: "Eisa Rezaei",
    location: "Iran, Tehran",
  };

  return (
    <StyledHomePageContainer>
      <StyledSearchPart>
        <StyledSearchPartContant>
          <h4>Hello, {USER_INFO.name}</h4>
          <h3>choose your best hotel!</h3>
          <StyledSearchPartInputContainer searchValue={searchValue}>
            <BiSearch />
            <StyledSearchPartInput
              placeholder="Type Here"
              id="search"
              type="text"
              onChange={(e) => hotelSearchHandler(e)}
            />
            {searchValue && <RiArrowDownSLine />}
            <StyledSearchPartResultsUl isOpen={searchValue}>
              {hotel.length > 0 ? (
                hotel.map((hotel) => {
                  return (
                    <Link key={hotel.id} to={`hotelpage/${hotel.id}`}>
                      <StyledSearchPartResultsli>
                        <p>{hotel.title}</p>
                        <span>
                          {hotel.rate}
                          <FaStar />
                        </span>
                      </StyledSearchPartResultsli>
                    </Link>
                  );
                })
              ) : (
                <StyledSearchPartResultsli isMatched={hotel.length === 0}>
                  <p>NOT MATCHED</p>
                  <span>
                    <RiEmotionUnhappyLine />
                  </span>
                </StyledSearchPartResultsli>
              )}
            </StyledSearchPartResultsUl>
          </StyledSearchPartInputContainer>
          <p>
            <MdLocationOn /> {USER_INFO.location}
          </p>
          <StyledSearchPartIcons>
            {HomePageSearchSvg.map(({ icon, color }, index) => (
              <StyledSearchPartIcon key={index} color={color}>
                {icon}
              </StyledSearchPartIcon>
            ))}
            <StyledSearchPartIcon color="#f0925e">
              <IoGridOutline />
            </StyledSearchPartIcon>
          </StyledSearchPartIcons>
        </StyledSearchPartContant>
        <StHomeImageContainer>
          <img src={BgImage} alt="background" />
        </StHomeImageContainer>
      </StyledSearchPart>
      <StHomeSeeMorePart>
        <h3>Nearly Hotels</h3>
        <span>see more</span>
      </StHomeSeeMorePart>
      <Slider />
      <StHomeSeeMorePart>
        <h3>Popular Hotels</h3>
        <span>see more</span>
      </StHomeSeeMorePart>
      <HotelsList />
      <Footer />
    </StyledHomePageContainer>
  );
};

export default Home;
