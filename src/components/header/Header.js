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

  const HandeltoggleSideBar = () => () => {
    setIsSideBarOpen(!isSideBarOpen);
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
        <StyledHeaderLinks>
          <Link to="/" key="1" replace>
            Home
          </Link>
          <Link to="/favorites" key="2" replace>
            favorites
          </Link>
          <Link to="/saved" key="3" replace>
            saved
          </Link>
          <Link to="/popular" key="4" replace>
            populars
          </Link>
          <Link to="/contact" key="5" replace>
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
