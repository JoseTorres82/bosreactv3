import React from 'react'
import { HeaderStyled } from './HeaderStyles';

import Navbar from '../Navbar/Navbar';
import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderBottom from '../HeaderBottom/HeaderBottom';


function Header() {
  return (
    <HeaderStyled>
      <HeaderTop />
      <HeaderBottom />
  
    <Navbar />
    </HeaderStyled>
    
  )
};

export default Header