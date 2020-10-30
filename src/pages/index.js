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
          alt="Captura pantalla plataforma educativa Aeducar"
        />
        <h2 style={{ textAlign: 'center' }}>Acceder  a Aeducar</h2>
      </Container>
      <p style={{ textAlign: 'center' }}><em>Si tu centro no aparece en la lista es porque todavía no ha solicitado   la plataforma Aeducar.</em></p>
      <SearchSchool />

      <h2 style={{ textAlign: 'center', marginTop: '50px' }}>¿Qué es Aeducar?</h2>
      <Img
        fluid={data.aeducarDesc.childImageSharp.fluid}
        alt="Captura pantalla plataforma educativa Aeducar"
      />

    </div>
  );
}

export const query = graphql` 
  query {
    computerImage: file(relativePath: { eq: "captura-portatil-aeducar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }  
    },
    aeducarDesc: file(relativePath: { eq: "aeducar-description.png" }) {
      childImageSharp {
        fluid {
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
