import Styled, { styled } from "styled-components";

export const SuscribeStyled = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  .section-newsletter-home {
    max-width: 1200px;
    margin: 0 auto;
    width: fit-content;
  }
  .section-newsletter-home h2,
  p {
    width: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.6;
    padding: 10px;
    color: #131415;
    text-align: center;
    text-transform: uppercase;
  }
  .section-newsletter-home h2 {
    background-color: #6e6043;
    color: #fefefe;
  }
  .section-newsletter-home p {
    /* font-size: 16px; */
  }
  .newsletter-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100vw;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  .section-newsletter-home .email-inp {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    margin: 15px;
  }
  .section-newsletter-home .btn-primary {
    width: 200px;
    padding: 15px;
    cursor: pointer;
    background: none;
    border: none;
    color: #131415;
    font-weight: 700;
    border-bottom: solid 5px #6e6043;
    transition: all ease-in-out 0.2s;
  }
  .section-newsletter-home .btn-primary:hover {
    background: #6e6043;
  }
`;
