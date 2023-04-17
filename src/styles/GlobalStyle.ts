import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px arial, sans-serif;

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
    
  }

  #root {
  display: flex;
  height: 100vh;
  width: 100vw;
}
`;

export default GlobalStyle;
