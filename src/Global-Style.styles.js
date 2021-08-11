import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.App {
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: left;
  text-transform: capitalize;
}
a {
  text-decoration: none;
}

`;
