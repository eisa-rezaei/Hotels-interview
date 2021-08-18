import styled from "styled-components";

export const LocationPageContainer = styled.div`
  width: 100%;
  margin-top: 8.5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & img {
    width: 15vw;
    height: 15vh;
    display: block;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
  }
  .leaflet-container {
    width: 100%;
    height: 91.5vh;
    z-index: 1;
  }
`;
export const LocationPageRateAndPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  & span {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    & svg {
      color: orange;
      margin-left: 5px;
    }
    & h4 {
      color: #949399;
      margin-left: 5px;
    }
  }
`;
//container of hotel info side bar
export const StyledLocationPageHotelInfoContainer = styled.div`
  top: 8.5vh;
  right: 0;
  width: 40%;
  height: 91.5vh;
  position: absolute;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  transform: ${(props) =>
    props.hotelInfo ? `translateX(0)` : `translateX(100%)`};
  z-index: 2;
  & img {
    width: 100%;
    height: 40vh;
    border-radius: 0;
    margin: 0;
  }
  & p {
    margin: 0 15px;
  }
`;
export const StyledLocationPageHotelPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: 10px;
  & span {
    width: 25vw;
    display: flex;
    /* flex-direction: row; */
    align-items: flex-end;
    & h1 {
      margin-right: 2vw;
    }
    & svg {
      color: orange;
    }
  }
`;
export const StyledLocationPageHotelFeatures = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  & span {
    display: flex;
    & svg {
      width: 4vw;
      height: 5vh;
      color: #fff;
      padding: 5px;
      margin: 15px auto;
      font-size: 1.5rem;
      border-radius: 5px;
      background-color: #d0d0d0;
      transition: all 0.2s linear;
      :hover {
        color: #d0d0d0;
        cursor: pointer;
        background-color: #fff;
        transition: all 0.1s linear;
      }
    }
  }
`;
export const StyledLocationPageHotelFooter = styled.footer`
  width: 100%;
  height: auto;
  margin-top: 2.5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: #fff;
  z-index: 5;
  & a {
    width: 35%;
    height: 9vh;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    border-radius: 30px;
    background-color: #6483f1;
    text-transform: capitalize;
    color: #fff;
    :active {
      color: #fff;
    }
  }
`;
export const StyledLocationPageHotelFooterTitle = styled.span`
  display: flex;
  flex-direction: column;
  & span {
    font-size: 5vh;
  }
`;
