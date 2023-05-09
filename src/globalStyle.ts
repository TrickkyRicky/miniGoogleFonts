import { createGlobalStyle } from "styled-components";

const CreateGlobal = createGlobalStyle`

:root {
  --typography-1: #ccd6f6;
  --scroll-dark-1: #212323;
  --scroll-dark-2: #333333;
  --black: #000000;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--scroll-dark-2) var(--scroll-dark-1);
    letter-spacing: .01px;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--scroll-dark-1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll-dark-2);
    border: 3px solid var(--scroll-dark-1);
    border-radius: 10px;
  }
  
  body {
    width: 100%;
    height: 300vh;
    background-color: #1A2238;
  }

`;

export default CreateGlobal;
