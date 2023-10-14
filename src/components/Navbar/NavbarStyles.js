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
  transition: all 0.2s;
  position: relative;
  


  &.scrolled {
    margin-top: -20px;
    position: fixed;
    z-index: 999;
    /*  background: #131415; */
    background: #6e6043;
    .burguer {
      display: none;
    }
    a:visited {
      color: #f5f5f5;
    }
    box-shadow: 0 8px 6px -6px #333;
  }
`;

export const Navlinks = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 2.8rem  ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: none;
  gap: 10px;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  z-index: 99;
  border-top: #6e6043 solid 1px;
  border-bottom: #6e6043 solid 1px;
  /*  background-color: #fdfcfc; */
  color: #000;

  @media (max-width: 761px) {
    display: none;
  }

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
    color: #131415;
  }

  a:visited {
    color: #131415;
  }
`;

export const BurgerLinks = styled.nav`
  display: none;
  position: fixed;
  width: 85vw;
  height: 100%;
  /*  background-color: #131415; */
  background: #6e6043;
  top: 4.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1px;
  right: ${(props) => (props.isMenuOpen ? "0" : "-100%")};
  transition: right 0.3s ease-in-out;

  @media (max-width: 761px) {
    display: block;
  }
`;

export const ContenedorLinks = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60%;

  a {
    color: #f5f5f5;
  }

  a:visited {
    color: #f5f5f5;
  }
`;
