import React, { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import Logo from "../images/CB Global..png";
import LogoBlanco from "../images/CB Global White. (1).png";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isButton, setIsButton] = useState(true);

    function handleToggleNav(){
      setIsButton(!isButton) 
      setIsOpen(!isOpen)
    }

    console.log(isOpen)

  return (
    <>

    <button className={`buttonClosed ${isButton && "buttonNav"}`} onClick={handleToggleNav}>
      <FaBars/>
    
  
    <div className={`navbar ${isOpen && "navbarClose"}`}>
      <img src={Logo} className="logo-blue" alt="Logo CB Global" />
      <img src={LogoBlanco} className="logo-white" alt="Logo CB Global" />

      <FaChevronLeft className="arrow-left" />
    

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
    </button>
    </>
  
  );
}
