import styled from "styled-components";

export const StyledHomePageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-size: 5vw;
  font-family: Gloriy, sans-serif;
`;
export const StyledSearchPart = styled.section`
  width: 100%;
  height: 75vh;
  margin-top: 8.5vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 600px) {
    margin-top: 0;
    height: auto;
  }
`;
export const StyledSearchPartContant = styled.main`
  width: 40%;
  height: 75vh;
  padding: 30px;
  z-index: 2;
  color: #222;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  & span {
    margin: 30px 0;
  }
  & h4 {
    color: #99b2f7;
    font-size: 1.5rem;
  }
  & p {
    color: #999;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    & svg {
      color: #4e7cb3;
      margin-right: 10px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10vh;
    height: 55vh;
    & span {
      font-size: 2rem;
      margin-top: 30px;
    }
    & h4 {
      color: #99b2f7;
      font-size: 0.8rem;
    }
    & p {
      font-size: 0.8rem;
    }
  }
`;

export const StyledSearchPartInputContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  position: relative;
  z-index: 2;
  color: #a0a0a0;
  font-size: 1.5rem;
  border-radius: 30px;
  background-color: #f3f6fe;
  display: flex;
  align-items: center;
`;

export const StyledSearchPartInput = styled.input`
  width: 100%;
  height: 8vh;
  margin: 0 10px;
  z-index: 2;
  outline: none;
  font-size: 2vw;
  background-color: inherit;
  ::placeholder {
    color: #a0a0a0;
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    width: 70vw;
    height: 7vh;
    font-size: 4vw;
    top: 180px;
  }
`;
export const StyledSearchPartResultsUl = styled.ul`
  width: 100%;
  height: ${(props) => (props.isOpen ? `auto` : `0`)};
  visibility: ${(props) => (props.isOpen ? `visible` : `hidden`)};
  margin-left: -15px;
  max-height: 45vh;
  top: 7.5vh;
  z-index: 1;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  & a {
    color: #222;
  }
  & svg {
    z-index: 1;
  }
  :last-child {
    border-bottom: none;
  }
  @media (max-width: 600px) {
    top: 7vh;
    width: 100%;
  }
`;
export const StyledSearchPartResultsli = styled.li`
  width: 100%;
  height: 7vh;
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
  display: none;
  @media (max-width: 600px) {
    min-width: 100%;
    align-self: center;
    height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StyledSearchPartIcon = styled.span`
  & svg {
    width: 60px;
    height: 60px;
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
      width: 60px;
      height: 60px;
      padding: 12px;
    }
  }
`;

export const StHomeSeeMorePart = styled.div`
  width: 100%;
  padding: 0 15px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span {
    color: #99b2f7;
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    & span {
      color: #99b2f7;
      font-size: 0.8rem;
    }
  }
`;
export const StHomeImageContainer = styled.article`
  width: 60%;
  height: 100%;
  align-self: center;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: hue-rotate(80deg);
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
