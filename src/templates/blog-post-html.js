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
                    <br/><br/>
                    {/* add placement below */}
                    <div style={{height: '250px', width: '500px'}}
                        dangerouslySetInnerHTML={{
                            __html: `   
                                    <script type="text/javascript">
                                        ( function() {
                                        if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
                                        var unit = {"calltype":"async[2]","publisher":"akarnawat","width":550,"height":250,"sid":"Chitika Default"};
                                        var placement_id = window.CHITIKA.units.length;
                                        window.CHITIKA.units.push(unit);
                                        document.write('<div id="chitikaAdBlock-' + placement_id + '"></div>');
                                        }());
                                    </script>
                                    <script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>
                                    `,
                        }}
                    />
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