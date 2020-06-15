import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Paper from '@material-ui/core/Paper'
import logo from '../images/logo-gobierno-aragon.svg'

export default function Header() {

  const data = useStaticQuery(graphql`
  query {
    banda: file(relativePath: { eq: "banda.png" }) {
      childImageSharp {
        # Specify the image processing specifigcations right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid (maxWidth: 663) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
  }
`)

  return (
    <Paper elevation={7} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px', background: "url('banda.png') no-repeat" }}>
      {/* <div style={{ width: '50%', maxWidth: '663px', backgroundImage: url("banda.png"); }}>
        <Img alt='' fluid={data.banda.childImageSharp.fluid} />
      </div> */}
      <div style={{ position: 'absolute', top: '16px', right: '20px' }}>
        <img alt='Gobierno de Aragón' src={logo} style={{ width: 167, height: 40 }} />
      </div>
    </Paper>
  );
}

