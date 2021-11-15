import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {BiSwim} from "react-icons/bi";
import {CgGym} from "react-icons/cg";
import {IoFastFoodSharp} from "react-icons/io5";
import {IoGridOutline} from "react-icons/io5";

import hotel1 from "../assets/content/hotel-picture-1.webp";
import hotel2 from "../assets/content/hotel-picture-2.webp";
import hotel3 from "../assets/content/hotel-picture-3.webp";
import hotel4 from "../assets/content/hotel-picture-4.webp";

import {ReactComponent as IconA} from "../assets/search-svg/1.svg";
import {ReactComponent as IconB} from "../assets/search-svg/2.svg";
import {ReactComponent as IconC} from "../assets/search-svg/3.svg";

export const SideBarData = [
  {title: "Home", icon: <AiIcons.AiFillHome />, path: "/"},
  {title: "favorites", icon: <IoIcons.IoIosPaper />, path: "/favorites"},
  {title: "saved", icon: <FaIcons.FaCartPlus />, path: "/saved"},
  {title: "Locations", icon: <IoIcons.IoMdPeople />, path: "/locations"},
  {title: "contact", icon: <FaIcons.FaEnvelopeOpenText />, path: "/contact"},
];
export const HomePageSliderOne = [
  {
    title: "motel",
    img: hotel1,
    location: "tehran, IRAN",
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
    position: [35.7, 51.3],
  },
  {
    title: "shine",
    img: hotel2,
    location: "tehran , IRAN",
    id: 2,
    price: 189,
    rate: 4.9,
    features: [
      <BiSwim key={1} />,
      <IoFastFoodSharp key={2} />,
      <IoGridOutline key={3} />,
      <CgGym key={4} />,
      <FaIcons.FaWifi key={5} />,
    ],
    details:
      "s veritatis in rerum numquam nobis! Placeat, eum ducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob solutadoloribus quo quos ducimus iste veniam eos quas maxime, niLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati totam provident eos, facilis, dicta soluta ab a numquam reprehenderit eveniet ipsum? Consequatur fuga eveniet, porro distinctio ducimus qui recusandae aspernatur necessitatibuhil dolorum?",
    position: [35.75, 51.4],
  },
  {
    title: "sabalan",
    img: hotel3,
    location: "tehran , IRAN",
    id: 3,
    price: 370,
    rate: 3.3,
    features: [
      <CgGym key={1} />,
      <IoFastFoodSharp key={2} />,
      <BiSwim key={3} />,
      <FaIcons.FaWifi key={4} />,
      <IoGridOutline key={5} />,
    ],
    details:
      ", facilis, dicta soluta ab a numquam ducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob solutareprehenderit eveniet ipsum? Consequatur fuga eveniet, porro distinctio ducimus qui recusandae aspernatur necessitatibus veritatis in rerum nuLorem ipsum dolor dolorusit amet consectetur adipisicing elit. Vitae obcaecati totam provident eosmquam nobis! Placeat, eum doloribus quo quos ducimus iste veniam eos quas maxime, nihil m?",
    position: [35.6, 51.3],
  },
  {
    title: "damavand",
    img: hotel4,
    location: "tehran , IRAN ",
    id: 4,
    price: 132,
    rate: 4.3,
    features: [
      <IoFastFoodSharp key={1} />,
      <FaIcons.FaWifi key={2} />,
      <BiSwim key={3} />,
      <IoGridOutline key={4} />,
      <CgGym key={5} />,
    ],
    details:
      "Lorem ipsum dolor rerumis, dicta uam  numq Placeat, eum doloribusducimus qui recusandae aspernatur necessitatibus veritatis in rerum numquam nob soluta quo quos ducimus iste veniam eos quas max sit amet consectetur adipisicing elit. Vitae obcaecati totam provident eos, facilnobis!soluta ab a numquam reprehenderit eveniet ipsum? Consequatur fuga eveniet, porro distinctio ducimus qui recusandae aspernatur necessitatibus veritatis inime, nihil dolorum?",
    position: [35.65, 51.4],
  },
];

export const HomePageSearchSvg = [
  {icon: <IconA />, color: "#6482f2"},
  {icon: <IconB />, color: "#e2796b"},
  {icon: <IconC />, color: "#5f69df"},
];
