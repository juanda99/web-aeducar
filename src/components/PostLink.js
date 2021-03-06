import React from "react"
import { Link } from "gatsby"
const PostLink = ({ key, post }) => {
  const date = new Date(post.frontmatter.date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div key={key}>
      <Link to={post.frontmatter.slug}>
        <h3>{post.frontmatter.title} ({date.toLocaleDateString('es-ES', options)}) </h3>
      </Link>
      <p>{post.excerpt}</p>
    </div>
  )
}
export default PostLink