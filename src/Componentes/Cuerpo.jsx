
import '../CSS/paginainicio.css'
import Encabezado from './Encabezado'
import  SolEntrega from './Secciones/SolEntrega'
import  SolRecoger from './Secciones/SolRecoger'
function Cuerpo() {
   
    return (
      <>
       <Encabezado />
        <body className='fondo'>
      
       
        <SolEntrega></SolEntrega>
        <SolRecoger></SolRecoger>
      </body>
      </>
    )
}
export default Cuerpo