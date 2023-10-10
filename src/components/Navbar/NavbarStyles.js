import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  width: 100%;
  height: 3.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  transition: all .2s;
  &.scrolled {
    margin-top: -20px;
    position: fixed;
    z-index: 999;
    background: #131415;
  
  }

  .NavbarContent {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    color: #131415;
  }
  @media (max-width:992px){
    display: none;
  }
`;
export const Navlinks = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 3.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: none;
  gap: 15px;
  background: #131415;
  /* background: #6e6043; */
  color: #131415;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  z-index: 99;

  .contenedorLinks {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .contenedorLinks:visited {
    color: #f5f5f5;
  }

  a {
    color: #f5f5f5;
  }
  a:visited {
    color: #f5f5f5;
  }

  @media (max-width:761px) {
    .contenedorLinks{
      display: none;
    }
    
  }
`;
