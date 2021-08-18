import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdLocationOn } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import {
  StyledSavedPageContainer,
  StyledSavedPageItem,
  StyledSavedPageItemContainer,
  StyledSavedPageItemRate,
  StyledSavedPageItemTitle,
} from "./Saved.styles";
import selectros from "../../redux/saved/selectors";
import { useSavedCheck } from "../selectedHotelPage/savedCheck";
import { useDispatch } from "react-redux";
import { removeSaved, setSaved } from "../../redux/saved/productActions";

const Saved = () => {
  const saved = useSelector(selectros.getSaved);
  const isSaved = useSavedCheck();
  const dispatch = useDispatch();
  const toggleSavedHandler =
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
      if (!isSaved(hotel.id)) {
        dispatch(setSaved(hotel));
      }
      if (isSaved(hotel.id)) {
        dispatch(removeSaved(hotel));
      }
    };
  return (
    <StyledSavedPageContainer>
      <StyledSavedPageItemContainer>
        <h5>your saved hotels :</h5>

        {saved.map(
          ({ title, img, price, rate, id, details, location }, index) => (
            <StyledSavedPageItem key={index}>
              <Link to={`hotelpage/${id}`}>
                <img src={img} alt={title} />
              </Link>
              <StyledSavedPageItemTitle>
                <h4>{title}</h4>
                <h5>
                  <MdLocationOn /> {location}
                </h5>
                <p>
                  {`${details.substring(0, 180)}... `}
                  <Link to={`hotelpage/${id}`}> show more </Link>
                </p>
                <h6>
                  ${price}
                  <span>/night</span>
                </h6>
                <StyledSavedPageItemRate>
                  <BsFillBookmarkFill
                    onClick={toggleSavedHandler({
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
                </StyledSavedPageItemRate>
              </StyledSavedPageItemTitle>
            </StyledSavedPageItem>
          )
        )}
      </StyledSavedPageItemContainer>
    </StyledSavedPageContainer>
  );
};

export default Saved;
