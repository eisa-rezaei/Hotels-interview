import React from "react";
import {
  StyledFavoritesPageContainer,
  StyledFavoritesPageItem,
  StyledFavoritesPageItemContainer,
  StyledFavoritesPageItemTitle,
} from "./Favorites.styles";
import { useSelector } from "react-redux";
import selectros from "../../redux/favorites/selectors";
import { MdLocationOn } from "react-icons/md";

const Favorites = () => {
  const favorites = useSelector(selectros.getFavorites);

  console.log(favorites);
  return (
    <StyledFavoritesPageContainer>
      <StyledFavoritesPageItemContainer>
        <h5>your favorite hotels :</h5>

        {favorites.map(
          ({ title, img, price, rate, di, details, location }, index) => (
            <StyledFavoritesPageItem key={index}>
              <img src={img} alt={title} />
              <StyledFavoritesPageItemTitle>
                <h5>{title}</h5>
                <h6>
                  <MdLocationOn /> {location}
                </h6>
                <h6>
                  {price}
                  <span>/night</span>
                </h6>
              </StyledFavoritesPageItemTitle>
            </StyledFavoritesPageItem>
          )
        )}
      </StyledFavoritesPageItemContainer>
    </StyledFavoritesPageContainer>
  );
};

export default Favorites;
