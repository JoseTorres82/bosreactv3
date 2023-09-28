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
  z-index: 99;

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

   /* btn */
.app-menu {
	position: relative;
	display:  inline-block;
	width: 30px;
	height: 30px;
	margin: 25px;
}
.app-menu span {
	margin: 0 auto;
	position: relative;
	top: 12px;
}
.app-menu span:before, .app-menu span:after {
	position: absolute;
	content: '';
}
.app-menu span, .app-menu span:before, .app-menu span:after {
	width: 30px;
	height: 6px;
	background-color: #000;
	display: block;
}
.app-menu span:before {
	margin-top: -12px;
}
.app-menu span:after {
	margin-top: 12px;
}


.Burguer span {
	-webkit-transition-duration: 0s; transition-duration: 0s;
	-webkit-transition-delay: 0.2s; transition-delay: 0.2s;
}
.Burguer:hover span {
	background-color: rgba(0,0,0,0.0);
	-webkit-transition-delay: 0.2s; transition-delay: 0.2s;
}
.Burguer span:before {
	-webkit-transition-property: margin, -webkit-transform; transition-property: margin, transform;
	-webkit-transition-duration: 0.2s; transition-duration: 0.2s;
	-webkit-transition-delay: 0.2s, 0s; transition-delay: 0.2s, 0s;
}
.Burguer:hover span:before {
	margin-top: 0;
	-webkit-transform: rotate(45deg); transform: rotate(45deg);
	-webkit-transition-delay: 0s, 0.2s; transition-delay: 0s, 0.2s;
}
.Burguer span:after {
	-webkit-transition-property: margin, -webkit-transform; transition-property: margin, transform;
	-webkit-transition-duration: 0.2s; transition-duration: 0.2s;
	-webkit-transition-delay: 0.2s, 0s; transition-delay: 0.2s, 0s;
}
.Burguer:hover span:after {
	margin-top: 0;
	-webkit-transform: rotate(-45deg); transform: rotate(-45deg);
	-webkit-transition-delay: 0s, 0.2s; transition-delay: 0s, 0.2s;
}
`;
