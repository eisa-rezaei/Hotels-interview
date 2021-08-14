import styled from "styled-components";

//selected hotel container
export const StyledSelectedHotelContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  background-color: #fff;
  z-index: 5;
  & img {
    width: 100%;
    height: 85vh;
    object-fit: fill;
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 1;
    @media (max-width: 600px) {
      height: 50vh;
      top: 60px;
    }
  }
  @media (max-width: 600px) {
    margin-top: 60vh;
  }
  & p {
    padding: 1vh 1.5rem;
    background-color: #fff;
    z-index: 5;
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
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      width: 90vw;
      margin-top: 20px;
    }
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
    @media (max-width: 600px) {
      width: 40vw;
      margin: 10px 0;
    }
    & svg {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
export const StyledSelectedHotelDetailsFeatures = styled.div`
  width: 30vw;
  & span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
  & h3 {
    display: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 10px auto;
    flex-direction: column;
    & svg {
      width: 8vh;
      height: 8vh;
    }
    & h3 {
      display: block;
      margin-bottom: 25px;
    }
  }
`;
export const StyledSelectedHotelDetailsPrice = styled.span`
  color: goldenrod;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const StyledSelectedHotelDetailsSaveMark = styled.span`
  width: 6.5vh;
  height: 8vh;
  top: -30px;
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
  @media (max-width: 600px) {
    width: 7.5vh;
    height: 9vh;
  }
`;
export const StyledSelectedHotelFooter = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: #fff;
  z-index: 5;
`;
export const StyledSelectedHotelFooterButton = styled.button`
  width: 35vw;
  height: 9vh;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 30px;
  background-color: #6483f1;
  text-transform: capitalize;
  :active {
    color: #fff;
  }
`;
export const StyledSelectedHotelFooterTitle = styled.span`
  display: flex;
  flex-direction: column;
  & span {
    font-size: 5vh;
  }
`;
