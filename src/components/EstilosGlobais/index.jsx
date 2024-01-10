import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
  }

  /* Reset styles for specific elements */
  div, header, section, article, nav, aside, footer,p,html,body,h1, h2, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img{
    max-width: 100%;
    display: block;
  }

`

export default GlobalStyles;