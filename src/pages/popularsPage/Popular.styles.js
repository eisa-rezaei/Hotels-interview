import styled from "styled-components";
import background from "../../assets/background/pages-background.svg";

export const PopularPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vw;
  background: url(${background});
  background-position: fixed;
  background-size: cover;
`;
