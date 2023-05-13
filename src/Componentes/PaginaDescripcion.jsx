import { useState } from 'react';

import Encabezado from './Encabezado'
import PiedePagina from './PieDePagina'

import FondoCarousel from '../FondoCarousel'
//COMPONENTES
import Desc from './Descripcion'
function PaginaDescripcion() {
 
  return(
  <>
 <Encabezado/> 
 <Desc/>
 

 <PiedePagina/>
  
  </>

);}

export default PaginaDescripcion;