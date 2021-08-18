import React, { useEffect, useState } from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useDispatch } from "react-redux";
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
import { removeSaved, setSaved } from "../../redux/saved/productActions";
import { useSavedCheck } from "./savedCheck";

const SelectedHotelPage = () => {
  const { id } = useParams();
  const isSaved = useSavedCheck();
  const dispatch = useDispatch();
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [isHotelSaved, setIsHotelSaved] = useState();
  useEffect(() => {
    const hotel = HomePageSliderOne.filter(
      (hotel) => hotel.id === parseInt(id)
    );
    setSelectedHotel(hotel);
    setIsHotelSaved(isSaved(hotel.id));
  }, [id, isSaved]);

  const toggleSavedHandler =
    ({ img, title, location, price, features, details, rate, id }) =>
    () => {
      const hotel = {
        img,
        title,
        location,
        price,
        features,
        details,
        rate,
        id,
      };
      if (!isSaved(id)) {
        dispatch(setSaved(hotel));
      }
      if (isSaved(id)) {
        dispatch(removeSaved(hotel));
      }
      setIsHotelSaved(!isSaved(id));
    };

  return (
    <StyledSelectedHotelContainer>
      <StyledSelectedHotel>
        {selectedHotel.map(
          (
            { img, title, location, price, features, details, rate, id },
            index
          ) => (
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
                <StyledSelectedHotelDetailsSaveMark
                  onClick={toggleSavedHandler({
                    img,
                    title,
                    location,
                    price,
                    features,
                    details,
                    rate,
                    id,
                  })}
                  isSaved={isHotelSaved}
                >
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
