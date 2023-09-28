import React from 'react'
import { SideBarContainer } from './HerosideStyles'
import CardsHero from '../../../pages/Home/CardsHero/CardsHero'
/* import OfertasHero from '../../../utils/OfertasHero/OfertasHero'
 */
/* import Link from 'react-routes/lib/Link' */


function HeroSide() {
  return (
    
    <SideBarContainer>
        <CardsHero />
    </SideBarContainer>
  )
}

export default HeroSide