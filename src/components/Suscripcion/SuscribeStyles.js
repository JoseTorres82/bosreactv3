import Styled, { styled }  from "styled-components";

export const SuscribeStyled = styled.section` 
 max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  place-content: center;
  padding: 24px;

  
/* .newsletter-container{

width: 100%;
height: 300px;
padding: 20px;
color: #131415;
font-family: "Lato",Helvetica,Arial,sans-serif;
box-sizing: inherit;

text-align: center;
} */
.section-newsletter-home {
  max-width: 1200px;
  margin: 0 auto;
  width: fit-content;
}
.section-newsletter-home h2, p{
  width: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.6;
  padding: 10px;
  color: #131415;
  text-align: center;
  text-transform: uppercase;
}
.section-newsletter-home h2{
  
  background-color: #6e6043;
  color: #fefefe;
}
.section-newsletter-home p {
  /* font-size: 16px; */
}
.newsletter-container{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
}
.section-newsletter-home .email-inp {
  max-width: 1100px;
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
/*   font-size: 16px; */
  border-bottom: solid 5px #6e6043;
  transition: all ease-in-out .2s;
}
.section-newsletter-home .btn-primary:hover{
  background: #6e6043;
}
`;