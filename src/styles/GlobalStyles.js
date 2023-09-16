import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=PT+Sans:wght@400;700&family=Poppins:wght@300;400;500&display=swap');

  :root {
    color: #213547;
    background-color: #fff;
  }
  html{
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden  
  }
  a {
    text-decoration: none;

  }
 

`;