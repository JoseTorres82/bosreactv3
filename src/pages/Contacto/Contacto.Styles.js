import styled from "styled-components";

export const ContactoWrapper = styled.form`
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5em;
    border-radius: 3px;
    font-family: 'PT Sans'sans-serif;
    margin-top: 80px;
    color: #fff;
    h1, h2, h3, h4, li {
    font-family: 'PT Sans',sans-serif;
}
  ul {
    list-style: none;
    padding: 0;
    font-family: 'PT Sans'sans-serif;
  }

  .contact-wrapper {
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.3);
  }

  .contact-wrapper > * {
    padding: 1em;
  }

  .contact-form {
    background: #222222;
  }

  .contact-form form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .contact-form form label {
    display: block;
    font-family: 'PT Sans',sans-serif;
  }

  .contact-form form p {
    margin: 0;
    padding: 1em;
  }

  .contact-form form .block {
    grid-column: 1 / 3;
  }

  .contact-form form button,
  .contact-form form input,
  .contact-form form textarea {
    width: 100%;
    padding: 0.7em;
    border: none;
    background: none;
    outline: 0;
    color: #fff;
    border-bottom: 1px solid #6e6043;
  }

  .contact-form form button {
    background: #6e6043;
    border: 0;
    text-transform: uppercase;
    padding: 1em;
    cursor: pointer;
  }

  .contact-form form button:hover,
  .contact-form form button:focus {
    background: #f4511e;
    color: #fff;
    transition: background-color 1s ease-out;
    outline: 0;

  }

  /* CONTACT INFO */
  .contact-info {
    background: #000;
  }

  .contact-info h4,
  .contact-info ul,
  .contact-info p {
    text-align: center;
    margin: 0 0 1rem 0;
  
  }

  /* LARGE SIZE */
  @media (min-width: 700px) {
    body {
      padding: 0 4em;
    }
    .contact-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    .contact-wrapper > * {
      padding: 2em;
    }
    .contact-info h4,
    .contact-info ul,
    .contact-info p {
      text-align: left;
    }
  }
  @media (max-width: 576px) {
  }
  .container {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5em;
    border-radius: 3px;
  }
`;
