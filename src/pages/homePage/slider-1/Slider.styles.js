import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    320deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(188, 212, 249, 1) 80%
  );
  padding: 4vh 0;
`;
export const StyledSliderSingleItem = styled.div`
  width: 48vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(119, 150, 196, 1) 80%
  );
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  & img {
    width: 100%;
    height: 33vw;
    object-fit: fill;
    cursor: inherit;
    z-index: 1;
  }
  & h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    & svg {
      color: #4e7cb3;
      margin-right: 10px;
    }
  }
`;
export const StyledSliderSingleItemPagination = styled.span`
  width: 10vh;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
