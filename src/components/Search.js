import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Colegios from '../data/colegios';

export default function Search() {

  const data = useStaticQuery(graphql`
  query {
    aeducar: file(relativePath: { eq: "aeducar.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 357, height: 40) {
          ...GatsbyImageSharpFixed
        }
      } 
    } 
  }
`)

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', backgroundColor: 'gainsboro', marginTop: '30px', padding: '20px' }}>
      <div style={{ width: '50%', maxWidth: '663px' }}>
        <Img fixed={data.aeducar.childImageSharp.fixed} />
      </div>
      <div>
        <Autocomplete
          id="combo-box-demo"
          options={Colegios}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Selecciona tu centro" />}
        />
        <Button variant="contained" color="primary">
          Primary
      </Button>

      </div>
    </div>
  );
}

