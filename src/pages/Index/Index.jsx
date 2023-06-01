import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Nosotros from "../Nosotros/Nosotros";
import Contacto from "../Contacto/Contacto";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/ModalHome/Modal";

export default function Index() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setShowModal(true);
      localStorage.setItem("visited", true);
    }
  }, []);

  function handleCloseModal(value) {
    setShowModal(value);
  }
  return (
    <>
      {showModal ? (
        <Modal onClose={handleCloseModal} />
      ) : (
        <>
          <Navbar />
          <Home />
          <Nosotros />
          <Contacto />
          <Footer />
        </>
      )}
    </>
  );
}
