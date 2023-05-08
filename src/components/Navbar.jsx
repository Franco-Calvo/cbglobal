import React, { useState } from "react";
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

  return (
    <>
      <div
        className={isButton ? "buttonBlue" : "buttonNav"}
        onClick={handleToggleNav}
      >
        <FaBars />
      </div>

      <div className={isOpen ? "navbarClosed" : "navbar"}>
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
        </div>

        <Anchor className="button-contact">Contáctanos</Anchor>
      </div>
    </>
  );
}
