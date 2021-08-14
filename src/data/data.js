import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { BiSwim } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";

import hotel1 from "../assets/content/hotel-picture-1.jpeg";
import hotel2 from "../assets/content/hotel-picture-2.jpeg";
import hotel3 from "../assets/content/hotel-picture-3.jpeg";
import hotel4 from "../assets/content/hotel-picture-4.jpeg";

import icon1 from "../assets/search-svg/1.svg";
import icon2 from "../assets/search-svg/2.svg";
import icon3 from "../assets/search-svg/3.svg";

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
    rate: 3.9,
    features: [
      <BiSwim key={1} />,
      <CgGym key={2} />,
      <FaIcons.FaWifi key={3} />,
      <IoFastFoodSharp key={4} />,
      <IoGridOutline key={5} />,
    ],
    details:
      "Lorem ipsum dolor sitctio ducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob soluta ab ais! Placeat, eum doloribus quo quos ducimus iste veniam eos quas maxime, nihil dolorum? amet consectetur adipisicing elit. Vitae obcaecati totam provident eos, facilis, dicta numquam reprehenderit eveniet ipsum? Consequaturducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob soluta fuga eveniet, porro distin",
  },
  {
    title: "shine",
    img: hotel2,
    location: "turkey , STANBOL",
    id: 2,
    price: 189,
    rate: 4.9,
    features: [
      <BiSwim key={1} />,
      <CgGym key={2} />,
      <FaIcons.FaWifi key={3} />,
      <IoFastFoodSharp key={4} />,
      <IoGridOutline key={5} />,
    ],
    details:
      "s veritatis in rerum numquam nobis! Placeat, eum ducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob solutadoloribus quo quos ducimus iste veniam eos quas maxime, niLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati totam provident eos, facilis, dicta soluta ab a numquam reprehenderit eveniet ipsum? Consequatur fuga eveniet, porro distinctio ducimus qui recusandae aspernatur necessitatibuhil dolorum?",
  },
  {
    title: "sabalan",
    img: hotel3,
    location: "ardabil , IRAN",
    id: 3,
    price: 370,
    rate: 3.3,
    features: [
      <BiSwim key={1} />,
      <CgGym key={2} />,
      <FaIcons.FaWifi key={3} />,
      <IoFastFoodSharp key={4} />,
      <IoGridOutline key={5} />,
    ],
    details:
      ", facilis, dicta soluta ab a numquam ducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob solutareprehenderit eveniet ipsum? Consequatur fuga eveniet, porro distinctio ducimus qui recusandae aspernatur necessitatibus veritatis in rerum nuLorem ipsum dolor dolorusit amet consectetur adipisicing elit. Vitae obcaecati totam provident eosmquam nobis! Placeat, eum doloribus quo quos ducimus iste veniam eos quas maxime, nihil m?",
  },
  {
    title: "damavand",
    img: hotel4,
    location: "tehran , IRAN ",
    id: 4,
    price: 132,
    rate: 4.3,
    features: [
      <BiSwim key={1} />,
      <CgGym key={2} />,
      <FaIcons.FaWifi key={3} />,
      <IoFastFoodSharp key={4} />,
      <IoGridOutline key={5} />,
    ],
    details:
      "Lorem ipsum dolor rerumis, dicta uam  numq Placeat, eum doloribusducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob soluta quo quos ducimus iste veniam eos quas max sit amet consectetur adipisicing elit. Vitae obcaecati totam provident eos, facilnobis!soluta ab a numquam reprehenderit eveniet ipsum? Consequatur fuga eveniet, porro distinctio ducimus qui recusandae aspernatur necessitatibus veritatis inime, nihil dolorum?",
  },
];

export const HomePageSearchSvg = [icon1, icon2, icon3];
