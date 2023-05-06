import React from "react";
import "./home.css";
import { FaArrowRight } from "react-icons/fa";
import { Link as Anchor } from "react-router-dom";
import Oficina1 from "../../images/Oficina1.png"
import Oficina2 from "../../images/Oficina2.png"

export default function Home() {
  return (
    <div className="HomeContainer">
      
      <div className="home-tittle">
        <h1>
          CB <span>Global.</span>
        </h1>
      </div>

      <div className="home-content">
        <p>
          Somos una organización comprometida en brindar soluciones financieras
          a nuestros clientes, basadas en la excelencia, la transparencia y el
          compromiso. <br /> Nuestro objetivo es ofrecer una amplia gama de
          servicios financieros a individuos y empresas, incluyendo
          asesoramiento financiero personalizado, planificación de jubilación,
          inversión en el mercado de valores, gestión de activos, seguros, y
          mucho más.
        </p>
        <Anchor className="button-info">
          Leer más
          <FaArrowRight className="arrow-info" />
        </Anchor>
      </div>

      <div className="content-images-home">
        <div className="image-one">
          <img src={Oficina1}  alt="Imagen de oficina numero 2" />
        </div>
        <div className="image-two">
          <img src={Oficina2}  alt="Imagen de oficina numero 2" />
        </div>
      </div>

    </div>
  );
}
