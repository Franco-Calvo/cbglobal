import React from "react";
import "./nosotros.css";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useRef } from "react";
import Navbar from "../../components/Navbar";

export default function Nosotros() {
  const productRef = useRef(null);
  return (
    <div productRef={productRef} ref={productRef} className="HomeNosotros">
      <div className="nosotros-title">
        <h2 className="title-one">Sobre</h2>
        <h2 className="title-two">Nosotros</h2>
      </div>

      <div className="nosotros-container">
        <div className="nosotros-contenid">
          <span>
            Somos una organización comprometida en brindar soluciones
            financieras a nuestros clientes, basadas en la excelencia, la
            transparencia y el compromiso.
          </span>
          <span>
            Contamos con un equipo de expertos altamente calificados en
            finanzas, inversiones y seguros, con años de experiencia en el
            sector financiero. Nuestra capacidad para entender las necesidades
            de nuestros clientes y crear soluciones personalizadas nos distingue
            de la competencia.
          </span>

          <span>
            En nuestra empresa, valoramos la integridad y la transparencia en
            todo lo que hacemos. Trabajamos diligentemente para asegurarnos de
            que nuestros clientes comprendan completamente sus opciones
            financieras y las consecuencias de cada una de ellas.
          </span>
        </div>
      </div>

      <div className="nosotros-cards">
        <div className="card">
          <h2>
            <TbTargetArrow className="TbTargetArrow" /> Mision
          </h2>
          <span>
            Estamos comprometidos en construir relaciones a largo plazo con
            nuestros clientes, basadas en la confianza y el respeto mutuo. Nos
            enorgullece nuestra capacidad para ayudar a nuestros clientes a
            alcanzar sus objetivos financieros y estamos ansiosos de trabajar
            con usted para hacer lo mismo.
          </span>
        </div>
        <div className="card">
          <h2>
            <MdOutlineMiscellaneousServices className="MdOutlineMiscellaneousServices" />
            Servicios
          </h2>
          <span>
            Nuestro objetivo es ofrecer una amplia gama de servicios financieros
            a individuos y empresas, incluyendo asesoramiento financiero
            personalizado, planificación de jubilación, inversión en el mercado
            de valores, gestión de activos, seguros, y mucho más.
          </span>
        </div>
        <div className="card">
          <span>
            Gracias por considerar nuestra empresa para sus necesidades
            financieras. Esperamos tener la oportunidad de ayudarle a alcanzar
            sus objetivos financieros y alcanzar la estabilidad financiera que
            busca.
          </span>
        </div>
      </div>
    </div>
  );
}
