import styled from "styled-components";

// page container
export const StyledFavoritesPageContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  font-size: 5vw;
`;
// favorites container
export const StyledFavoritesPageItemContainer = styled.section`
  width: 90%;
  height: auto;
  min-height: 100vh;
`;
//single item
export const StyledFavoritesPageItem = styled.article`
  width: 100%;
  min-height: 35vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f3f6fe;
  & img {
    width: 30vw;
    height: 35vh;
  }
`;
// title
export const StyledFavoritesPageItemTitle = styled.div`
  width: 50%;
  min-height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  & p {
    font-size: 1rem;
  }
`;
