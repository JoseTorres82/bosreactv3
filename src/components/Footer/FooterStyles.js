import { styled } from "styled-components";

export const FooterContentBox =styled.div `
max-width: 100vw;
margin: 0 auto;
max-height: 100vh;
height: fit-content;
padding:2rem ;
display: flex;
background: #000;
color:#fff;
justify-content: space-between;
align-items: center;
padding-bottom: 0;

.FooterMainBox { 
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: block;
    flex:35%;
    color: #000;
    flex-flow: column;
    height: 300px;
}
a:visited {
    color: #fff;
}

`
