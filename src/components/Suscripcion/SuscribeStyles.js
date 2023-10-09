import styled from "styled-components";

export const SuscribeStyled = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  .section-newsletter-home h2,
  p {
    width: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.6;
    color: #131415;
    text-align: center;
    text-transform: uppercase;
  }

  .section-newsletter-home h2 {
    background-color: #6e6043;
    color: #fefefe;
  }

  .section-newsletter-home p {}

  .newsletter-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100vw;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  form {
    max-width: 100vw;
    margin: 0 auto;
    width: 100%;
  }
  .input-container{
    display: block;
    justify-items: center;
    align-items: center;
  }
  .section-newsletter-home .email-inp {
    max-width: 92vw;
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    margin-left: 1px;
    margin-bottom: 10px;
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

  @media only screen and (min-width: 320px) and (max-width: 761px) {
    body {
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
    }
    .newsletter-container {
      margin: 0 auto;
      display: block;
      justify-items: center;
      align-items: center;
      width: 100vw;
    }
    form {
      margin: 0 auto;
      width: 100vw;
    }
    h2 {
      width: 100vw;
    }
    p {
      width: 100vw;
    }
    .section-newsletter-home .btn-primary {
      margin: 0;
      width: 100vw;
      margin-left: 0;
    }
    form .email-inp {
      margin: 0;
      margin-bottom: 10px;
      width: 100%;
    }
  }
`;
