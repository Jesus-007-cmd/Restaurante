import { useState } from 'react';
import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to
import Encabezado from './Encabezado'
import PiedePagina from './PieDePagina'

import FondoCarousel from '../FondoCarousel'
//COMPONENTES
import Pedido from './Pedido'
function PaginaP(props) {
  const [modalShow, setModalShow] = useState(true);
  const [modalShowE, setModalShowE] = useState(true);
  const navigate =useNavigate()
  
  return(
  <>
 <Encabezado show={modalShowE} onHide={() => setModalShowE(false)} /> 
 {localStorage.getItem('registrado') && localStorage.getItem('Ubicacion') && navigate('../Comidas') }
 <Pedido show={modalShow} onHide={() => setModalShow(false)}/>
 <FondoCarousel/>

 <PiedePagina/>
  
  </>

);}

export default PaginaP;