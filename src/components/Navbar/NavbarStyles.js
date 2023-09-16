import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  width: 100%;
  height: 3.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  color: #131415;
  font-family: 'Montserrat', sans-serif;

  .NavbarContent {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    color: #131415;
  
    }
   
`;
export const Navlinks = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: none;
  gap: 15px;
  background: #f5f5f5;
  color: #131415;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;

  .contenedorLinks{
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
    color: #131415;

  }
  .contenedorLinks:visited{
      color: #131415;
    }
`;
