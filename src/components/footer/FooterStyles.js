import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  width: 100%;
  height: 20vw;
  position: relative;
  & svg {
    position: absolute;
    bottom: 0;
  }
`;
export const StyledFooterContainerCopyRight = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #316ea7;
  color: #fff;
  & h2 {
    font-size: 3vw;
  }
`;
