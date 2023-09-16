import React from 'react'
import { HeaderStyled } from './HeaderStyles';

import Navbar from '../Navbar/Navbar';
import HeaderBottom from '../HeaderBottom/HeaderBottom';


function Header() {
  return (
    <HeaderStyled>
      <HeaderBottom />
  
    <Navbar />
    </HeaderStyled>
    
  )
};

export default Header