import React from "react"
import { Link, graphql } from "gatsby"

import Container from "../components/container"
import IndexStyle from "../stylesheets/index.module.css"

export default ({ data }) => {
    return (
        <div>
            <Container>
                <br/>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className={IndexStyle.post}>
                        <Link to={node.fields.slug} className={IndexStyle.slug}>
                            <h3>
                                {node.frontmatter.title}{" "}
                                <span>— {node.frontmatter.date}</span>
                            </h3>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
                <br/>
                {data.allFile.edges.map(({ node }) => (
                    <div key={node.id} className={IndexStyle.post} style={{borderTop: '5px solid #355E7C'}}>
                        <Link to={node.relativePath.replace(node.extension, '').replace('.', '')} 
                        className={IndexStyle.slug}>
                            <h3>
                                {node.relativePath.replace(node.extension, '').replace('.', '').replace('/', ': ').replace(/_/g, ' ')}{" "}
                                <span>— {node.birthTime}</span>
                            </h3>
                        </Link>
                    </div>
                ))}
            </Container>
        </div>
    )
}


export const query = graphql`
  query {
    allFile(filter: { extension : { eq: "html" } } ) {
        edges {
            node {
                id
                relativePath,
                extension,
                birthTime(formatString: "DD MMMM, YYYY")
            }
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`