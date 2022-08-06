import React from 'react'
import { Carousel } from 'react-bootstrap';
import '../styles/Natura/natura.css';

// function Natura() {
const Natura = () => {
    return (
        <div>
          <h3>Nuestros Productos</h3>
          <p>Los productos que ofrecemos sobresalen por sus buenas prácticas de producción, poseen 
            ingredientes naturales<br></br> y no son testeados en animales, promoviendo la conservación, el 
            cuidado del medio ambiente y el no maltatrato a los animales.</p>
          <Carousel className="carousel-natura" variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1Bazz6ml_kE04LguLKukR8nJLFrNLoyAC"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>Frescor Acaí</h5>
                <p>Aroma exclusivo del la fruta del Acaí.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1mVRoU8Pbc6KzRzhdobXjVU6PrGOzQRjS"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Aguas de Cedro</h5>
                <p>Disfruta del exquisito aroma del Cedro</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?export=view&id=1EYBb1t_t3teK0OkFcsZUoXUwNUV-EOfb"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Kaiak Urbe</h5>
                <p>Fragancia Masculina, Exclusiva Natura</p>
              
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <p>Buscamos ofrecer productos de calidad que beneficien a nuestros clientes y
            que sean amigables con el medio ambiente </p> 
           <section class="container">    
           <div class = "descrip">
           <h3>Contacto</h3>
           <div class = "datos">
           <ul>
            <li>Línea de Contacto</li>
            <li>Email</li>
            <li>Dirección</li>
           </ul>            
            <ul>
              <li>3146963569</li>
              <li>marleny.ochoa@est.iudigital.edu.co</li>
              <li>Yolombó - Antioquia - Cr 23 # 18-74 </li>
              <li>Medellin - Antioquia - Buenos Aires</li>
            </ul>
           </div>
           </div>
           </section>
        </div>
    );
}

export default Natura;