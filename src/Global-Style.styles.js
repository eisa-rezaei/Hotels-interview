import {createGlobalStyle} from "styled-components";
import Gloriy from "./assets/fonts/GILORY-FONT/Gilroy.css";

export const GlobalStyle = createGlobalStyle`
${Gloriy}
*,
*::after ,
*::before{
  box-sizing: border-box;
}

html , 
body ,
h1,
h2,h3,h4,h5,h6,ul{
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: Gilroy , sans-serif;
}
input{
  border: 0;
}
.App {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  user-select: none;
}
a {
  text-decoration: none;
  color: inherit;
  & :focus{
    color: inherit;
  }
  & :active{
    color: inherit;
  }
}
button {
  color: inherit;
  background-color: inherit;
  border: 0;
}
li {
  list-style: none;
}
`;
