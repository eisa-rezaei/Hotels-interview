import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 4vh 0;
  padding-left: 15px;
`;
export const StyledSliderSingleItem = styled.div`
  width: inherit;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #f3f6fe;
  & img {
    width: 100%;
    height: 40vw;
    object-fit: fill;
    cursor: inherit;
    z-index: 1;
  }
`;
export const StyledSliderSingleItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  font-size: 2rem;
  & span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & a {
      margin: 10px 0;
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
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 10px;
    & p {
      font-size: 0.7rem;
    }
  }
`;
export const StyledSliderSingleItemInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #99b2f7;
  & a {
    display: flex;
    align-items: center;
    color: #fff;
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;
