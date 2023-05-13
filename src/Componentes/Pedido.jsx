import {getReservaciones} from '../utils/aws-dynamodb'
import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to
import { useState, useEffect, useRef } from 'react';
import ButtonReactBS from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

///CSS
import '../CSS/paginainicio.css'

//Componentes

import Button from "./Button";

//Imagenes
import img_pedido from '../IMG/comida-empacada2.jpg'
import img_ent_dom from '../IMG/entrega a domicilio.jpg'
import img_mesas from  '../IMG/restaurantfotos/24941090.jpg'
import Select from 'react-select'

function Pedido(props) {
  const urMesa=useRef(null);
  const urFecha=useRef(null);
  const urHora=useRef(null);
  const [coordenada, setCordenada] = useState('');
  const navigate = useNavigate();//esta constante se utilzara para navegar con navigator router en un botón
  const [yareservo, setYareservo] = useState(false);//esto cuando se active true evitara que se consulte dos veces cuando se abre la ventana modal
  const [mesasapartadas, setmesasApartadas] = useState([]);
  const [totreservaciones, setTotalReservaciones] = useState([]);
  useEffect(() => { 
    if(yareservo===false) { 
    const reservaciones = async () => { 
      const reservs= await getReservaciones(); 
      setmesasApartadas(reservs)
      setTotalReservaciones(reservs.Count)
      setYareservo(true)
   } 
   reservaciones();}}, []);
  
   let x, y
 
   //Maximo 3 dias a futuro a reservar con hoy
  const momentoActual = new Date()
  let di =momentoActual.getDate()+1;
  let me =momentoActual.getMonth()+1;
  const añ=momentoActual.getFullYear();
    
  if(di.toString().length===1)
  di="0"+di.toString()
  if(me.toString().length===1)
  me="0"+me.toString()
  

let di2, di3

di2=2+momentoActual.getDate()
if(di2.toString().length===1)
di2="0"+di2
di3=3+momentoActual.getDate()
if(di3.toString().length===1)
di3="0"+di3


let hora = [
  { value: 'hora1', label: '8:00 a 10:00' },
  { value: 'hora2', label: '10:00 a 12:00' },
  { value: 'hora3', label: '12:00 a 14:00' },
  { value: 'hora4', label: '14:00 a 16:00' },
  { value: 'hora5', label: '16:00 a 18:00' },
  { value: 'hora6', label: '18:00 a 20:00' },
  { value: 'hora7', label: '20:00 a 22:00' }

]

let dias = [
  { value: 'dia1', label: di+"/"+me+"/"+añ },
  { value: 'dia2', label:  di2+"/"+me+"/"+añ},
  { value: 'dia3', label: di3+"/"+me+"/"+añ }
]

let mesa = [
  { value: 'Mesa1', label: 'Mesa1' },
  { value: 'Mesa2', label: 'Mesa2' },
  { value: 'Mesa3', label: 'Mesa3' },
  { value: 'Mesa4', label: 'Mesa4' },
  { value: 'Mesa5', label: 'Mesa5' }
]


const [optionsdias, setOptionsdias] = useState([]); //para agregar de manera dinamica elementos a los options de dias
const [optionshoras, setOptionshoras] = useState([]); //para agregar de manera dinamica elementos a los options de horas
const [eligiofecha, setEligiofecha] = useState(false); //para agregar de manera dinamica elementos a los options de horas

setTimeout(() => {
  console.log("1 Segundo esperado")//esto para que de tiempo de actualizar los datos

}, 1000);
//siguiente codigo para en caso de que este todo reservado se vaya eliminando
let w, z
let elimdias, elimhora, elimmesa
elimdias=dias.length
elimhora=hora.length
elimmesa=mesa.length
let fechahoramesa
for(w=0;w<mesasapartadas.Count;w++){
  fechahoramesa= mesasapartadas.Items[w].fecha+mesasapartadas.Items[w].hora+mesasapartadas.Items[w].mesa
  
  for(x=0;x<dias.length;x++){
    elimdias=elimdias-1
  for(y=0;y<hora.length;y++){
    elimhora=elimhora-1
  for(z=0;z<mesa.length;z++){
    elimmesa=elimmesa-1
  if(dias[x].label+hora[y].label+mesa[z].label===fechahoramesa) //si esta apartada esa mesa, eliminala la hora del arreglo de horas
    {
      
      if(elimhora===0)//si no hay horas disponibles en ese dia eliminaras el dia
        {dias.splice(x,1)
          if(elimmesa===0){
            alert("Lo sentimos no tenemos mesas disponibles de hoy a 2 dias despues, favor de intentar mañana")
            return
            }
        }
    }
  }}}
}

const handleEligioMesa = (event) => {
  if(urMesa.current.props.value.label===null)
  return
setOptionsdias([])
setEligiofecha(false)
  
   
  
  for(z=0;z<mesa.length;z++){
    if(urMesa.current.props.value.label===mesa[z].label)
    for(x=0;x<dias.length;x++){
      elimhora=hora.length
      for(y=0;y<hora.length;y++){
        for(w=0;w<mesasapartadas.Count;w++){
          fechahoramesa= mesasapartadas.Items[w].fecha+mesasapartadas.Items[w].hora+urMesa.current.props.value.label
          if(urMesa.current.props.value.label===mesasapartadas.Items[w].mesa)
        if(dias[x].label+hora[y].label+mesa[z].label===fechahoramesa) {//si esta apartada a esa horaa, quitar 1 hora del di
         
          elimhora=elimhora-1
          if(elimhora===0)//si no hay horas disponibles en ese dia eliminaras el dia
          dias.splice(x,1)
          }
      }
    }}}
    setOptionsdias(dias)
   
  }
  
  const handleEligioFecha = (event) => {
    if(urFecha.current.props.value.label===null || urMesa.current.props.value.label===null) 
    return
    let encontrodia=false
    if (eligiofecha===false){
      
      setEligiofecha(true)
    
  
    for(z=0;z<mesa.length;z++){
      for(x=0;x<dias.length;x++){        
        for(y=0;y<hora.length;y++){
          for(w=0;w<mesasapartadas.Count;w++){
            fechahoramesa= urFecha.current.props.value.label+mesasapartadas.Items[w].hora+urMesa.current.props.value.label
          if(urMesa.current.props.value.label===mesasapartadas.Items[w].mesa){
          if(urFecha.current.props.value.label===mesasapartadas.Items[w].fecha){
          if(hora[y].label===mesasapartadas.Items[w].hora){
            encontrodia=true
            hora.splice(y,1)
            console.log(hora)
            }
           }}
        }
        
      }
      if(encontrodia){
        
        x=dias.length
      }
      if(encontrodia){
        
        z=mesa.length
    }}}
      setOptionshoras (hora)

      
    }
  }

  return (
    <Modal //autoFocus='false'
    {...props}
  
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  /*className='modal-backdrop'*/
   
    >
      
      <Modal.Body>
      <Tabs
      defaultActiveKey="entregadom"
      id="uncontrolled-tab-example"
    >
      {/********************TAB ENTREGA A DOMICILIO TAB********************** */}
        <Tab eventKey="entregadom" title="ENTREGA A DOMICILIO " className='texto_modal' >
          
          <div className='texto_modal_dir'>
            <div >
                  INGRESA TU UBICACIÓN O PULSA OBTENER UBICACIÓN AUTOMATICAMENTE  
                  <p/><input  className='ubicacion' value={coordenada} onChange={e => setCordenada(e.target.value)} type="text" placeholder="Ingresa tú Dirección" autoFocus/>
                  <p/><Button text="OBTENER UBICACIÓN"   event={() => {
                    if (!"geolocation" in navigator) {
                      return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
                    }
                    const onUbicacionConcedida = ubicacion => {console.log(ubicacion);
                      setCordenada("Latitud: " + parseFloat(ubicacion.coords.latitude).toFixed(2)+ " Longitud: "+ parseFloat(ubicacion.coords.longitude).toFixed(2) )
                      localStorage.setItem('Latitud', ubicacion.coords.latitude)
                      localStorage.setItem('Longitud',ubicacion.coords.longitude)
                      localStorage.setItem('ubicacion',true)
                      localStorage.setItem('tipodeentrega','Entrega a Domicilio')
                      localStorage.setItem('eligioentrega',true)

                    }
                      
                    const onErrorDeUbicacion = err => {console.log("Error obteniendo ubicación: ", err);}
                    const opcionesDeSolicitud = {
                      enableHighAccuracy: true, // Alta precisión
                      maximumAge: 0, // No queremos caché
                      timeout: 5000 // Esperar solo 5 segundos
                    };
                    // Solicitar
                    navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud)
                }}/>
                <p></p>
                <span> La ubicación ayudará a que la entrega a domicilio sea lo más eficiente posible.</span>
              </div>
            <div>
              <img className="img_pedido"   src={img_ent_dom}         alt="Comida empacada"/>
            </div>
          </div>
          <p/><button className="btn_pedido_modal"  onClick={() => {
            if(localStorage.getItem('ubicacion') ) {
           navigate('../comidas')
          
          }
          localStorage.setItem('tipodeentrega','Entrega a Domicilio')
          localStorage.setItem('eligioentrega',true)
          navigate('../comidas')// en caso de que no se tenga ubicacion aun asi se puede obtener entrega a domicilio

            }}>REALIZAR PEDIDO</button> 
          
        </Tab>
      {/********************TAB RECOGER EN TIENDA TAB********************** */}
          <Tab eventKey="recoger" title="RECOGER EN TIENDA"   className='texto_modal'>
          ACUDIR A LA SIGUIENTE DIRECCIÓN:
            <div className='texto_modal_dir'>
            <img className="img_pedido"   src={img_pedido}         alt="Comida empacada"/>
            <div>
             <p > Calle 3era Norte # 811, Ciudad Delicias, Chihuahua. </p> 
             <p > Una vez realizado el pago, el pedido quedará listo en aproximadamente 40 minutos. </p> 
             </div>
             <button className="btn_pedido_modal"  onClick={() => { 
                localStorage.setItem('tipodeentrega','Recoger en Tienda')
                localStorage.setItem('eligioentrega',true)
                props.onHide()
                navigate('../comidas')// en caso de que no se tenga ubicacion aun asi se puede obtener entrega a domicilio
                
                }}>HACER PEDIDO</button> 
            </div>
          </Tab>
            {/********************RESERVAR MESA********************** */}
            <Tab eventKey="profile" title="RESERVAR MESA"   className='texto_modal'>
          SELECCIONA HORA Y MESA PARA RESERVAR:
          
            <div className='texto_modal_dir'> <div>
            <Select options={mesa}  onBlur ={handleEligioMesa} ref={urMesa}/>
            <Select  options= {optionsdias} onBlur={handleEligioFecha} ref={urFecha}/>
            <Select   options= {optionshoras}  ref={urHora}/>
            
          
           
             <p > Calle 3era Norte # 811, Ciudad Delicias, Chihuahua. </p> 
             <p > Para que quede reservado es necesario realizar <em> el pago.  </em> </p> 
             <button className="btn_pedido_modal"  onClick={() => { 
             
             
                if (registra_reservacion()){
                props.onHide()
                navigate('../comidas')// en caso de que no se tenga ubicacion aun asi se puede obtener entrega a domicilio
                //ref={urMesa+urDia+urHora}*/
                //urMesa.current.props.value.label con ref y select asi obtenermos un valor de un elemento seleccionado
             
                }}}>RESERVAR</button> 
             </div>
             <img className="img_pedido"   src={img_mesas}         alt="Comida empacada"/>
          
            </div> 
          </Tab>
      </Tabs>
      </Modal.Body>
      <Modal.Footer>
        {/*<Button text='CERRAR' event={() => {props.onHide}}/>*/}
        <ButtonReactBS className="btn_pedido_modal"   onClick={props.onHide}>Cerrar</ButtonReactBS>
       
      </Modal.Footer>
    
    </Modal>
  );
  

  function registra_reservacion()  {
    
    if (!(urFecha.current.props.value.label))
    {
      alert("Por favor elije una fecha")
      return false
    }
    if (!(urHora.current.props.value.label))
    {
      alert("Por favor elije una hora")
      return false
    }
    if (!(urMesa.current.props.value.label))
    {
      alert("Por favor elije una mesa")
      return false
    }
    
    
  
    
   
    //const fechahoramesa2=urFecha.current.props.value.label+urHora.current.props.value.label+urMesa.current.props.value.label

    localStorage.setItem('tipodeentrega','Mesa Reservada:' )
     localStorage.setItem('eligioentrega',true)
     localStorage.setItem('datosreservafecha',urFecha.current.props.value.label)
     localStorage.setItem('datosreservaHora',urHora.current.props.value.label)
     localStorage.setItem('datosreservaMesa',urMesa.current.props.value.label)
     localStorage.setItem('totreservaciones', totreservaciones)
    alert("Mesa reservada :-)") ////////////////////////////////////////////////////////////////////////
    return true
  }
}


export default Pedido
