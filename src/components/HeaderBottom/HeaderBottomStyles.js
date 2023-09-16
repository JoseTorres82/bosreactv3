import { styled } from "styled-components";

export const HeaderBottomStyled = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  height: 80px;
  position: relative;

  .container {
    max-width: 100vW;
    margin: 0 auto;
    width: 100%;
    height: 5rem;
    background: #FFF;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    position: relative;
  }

  .ContenedorNavegacion{
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  
    img {
      text-align: center;
      float: none;
      max-height: 80px;
    }
  }
  .bagContainer{
        width: 40px;
        height: auto;
    }
    .bag{
        max-width: 250px;
        cursor: pointer;
        width: 100%;
        font-size: 30px;
    }
`;
