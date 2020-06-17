// use for generating /src/faq mdx files, called from gatsby-node.js
import React from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import { MDXRenderer } from 'gatsby-plugin-mdx';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.markdownRemark holds your post data
  console.log(data)
  const { frontmatter, body } = mdx
  return (
    <Container maxWidth="md">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <MDXRenderer>{body}</MDXRenderer>
      </div>

    </Container>

  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "es")
        slug
        title
      }
    }
  }
`
