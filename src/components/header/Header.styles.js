import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 8.5vh;
  top: 0;
  left: 0;
  font-size: 1.7vw;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    height: 10vh;
    justify-content: space-between;
    padding: 0 1.5rem;
  }
`;
// Header Links
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
    transition: all 0.2s linear;
  }
  #${(props) => props.isLink} {
    color: #99b2f7;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.1s linear;
  }
  @media (max-width: 600px) {
    display: none;
    & a {
      display: none;
    }
  }
`;
// Header Logo
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
// user Image
export const StyledHeaderUserImage = styled.span`
  display: flex;
  align-items: center;
  & img {
    width: 4.5vw;
    height: 4.5vw;
    border-radius: 50%;
    object-fit: contain;
    border: 1px solid #2a608f;
    cursor: pointer;
    @media (max-width: 600px) {
      width: 9vw;
      height: 9vw;
    }
  }
`;
// sideBar toggle icon
export const StyledHeaderSideBar = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    font-size: 7vw;
    cursor: pointer;
    & svg:hover {
      color: #888;
    }
  }
`;
// sideBar container
export const StyledSliderContainer = styled.div`
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 100%;
  font-size: 0.8rem;
  position: fixed;
  transition: all 0.25s ease-out;
  transform: ${(props) =>
    props.isSideBarOpen ? "translate(0, 0)" : "translate(-100%, 0)"};
`;
// sideBar ul
export const StyledSliderUrderList = styled.ul`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #245480;
  font-size: 1.5em;
  z-index: 10;
`;
// sideBar li
export const StyledSliderListItem = styled.li`
  width: 100vw;
  height: 5.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding-left: 40px;
  color: #e0e0e0;
  &:hover {
    background-color: #2a608f;
    cursor: pointer;
  }
  &:active {
    color: #48adeb;
  }
`;
// sideBar li icon
export const StyledSliderListItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin: 10px 15px;
  color: #48adeb;
`;
// sideBar close icon
export const StyledSliderUrderListIcon = styled.span`
  height: 6vh;
  color: #48adeb;
  display: flex;
  font-size: 5vh;
  margin-top: 15px;
  align-items: center;
  padding-left: 30px;
  & svg {
    cursor: pointer;
  }
`;
