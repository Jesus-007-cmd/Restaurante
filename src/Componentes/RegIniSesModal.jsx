import { regCliente, getClientes} from '../utils/aws-dynamodb'
import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to
import { useState, useRef, useEffect } from 'react';
import ButtonReactBS from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Form from 'react-bootstrap/Form';

//Componentes
import Button from "./Button";

//CSS
import '../CSS/registroeiniciosesion.css'



//Imagenes
//import img_pedido from '../IMG/comida-empacada2.jpg'






function RegIniSesModal(props) {
const correo=useRef(null);
const contraseña=useRef(null);
const contraseña2=useRef(null);
const nombre =useRef(null);
const num_tel=useRef(null);
const apellido=useRef(null);
const colonia=useRef(null);
const calle=useRef(null);
const numero=useRef(null);
const ciudad=useRef(null);
 
 //las siguientes constantes son para iniciar sesion
const num_telefo=useRef(null);
const refpassw=useRef(null);

  
 //La siguiente combinacion de usestate con useeffet getultimo async nos permite obtener un valor de una promesa
 //en nuestro caso seria el total de registros el cual nos permitira obtener el id final con la llamada de getUltimo
 //esto se hace al abrir el formulario
 
 

 
   //La siguiente combinacion de usestate con useeffet nos permitira conocer si en la base de datos existe un usuario
 //con sus respectivas contraseña, como las promesas requieren tiempo de respuesta, usestate y useeffect funcionara 
 //en cuando se tenga la informacion, también obtendremos el total de usuarios para registros de nuevos con id sin repetir:
 const [ultireg, setData] = useState([]);
  const [usuarioexistente, setUsuarioexistente] = useState([]);
  useEffect(() => {  
    
    const existeUsuario = async () => { 
      
      const usuarioE= await getClientes(); 
      
      setUsuarioexistente(usuarioE)
      setData(usuarioE.Count) //total de usuarios
   
      console.log(usuarioE)
   } 
   existeUsuario();}, []);


   //Lo siguiente permitira abrir una pagina desde una funcion no react 
   //para registrar un cliente se apoya de usestate y useeffect coomo el código anterior
   const [sellamo, setSellamo] = useState(false);
   const [pagReg, setpagReg] = useState(false);
   
   const navigate=useNavigate();
   useEffect(() => {  
    if (sellamo===true){
    navigate('../PaginaP')
       
    setpagReg(false)
       setSellamo(false)
      }
    },  [pagReg]);

    

  return (
    
    <Modal //autoFocus='false'
    {...props}
  
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  

  scrollable='true'
    >
      
      <Modal.Body>
      <Tabs
     defaultActiveKey = {props.data}
      id="uncontrolled-tab-example"
    >
      {/********************TAB INICIAR SESION TAB********************** */}
        <Tab eventKey="Iniciar_sesion" title="Iniciar Sesion" className='texto_modal_ini_regis' >
          
          <div className='texto_modal_ini_regis'>
          
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Número Celular:</Form.Label>
                <Form.Control id="id_numero_tel_I" type="text" className='textborder0' ref={num_telefo}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Introduce tú contraseña:</Form.Label>
              <Form.Control type="password"  className='textborder0' ref={refpassw}/>
            </Form.Group>
          </Form>
               </div>
               <p/>
          
          <button className="btn_pedido_modal"  onClick={() => { 
                lista_clientes() 
                props.onHide()
                navigate('../comidas')// en caso de que no se tenga ubicacion aun asi se puede obtener entrega a domicilio
                
                }}>INICIAR SESIÓN</button> 
          
        </Tab>
      {/********************TAB REGISTRARSE********************** */}
          <Tab eventKey="Registrarse" title="Registrarse"   className='texto_modal_ini_regis'>
          <Form  >
            <Form.Group className="mb-3 borderform" controlId="exampleForm.ControlInput1">
            <Form.Label>Número de contacto:</Form.Label>
                <Form.Control id="id_numero_tel" type="text" className='textborder' ref={num_tel}/>
              <div className='orden_registro'>
                <div>
                  <Form.Label>Introduce tú contraseña:</Form.Label> 
                  <Form.Control id="id_pass1" type="password" className='textborder' ref={contraseña}/>
                </div>
                <div>
                  <Form.Label>Vuelve a introducir tú contraseña:</Form.Label>
                  <Form.Control id="id_pass2" type="password" className='textborder' ref={contraseña2}/>
                </div>
              </div>
              </Form.Group>
              <Form.Group className="mb-3 borderform" controlId="exampleForm.ControlInput1">
              <div className='orden_registro' >
              <div >
                <Form.Label>Nombre:</Form.Label>
                <Form.Control id="id_nombre" type="text" className='textborder'  ref={nombre}/>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control id="id_apellido" type="text" className='textborder' ref={apellido}/>
               
              </div>
              <div>
              <Form.Label>Escribe tú dirección de correo:</Form.Label>
              <Form.Control type="email" placeholder="nombre@proveedor.com" autoFocus className='textborder' ref={correo}/>
                <Form.Label>Colonia:</Form.Label>
                <Form.Control id="id_colonia" type="text"className='textborder' ref={colonia} />
               
              </div>
              
              </div>
              <div className='orden_registro'> 
                  <div>
                  <Form.Label>Calle: </Form.Label>
                  <Form.Control id="id_calle" type="text"className='textborder'  ref={calle}/>
                  </div>
                  <div>
                  <Form.Label >Número: </Form.Label>
                  <Form.Control id="id_num" type="text" className='textborder textborder2'   ref={numero} />
                  </div>
                  <div>
                  <Form.Label>Ciudad: </Form.Label>
                  <Form.Control id="id_ciudad" type="text"className='textborder' ref={ciudad}/>
                  </div>
                </div>
                <p/><Button text='Registrar' event={() => { registro_cliente()}}/>  
          
            </Form.Group>
            
          </Form>
            
          </Tab>
      </Tabs>
      </Modal.Body>
      <Modal.Footer>
       { /*<Button text='CERRAR3' event={() => {ped()}}/>*/}
     
      
        <ButtonReactBS className="btn_pedido_modal"   onClick={props.onHide}>CANCELAR</ButtonReactBS>
       
      </Modal.Footer>
    
    </Modal>
   
  );
  function lista_clientes(){
    
    
    let x;
    for (x=0;x<usuarioexistente.Count;x++)
{
  
  console.log(usuarioexistente.Items[x].numero_tel)
    if( usuarioexistente.Items[x].numero_tel===num_telefo.current.value)
    if(usuarioexistente.Items[x].contraseña===refpassw.current.value)
    {
      alert("inicio de sesion correcto :-)")
      setSellamo(true)
      setpagReg(true)
      localStorage.setItem("nmbdynanmo", usuarioexistente.Items[x].nombre +" " +usuarioexistente.Items[x].apellidos)
      localStorage.setItem("id_usdynamo", usuarioexistente.Items[x].id_cliente )
      localStorage.setItem("registrado", true)
      
      

      return }
    
  
  }  alert( "Usuario o contraseñas no validas")}
  function registro_cliente()  {
  
    if (!(contraseña.current.value===contraseña2.current.value))
    {
      alert("Las contraseñas deben coincidir")
      return
    }
   /*if(ExisteCuenta(num_tel.current.value))
   {
   
    alert("Ya existe esta cuenta, inicie sesión o registre un nuevo número de telefono")
  
    return
  }*/
  
    const jsonCLiente={
      id_clie: ultireg,
      correo:correo.current.value,
      contraseña:contraseña.current.value,
      nombre:nombre.current.value,
      numero_tel:num_tel.current.value,
      apellidos:apellido.current.value,
      colonia:colonia.current.value,
      calle:calle.current.value,
      numero:numero.current.value,
      ciudad: ciudad.current.value,
    }
   
    regCliente(jsonCLiente)
    alert("Usuario Registrado correctamente :-)")
    setSellamo(true)
    setpagReg(true)
    localStorage.setItem("nmbdynanmo", nombre.current.value +" " +apellido.current.value)
    localStorage.setItem("id_usdynamo", ultireg)
    localStorage.setItem("registrado", true)
  }
  
}



export default RegIniSesModal
