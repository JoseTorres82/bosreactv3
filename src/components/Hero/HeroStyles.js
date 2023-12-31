import { styled } from "styled-components";


export const HeroStyledContainer = styled.div`
    max-width: 100vw;
    margin: 0 auto;
    width: 100%;
    height: fit-content;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 5px;
    justify-items: center;
    align-content: center;
    border-bottom: solid 1px #333;
    user-select: none;
    @media (max-width:992px) {
      margin-top: 0px;
      
    }

  .HeroContainerStyles {
    width: 50%;
    position: relative;
    z-index: 1;
    overflow:hidden;
    margin-bottom: 25px;
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

  @media (max-width:1149px){
    .HeroContainerStyles{
      width: 100%;
    }
    .HeroSiderContainer{
      display: none;
    }
  }
  @media (max-width:992px){
    .HeroContainerStyles{
      margin-top: 0;
    }
  }
  @media (max-width:761px){
   /*  margin: 0 auto;
    grid-template-columns: repeat(1,1fr);
    justify-items: center;
    align-items: center; */
  
    .cicle{
      display: none;
    }
  
  }


`
