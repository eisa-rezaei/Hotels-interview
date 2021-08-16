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
import { IoGridOutline } from "react-icons/io5";

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
