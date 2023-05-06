import React from "react";
import { Link as Anchor } from "react-router-dom";
import Logo from "../images/CB Global..png";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo CB Global" />

      <div className="container-nav">
        <Anchor className="anchor">Inicio</Anchor>
        <Anchor className="anchor">Nosotros</Anchor>
        <Anchor className="anchor">Contacto</Anchor>
      </div>

      <Anchor className="button-contact">Contáctanos</Anchor>
    </div>
  );
}
