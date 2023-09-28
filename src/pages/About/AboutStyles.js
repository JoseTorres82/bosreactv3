import styled from "styled-components";

export const AboutWrapper = styled.section`
  max-width: 100vw;
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  color: #f5f5f5;
  display: block;
  line-height: 1.6;
  letter-spacing: 1px;
  font-family: "PT Sans", sans-serif;
  margin-top: 110px;
 /*  padding: 20px; */
 /*  background-color: #131415; */
 background: #ffff;
 color: #131415;
/*  position: relative; */
 
/* 
  section{
    max-width: 1200px;
    margin  :0 auto ;
    width: 100%;
 

  } */
  

`;

export const MediaWrapper = styled.section`
  max-width: 100vw;
  margin: 0 auto;
  height: fit-content;
  width: 100%;
  top: 0;
  object-fit: contain;
  overflow: hidden;
  margin-bottom: 20px;
  display: block;
  justify-content: center;
  border-radius: 3px;
  position: relative;

  img {
    width: 100%;
    position: relative;
    z-index: 10;
    opacity: 35%;
    background-color: #333;
    border-radius: 15px;
    height: fit-content;
  }
  section{
    position: absolute;
    top: 45%;
    bottom: 50%;
    left: 0;
    right: 0;
    z-index: 11;
    font-weight: 800;
    font-size: 1rem;
    color: #333;
    margin-bottom: 40px;
    margin-top: 0;

    
    .LogoAbout{
      width: 100%;
      height: auto;
      background: none;
      opacity: 100%;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 150px;
        height: auto;
      }
      
    }
    h2 {
    text-align: center;
    span {
      font-family: 'Poppins', sans-serif;;
    }
    padding: 10px;
  }
  p {
    max-width: 1100px;
    margin: 0 auto;
    text-align: left;
    line-height: 1.6;
    letter-spacing: 1px;
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 5px;   
  }
  @media (max-width:992px){
        img {
          display: none;
        }
      section {
      top: 0;
      }
      
      }

  }
  

`;
