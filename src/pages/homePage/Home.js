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

const Home = () => {
  return (
    <StyledHomePageContainer>
      <StyledSearchPart>
        <StyledSearchPartTitle>
          tell us What are you looking for.
        </StyledSearchPartTitle>
        <RiSearch2Line />
        <StyledSearchPartInput placeholder="search" id="search" type="text" />
        <StyledSearchPartIcons>
          {HomePageSearchSvg.map((icon, index) => (
            <img src={icon} alt="icon-priture" key={index} />
          ))}
        </StyledSearchPartIcons>
      </StyledSearchPart>
      <div>
        <Slider />
      </div>
    </StyledHomePageContainer>
  );
};

export default Home;
