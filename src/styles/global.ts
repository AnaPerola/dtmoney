import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --blue: #5429CC;
    
    --blue-light: #6933FF;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    
    --background: #f0f2f5;
    --shape: #FFFFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720) {
      font-size: 87.5%; //15px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
  //quando algo estiver desabilitado vai seguir essa premissa
  [disable]{
    opacity: 0.6;
    cursor: not-allowed
  }


`