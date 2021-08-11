import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  PagesHeader,
  PagesHeaderLinks,
  PagesHeaderLogo,
  PagesHeaderUserImage,
  PagesHeaderSideBar,
} from "./Header.styled";
import headerLogo from "../assets/header-logo.svg";
import userImage from "../assets/user-image.svg";
const Header = () => {
  return (
    <PagesHeader>
      <PagesHeaderSideBar>
        <GiHamburgerMenu />
      </PagesHeaderSideBar>
      <PagesHeaderLogo>
        <Link to="/">
          <img src={headerLogo} alt="header-logo" />
        </Link>
      </PagesHeaderLogo>
      <PagesHeaderLinks>
        <Link to="/" key="1">
          Home
        </Link>
        <Link to="/favorites" key="2">
          favorites
        </Link>
        <Link to="/saved" key="3">
          saved
        </Link>
        <Link to="/popular" key="4">
          populars
        </Link>
        <Link to="/contact" key="5">
          contact
        </Link>
      </PagesHeaderLinks>
      <PagesHeaderUserImage>
        <img src={userImage} alt="userProfile" />
      </PagesHeaderUserImage>
    </PagesHeader>
  );
};

export default Header;
