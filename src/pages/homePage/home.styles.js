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
  padding: 50px 0 0 0;
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
  height: 6vh;
  outline: none;
  padding: 20px;
  border-radius: 30px;
  font-size: 2vw;
  position: absolute;
  top: 350px;
  background-color: #f3f6fe;
  z-index: 2;
  @media (max-width: 600px) {
    width: 70vw;
    font-size: 4vw;
    top: 220px;
  }
`;
export const StyledSearchPartResultsUl = styled.ul`
  width: 50vw;
  height: ${(props) => (props.isOpen ? `auto` : `0`)};
  visibility: ${(props) => (props.isOpen ? `visible` : `hidden`)};
  max-height: 45vh;
  top: 350px;
  z-index: 1;
  position: absolute;
  background-color: #fff;
  border-radius: 30px;
  padding-top: 5vh;
  overflow: hidden;
  text-align: center;
  @media (max-width: 600px) {
    top: 2200px;
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
    width: 6vw;
    display: flex;
    justify-content: space-between;
    & svg {
      color: orange;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
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
export const StyledSearchPartIcons = styled.span`
  width: 40vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & svg {
    width: 6vw;
    height: 7vh;
    padding: 10px;
    border-radius: 5px;
    fill: #4e7cb3;
    color: #4e7cb3;
    background-color: #fff;
    :hover {
      background-color: #4e7cb3;
      cursor: pointer;
      fill: #fff;
      color: #fff;
    }
  }
  @media (max-width: 600px) {
    width: 60vw;
    & svg {
      width: 10vw;
      height: 6vh;
      padding: 5px;
    }
  }
`;
