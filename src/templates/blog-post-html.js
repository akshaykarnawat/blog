import React from "react"
import { Link, graphql } from "gatsby"
import { withPrefix } from "gatsby-link";
import Container from "../components/container"
import PostStyle from "../stylesheets/post.module.css"


export default ({ data }) => {
    const post = data.allFile.edges[0].node
    return (
        <div>
            <Container>
            <Link to="/" className={PostStyle.homeBtn}> &larr; Home</Link>
                <div className={PostStyle.main}>
                    <h2>{post.relativePath.replace('.html', '').replace(/notebook\//g, '').replace(/_/g, ' ').toUpperCase()}</h2>
                    <div className={PostStyle.iframecontainer}>
                        <iframe title={post.relativePath} src={withPrefix(post.publicURL)} frameBorder="0" 
                        width="100%" height="auto" className={PostStyle.iframe}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export const query = graphql`
query($rPath: String!) {
    allFile(filter: { relativePath: { eq: $rPath } } ) {
        edges {
            node {
                relativePath,
                extension,
                publicURL
          }
        }
    }
}
`