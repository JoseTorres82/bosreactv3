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
    display: block;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    transition: all 0.2s;

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
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
  }
`;

export const CartIconStyled = styled.div`
  display: block;
  height: fit-content;
  position: relative;
  z-index: 88;

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
  max-width: 761px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 5%;
  z-index: 678;
  margin-top: 0.5vh;
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #4a4a4a;
  transition: all 0.2s ease-in-out;
  font-family: "Helvetica", sans-serif;
  line-height: 1.6;
  letter-spacing: 1px;
  ::-webkit-scrollbar {display: none;}
 
  
  .closeCartSignal{
    position:absolute !important ;
    right: 20px;
    top: -23px;
    font-size: 36px;
  }
  .cartItems {
    width: 100%;
    height: 100px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    text-align: center;
    border-bottom: #6e6043 solid 1px;

    .itemDesc {
      display: flex;
      padding: 10px;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
      background-color: #fefefe;
      
      p {
        width: 150px;
        font-weight: 700;
      }
    }

    .quantity {
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      gap: 5px;
      margin-right: 10px;
      right: 0;
   
    }

    button {
      width: 80px;
      padding: 5px;
      border-radius: 3px;
      background-color: #6e6043;
      cursor: pointer;
      p{
        font-size: 14px;
      }
      &:hover {
        background-color: #f4511e;
        box-shadow: -8px 9px 10px rgba(0, 0, 0, 0.2);
        color: #fff;
        transform: scale(1.02);
      }
    }
    
  }

  .uiCartButtons {
    width: 100%;
    display: flex;
    gap: 15px;
    z-index: 1;
    justify-content: space-around;

    button {
      width: 150px;
      padding: 15px;
      background-color: #6e6043;
      cursor: pointer;
      transition: all ease 0.2s;
      border-radius: 5px;
      bottom: 50px;
      &:hover {
        background-color: #f4511e;
        box-shadow: -8px 9px 10px rgba(0, 0, 0, 0.2);
        color: #fff;
        transform: scale(1.02);
      }
    }
  }
  .cartItem{
    display: inline-block;
    max-height: 400px;
    overflow-y: scroll;
    padding: 10px;


  }
  @media (max-width: 560px) {
    width: 100vw;
    margin: 0;
    padding: 0;
    right: 0;
    display: inline-block;
    text-align: center;

    .cartItem{
      width: 100vw;
      height: 100vh;
      padding: 0;
      margin: 0;
    }
    .itemDesc{
      width: 90vw;
      padding: 0;
      margin: 0;
    }
    .quantity{
      width: 100vw;
      padding: 0;
      margin: 0;
    }
  }
`;
