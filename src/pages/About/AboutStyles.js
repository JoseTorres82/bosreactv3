import styled from "styled-components";

export const AboutWrapper = styled.section`
  max-width: 100vw;
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  display: block;
  line-height: 1.6;
  letter-spacing: 1px;
  font-family: "PT Sans", sans-serif;
  margin-top: 110px;
  color: #131415;
  position: relative; 
`;

export const MediaWrapper = styled.section`
  max-width: 100vw;
  margin: 0 auto;
  height: fit-content;
  width: 100%;
  top: 0;
  object-fit: contain;
  overflow: hidden;
  margin-bottom: 20px;
  display: block;
  justify-content: center;
  border-radius: 3px;
  position: relative;

  img {
    width: 100%;
    position: relative;
    z-index: 1; 
    opacity: 35%;
    background-color: #333;
    border-radius: 15px;
    height: auto;
  }

  section {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    z-index: 10;
    font-weight: 800;
    font-size: 1rem;
    color: #333;
    margin-bottom: 40px;
    margin-top: 0;
    text-align: center;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5); 
    border-radius: 5px;
  }

  .LogoAbout {
    width: 100%;
    height: auto;
    background: none;
    opacity: 100%;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: auto;
    }
  }

  h2 {
    text-align: center;
    span {
      font-family: "Poppins", sans-serif;
    }
    padding: 10px;
  }

  p {
    max-width: 1100px;
    margin: 0 auto;
    text-align: left;
    line-height: 1.6;
    letter-spacing: 1px;
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 5px;
  }

  @media (max-width: 992px) {
    img {
      width: fit-content;
      height: fit-content;
    }
    section {
      margin: 0 auto;
      width: 90vw;
      text-align: center;

    }
  }
`;
