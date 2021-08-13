import styled from "styled-components";

//selected hotel container
export const StyledSelectedHotelContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
//selected hotel
export const StyledSelectedHotel = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
//selected hotel li
export const StyledSelectedHotelDetails = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & img {
    width: 100%;
    height: 60vw;
    object-fit: fill;
  }
`;
