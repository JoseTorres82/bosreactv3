import styled from "styled-components";

export const MobileMenuContainer = styled.div`


  @media (max-width: 761px) {
    position: absolute;
    left: 0;
    width: 60%;
    height: 50vh;
    background-color: #6e6043;
    display: block;
    text-decoration: none;
    z-index: 98;
    border-radius: 0px 0px 10px 10px;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
   
  }
`;
