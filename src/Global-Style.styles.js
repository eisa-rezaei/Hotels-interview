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
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  overflow: hidden;
  font-family: 'ABeeZee', sans-serif;
}
a {
  text-decoration: none;
  & :focus{
    color: inherit;
  }
  & :active{
    color: inherit;
  }
}

`;
