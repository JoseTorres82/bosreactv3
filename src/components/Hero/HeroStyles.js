import { styled } from "styled-components";

export const HeroStyledContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: auto 589 / 130;

  .HeroContainerStyles {
   /*  max-width: 1200px;
    margin: 0; */
    width: 100%;
    position: relative;
    z-index: 1;
    overflow:hidden;
  }
  .cicle{
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #6e6043;
    z-index: 2;
    right: -35px;
    top: -25px;
    border-radius: 50%; 
    user-select: none;
    justify-content: center;
    align-items: center;
    h2{
      place-self: center;
      text-align: center;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  @media (max-width:761px){
    .cicle{
      display: none;
    }
  }
`;
