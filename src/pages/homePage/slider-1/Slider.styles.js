import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StyledSliderSingleItem = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e0e0e0;

  & img {
    width: 100%;
    height: 45vw;
    object-fit: fill;
  }
`;
export const StyledSliderSingleItemTitle = styled.h5``;
