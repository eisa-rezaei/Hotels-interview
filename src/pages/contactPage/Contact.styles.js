import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vw;
  background-position: fixed;
  background-size: cover;
  & a {
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
`;
