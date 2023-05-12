import React from "react";
import "./contacto.css";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import { useTranslation } from "react-i18next";

export default function Contacto() {
  const { t, changeLanguage, i18n } = useTranslation("globals");
  return (
    <div id="seccion-3" className="contact-container">
      <div className="info-top">
        <h4>
          {t("TITLE-COMUNICATE")} <span> {t("TITLE-SECTNOSOTROS")}</span>
        </h4>
        <p>{t("CONTACTS")}</p>
      </div>
      <div className="container-inputs-contact">
        <span>
          <label>{t("LABEL-CORREO")}</label>
          <input type="email" />
        </span>

        <span>
          <label>{t("LABEL-NOMBRE")}</label>
          <input type="text" />
        </span>

        <span>
          <label>{t("LABEL-TELEFONO")}</label>
          <input type="tel" />
        </span>

        <button type="submit" className="buttonComuni">
          {t("BTN-CONTACT")}
          <FaArrowRight className="arrow-contact" />
        </button>
      </div>
    </div>
  );
}
