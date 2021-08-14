import React from "react";
import {
  StyledHomePageContainer,
  StyledSearchPart,
  StyledSearchPartIcons,
  StyledSearchPartInput,
  StyledSearchPartTitle,
} from "./home.styles";
import { RiSearch2Line } from "react-icons/ri";
import Slider from "./slider-1/Slider";
import { HomePageSearchSvg } from "../../data/data";
import HotelsList from "./hotelsList/HotelsList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <StyledHomePageContainer>
      <StyledSearchPart>
        <StyledSearchPartTitle>choose your best hotel!</StyledSearchPartTitle>
        <span>
          <RiSearch2Line /> <RiSearch2Line />
        </span>
        <StyledSearchPartInput placeholder="search" id="search" type="text" />
        <StyledSearchPartIcons>
          {HomePageSearchSvg.map((icon, index) => (
            <img src={icon} alt="icon-priture" key={index} />
          ))}
        </StyledSearchPartIcons>
      </StyledSearchPart>
      <Slider />
      <HotelsList />
      <Footer />
    </StyledHomePageContainer>
  );
};

export default Home;
