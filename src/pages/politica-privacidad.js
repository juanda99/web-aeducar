import React from 'react';
import Container from '@material-ui/core/Container';
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default function Index({ data }) {
  return (
    <div>
      <Container maxWidth="xs">
        <h1 style={{ textAlign: 'center' }}>
          <Img
            fluid={data.logoFluid.childImageSharp.fluid}
            alt="Captura pantalla plataforma educativa aeducar"
          />
        </h1>
      </Container>
      <Container maxWidth="lg">

        <h1>
          Política de privacidad
        </h1>

        <p>Los datos recogidos las distintas plataformas Aeducar del Gobierno de Aragón serán incorporados y tratados
        en el Registro de Actividades de Tratamiento de la Dirección General de Innovación y Formación Profesional
        "PROGRAMAS FORMACIÓN PROFESORADO". </p>
        <p>Sus datos personales serán tratados con el fin exclusivo de gestión de programas de formación permanente de la
        Dirección General de Innovación y Formación Profesional, y del Registro de formación permanente del profesorado,
        abarcando las reclamaciones en vía administrativa y judicial, así como solicitudes en materia de transparencia. </p>
        <p>El órgano responsable del Registro de Actividades de Tratamiento es la Dirección General de Innovación y Formación Profesional.
        La licitud del tratamiento de los datos es necesaria para el cumplimiento de una obligación legal aplicable al responsable del tratamiento.
        Estos datos no se cederán a terceros, salvo obligación legal. Podrá Ud. ejercer sus derechos de acceso, rectificación, supresión y portabilidad
        de datos de carácter personal, o de limitación y oposición a su tratamiento,   así como a no ser objeto de decisiones
        individualizadas automatizadas, a través de la sede electrónica de la Administración de la Comunidad Autónoma de Aragón con los formularios
        normalizados disponibles. Podrá consultar información adicional y detallada en el &nbsp;
        <a href="https://aplicaciones.aragon.es/notif_lopd_priv/searchTreatmentFiles.action" target="_blank">
            Registro de Actividades de Tratamiento del Gobierno de Aragón</a>, identificando la siguiente actividad de tratamiento: <strong>PROGRAMAS FORMACIÓN PROFESORADO</strong>.
        </p>
      </Container>
    </div >
  );
}

export const query = graphql` 
  query {
    logoFluid: file(relativePath: { eq: "aeducar.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }   
    },
  }
`
