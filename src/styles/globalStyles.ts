import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%; /* Base font size */
    scroll-behavior: smooth;
    
    /* Responsive font sizes */
    @media (max-width: 768px) {
      font-size: 95%;
    }
    
    @media (max-width: 480px) {
      font-size: 90%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
    overflow-x: hidden;
    min-height: 100vh;
    line-height: 1.6;
  }
  #root {
    width: 100%; ;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
    
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  section {
    padding: 3rem 1rem;
    
    @media (min-width: 768px) {
      padding: 5rem 2rem;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Improve mobile touch targets */
  input, 
  button,
  select,
  textarea,
  a {
    touch-action: manipulation;
  }

  /* Better focus styles for accessibility */
  :focus {
    outline: 3px solid ${({ theme }) => theme.primary}40;
    outline-offset: 2px;
  }
`;

export default GlobalStyle;