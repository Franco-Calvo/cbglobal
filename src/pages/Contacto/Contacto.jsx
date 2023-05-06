import React from "react";
import "./contacto.css";

export default function Contacto() {
  return (
    <div className="ContactContainer">
      <div className="infoTop">
        <h4>Comunícate con nosotros. </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          repellendus vitae! Perspiciatis adipisci voluptatum quidem cumque
          natus laudantium aliquid? Reprehenderit qui quisquam quos quaerat eos!
        </p>
      </div>
      <div>
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
          <input type="number" />
        </span>

        <button>Comunicarse</button>
      </div>
    </div>
  );
}
