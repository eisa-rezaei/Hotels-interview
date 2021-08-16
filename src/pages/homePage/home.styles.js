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
  padding: 50px;
  background-image: url(${Background}),
    linear-gradient(
      135deg,
      rgba(253, 252, 254, 0) 20%,
      rgba(192, 192, 192, 0.8132440476190477) 100%
    );
  top: 0;
  left: 0;
  z-index: 2;
  position: sticky;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & span {
    margin: 30px 0;
  }
  @media (max-width: 600px) {
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
  margin-top: 3vh;
  border-radius: 30px;
  font-size: 1rem;
  background-color: #e0e0e0;
`;
export const StyledSearchPartIcons = styled.span`
  width: 30vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
  & svg {
    width: 60px;
    height: 60px;
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
    @media (max-width: 600px) {
      width: 50px;
    }
  }
  @media (max-width: 600px) {
    width: 50vw;
  }
`;
