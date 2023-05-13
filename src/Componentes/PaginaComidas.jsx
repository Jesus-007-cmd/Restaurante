import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to
import Encabezado from './Encabezado'
import PiedePagina from './PieDePagina'
import Comidas from './Comidas'

//COMPONENTES


function PaginaComidas() {
  const navigate =useNavigate()
  return(
  <>
 <Encabezado/> 
 {localStorage.getItem('registrado') && localStorage.getItem('Ubicacion') && navigate('../Comidas') }
 <Comidas/>

 <PiedePagina/>
  
  </>

);}

export default PaginaComidas;