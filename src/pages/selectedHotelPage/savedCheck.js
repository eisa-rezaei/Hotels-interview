import { useSelector } from "react-redux";
import selectors from "../../redux/saved/selectors";

export const useSavedCheck = () => {
  const saved = useSelector(selectors.getSaved);
  return (id) => saved.some((item) => item.id === id);
};
