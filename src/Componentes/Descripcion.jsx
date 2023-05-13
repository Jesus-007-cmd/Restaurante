

//CSS
import '../CSS/descripcion.css'

//Imagenes
import restaurant1 from '../IMG/restaurantfotos/24941078.jpg'
import restaurant2 from '../IMG/restaurantfotos/24941085.jpg'
import restaurant3 from '../IMG/restaurantfotos/imagenilustrativa.jpg'
import restaurant4 from '../IMG/restaurantfotos/imagenilustrativa2.jpg'

function Descripcion() {
 
        return (
      <>
       
       <section className='cuerpo' > 
        <section className='tit_seccion'>
          Sobre Nosotros
        </section>
        <section className='seccion1' >
            <div className='parrafo_izq'>
            <span className='michef'>MyChef </span> es una cadena de restaurantes ubicados por todo del pais en los cuales nuestro proposito es
            ofrecer comida de calidad como lo haría aun chef y de bajo costo con el fin de lograr que las personas ubicadas
            cercas de nuestros restaurantes tengan la oportunidad de satisfacer su paladar. Entre más cresca la popularidad 
            de nuestro restaurant en una ciudad y solicitud de pedidos se van a ir incorporando nuevos tipos de comida de 
            acuerdo a encuestas a nuestros clientes de que les  gustaría comer en un futuro.
            </div>
            <img className="imgsdescripcionizq"   src={restaurant1}         alt="Foto del restaurant"/>
        </section>
        <section className='seccion2'>
        <img className="imgsdescripcionder"   src={restaurant2}         alt="Foto del restaurant"/>
            <div className='parrafo_der'>
            Cada día estamos creando platillos que pueden interezar a nuestros comensales, así que puedes probar el platillo del día,
            un platillo realizado una unica vez, si nuestros comenzales les agrada en base a encuestas en linea de nuestros clientes 
            registrados y con pago de pedido anticipado podemos repetir dicho platillo. Estamos muy motivados por el apoyo que hemos
            por lor que siempre vamos mejorando día a día. También aceptamoso nuevas propuestas o creamos nuevas ideas que se nos presentan. 
            Nuestra historia va de la mano con la historia primer restaurant que se presentara a continuación:
            </div>
    
       </section>
       <section className='tit_seccion'>
          Origen de la palabra Restaurante
        </section>
        <section className='seccion3' >
            <div >
            El concepto restaurante proviene del francés “restaurant”. Se utilizó por primera vez en una taberna que vendía sopas y dentro 
            de la frase en latín: “Venite ad me vos qui stomacho laboratis et ego restaurabo vos”, que el mesonero Boulanger utilizaba a modo 
            de eslogan en el muro de entrada de su negocio y que al castellano podríamos traducir como: “Venid a mí todos los de estómago 
            cansado y yo os lo restauraré. <p></p>
            También en el siglo XVIII refiriéndose a la comida que se ofrecía (un caldo de carne) como “restaurativo” podemos encontrar el 
            término en castellano. El mismo que en francés se utilizará como “Restaurant”.En cualquier caso, el término “restaurant” se 
            extendió rápidamente por Europa y en el siglo XVIII ya encontramos casas de comidas en Italia, Polonia y Alemania.
            </div>
            <div className='centrar2img'>
            <img className="imgsdescripcion"   src={restaurant3}         alt="imagen ilustrativa de antigua restaurant"/>
            <img className="imgsdescripcion"   src={restaurant4}         alt="imagen ilustrativa de antigua restaurant"/>
            </div>
        </section>
      </section>
      
  
        
      </>
    )
}
export default Descripcion