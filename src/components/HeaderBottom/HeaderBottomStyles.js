import { styled } from "styled-components";

export const HeaderBottomStyled = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  height: 80px;
  position: relative;
  width: 100%;
  z-index: 1000; 
  transition: background-color 0.3s ease; 
  margin-bottom: 20px;
  background-color: #fff;
  color: #000;



  .container {
    max-width: 100vw;
    margin: 0 auto;
    width: 100%;
    height: 5rem;
    background: white;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    transition: all .2s;
    
       &.scrolled {
    background-color: rgb(236, 226, 198);
  }


  }

  .ContenedorNavegacion {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 5px; */
 
  }

  .logoContainer {
    max-width: 600px;
    display: flex;
    justify-content: space-around;
    width: fit-content;
    height: fit-content;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      text-align: center;
      float: none;
      max-height: 80px;
    }

    span {
      font-size: 1rem;
      font-weight: bold; 
      margin-top: 0;
      margin-left: 0;
    }
    h1 {
      background: #37426e;
      /* background: -webkit-radial-gradient(
        ellipse farthest-side at top right,
        #37426e 28%,
        #63a0cf 87%,
        #99cfcd 98%
      );
      background: -moz-radial-gradient(
        ellipse farthest-side at top right,
        #37426e 28%,
        #63a0cf 87%,
        #99cfcd 98%
      );
      background: radial-gradient(
        ellipse farthest-side at top right,
        #37426e 28%,
        #63a0cf 87%,
        #99cfcd 98%
      ); */
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* text-shadow: rgb(236, 226, 198) 0px 1px 8px; */
      text-shadow: rgb(220, 230 ,250 ) 0.5px 5px 15px   ;
    }
  }

  .bagContainer {
    width: 60px;
    height: auto;
    display: flex;
    gap: 1px;
    justify-content: center;
    align-items: center;
    position: relative;
    span {
      color: #fff;
      background-color: red;
      padding: 2%;
      border-radius: 50%;
      width: 30%;
      height: auto;
      font-weight: 400;
      text-align: center;
      position: absolute;
      margin-right: 35px;
    }
  }
  .bag {
    max-width: 250px;
    cursor: pointer;
    width: 100%;
    font-size: 30px;
  }

`;
