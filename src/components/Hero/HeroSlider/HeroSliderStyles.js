import styled from "styled-components";

export const SliderHeroContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  height: 452px;
  background-color: #388f9b;
  display: flex;
  position: relative;
  margin-top: 30px;
  opacity: 95%;

  img {
    width: 350px;
    height: auto;
    position: absolute;
    animation: imganimation;
    animation-duration: 5s;
    z-index: 4;

    @keyframes imganimation {
      0% {
        opacity: 0%;
      }
      50% {
      }
      100% {
      }
    }
  }

  .contenedorSlider {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    right: 10px;

    position: absolute;
    color: #6e6043;

    p {
      font-size: 28px;
      margin: 20px;
      margin-top: 20px;
      text-shadow: rgb(0, 0, 0) 1px 2px 4px;
      color: #f5f5f5;
      z-index: 4;
      text-align: center;
    }
    .title {
      max-width: 350px;
      margin: 0 auto;
      width: 100%;
      margin: 10px;
      padding: 15px;
      text-align: center;
      display: flex;
      flex-wrap: wrap;

      h1 {
        color: #f5f5f5;
        font-size: 36px;
        text-shadow: rgb(0, 0, 0) 1px 3px 5px;
        z-index: 5;
      }
    }
    @media (max-width: 761px) {
      margin: 0 auto;
      .title h1 {
        max-width: 250px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  .cicle2 {
    display: flex;
    position: absolute;
    width: 280px;
    height: 280px;
    background-color: yellow;
    border-radius: 50%;
    user-select: none;
    opacity: 50%;
    z-index: 3;
    position: absolute;
    animation: circleanimation2;
    animation-duration: 8s;
    transition: all ease-in-out 0.3s;
    @media (max-width: 761px) {
      display: none;
    }
    @keyframes circleanimationreverse2 {
      0% {
        transform: rotate(-45deg);
      }
      50% {
        transform: rotate(-65deg);
      }
      80% {
        transform: rotate(-85deg);
      }
      100% {
        transform: rotate(-95deg);
      }
    }
  }
  .cicle3 {
    display: flex;
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: seashell;
    border-radius: 34%;
    user-select: none;
    opacity: 50%;
    z-index: 3;
    position: absolute;
    animation: circleanimation;
    animation-duration: 8s;
    transition: all ease-in-out 0.3s;
    transform: rotate(15deg);

    @media (max-width: 761px) {
      display: none;
    }
    @keyframes circleanimation {
      0% {
        transform: rotate(30deg);
        background-color: cyan;
      }
      50% {
        transform: rotate(75deg);
      }
      80% {
        transform: rotate(85deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
  }
  .cicle4 {
    display: flex;
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: seashell;
    border-radius: 34%;
    user-select: none;
    opacity: 60%;
    z-index: 3;
    position: absolute;
    animation: circleanimation2;
    animation-duration: 8s;
    transform: rotate(35deg);
    transition: all ease-in-out 0.3s;

    @media (max-width: 761px) {
      display: none;
    }
  }
  /* olas */
  .ocean {
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: absolute;
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
    top: 0;
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
`;
