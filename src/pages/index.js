import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Container from '@material-ui/core/Container';
import SearchSchool from '../components/SearchSchool'


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
      <Container maxWidth="md">
        <h2 style={{ textAlign: 'center', fontWeight: '200', fontStyle: 'italic' }}>Plataforma educativa del Departamento de Educación, Cultura y Deporte del Gobierno de Aragón.</h2>



        <Img
          fluid={data.computerImage.childImageSharp.fluid}
          alt="Captura pantalla plataforma educativa aeducar"
        />
        <h2 style={{ textAlign: 'center' }}>Acceder a aeducar</h2>
        <SearchSchool />
      </Container>
    </div>
  );
}

export const query = graphql` 
  query {
    computerImage: file(relativePath: { eq: "captura-portatil-aeducar.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }   
    },
    logoAeducar: file(relativePath: { eq: "aeducar.png" }) {
        childImageSharp {
          fixed(width: 257, height: 29) {
            ...GatsbyImageSharpFixed
          }
        }
      },
    logoFluid: file(relativePath: { eq: "aeducar.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }   
    },
  }
`
