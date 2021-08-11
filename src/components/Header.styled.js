import styled from "styled-components";
export const PagesHeader = styled.header`
  width: 100vw;
  height: 8.5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1.7vw;
  border-bottom: 1px solid seagreen;
  @media (max-width: 600px) {
    height: 10vh;
  }
`;
export const PagesHeaderLinks = styled.div`
  width: 45vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 600px) {
    display: none;
  }
  & a {
    width: 8vw;
    height: 8vh;
    color: #222;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s linear;
  }
  @media (max-width: 600px) {
    & a {
      display: none;
    }
  }
  & a:hover {
    color: seagreen;
    background-color: #fff;
    border-bottom: 1vh solid lightblue;
    transition: all 0.2s linear;
  }
  & a:focus {
    color: #fff;
    background-color: seagreen;
    border-bottom: 1vh solid lightblue;
    transition: all 0.2s linear;
  }
`;
export const PagesHeaderLogo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 12vw;
    height: 7vh;
  }
  @media (max-width: 600px) {
    & img {
      width: 20vw;
      height: 10vh;
    }
  }
`;
export const PagesHeaderUserImage = styled.span`
  display: flex;
  align-items: center;
  & img {
    width: 4.5vw;
    height: 4.5vw;
    border-radius: 50%;
    object-fit: fill;
    border: 1px solid seagreen;
    cursor: pointer;
    @media (max-width: 600px) {
      width: 45px;
      height: 45px;
    }
  }
`;
export const PagesHeaderSideBar = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    font-size: 5vw;
    cursor: pointer;
  }
`;
