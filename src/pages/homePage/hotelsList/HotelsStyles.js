import styled from "styled-components";

export const StyledHotelListContainer = styled.section`
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 15px;
    gap: 15px;
  }
`;
export const StyledHotelListItem = styled.article`
  display: flex;
  flex-direction: row;
  background-color: #f3f6fe;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s linear;
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    transition: all 0.3s linear;
  }
  & a {
    display: flex;
    align-items: center;
  }
  & img {
    width: 20vw;
    height: 20vh;
    @media (max-width: 600px) {
      width: 40vw;
      height: 20vh;
    }
  }
`;
export const StyledHotelListItemTitle = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
  font-size: 1rem;

  & h5 {
    font-size: 1.6rem;
    padding-left: 5px;
  }
  & h6 {
    font-size: 0.8rem;
    color: #949399;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    & svg {
      margin-right: 5px;
      margin-bottom: 4px;
      color: #4e7cb3;
      font-size: 1.3rem;
    }
  }
  & p {
    margin: 10px 0;
    padding-left: 5px;
    & span {
      color: #949399;
    }
  }
  @media (max-width: 600px) {
    & h5 {
      font-size: 1.5rem;
    }
    & h6 {
      font-size: 0.8rem;
      margin: 15px 0;
    }
    & p {
      margin: 5px 0;
    }
  }
`;
export const StyledHotelListItemRatePart = styled.span`
  width: 5vw;
  height: 20vh;
  top: 0;
  right: 1vw;
  padding: 10px 0;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1.2rem;
  & svg {
    color: red;
    cursor: pointer;
    font-size: 1.5rem;
    :hover {
      color: #ffaaaa;
    }
  }
  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    & svg {
      color: orange;
      cursor: inherit;
      margin-left: 5px;
      padding-bottom: 4px;
    }
  }
  @media (max-width: 600px) {
    right: 3vw;
    padding: 2.5vh 0;
    & span {
      font-size: 0.9rem;
      display: flex;
      flex-direction: row;
    }
  }
`;
