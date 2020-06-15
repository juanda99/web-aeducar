import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SearchSchool from '../components/SearchSchool'
import logo from '../images/logo-aeducar.svg'


export default function Index({ data }) {
  return (
    <div>
      <h1>Aeducar</h1>
      <img src={logo} style={{ width: 357, height: 40 }} />
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Captura pantalla aeducar"
      />
      <h2>¿Qué es aeducar?</h2>
      <p>Es la plataforma de docencia online del Departamento de Educación, Cultura y Deporte del Gobierno de Aragón.
      Ha sido creada por docentes para toda la comunidad educativa.
        Pretende ser una herramienta segura que dote de continuidad a la docencia online en todas las etapas educativas.</p>

      <h2>Acceder a aeducar</h2>
      <SearchSchool />
    </div>
  );
}

export const query = graphql` 
  query {
    file(relativePath: { eq: "captura-portatil-aeducar.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
