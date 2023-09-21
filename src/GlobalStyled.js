import { createGlobalStyle } from "styled-components";
import { fontFamily } from "./common/common";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    display: block;
  }

  img {
    display: block;
  }

  button {
    all: unset;
  }

  body {
    font-family: ${fontFamily.pop}, ${fontFamily.sans};
  }
`;
