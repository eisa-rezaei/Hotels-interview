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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #316ea7;
  color: #fff;
  & h2 {
    font-size: 2.5vw;
  }
  & span {
    & a {
      color: #fff;
    }
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    & svg {
      font-size: 2.5vw;
      :hover {
        color: #d0d0d0;
        cursor: pointer;
      }
    }
  }
`;
