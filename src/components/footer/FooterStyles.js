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
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  @media (max-width: 700px) {
    & h2 {
      font-size: 4vw;
      letter-spacing: 1px;
    }
    & span {
      margin: 5px 0;
      & svg {
        font-size: 4vw;
      }
    }
  }
`;
