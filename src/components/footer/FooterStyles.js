import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 10px 0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #316ea7;
  color: #fff;
  & h2 {
    font-size: 16px;
  }
  & span {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    & a {
      padding: 10px 0;
      display: flex;
      align-items: center;
      color: #fff;
    }
    & svg {
      font-size: 20px;
      :hover {
        color: #d0d0d0;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 700px) {
    & h2 {
      font-size: 4vw;
      letter-spacing: 1px;
    }
    & span {
      margin: 5px 0;
      & svg {
        font-size: 4vw;
      }
    }
  }
`;
