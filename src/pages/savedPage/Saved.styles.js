import styled from "styled-components";

// page container
export const StyledSavedPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 12vh 0;
  font-size: 5vw;
  background-position: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    & h6 {
      font-size: 1.2rem;
    }
  }
`;
// Saved container
export const StyledSavedPageItemContainer = styled.section`
  width: 90%;
  height: auto;
  min-height: 70vh;
`;
//single item
export const StyledSavedPageItem = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  margin: 2vh 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f3f6fe;
  transition: all 0.3s linear;
  position: relative;
  & img {
    width: 35vw;
    height: 38vh;
    object-fit: cover;
  }
  & a {
    display: flex;
    align-items: center;
  }
  :hover {
    background-color: #fff;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
  }
  @media (max-width: 700px) {
    min-height: auto;
    margin: 5vw 0;
    & img {
      width: 30vw;
      height: 25vh;
    }
  }
`;
// title
export const StyledSavedPageItemTitle = styled.div`
  width: 50%;
  min-height: 100%;
  margin-left: 30px;
  padding: 1vh 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & p {
    font-size: 0.8rem;
    color: #444349;
    margin: 10px 0;
    & a {
      width: 10vw;
      display: inline;
      color: seagreen;
      margin: 5px 0;
    }
  }
  & h4 {
    & a {
      color: #222;
      font-size: 2.4rem;
    }
  }
  & a {
    color: #949399;
    font-size: 1.2rem;
    margin: 5px 0;
    padding-bottom: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    & svg {
      color: #4e7cb3;
      font-size: 1.7rem;
      margin-right: 10px;
    }
  }
  & h6 {
    font-size: 1.4rem;
    margin: 10px 0;
    & span {
      color: #949399;
    }
  }
  @media (max-width: 700px) {
    margin-left: 4vw;
    & p {
      display: none;
    }
    & h4 {
      font-size: 1.6rem;
    }
    & h5 {
      width: 9rem;
      font-size: 0.8rem;
      margin: 15px 0;
    }
    & h6 {
      font-size: 0.8rem;
    }
  }
`;
export const StyledSavedPageItemRate = styled.div`
  width: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 25px 0;
  position: absolute;
  top: 0;
  right: 20px;
  & svg {
    color: steelblue;
    cursor: pointer;
  }
  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    & svg {
      color: orange;
      margin-bottom: 5px;
    }
  }
  @media (max-width: 700px) {
    & span {
      font-size: 1rem;
    }
  }
`;
export const StNothingToShowSaved = styled.div`
  width: 100%;
  height: 60vh;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & svg {
    font-size: 8rem;
    opacity: 0.7;
  }
  & p {
    margin: 20px 0;
    opacity: 0.8;
    font-weight: 900;
  }
  & a {
    font-size: 1rem;
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
`;
