import {reservarMesa} from '../utils/aws-dynamodb'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; //para navegar con un boton en lugar de hacer link to

//COMPONENTES
//import Button from "./ButtonCantmon";
import Button from "./Button";

//CSS
import '../CSS/comidas.css'

//Imagenes
import img_comida_mex_posole from '../IMG/imagen1posole.jpg'
import img_comida_jap from '../IMG/imagen2sushisalmon.jpg'
import img_comida_mol from '../IMG/comida molecular2.jpg'
import img_comida_mex_chuletas from '../IMG/imagen4Chuletas.jpg'
import img_comida_mex_tacos from '../IMG/comida-mexicana-scaled.jpg'
import img_comida_mex_costillas from '../IMG/imagencostillaspaguetiarroz.jpg'

import buffet from '../IMG/platillos2.jpg'

function Comidas() {
  const [cantidad1, setValorizar1] = useState(0);
  const [cantidad2, setValorizar2] = useState(0);
  const [cantidad3, setValorizar3] = useState(0);
  const [cantidad4, setValorizar4] = useState(0);
  const [cantidad5, setValorizar5] = useState(0);
  const [cantidad6, setValorizar6] = useState(0);
  const precio1=80;
  const precio2=110;
  const precio3=90;
  const precio4=85;
  const precio5=150;
  const precio6=75;
  let total=precio1*cantidad1+precio2*cantidad2+precio3*cantidad3+precio4*cantidad4+precio5*cantidad5+precio6*cantidad6
  const [pagar, setPagar] = useState(false);
  
 if (cantidad1<0) setValorizar1(0)
 if (cantidad2<0) setValorizar2(0)
 if (cantidad3<0) setValorizar3(0)
 if (cantidad4<0) setValorizar4(0)
 if (cantidad5<0) setValorizar5(0)
 if (cantidad6<0) setValorizar6(0)
 const navigate = useNavigate();//esta constante se utilzara para navegar con navigator router en un botón
  useEffect(() => {
    if(total>0) {setPagar(true) 
      } 
      else
      {setPagar(false)}
    
    }, [total])
    
    return (
      <>
       
       <section className='seccion1'> 
       <div class="tit-platillos" >Selección de Platillos  <img className="img_tit"   src={buffet}         alt="Rico posole acompañado de verduras como rabanos, lechuga, chile picado para agregar al gusto"/> </div>
       <p></p>  
       </section> 
       <section className='total_a_pagar'>   
       Total a pagar: { Intl.NumberFormat('en-IN', {style: 'currency',currency: 'mxn', minimumFractionDigits: 2}).format(total)}
       <div >{pagar && <Button text='Pagar' event={() => { Realizar_pago()}}/> } 
       <Button text='Cancelar' event={() => { navigate('../') 
              localStorage.clear() }} />
              </div>
       
      </section>
      
        <section class="seccion_platillos1" >
              {/** PLATILLO 1 ** PLATILLO 1** PLATILLO 1 ** PLATILLO 1** PLATILLO 1 ** PLATILLO 1** PLATILLO 1 ** PLATILLO 1** PLATILLO 1 ** PLATILLO 1** */}
                <jumbotron className="jum_platillo" >
                <div className='platillos'>  Platillo 1 </div> 
                  <div>   <img className="img_plat"   src={img_comida_mex_posole}         alt="Rico posole acompañado de verduras como rabanos, lechuga, chile picado para agregar al gusto"/>
                  </div> 
                  <div className="text_btn">
                    <div className="marco"> Pozole acompañado de verduras como rabanos, lechuga, chile picado para agregar al gusto.
                    <div > Precio: <strong> ${precio1} </strong> pesos. Total: <strong>${precio1*cantidad1} </strong>pesos.
                     </div> </div>
                    
                    <div className="marco">
                      <div className="ord_cant">
                          <div> Cantidad: </div>
                          <div> {cantidad1}</div></div>
                      <div ><Button text='-' event={() => {setValorizar1(cantidad1-1)}}/> 
                          <Button classname="orden_btns" text='+' event={() => {setValorizar1(cantidad1+1)}}/>                                                     
                            </div> 
                      </div>
                    </div>
                </jumbotron>
               {/** PLATILLO 2 ** PLATILLO 2** PLATILLO 2 ** PLATILLO 2** PLATILLO 2 ** PLATILLO 2** PLATILLO 2 ** PLATILLO 2** PLATILLO 2 ** PLATILLO 2** */}
               <jumbotron className="jum_platillo" >
               <div className='platillos'>  Platillo 2</div> 
                  <div>   <img className="img_plat"   src={img_comida_jap}         alt="Delicioso suchi acompañado con salmon"/>
                  </div> 
                  <div className="text_btn">
                    <div className="marco"> Sushi elaborada con pescado crudo y gran variedad de ingredientes y condimentos. Acompañada con Salmon
                    <div > Precio: <strong> ${precio2} </strong> pesos. Total: <strong>${precio2*cantidad2} </strong>pesos.
                     </div> </div>
                    
                    <div className="marco">
                      <div className="ord_cant">
                          <div> Cantidad: </div>
                          <div> {cantidad2}</div></div>
                      <div ><Button text='-' event={() => {setValorizar2(cantidad2-1)}}/> 
                          <Button classname="orden_btns" text='+' event={() => {setValorizar2(cantidad2+1)}}/>                                                     
                            </div> 
                      </div>
                    </div>
                </jumbotron>
               {/** PLATILLO 3 ** PLATILLO 3 ** PLATILLO 3 ** PLATILLO 3 **PLATILLO 3 ** PLATILLO 3 **PLATILLO 3 ** PLATILLO 3 **PLATILLO 3 ** PLATILLO 3 ***/}
               <jumbotron className="jum_platillo" >
               <div className='platillos'>  Platillo 3 </div> 
                  <div>   <img className="img_plat"   src={img_comida_mol}         alt="Comida molecular"/>
                  </div> 
                  <div className="text_btn">
                    <div className="marco"> Comida molecular, solo se cuenta con esfera helada de nata, polvo de concha, galleta blanca y chocolate abuelita. 
                    <div > Precio: <strong> ${precio3} </strong> pesos. Total: <strong>${precio3*cantidad3} </strong>pesos.
                     </div> </div>
                    
                    <div className="marco">
                      <div className="ord_cant">
                          <div> Cantidad: </div>
                          <div> {cantidad3}</div></div>
                      <div ><Button text='-' event={() => {setValorizar3(cantidad3-1)}}/> 
                          <Button classname="orden_btns" text='+' event={() => {setValorizar3(cantidad3+1)}}/>                                                     
                            </div> 
                      </div>
                    </div>
                </jumbotron>
               {/* **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 **PLATILLO 4 */}
               <jumbotron className="jum_platillo" >
               <div className='platillos'>  Platillo 4 </div> 
                  <div>   <img className="img_plat"   src={img_comida_mex_chuletas}         alt="Chuletas de res acompañadas con guacamole y verduras como tomate y lechuga"/>
                  </div> 
                  <div className="text_btn">
                    <div className="marco"> Chuletas de res acompañadas con guacamole y verduras como tomate y lechuga y una deliciosa salsa para agregar al gusto. 
                    <div > Precio: <strong> ${precio4} </strong> pesos. Total: <strong>${precio4*cantidad4} </strong>pesos.
                     </div> </div>
                    
                    <div className="marco">
                      <div className="ord_cant">
                          <div> Cantidad: </div>
                          <div> {cantidad4}</div></div>
                      <div ><Button text='-' event={() => {setValorizar4(cantidad4-1)}}/> 
                          <Button classname="orden_btns" text='+' event={() => {setValorizar4(cantidad4+1)}}/>                                                     
                            </div> 
                      </div>
                    </div>
                </jumbotron>
               {/* **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 **PLATILLO 5 */}
               <jumbotron className="jum_platillo" >
               <div className='platillos'>  Platillo 5</div> 
                  <div>   <img className="img_plat"   src={img_comida_mex_tacos}         alt="Tacos de carne de res acompañados de una salsa picante para agregar al gusto y verduras"/>
                  </div> 
                  <div className="text_btn">
                    <div className="marco"> Tacos de carne de res acompañados de una salsa picante para agregar al gusto y verduras, como cebolla, cilantro y un guacamole
                    <div > Precio: <strong> ${precio5} </strong> pesos. Total: <strong>${precio5*cantidad5} </strong>pesos.
                     </div> </div>
                    
                    <div className="marco">
                      <div className="ord_cant">
                          <div> Cantidad: </div>
                          <div> {cantidad5}</div></div>
                      <div ><Button text='-' event={() => {setValorizar5(cantidad5-1)}}/> 
                          <Button classname="orden_btns" text='+' event={() => {setValorizar5(cantidad5+1)}}/>                                                     
                            </div> 
                      </div>
                    </div>
                </jumbotron>
               {/* **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 **PLATILLO 6 */}
               <jumbotron className="jum_platillo" >
               <div className='platillos'>  Platillo 6 </div> 
                  <div>   <img className="img_plat"   src={img_comida_mex_costillas}         alt="Ricas costillas acompañadas con espagueti y arroz verduras y una salsa agridulce"/>
                  </div> 
                  <div className="text_btn">
                    <div className="marco"> Ricas costillas acompañadas con espagueti, arroz cocinada de tal manera que tu paladar quede facinado, puedes elegir desde salsa picante y agridulce.
                    <div > Precio: <strong> ${precio6} </strong> pesos. Total: <strong>${precio6*cantidad6} </strong>pesos.
                     </div> </div>
                    
                    <div className="marco">
                      <div className="ord_cant">
                          <div> Cantidad: </div>
                          <div> {cantidad6}</div></div>
                      <div ><Button text='-' event={() => {setValorizar6(cantidad6-1)}}/> 
                          <Button classname="orden_btns" text='+' event={() => {setValorizar6(cantidad6+1)}}/>                                                     
                            </div> 
                      </div>
                    </div>
                </jumbotron>
        </section>
        <section className='total_a_pagar'>   
       Total a pagar: { Intl.NumberFormat('en-IN', {style: 'currency',currency: 'mxn', minimumFractionDigits: 2}).format(total)}
       <div >{pagar && <Button text='Pagar' event={() => {Realizar_pago()}}/>} 
       <Button text='Cancelar' event={() => { navigate('../') 
              localStorage.clear() }} />
              </div>
      </section>
      <section className='espacio'></section>
        
      </>
    )
    function Realizar_pago(){
      if(localStorage.getItem('tipodeentrega')==='Mesa Reservada:'){
        alert(localStorage.getItem('nmbdynanmo') + ", No olvides ser puntual en tu reservación ya que solo estara disponible el tiempo reservado " + 
       "\nFecha de reservación: " + localStorage.getItem('datosreservafecha') +
        "\nHora de reservasción: " + localStorage.getItem('datosreservaHora') + "\n"+
        localStorage.getItem('datosreservaMesa'))
        const jsonMesa={
          id_mesa: localStorage.getItem('totreservaciones'),
          fecha: localStorage.getItem('datosreservafecha'),
          hora: localStorage.getItem('datosreservaHora'),
          mesa: localStorage.getItem('datosreservaMesa'),
        }
        reservarMesa(jsonMesa)
        localStorage.clear()
        navigate('../') 
      }
      if(localStorage.getItem('tipodeentrega')==='Entrega a Domicilio'){
        alert(localStorage.getItem('nmbdynanmo') + ", gracias por tú pago \n La Entrega a domicilio tardara de 60 minutos a 1 hora \n "+
        "Gracias por proporcionar tú Ubicación: " 
        + localStorage.getItem('Latitud') +","+localStorage.getItem('Longitud'))
        localStorage.clear()
        navigate('../') 
      }
      if(localStorage.getItem('tipodeentrega')==='Recoger en Tienda'){
        alert(localStorage.getItem('nmbdynanmo') + ", gracias por tú pago \n Puedes recoger tú pedido dentro de los siguientes 40 minutos  \n Ubicación: " + 
        localStorage.getItem('Latitud') +","+localStorage.getItem('Longitud'))
        
      }
}
}
export default Comidas