import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import selectros from "../../redux/favorites/selectors";
import { useFavoriteCheck } from "../homePage/favoriteCheck";
import {
  removeFavorite,
  setFavorite,
} from "../../redux/favorites/productActions";
import {
  StNothingToShow,
  StyledFavoritesPageContainer,
  StyledFavoritesPageItem,
  StyledFavoritesPageItemContainer,
  StyledFavoritesPageItemRate,
  StyledFavoritesPageItemTitle,
} from "./Favorites.styles";

const Favorites = () => {
  const favorites = useSelector(selectros.getFavorites);
  const isFavorite = useFavoriteCheck();
  const dispatch = useDispatch();
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
      if (!isFavorite(hotel)) {
        dispatch(setFavorite(hotel));
      }
      if (isFavorite(hotel.id)) {
        dispatch(removeFavorite(hotel));
      }
    };
  return (
    <StyledFavoritesPageContainer>
      <StyledFavoritesPageItemContainer>
        {favorites.length === 0 ? (
          <StNothingToShow>
            <RiEmotionUnhappyLine />
            <p>No thing to show</p>
            <Link to="/">Let's add some</Link>
          </StNothingToShow>
        ) : (
          <h6>your favorite hotels :</h6>
        )}
        {favorites.map(
          ({ title, img, price, rate, id, details, location }, index) => (
            <StyledFavoritesPageItem key={index}>
              <Link to={`hotelpage/${id}`}>
                <img src={img} alt={title} />
              </Link>
              <StyledFavoritesPageItemTitle>
                <h4>
                  <Link to={`/hotelPage/${id}`}>{title}</Link>
                </h4>
                <Link to="/locations">
                  <MdLocationOn /> {location}
                </Link>
                <p>
                  {`${details.substring(0, 180)}... `}
                  <Link to={`hotelpage/${id}`}> show more </Link>
                </p>
                <h6>
                  ${price}
                  <span>/night</span>
                </h6>
                <StyledFavoritesPageItemRate>
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
                  <span>
                    {rate}
                    <FaStar />
                  </span>
                </StyledFavoritesPageItemRate>
              </StyledFavoritesPageItemTitle>
            </StyledFavoritesPageItem>
          )
        )}
      </StyledFavoritesPageItemContainer>
    </StyledFavoritesPageContainer>
  );
};

export default Favorites;
