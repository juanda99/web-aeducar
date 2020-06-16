import React, { useState } from 'react'
import { graphql, Link } from "gatsby"
import Chip from '@material-ui/core/Chip'

export default function RepositorioImagenes({ data }) {

  const [filters, setFilters] = useState([]);

  /* we get all the images, from "repositorio" dir */
  const images = data.allFile.edges.filter(({ node }) => {
    return node.relativeDirectory.indexOf("repositorio") !== -1
  })
  const allTags = []

  const toggleFilter = (value) => {
    console.log(`toggleFilte with value ${value}`)
    if (filters.indexOf(value) !== -1) {
      const newFilters = filters.filter(item => item !== value)
      setFilters(newFilters)
    } else {
      setFilters([...filters, value])
    }
  }



  const imagesWithTags = images.map(({ node }) => {
    const tags = node.relativeDirectory.split("/")
    const filterTags = tags.filter(tag => tag !== 'repositorio')
    filterTags.forEach(tag => {
      if (allTags.indexOf(tag) === -1) allTags.push(tag)
    });
    node.tags = filterTags;
    return node
  })


  const filteredImages = imagesWithTags.filter(image => filters.every(filter => image.tags.indexOf(filter) !== -1))

  const childElements = filteredImages.map((node) => (
    <img key={node.publicURL} src={node.publicURL} style={{ width: '200px', height: 'auto', margin: '20px' }} />
  ))

  return (
    <div>
      <h1>Repositorio de imágenes</h1>
      <p>Puedes filtrar los resultados utilizando seleccionando de las siguientes etiquetas:</p>
      {allTags.map(tag => (
        <Chip
          label={tag}
          style={filters.indexOf(tag) !== -1 ? { backgroundColor: 'red', margin: '5px' } : { backgroundColor: 'white', margin: '5px' }}
          onClick={() => toggleFilter(tag)}
          variant="outlined"
        />
      ))}
      <p>Hay un total de {filteredImages.length} imágenes</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {childElements}
      </div>
    </div>
  );
}

export const query = graphql`
  query {
      allFile {
      edges {
      node {
      relativePath
          relativeDirectory
          prettySize
          extension
          publicURL 
          birthTime(fromNow: true)
    }
      }
}
  }
`
