import styled from "styled-components";

export const StyledHotelListContainer = styled.section`
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  box-sizing: border-box;
  padding: 20px;
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
    font-size: 2rem;
    padding-left: 5px;
  }
  & h6 {
    font-size: 1rem;
    color: #949399;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    & svg {
      margin-right: 5px;
      color: #4e7cb3;
      font-size: 1.4rem;
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
      font-size: 1.2rem;
    }
    & h6 {
      font-size: 0.75rem;
      margin: 5px 0;
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
    :hover {
      color: #ffaaaa;
    }
  }
  & span {
    display: flex;
    flex-direction: row;
    & svg {
      color: orange;
      cursor: inherit;
    }
  }
  @media (max-width: 600px) {
    right: 3vw;
    padding: 3vh 0;
    & span {
      font-size: 1rem;
      display: flex;
      flex-direction: row;
    }
  }
`;
