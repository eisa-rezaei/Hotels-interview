import React, { useEffect, useState } from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HomePageSliderOne } from "../../data/data";
import {
  StyledSelectedHotelContainer,
  StyledSelectedHotelDetails,
  StyledSelectedHotel,
  StyledSelectedHotelDetailsTitle,
  StyledSelectedHotelDetailsFeatures,
  StyledSelectedHotelDetailsPrice,
  StyledSelectedHotelDetailsSaveMark,
  StyledSelectedHotelFooter,
  StyledSelectedHotelFooterButton,
  StyledSelectedHotelFooterTitle,
} from "./SelectedHotelPage.styles";

const SelectedHotelPage = () => {
  const { id } = useParams();

  useEffect(() => {
    const hotel = HomePageSliderOne.filter(
      (hotel) => hotel.id === parseInt(id)
    );
    setSelectedHotel(hotel);
  }, [id]);

  const [selectedHotel, setSelectedHotel] = useState([]);
  return (
    <StyledSelectedHotelContainer>
      <StyledSelectedHotel>
        {selectedHotel.map(
          ({ img, title, location, price, features, details, rate }, index) => (
            <StyledSelectedHotelDetails key={index}>
              <img src={img} alt={title} />
              <StyledSelectedHotelDetailsTitle>
                <span>
                  <h2>
                    {title}
                    <span>
                      {rate} <FaStar />
                    </span>
                  </h2>
                  <h4>
                    <MdLocationOn /> {location}
                  </h4>
                </span>
                <StyledSelectedHotelDetailsFeatures>
                  <h3>features</h3>
                  <span>{features}</span>
                </StyledSelectedHotelDetailsFeatures>
                <StyledSelectedHotelDetailsSaveMark>
                  <FaRegBookmark />
                </StyledSelectedHotelDetailsSaveMark>
                <StyledSelectedHotelDetailsPrice>
                  {price} $
                </StyledSelectedHotelDetailsPrice>
              </StyledSelectedHotelDetailsTitle>
              <p>{details}</p>
            </StyledSelectedHotelDetails>
          )
        )}

        <StyledSelectedHotelFooter>
          <StyledSelectedHotelFooterTitle>
            Book your hotel now
            <span>256 $</span>
          </StyledSelectedHotelFooterTitle>
          <Link to="/">
            <StyledSelectedHotelFooterButton>
              back to home
            </StyledSelectedHotelFooterButton>
          </Link>
        </StyledSelectedHotelFooter>
      </StyledSelectedHotel>
    </StyledSelectedHotelContainer>
  );
};

export default SelectedHotelPage;
