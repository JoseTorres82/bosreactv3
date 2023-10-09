import { styled } from "styled-components";

export const FooterContentBox =styled.div `
max-width: 100vw;
margin: 0 auto;
max-height: 100vh;
height: fit-content;
/* padding:2rem ; */
display: flex;
background: rgb(236, 226, 198);
color:#fff;
justify-content: space-between;
align-items: center;
padding-bottom: 0;

.FooterMainBox { 
  /*   max-width: 1200px;
    margin: 0 auto; */
    width: 100%;
    display: block;
    flex:35%;
    color: #000;
    flex-flow: column;
    
}
a:visited {
    color: #fff;
}
/* Olas */
.ocean { 
  height: 200px;
  width:100%;
	overflow: hidden;
	position: relative;
	bottom: 0;
	left: 0;
}

.ocean.v01 .wave {
	background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
}

.ocean.v01 {
	transform: rotate(180deg);
	position: absolute;
    bottom: 0;
	left: 0;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  bottom: -25px;
  width: 6400px;
  height: 100%;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  bottom: -25px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translateY(-25px);
  }
  50% {
    transform: translateY(5px);
  }
}

`;
