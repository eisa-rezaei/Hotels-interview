import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import hotel1 from "../assets/contant/hotel-picture-1.jpeg";
import hotel2 from "../assets/contant/hotel-picture-2.jpeg";
import hotel3 from "../assets/contant/hotel-picture-3.jpeg";
import hotel4 from "../assets/contant/hotel-picture-4.jpeg";

export const SideBarData = [
  { title: "Home", icon: <AiIcons.AiFillHome />, path: "/" },
  { title: "favorites", icon: <IoIcons.IoIosPaper />, path: "/favorites" },
  { title: "saved", icon: <FaIcons.FaCartPlus />, path: "/saved" },
  { title: "populars", icon: <IoIcons.IoMdPeople />, path: "/popular" },
  { title: "contact", icon: <FaIcons.FaEnvelopeOpenText />, path: "/contact" },
];
export const HomePageSliderOne = [
  {
    title: "motel",
    img: hotel1,
    location: "new york , USA",
    id: 1,
    price: 239,
  },
  {
    title: "shine",
    img: hotel2,
    location: "turkey , STANBOL",
    id: 2,
    price: 189,
  },
  {
    title: "sabalan",
    img: hotel3,
    location: "ardabil , IRAN",
    id: 3,
    price: 370,
  },
  {
    title: "damavand",
    img: hotel4,
    location: "tehran , IRAN ",
    id: 4,
    price: 132,
  },
];
