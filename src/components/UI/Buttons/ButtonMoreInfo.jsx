import React from 'react'
import {Link} from 'react-router-dom'
/* import { BtnMore } from './ButtonsStyles' */

function ButtonMoreInfo() {
  return (
    <Link to="/Productos"><button><span>Más Info.</span></button></Link>
  )
}

export default ButtonMoreInfo