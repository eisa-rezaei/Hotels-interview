import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(188, 212, 240);
  background: linear-gradient(
    -45deg,
    rgba(188, 212, 240, 1) 15%,
    rgba(148, 187, 233, 1) 49%,
    rgba(52, 119, 179, 1) 85%
  );
  padding: 4vh 0;
  border-top: 20px solid #fff;
`;
export const StyledSliderSingleItem = styled.div`
  width: 48vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f3f6fe;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  & img {
    width: 100%;
    height: 33vw;
    object-fit: fill;
    cursor: inherit;
    z-index: 1;
  }
`;
export const StyledSliderSingleItemPagination = styled.span`
  width: 10vh;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
