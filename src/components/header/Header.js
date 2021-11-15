import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {SideBarData} from "../../data/data";
import {
  StyledHeader,
  StyledHeaderLinks,
  StyledHeaderLogo,
  StyledHeaderUserImage,
  StyledHeaderSideBar,
  StyledSliderContainer,
  StyledSliderUrderList,
  StyledSliderListItem,
  StyledSliderUrderListIcon,
} from "./Header.styles";

import headerLogo from "../../assets/header/header-logo.svg";
import userImage from "../../assets/header/user-image.png";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const location = useLocation();

  const HandeltoggleSideBar = () => () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const HandleNavLinkProp = () => {
    if (location.pathname === "/") {
      return "nav-link-home";
    }
    if (location.pathname === "/favorites") {
      return "nav-link-favorite";
    }
    if (location.pathname === "/locations") {
      return "nav-link-location";
    }
    if (location.pathname === "/saved") {
      return "nav-link-saved";
    }
    if (location.pathname === "/contact") {
      return "nav-link-contact";
    }
  };

  return (
    <>
      <StyledHeader isLink={HandleNavLinkProp()}>
        <StyledHeaderSideBar>
          <GiHamburgerMenu onClick={HandeltoggleSideBar()} />
        </StyledHeaderSideBar>
        <StyledHeaderLogo>
          <Link to="/" replace>
            <img src={headerLogo} alt="header-logo" />
          </Link>
        </StyledHeaderLogo>
        <StyledHeaderLinks isLink={HandleNavLinkProp()}>
          <Link to="/" key="1" id="nav-link-home" replace>
            Home
          </Link>
          <Link to="/favorites" key="2" id="nav-link-favorite" replace>
            favorites
          </Link>
          <Link to="/saved" key="3" id="nav-link-saved" replace>
            saved
          </Link>
          <Link to="/locations" key="4" id="nav-link-location" replace>
            locations
          </Link>
          <Link to="/contact" key="5" id="nav-link-contact" replace>
            contact
          </Link>
        </StyledHeaderLinks>
        <StyledHeaderUserImage>
          <img src={userImage} alt="userProfile" />
        </StyledHeaderUserImage>
      </StyledHeader>
      <StyledSliderContainer isSideBarOpen={isSideBarOpen}>
        <StyledSliderUrderListIcon>
          <AiOutlineClose onClick={HandeltoggleSideBar()} />
        </StyledSliderUrderListIcon>
        <StyledSliderUrderList>
          {SideBarData.map(({path, icon, title}, index) => (
            <StyledSliderListItem onClick={HandeltoggleSideBar()} key={index}>
              <Link to={path}>
                {icon}
                {title}
              </Link>
            </StyledSliderListItem>
          ))}
        </StyledSliderUrderList>
      </StyledSliderContainer>
    </>
  );
};

export default Header;
