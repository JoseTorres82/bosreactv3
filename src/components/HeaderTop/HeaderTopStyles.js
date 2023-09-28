import { styled } from "styled-components";

export const HeaderTopStyledContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  width: 100%;
  height: 0.8rem;
  padding: 0.75rem 0rem;
  background: #131415;
  border-bottom: solid thin #ccc;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .TopContent {
    max-width: 50vw;
    margin: 0px auto;
    width: 100%;
    height: fit-content;
    color: rgb(245, 245, 245);
    display: flex;
    flex-flow: wrap;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    font-family: Roboto, sans-serif;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    font-weight: 500;
  }
  a:visited {
    color: #ccc;
  }
  svg {
    width:20px;
    height: 20px;
  }
`;
