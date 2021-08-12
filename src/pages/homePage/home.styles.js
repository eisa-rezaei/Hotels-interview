import styled from "styled-components";
import Background from "../../assets/content/background.svg";

export const StyledHomePageContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  font-size: 5vw;
`;
export const StyledSearchPart = styled.div`
  width: 100%;
  height: 45vw;
  padding: 10vw;
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
  & img {
    width: 2.5rem;
    height: 2.5rem;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      background-color: #e0e0e0;
    }
  }
`;
