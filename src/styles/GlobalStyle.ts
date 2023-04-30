import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    width: 1px; /* width of the entire scrollbar */
    height: 1px;
  }
  &::-webkit-scrollbar-track {
    margin-top: 40px;
    margin-bottom: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.tertiary}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 2px solid ${({ theme }) =>
      theme.colors.background}; /* creates padding around scroll thumb */
  }

  body {
    font: 400 16px arial, sans-serif;

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
    
  }

  
`;

export default GlobalStyle;
