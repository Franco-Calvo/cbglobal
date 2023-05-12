import React from "react";
import "./contacto.css";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import { useTranslation } from "react-i18next";

export default function Contacto() {
  const { t, changeLanguage, i18n } = useTranslation("globals");
  const contact = useRef({});
  return (
    <div ref={contact} className="contact-container">
      <Navbar productRef={contact?.current} />

      <div className="info-top">
        <button onClick={() => i18n.changeLanguage("en")}>Tuvieja</button>
        <button onClick={() => i18n.changeLanguage("es")}>Tuvieja</button>
        <h4>
          {t("TITLE-COMUNICATE")} <span>nosotros.</span>
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
