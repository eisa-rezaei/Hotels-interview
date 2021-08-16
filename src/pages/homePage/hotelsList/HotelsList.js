import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { HomePageSliderOne } from "../../../data/data";
import {
  StyledHotelListContainer,
  StyledHotelListItem,
  StyledHotelListItemRatePart,
  StyledHotelListItemTitle,
} from "./HotelsStyles";
import { useDispatch } from "react-redux";
import {
  setFavorite,
  removeFavorite,
} from "../../../redux/favorites/productActions";
import { useFavoriteCheck } from "../favoriteCheck";

const HotelsList = () => {
  const dispatch = useDispatch();
  const isFavorite = useFavoriteCheck();

  const toggleFavoriteHandler =
    ({ img, title, location, price, rate, id, details }) =>
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
        ({ img, title, location, price, rate, id, details }, index) => (
          <StyledHotelListItem key={index}>
            <Link to={`/hotelPage/${id}`}>
              <img src={img} alt={title} />
            </Link>
            <StyledHotelListItemTitle>
              <h5>{title}</h5>
              <h6>
                <MdLocationOn /> {location}
              </h6>
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
