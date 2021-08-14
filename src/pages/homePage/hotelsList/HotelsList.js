import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
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
import { useSelector, useDispatch } from "react-redux";
import { setFavorite, setSaved } from "../../../redux/actions/productActions";

const HotelsList = () => {
  const favorites = useSelector((state) => state.favoritesHotel);
  const dispatch = useDispatch();
  console.log(favorites);

  const addToFavoriteHandler =
    ({ img, title, location, price, rate, id }) =>
    () => {
      const hotel = {
        img,
        title,
        location,
        price,
        rate,
        id,
      };
      dispatch(setFavorite(hotel));
    };
  return (
    <StyledHotelListContainer>
      {HomePageSliderOne.map(
        ({ img, title, location, price, rate, id }, index) => (
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
              <AiOutlineHeart
                onClick={addToFavoriteHandler({
                  img,
                  title,
                  location,
                  price,
                  rate,
                  id,
                })}
              />
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
