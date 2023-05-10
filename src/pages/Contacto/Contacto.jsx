import React from "react";
import "./contacto.css";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Navbar from "../../components/Navbar";

export default function Contacto() {
  const productRef = useRef(null);
  return (
    <div productRef={productRef} ref={productRef} className="contact-container">
      <div className="info-top">
        <h4>
          Comunícate con <span>nosotros.</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          repellendus vitae! Perspiciatis adipisci voluptatum quidem cumque
          natus laudantium aliquid? Reprehenderit qui quisquam quos quaerat eos!
        </p>
      </div>
      <div className="container-inputs-contact">
        <span>
          <label>Correo electrónico</label>
          <input type="email" />
        </span>

        <span>
          <label>Nombre</label>
          <input type="text" />
        </span>

        <span>
          <label>Número de teléfono</label>
          <input type="tel" />
        </span>

        <button type="submit" className="buttonComuni">
          Comunicarse
          <FaArrowRight className="arrow-contact" />
        </button>
      </div>
    </div>
  );
}
