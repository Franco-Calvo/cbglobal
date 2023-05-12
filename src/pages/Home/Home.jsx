import React from "react";
import "./home.css";
import { FaArrowRight } from "react-icons/fa";
import { Link as Anchor } from "react-router-dom";
import image from "../../images/Financial.png";
import imagetwo from "../../images/finanzas.jpg";
import Navbar from "../../components/Navbar";
import { Trans, useTranslation } from "react-i18next";

export default function Home() {
  const { t, changeLanguage, i18n } = useTranslation("globals");

  return (
    <div className="HomeContainer" id="seccion-1">
      <div className="home-tittle">
        <h1 className="titleh1">
          CB <span>Global.</span>
        </h1>
      </div>

      <div className="home-content">
        <p>
          {t("PARRAFO")} <br /> {t("PARRAFO2")}
        </p>
        <Anchor className="button-info">
          {t("BTN-INICIO")}
          <FaArrowRight className="arrow-info" />
        </Anchor>
      </div>

      <div className="content-images-home">
        <div className="image">
          <img src={image} alt="Imagen de oficina numero 2" />
        </div>
        <div className="image image-two">
          <img src={imagetwo} alt="Imagen de oficina numero 2" />
        </div>
      </div>
    </div>
  );
}
