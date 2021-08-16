import { useSelector } from "react-redux";
import selectors from "../../redux/favorites/selectors";

export const useFavoriteCheck = () => {
  const favorites = useSelector(selectors.getFavorites);
  return (id) => favorites.some((item) => item.id === id);
};
