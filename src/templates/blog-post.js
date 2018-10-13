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
          {/* add placement below */}
          <center>
          <div style={{height: '250px', width: '300px'}}
            dangerouslySetInnerHTML={{
              __html: `   
              <script type="text/javascript">
              ( function() {
                if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
                var unit = {"calltype":"async[2]","publisher":"akarnawat","width":300,"height":250,"sid":"` + post.frontmatter.tags + `,"};
                var placement_id = window.CHITIKA.units.length;
                window.CHITIKA.units.push(unit);
                document.write('<div id="chitikaAdBlock-' + placement_id + '"></div>');
              }());
              </script>
              <script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>
              `,
              }}
            />
          </center>
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