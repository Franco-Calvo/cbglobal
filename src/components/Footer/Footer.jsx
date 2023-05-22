import React from "react";
import { Link as Anchor } from "react-router-dom";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
import { Trans, useTranslation } from "react-i18next";

export default function Footer() {
  const { t, changeLanguage, i18n } = useTranslation("globals");

  return (
    <div className="container-footer">
      <div className="footer-title">
        <h2 className="footer-h">CB Global.</h2>
      </div>

      <div className="footer-about">
        <div className="box-about">
          <div className="box-soicons">
            <div className="about-links">
              <Link
                to="seccion-1"
                smooth={true}
                duration={500}
                className="anchorF"
              >
                {" "}
                {t("NAV-INICIO")}
              </Link>
              <Link
                to="seccion-2"
                smooth={true}
                duration={500}
                className="anchorF"
              >
                {t("NAV-NOSOTROS")}
              </Link>
              <Link
                to="seccion-3"
                smooth={true}
                duration={500}
                className="anchorF"
              >
                {t("NAV-CONTACTO")}
              </Link>
            </div>
          </div>

          <div className="about-rights">
            <p className="p-rights">
              &copy; CB Global - 2023 - {t("DERECHOS")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
