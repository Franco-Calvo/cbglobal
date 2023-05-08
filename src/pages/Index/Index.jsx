import React from "react";
import Home from "../Home/Home";
import Nosotros from "../Nosotros/Nosotros";
import Contacto from "../Contacto/Contacto";
import Navbar from "../../components/Navbar";

export default function Index() {
  return (
    <>
      <Navbar/>
      <Home />
      {/* <Nosotros /> */}
      <Contacto />
    </>
  );
}
