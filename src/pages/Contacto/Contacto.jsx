import React from "react";
import "./contacto.css";
import { FaArrowRight } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className="contact-container">
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

        <button type="submit">
          Comunicarse
          <FaArrowRight className="arrow-contact" />
        </button>
      </div>
    </div>
  );
}
