import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

import {
  StyledFooterContainer,
  StyledFooterContainerCopyRight,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#316ea7"
            fill0opacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,117.3C384,160,480,224,576,245.3C672,267,768,245,864,197.3C960,149,1056,75,1152,64C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </StyledFooterContainer>
      <StyledFooterContainerCopyRight>
        <h2>powered by eisa Rezaei</h2>
        <span>
          <a href="https://github.com/eisa-rezaei/Hotels-interview">
            <FaGithub />
          </a>
          <a href="https://github.com/eisa-rezaei/Hotels-interview">
            <FaTelegram />
          </a>
          <a href="https://github.com/eisa-rezaei/Hotels-interview">
            <FaInstagram />
          </a>
          <a href="https://github.com/eisa-rezaei/Hotels-interview">
            <FaLinkedin />
          </a>
        </span>
      </StyledFooterContainerCopyRight>
    </>
  );
};

export default Footer;
