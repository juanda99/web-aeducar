import React from "react"
import { Link } from "gatsby"
const PostLink = ({ key, post }) => (
  <div key={key}>
    <Link to={post.frontmatter.slug}>
      <h3>{post.frontmatter.title} ({post.frontmatter.date})</h3>
    </Link>
    <p>{post.excerpt}</p>
  </div>
)
export default PostLink