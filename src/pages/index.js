import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SearchSchool from '../components/SearchSchool'
import logo from '../images/logo-aeducar.svg'


export default function Index({ data }) {
  return (
    <div>
      <h1>Aeducar</h1>
      <h2>Plataforma de docencia online del Departamento de Educación, Cultura y Deporte del Gobierno de Aragón.</h2>
      <img src={logo} style={{ width: 357, height: 40 }} />
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Captura pantalla aeducar"
      />
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
