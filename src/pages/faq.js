import React from "react"
import PostLink from "../components/PostLink"
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby'
const Noticias = ({
  data: {
    allMdx: { edges },
  },
}) => {
  console.log(edges, '*******************************************************');
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Container maxWidth="lg">
      <h1>Preguntas frecuentes</h1>
      {Posts}
    </Container>
  )
}
export default Noticias

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "es")
            slug
            title
          }
        }
      }
    }
  }
`