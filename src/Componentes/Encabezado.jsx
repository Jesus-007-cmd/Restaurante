import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
//CSS
import '../CSS/paginainicio.css'
//IMAGENES
import chefts from '../IMG/chefts.jpg';

//Componentes
import Button from "./Button";
import Pedido from "./Pedido"
import IniciarSesion from "./RegIniSesModal"
import RegistrarseI from "./RegIniSesModal"
import { propTypes } from "react-bootstrap/esm/Image";
//PARA IR A PAGINAS CON ENRUTADOR
  //<div className='iniciaroregistrarse'>Click <Link to='../Datos'>aqui </Link>para Registrarte o iniciar Sesion </div>
  let tabinicioregistrarse;  
function Encabezado(props) {

  const [showIniciarSesion, setMostrarIniciarSesion] = useState(false);
  const [showRegistrarse, setMostrarRegistrarse] = useState(false);
 const iniciar_sesion=() =>{setMostrarIniciarSesion(!showIniciarSesion)}
 const registrarse=() =>{setMostrarRegistrarse(!showRegistrarse)}

 const [hacerPedido, sethacerPedido] = useState(false);
 const hacer_pedido=() =>{sethacerPedido(!hacerPedido)}
 const navigate = useNavigate();//esta constante se utilzara para navegar con navigator router en un botón
 

  return (
        <header>
          <img src={chefts} className='header-img' alt="imagen de varios Chef's con platillos en mano" />
          <div className='titulo_encabezado'>MyChef</div>  
       
        
           {showIniciarSesion && <IniciarSesion show={showIniciarSesion} onHide={() => setMostrarIniciarSesion(false)} data="Iniciar_sesion"  /> }
           {showRegistrarse && <RegistrarseI show={registrarse} onHide={() => setMostrarRegistrarse(false)}  data="Registrarse" /> }
           {hacerPedido && !(localStorage.getItem('ubicacion')) &&<Pedido show={hacerPedido} onHide={() => sethacerPedido(false)}/>}
          
           
           
            <div className='btns_encabezados'>
            {!(localStorage.getItem('eligioentrega')) && <Button text='Tipo de Pedido' event={() => { hacer_pedido() }}/>  }
            {!(localStorage.getItem('registrado')) && <Button text='Iniciar Sesión' event={() => { iniciar_sesion()}} />     }
            {!(localStorage.getItem('registrado')) &&<Button text='Registrarse' event={() => { registrarse() }}/>    }
           

           {/*Si el usuario ya se registro y ya solicito entrega a domicilio, recoger en tienda o reservo mesa */} 
            {(localStorage.getItem('registrado')) && (localStorage.getItem('eligioentrega')) && <div className='btns_encabezados'>
            <h4> Bienvenido: {localStorage.getItem('nmbdynanmo')}</h4>
             <p/> <h5> {localStorage.getItem('tipodeentrega')} , Solo elige y paga </h5>
             {localStorage.getItem('ubicacion') &&  <p><h6> Ubicación: {localStorage.getItem('Latitud')},  {localStorage.getItem('Longitud')}</h6> </p> } 
           <Button text='Cerrar Sesión' event={() => { 
            navigate('../')
            localStorage.clear() }} />     
           </div>}
           {/**Si el usuario ya se registro o inicio sesion pero no ha elegido si lo quiere a domicilio, recoger en tienda o ha reservado mesa   */}
           { localStorage.getItem('registrado') && !(localStorage.getItem('eligioentrega')) && <div className='btns_encabezados'>
           <h4> Bienvenido: {localStorage.getItem('nmbdynanmo')}</h4>
           <p/><Button text='Cerrar Sesión' event={() => { 
              navigate('../')
              localStorage.clear()}} />     
            </div>
            } 
            {/**Si el usuario solo eligio entrega   */}
            {(localStorage.getItem('eligioentrega')) && !(localStorage.getItem('registrado')) &&<h5> {localStorage.getItem('tipodeentrega')} , Solo elige y paga </h5>}
            { }
            </div>
            
      </header>
    )
    
}

export default Encabezado
