import styled from "styled-components";
import Background from "../../assets/content/background.svg";

export const StyledHomePageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-size: 5vw;
`;
export const StyledSearchPart = styled.div`
  width: 100%;
  height: 75vh;
  margin-top: 8.5vh;
  padding: 75px 0 0 0;
  background-image: url(${Background}),
    linear-gradient(
      135deg,
      rgba(253, 252, 254, 0) 20%,
      rgba(192, 192, 192, 0.8132440476190477) 100%
    );
  z-index: 2;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  & span {
    margin: 30px 0;
  }
  @media (max-width: 600px) {
    margin-top: 10vh;
    height: 55vh;
    & span {
      font-size: 2rem;
      margin-top: 30px;
    }
  }
`;
export const StyledSearchPartTitle = styled.h5`
  color: #fff;
`;

export const StyledSearchPartInput = styled.input`
  width: 50vw;
  height: 7vh;
  outline: none;
  padding-left: 20px;
  border-radius: 30px;
  font-size: 2vw;
  position: absolute;
  top: 330px;
  background-color: #f3f6fe;
  z-index: 2;
  @media (max-width: 600px) {
    width: 70vw;
    height: 6vh;
    font-size: 4vw;
    top: 250px;
  }
`;
export const StyledSearchPartResultsUl = styled.ul`
  width: 50vw;
  height: ${(props) => (props.isOpen ? `auto` : `0`)};
  visibility: ${(props) => (props.isOpen ? `visible` : `hidden`)};
  max-height: 45vh;
  top: 335px;
  z-index: 1;
  position: absolute;
  background-color: #fff;
  border-radius: 30px;
  padding-top: 5vh;
  overflow: hidden;
  a {
    color: #222;
  }
  @media (max-width: 600px) {
    top: 250px;
    width: 70vw;
  }
`;
export const StyledSearchPartResultsli = styled.li`
  width: 100%;
  height: 8vh;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  & span {
    width: 5vw;
    display: flex;
    justify-content: space-between;
    & svg {
      color: orange;
    }
  }
  :hover {
    background-color: #f3f6fe;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 6vh;
    font-size: 4vw;
    & span {
      width: 10vw;
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      & svg {
        color: orange;
      }
    }
  }
`;
export const StyledSearchPartIcons = styled.div`
  width: 40vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 60vw;
  }
`;
export const StyledSearchPartIcon = styled.span`
  & svg {
    width: 6vw;
    height: 7vh;
    padding: 10px;
    border-radius: 5px;
    fill: #fff;
    color: #fff;
    background-color: ${(props) => props.color};
    :hover {
      background-color: #fff;
      cursor: pointer;
      fill: ${(props) => props.color};
      color: ${(props) => props.color};
    }
  }
  @media (max-width: 600px) {
    & svg {
      width: 10vw;
      height: 6vh;
      padding: 12px;
    }
  }
`;
