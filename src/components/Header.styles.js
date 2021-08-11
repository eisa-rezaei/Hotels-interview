import styled from "styled-components";

export const StyledHeader = styled.header`
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
    justify-content: space-between;
    padding: 0 1.5rem;
  }
`;
export const StyledHeaderLinks = styled.div`
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
    border-bottom: 1vh solid lightblue;
    transition: all 0.2s linear;
  }
  & a:focus {
    color: #fff;
    background-color: seagreen;
    border-bottom: 1vh solid lightblue;
    transition: all 0.2s linear;
  }
  @media (max-width: 600px) {
    & a {
      display: none;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
export const StyledHeaderLogo = styled.span`
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
export const StyledHeaderUserImage = styled.span`
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
      width: 9vw;
      height: 9vw;
    }
  }
`;
export const StyledHeaderSideBar = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    font-size: 7vw;
    cursor: pointer;
  }
`;
export const StyledSliderContainer = styled.div`
  width: 100vw;
  top: 0;
  height: auto;
  position: absolute;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.isSideBarOpen ? "translate(0, 0)" : "translate(-100%, -100%)"};
`;
export const StyledSliderUrderList = styled.ul`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  background-color: #263036;
  font-size: 1.5em;
`;
export const StyledSliderListItem = styled.li`
  width: 100vw;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding-left: 40px;
  color: #e0e0e0;
  &:hover {
    background-color: seagreen;
  }
`;
export const StyledSliderListItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 15px;
  color: red;
`;

export const StyledSliderUrderListIcon = styled.span`
  height: 8vh;
  color: red;
  display: flex;
  font-size: 5vh;
  cursor: pointer;
  margin-top: 10px;
  align-items: center;
  padding-left: 1.5rem;
`;
