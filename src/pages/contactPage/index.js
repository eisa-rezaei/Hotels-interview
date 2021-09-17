import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { StContactContainer, StContactContent } from "./styles";

const Contact = () => {
  return (
    <StContactContainer id="Contact">
      <a href="mailto:Eisa.eisa.r.r@gamil.com" target="_blank" rel="noreferrer">
        <StContactContent>
          <p>Contact and call for coding</p>
          <h2>Call Jesus</h2>
          <ImArrowUpRight2 />
        </StContactContent>
      </a>
    </StContactContainer>
  );
};

export default Contact;
