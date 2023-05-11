import React, { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import Logo from "../images/CB Global..png";
import LogoBlanco from "../images/CB Global White. (1).png";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";

export default function Navbar({ productRef }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isButton, setIsButton] = useState(true);
  const { t } = useTranslation();

  function handleToggleNav() {
    setIsButton(!isButton);
    setIsOpen(!isOpen);
  }

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setLightMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setLightMode();
    else setDarkMode();
  };

  setDarkMode();

  const scrollToNextView = (e) => {
    e.preventDefault();
    productRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToUp = () => {
    const scrollStep = window.scrollY / 15;
    const scrollInterval = window.requestAnimationFrame(() => {
      if (window.scrollY !== 0) {
        window.scrollTo(0, window.scrollY - scrollStep);
        scrollToUp();
      } else {
        window.cancelAnimationFrame(scrollInterval);
      }
    });
  };

  return (
    <>
      <div
        className={isButton ? "buttonBlue" : "buttonNav"}
        onClick={handleToggleNav}
      >
        <FaBars className="FaBars"/>
      </div>

      <div className={isOpen ? "navbarClosed" : "navbar"}>
        <img src={Logo} className="logo-blue" alt="Logo CB Global" />
        <div className="containerLogo">
          <img src={LogoBlanco} className="logo-white" alt="Logo CB Global" />
        </div>

        <div className="container-nav">
          <Anchor onClick={scrollToUp} className="anchor">
            {t(navbar.NAVINICIO)}
            <FaChevronRight className="arrow-right" />
          </Anchor>
          <Anchor onClick={scrollToNextView} className="anchor">
            Nosotros
            <FaChevronRight className="arrow-right" />
          </Anchor>
          <Anchor onClick={scrollToNextView} className="anchor">
            Contacto
            <FaChevronRight className="arrow-right" />
          </Anchor>
          <div className="anchor">
            <form className="form">
              <label for="01">Modo Oscuro</label>
              <input onClick={toggleTheme} id="01" type="button" />
            </form>
          </div>
        </div>

        <div className="buttons-container">
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                onClick={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>
          <Anchor className="button-contact">Contáctanos</Anchor>
        </div>
      </div>
    </>
  );
}
