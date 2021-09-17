import { createGlobalStyle } from "styled-components";
import Gloriy from "./assets/fonts/GILORY-FONT/Gilroy.css";

export const GlobalStyle = createGlobalStyle`
${Gloriy}
* {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  vertical-align: baseline;
  font-family: Gilroy , sans-serif;

}
.App {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  overflow: hidden;
  font-family: Gilroy , sans-serif;
  user-select: none;
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
