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
  display: flex;
  flex-direction: column;

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
    transition: all 0.2s;

    &.scrolled {
      background-color: rgb(236, 226, 198);
      .cart-overlay{
      margin-top: 0;
    }
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
      text-shadow: rgb(220, 230, 250) 0.5px 5px 15px;
    }
  }
  button {
    border: none !important;
    background: transparent;
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
  .mobile {
    display: none;
  }
  @media (max-width: 992px) {
    .mobile {
      display: flex;
      position: absolute;
      right: 80px;
    }
     .cart-overlay{
      margin-top: 0;
    }
  }
`;

export const CartIconStyled = styled.div`
  display: flex;
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
      z-index: 888;
    }
  }
  .bag {
    max-width: 250px;
    cursor: pointer;
    width: 100%;
    font-size: 30px;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 992px) {
    .mobile {
      display: flex;
      position: absolute;
      right: 80px;
    }
  }
`;
export const CartContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  height: 100vh;
  position: fixed;
  top: 3rem !important;
  right: 0;
  padding: 2rem;
  overflow: hidden;
  overflow-y: scrolled;
  background: transparent;
  
  .cart-overlay {
    max-width: 100vw;
    margin: 0;
    width: 100%;
    height: 100vh;
    display: block;
    color: #fff;
    margin-top: 19px;
 
    button{
      width: 100px;
      background:#f76b1c ;
      display: block;
      padding:  5px;
      gap: 15px;
    }
  }
  .cart-content {
 /*    max-width: 80vw;
    margin: 0 auto;
    width: 100%;
    background: #000;
    padding-right: 0;
    right: 0;
    color: #fff;
    display: flex;
    flex-flow: column;
    margin: auto 35px;
    padding: 33px 33px 35px;
    justify-items: center;
    border-radius: 0px 10px 0px; */
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25rem;
    content: "";
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    height: 1px;

  }

  img {
    width: 25px;
    height: 25px;
  }
`;
