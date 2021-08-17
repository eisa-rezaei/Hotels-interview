import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarData } from "../../data/data";
import {
  StyledHeader,
  StyledHeaderLinks,
  StyledHeaderLogo,
  StyledHeaderUserImage,
  StyledHeaderSideBar,
  StyledSliderContainer,
  StyledSliderUrderList,
  StyledSliderListItem,
  StyledSliderListItemIcon,
  StyledSliderUrderListIcon,
} from "./Header.styles";

import headerLogo from "../../assets/header/header-logo.svg";
import userImage from "../../assets/header/user-image.png";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState({
    isHome: true,
    isFavorite: false,
    isSaved: false,
    isPopular: false,
    isContact: false,
  });

  const HandeltoggleSideBar = () => () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const HandleNavLinkProp = () => {
    if (navbarBg.isHome) {
      return "nav-link-home";
    }
    if (navbarBg.isFavorite) {
      return "nav-link-favorite";
    }
    if (navbarBg.isPopular) {
      return "nav-link-popular";
    }
    if (navbarBg.isSaved) {
      return "nav-link-saved";
    }
    if (navbarBg.isContact) {
      return "nav-link-contact";
    }
  };

  return (
    <>
      <StyledHeader>
        <StyledHeaderSideBar>
          <GiHamburgerMenu onClick={HandeltoggleSideBar()} />
        </StyledHeaderSideBar>
        <StyledHeaderLogo>
          <Link to="/" replace>
            <img src={headerLogo} alt="header-logo" />
          </Link>
        </StyledHeaderLogo>
        <StyledHeaderLinks isLink={HandleNavLinkProp()}>
          <Link
            to="/"
            key="1"
            id="nav-link-home"
            replace
            onClick={() =>
              setNavbarBg({
                isHome: true,
                isFavorite: false,
                isSaved: false,
                isPopular: false,
                isContact: false,
              })
            }
          >
            Home
          </Link>
          <Link
            to="/favorites"
            key="2"
            id="nav-link-favorite"
            replace
            onClick={() =>
              setNavbarBg({
                isHome: false,
                isFavorite: true,
                isSaved: false,
                isPopular: false,
                isContact: false,
              })
            }
          >
            favorites
          </Link>
          <Link
            to="/saved"
            key="3"
            id="nav-link-saved"
            replace
            onClick={() =>
              setNavbarBg({
                isHome: false,
                isFavorite: false,
                isSaved: true,
                isPopular: false,
                isContact: false,
              })
            }
          >
            saved
          </Link>
          <Link
            to="/popular"
            key="4"
            id="nav-link-popular"
            replace
            onClick={() =>
              setNavbarBg({
                isHome: false,
                isFavorite: false,
                isSaved: false,
                isPopular: true,
                isContact: false,
              })
            }
          >
            populars
          </Link>
          <Link
            to="/contact"
            key="5"
            id="nav-link-contact"
            replace
            onClick={() =>
              setNavbarBg({
                isHome: false,
                isFavorite: false,
                isSaved: false,
                isPopular: false,
                isContact: true,
              })
            }
          >
            contact
          </Link>
        </StyledHeaderLinks>
        <StyledHeaderUserImage>
          <img src={userImage} alt="userProfile" />
        </StyledHeaderUserImage>
      </StyledHeader>
      <StyledSliderContainer isSideBarOpen={isSideBarOpen}>
        <StyledSliderUrderList>
          <StyledSliderUrderListIcon>
            <AiOutlineClose onClick={HandeltoggleSideBar()} />
          </StyledSliderUrderListIcon>
          {SideBarData.map(({ path, icon, title }, index) => (
            <Link key={index} to={path}>
              <StyledSliderListItem onClick={HandeltoggleSideBar()}>
                <StyledSliderListItemIcon>{icon}</StyledSliderListItemIcon>
                {title}
              </StyledSliderListItem>
            </Link>
          ))}
        </StyledSliderUrderList>
      </StyledSliderContainer>
    </>
  );
};

export default Header;
