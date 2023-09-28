import styled from "styled-components";

export const SliderHeroContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  height: 452px;
  background-color: lightcoral;
  display: flex;
  position: relative;
  margin-top: 30px;

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
`;
