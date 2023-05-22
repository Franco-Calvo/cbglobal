import React, { useState } from "react";
import "./contacto.css";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import { useTranslation } from "react-i18next";

export default function Contacto() {
  const { t, changeLanguage, i18n } = useTranslation("globals");

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generar el mensaje personalizado
    const mensaje = ` ${t("EMAIL")} ${t("NAMEIS")}  ${nombre} ${t(
      "PHONEIS"
    )}  ${telefono}`;

    window.location.href = `mailto:contacto@global-cb.com?subject=WebContact&body=${encodeURIComponent(
      mensaje
    )}`;
  };

  return (
    <div id="seccion-3" className="contact-container">
      <div className="info-top">
        <h4>
          {t("TITLE-COMUNICATE")} <span> {t("TITLE-SECTNOSOTROS")}</span>
        </h4>
        <p>{t("CONTACTS")}</p>
      </div>
      <form className="container-inputs-contact" onSubmit={handleSubmit}>
        <span>
          <label>{t("LABEL-CORREO")}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </span>

        <span>
          <label>{t("LABEL-NOMBRE")}</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </span>

        <span>
          <label>{t("LABEL-TELEFONO")}</label>
          <input
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </span>

        <button onClick={handleSubmit} type="button" className="buttonComuni">
          {t("BTN-CONTACT")}
        </button>
      </form>
    </div>
  );
}
