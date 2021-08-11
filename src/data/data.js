import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  { title: "Home", icon: <AiIcons.AiFillHome />, path: "/" },
  { title: "favorites", icon: <IoIcons.IoIosPaper />, path: "/favorites" },
  { title: "saved", icon: <FaIcons.FaCartPlus />, path: "/saved" },
  { title: "populars", icon: <IoIcons.IoMdPeople />, path: "/popular" },
  { title: "contact", icon: <FaIcons.FaEnvelopeOpenText />, path: "/contact" },
];
