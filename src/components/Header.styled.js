import styled from "styled-components";
export const PagesHeader = styled.header`
  width: 100vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1.7vw;
  border-bottom: 1px solid seagreen;
`;
export const PagesHeaderLinks = styled.div`
  width: 45vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  & a:hover {
    color: seagreen;
    background-color: #fff;
    border-bottom: 1.5vh solid lightblue;
    transition: all 0.2s linear;
  }
  & a:focus {
    color: #fff;
    background-color: seagreen;
    border-bottom: 1.5vh solid lightblue;
    transition: all 0.2s linear;
  }
`;
export const PagesHeaderLogo = styled.span`
  & img {
    width: 12vw;
    height: 7vh;
  }
`;
export const PagesHeaderUserImage = styled.span`
  display: flex;
  align-items: center;
  & img {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    object-fit: fill;
    border: 1px solid seagreen;
    cursor: pointer;
  }
`;
