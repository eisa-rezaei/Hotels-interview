import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HomePageSliderOne } from "../../data/data";
import {
  StyledSelectedHotelContainer,
  StyledSelectedHotelDetails,
  StyledSelectedHotel,
} from "./SelectedHotelPage.styles";

const SelectedHotelPage = () => {
  const { id } = useParams();

  useEffect(() => {
    const hotel = HomePageSliderOne.filter(
      (hotel) => hotel.id === parseInt(id)
    );
    setSelectedHotel(hotel);
    console.log(hotel);
  }, [id]);

  const [selectedHotel, setSelectedHotel] = useState([]);
  return (
    <StyledSelectedHotelContainer>
      <StyledSelectedHotel>
        {selectedHotel.map(({ img, title, location }, index) => (
          <StyledSelectedHotelDetails key={index}>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <h5>{location}</h5>
          </StyledSelectedHotelDetails>
        ))}
        <Link to="/"> back to home</Link>
      </StyledSelectedHotel>
    </StyledSelectedHotelContainer>
  );
};

export default SelectedHotelPage;
