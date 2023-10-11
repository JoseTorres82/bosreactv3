import { styled } from "styled-components";

export const FooterContentBox = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  max-height: 100vh;
  height: fit-content;
  display: flex;
  background: rgb(236, 226, 198);
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0;

  .FooterMainBox {
    width: 100%;
    display: block;
    flex: 35%;
    color: #000;
    flex-flow: column;
  }
  a:visited {
    color: #fff;
  }
  /* Olas */
  .ocean {
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    bottom: 0;
    left: 0;
  }

  .ocean.v01 .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
      repeat-x;
  }

  .ocean.v01 {
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
      repeat-x;
    position: absolute;
    bottom: -25px;
    width: 6400px;
    height: 100%;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    bottom: -25px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
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
    0%,
    100% {
      transform: translateY(-25px);
    }
    50% {
      transform: translateY(5px);
    }
  }
  /* footer */
  .footer {
    max-width: 100vw;
    margin: 0 auto;
    width: 100%;
    text-decoration: none;
    display: block;
    text-align: center;
    z-index: 3;
    margin-bottom: 0;
    display: block;
  }

  .footer .footer-name {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    color: #131415;
    text-align: center;
    margin-bottom: 0px;
  }
  .footer-links {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    height: fit-content;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    justify-items: space-evenly;
    color: #131415;
  }
  .footer-links a {
    color: #131313;
    font-family: "Helvetica", sans-serif;
    transition: all ease-in-out 0.3s;
  }

  .footer-links a:hover {
    transform: scale(1.1);
    color: darkgrey;
    font-style: bold;
  }
  .footer .grupo-1 {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    column-gap: 15px;
    justify-content: center;
    align-items: center;
   /*  padding: 45px 0px; */
  }

  .footer .grupo-1 .box h2 {
    color: #131415;
    margin-bottom: 25px;
    font-size: 20px;
    font-family: "Helvetica", sans-serif;
    text-align: center;
  }

  .footer .grupo-1 .box .footer__contacto {
    color: #131415;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-family: "Helvetica", sans-serif;
  }

  .footer .grupo-1 .box .footer__contacto a i {
    max-width: 300px;
    color: #131415;
    cursor: pointer;
    padding-bottom: 10px;
    font-size: 20px;
  }

  .footer .grupo-1 .box .redes a {
    display: inline-block;
    text-decoration: none;
    width: 65px;
    height: 65px;
    line-height: 1.3;
    gap: 10px;
    color: #131415;
    margin-right: 10px;
    text-align: center;
    font-size: 30px;
    transition: all 0.3s;
  }

  .footer .grupo-1 .box .redes :hover {
    color: #2699a6;
  }

  .footer .grupo-2 {
    width: 100%;
    color: #131415;
    text-align: center;
    overflow: hidden;
  }

  .footer .grupo-2 small {
    font-size: 15px;
    font-family: "Helvetica", sans-serif;
    padding: 10px;
  }

  @media (max-width:992px){
    .footer{
      margin-bottom: 0;
      padding-top: 100px;
    }
    .footer-links {
      padding: 0;
      max-width: 100%;
      margin: 0 auto;
      display:grid;
      grid-template-columns: auto;
      padding: 0;
      margin-bottom: 0;

    }
    .grupo-2 {
      margin-top: 20px;
      bottom: 0;
      padding: 0;
    }
  }
`;
