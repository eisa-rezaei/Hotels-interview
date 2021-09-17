import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

import { StyledFooter } from "./FooterStyles";

const Footer = () => {
  return (
    <StyledFooter>
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
      <h6>managed by eisa Rezaei</h6>
    </StyledFooter>
  );
};

export default Footer;
