import React, { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import Logo from "../images/CB Global..png";
import LogoBlanco from "../images/CB Global White. (1).png";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isButton, setIsButton] = useState(true);

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

  return (
    <>
      <div
        className={isButton ? "buttonBlue" : "buttonNav"}
        onClick={handleToggleNav}
      >
        <FaBars />
      </div>

      <div className={isOpen ? "navbarClosed" : "navbar" && "dark-mode"}>
        <img src={Logo} className="logo-blue" alt="Logo CB Global" />
        <div className="containerLogo">
          <img src={LogoBlanco} className="logo-white" alt="Logo CB Global" />
        </div>

        <div className="container-nav">
          <Anchor className="anchor">
            Inicio
            <FaChevronRight className="arrow-right" />
          </Anchor>
          <Anchor className="anchor">
            Nosotros
            <FaChevronRight className="arrow-right" />
          </Anchor>
          <Anchor className="anchor">
            Contacto
            <FaChevronRight className="arrow-right" />
          </Anchor>
          <div className="anchor-theme">
            <form className="form">
              <label for="01">Modo Oscuro</label>
              <input id="01" type="button" />
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
