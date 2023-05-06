import React from "react";
import "./nosotros.css";
import imgOne from "../../images/us-one.png";
import imgTwo from "../../images/us-two.png";
import imgThree from "../../images/us-three.png";
import imgFour from "../../images/us-four.png";

export default function Nosotros() {
  return (
    <div className="HomeNosotros">
      <div className="us-title">
        <h2>Nosotros</h2>
      </div>
      <div className="us-p">
        <span>
          • Contamos con un equipo de expertos altamente calificados en
          finanzas, inversiones y seguros, con años de experiencia en el sector
          financiero. Nuestra capacidad para entender las necesidades de
          nuestros clientes y crear soluciones personalizadas nos distingue de
          la competencia.
        </span>

        <span>
          • En nuestra empresa, valoramos la integridad y la transparencia en
          todo lo que hacemos. Trabajamos diligentemente para asegurarnos de que
          nuestros clientes comprendan completamente sus opciones financieras y
          las consecuencias de cada una de ellas.
        </span>

        <span>
          • Estamos comprometidos en construir relaciones a largo plazo con
          nuestros clientes, basadas en la confianza y el respeto mutuo. Nos
          enorgullece nuestra capacidad para ayudar a nuestros clientes a
          alcanzar sus objetivos financieros y estamos ansiosos de trabajar con
          usted para hacer lo mismo.
        </span>

        <span>
          • Gracias por considerar nuestra empresa para sus necesidades
          financieras. Esperamos tener la oportunidad de ayudarle a alcanzar sus
          objetivos financieros y alcanzar la estabilidad financiera que busca.
        </span>
      </div>
    </div>
  );
}
