import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/container"
import PostStyle from "../stylesheets/post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Container>
        <Link to="/" className={PostStyle.homeBtn}> &larr; Home</Link>
        <div className={PostStyle.main}>
          <h2>{post.frontmatter.title}</h2>
          <span style={{fontSize: '13px'}}>Tags: </span>
          {post.frontmatter.tags.split(',').map((tag) => (
            <span key={tag} className={PostStyle.tag}>{tag}</span>
          ))}
          <br/>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <br/><br/>
        </div>
      </Container>
    </div>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      tags
    }
  }
}
`