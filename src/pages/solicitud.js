import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Solicitud({ data }) {
  return (
    <div>
      <h1>Alta en aeducar</h1>
      <h2>¿Quién lo puede solicitar?</h2>
      <p>Cualquier centro público o concertado de la comunidad autónoma de Aragón, a través del director del centro educativo.</p>
      <h2>¿Cuándo se solicita'</h2>
      <p>El plazo de solicitudes está abierto permanentemente. Las primeras solicitudes se recogen a partir del 18 de junio de 2020
      y se resolverán a final de junio. El resto de solicitudes se resolverán conforme se vayan produciendo, a partir de septiembre.</p>

      <p>Las solicitudes se realizan desde la <a href="https://paddoc.aragon.es/" target="_blank">plataforma PADDOC</a> por el director del centro, rellenando un formulario. Es necesaria la figura de un
      gestor de aeducar en el centro educativo, será quien resuelva las dudas de los profesores del centro. Contará siempre
      con la asesoría del centro de profesores de referencia.</p>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Solicitudes aeducar"
      />
    </div>
  )
}

export const query = graphql` 
  query MyQuery {
    file(relativePath: { eq: "solicitud-aeducar.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`