import { Link } from 'react-router-dom';
import '../CSS/paginainicio.css'


//Imagenes
import cheftP from '../IMG/cheft preparando.jpg'
import cheftP2 from '../IMG/chefts3.jpg'
//CSS
//CSS
import '../CSS/paginainicio.css';
import '../CSS/piedepagina.css';
function Encabezado() {
   
    return (
        <>
       {/* <footer class="container">*/}
        <footer className="container-footer">
           
                   <div >
                   <img className="img_footer"   src={cheftP}         alt="Comida empacada"/>
                     
                   </div>
                   <div className="nuestra_comp" >  
                       <ul >
                           <li >NUESTRA COMPAÑIA</li>
                           <li><Link to='/AcercadeNosotros'>Sobre Nosotros</Link></li>
                           <li><Link to='/Comidas'>Ir a Pedidos</Link></li>
                           <li><Link to='/index'>Pagina principal</Link></li>
                       </ul>
                   </div>
                 
                   <div>  
                       <ul >
                           <li>ENLACES ÚTILES</li>
                           <li><a href="#">Ayuda</a></li>
                           <li><a href="#">Ir arriba</a></li>
                       </ul>
                   </div>
                   <div className="redes">
                   <ul className="redes2">
                   <li> <div className="circle"><i className="bi bi-instagram"></i></div></li>
                   <li>  <div className="circle"><i className="bi bi-twitter"></i></div></li>
                   <li> <div className="circle"><i className="bi bi-facebook"></i></div></li>
                   </ul>
                   </div>
                   <div >
                   <img className="img_footer2"   src={cheftP2}         alt="Comida empacada"/>
                     
                   </div>
               </footer>
              
              
               </>
    )
}
export default Encabezado