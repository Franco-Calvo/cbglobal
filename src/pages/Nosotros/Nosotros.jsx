import React from "react";
import "./nosotros.css";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import { Trans, useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t, changeLanguage, i18n } = useTranslation("globals");

  const productRef = useRef(null);
  return (
    <div id="seccion-2" className="HomeNosotros">
      <div className="nosotros-title">
        <h2 className="title-one">{t("TITLE-NOSOTROS")} </h2>
        <h2 className="title-two">{t("NOSOTROS")}</h2>
      </div>

      <div className="nosotros-container">
        <div className="nosotros-contenid">
          <span>{t("SPAN-DOS")}</span>

          <span>{t("SPAN-TRES")}</span>
        </div>
      </div>

      <div className="nosotros-cards">
        <div className="card">
          <h2>
            <TbTargetArrow className="TbTargetArrow" /> {t("TITLE-CARD-UNO")}
          </h2>
          <span>{t("SPAN-CARD-UNO")}</span>
        </div>
        <div className="card">
          <h2>
            <MdOutlineMiscellaneousServices className="MdOutlineMiscellaneousServices" />
            {t("TITLE-CARD-TRES")}
          </h2>
          <span>{t("SPAN-CARD-DOS")}</span>
        </div>
        <div className="card">
          <span>{t("SPAN-CARD-TRES")}</span>
        </div>
      </div>

    <hr />

    </div>
  );
}
