import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaStar} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {HomePageSliderOne} from "../../../data/data";
import {
  setFavorite,
  removeFavorite,
} from "../../../redux/favorites/productActions";
import {useFavoriteCheck} from "../favoriteCheck";
import {
  StyledHotelListContainer,
  StyledHotelListItem,
  StyledHotelListItemRatePart,
  StyledHotelListItemTitle,
} from "./HotelsStyles";

const HotelsList = () => {
  const dispatch = useDispatch();
  const isFavorite = useFavoriteCheck();

  const toggleFavoriteHandler =
    ({img, title, location, price, rate, id, details}) =>
    () => {
      const hotel = {
        img,
        title,
        location,
        price,
        rate,
        id,
        details,
      };
      if (!isFavorite(hotel.id)) {
        dispatch(setFavorite(hotel));
      }
      if (isFavorite(hotel.id)) {
        dispatch(removeFavorite(hotel));
      }
    };
  return (
    <StyledHotelListContainer>
      {HomePageSliderOne.map(
        ({img, title, location, price, rate, id, details}, index) => (
          <StyledHotelListItem key={index}>
            <Link to={`/hotelPage/${id}`}>
              <img src={img} alt={title} />
            </Link>
            <StyledHotelListItemTitle>
              <h5>
                <Link to={`/hotelPage/${id}`}>{title}</Link>
              </h5>
              <Link to={`/locations`}>
                <MdLocationOn /> {location}
              </Link>
              <p>
                {price}$<span>/night</span>
              </p>
            </StyledHotelListItemTitle>
            <StyledHotelListItemRatePart>
              {isFavorite(id) ? (
                <AiFillHeart
                  onClick={toggleFavoriteHandler({
                    img,
                    title,
                    location,
                    price,
                    rate,
                    id,
                    details,
                  })}
                />
              ) : (
                <AiOutlineHeart
                  onClick={toggleFavoriteHandler({
                    img,
                    title,
                    location,
                    price,
                    rate,
                    id,
                    details,
                  })}
                />
              )}
              <span>
                {rate} <FaStar />
              </span>
            </StyledHotelListItemRatePart>
          </StyledHotelListItem>
        )
      )}
    </StyledHotelListContainer>
  );
};

export default HotelsList;
