import Carousel from 'react-bootstrap/Carousel';


//IMAGENES
import imgcomida1 from './IMG/imagen1posole.jpg'
import imgcomida2 from './IMG/imagen2sushisalmon.jpg'
import imgcomida3 from './IMG/imagen3molecular.jpg'



//CSS
import './CSS/paginainicio.css';
//import { UNSAFE_DataRouterStateContext } from 'react-router-dom';

function FondoCarousel() {
 

  return (
    <>
   
    <Carousel>
    
      <Carousel.Item >
        <img
          className="background-img"
          src={imgcomida1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Comida Méxicana</h3>
          <p>Chefs especializados en diferentes tipos de comida.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="background-img"
          src={imgcomida2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Comida Japonesa</h3>
          <p>Gracias a la gran cantidad de chefts podemos ofrecerte cómida internacional como la comida Japonesa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="background-img"
          src={imgcomida3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Comida Molecular</h3>
          <p>
            Contamos con comida molecular, atrevete a probar otro tipo de comida.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default FondoCarousel;