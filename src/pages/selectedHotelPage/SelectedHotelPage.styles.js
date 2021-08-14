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
  margin-top: 90vh;
  background-color: #fff !important;
  z-index: 10;
  & img {
    width: 100%;
    height: 85vh;
    object-fit: fill;
    position: fixed;
    top: 65px;
    left: 0;
    z-index: 1;
  }
  & p {
    padding: 1vh 1.5rem;
    background-color: #fff;
    z-index: 10;
  }
`;
// selected hotel title
export const StyledSelectedHotelDetailsTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  background-color: #fff;
  z-index: 10;
  position: relative;
  & span h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
      font-size: 1.2rem;
      & svg {
        color: orange;
      }
    }
  }
  & span h4 {
    width: 17vw;
    color: goldenrod;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & svg {
      font-size: 1.5rem;
    }
  }
`;
export const StyledSelectedHotelDetailsFeatures = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & svg {
    width: 6vh;
    height: 6vh;
    font-size: 1.5rem;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    background-color: #e0e0e0;
    :hover {
      cursor: pointer;
      color: #e0e0e0;
      background-color: #fff;
    }
  }
`;
export const StyledSelectedHotelDetailsPrice = styled.span`
  color: goldenrod;
`;
export const StyledSelectedHotelDetailsSaveMark = styled.span`
  width: 6.5vh;
  height: 8vh;
  top: -35px;
  right: 30px;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 5px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #6284f2;
  transition: all 0.2s linear;
  :hover {
    cursor: pointer;
    color: #6284f2;
    background-color: #fff;
    transition: all 0.2s linear;
  }
`;
