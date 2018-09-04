import React from "react"
import Container from "../components/container"

export default () => {
    return(  
    <Container>
        <p>A simple blog built using gatsbyjs.</p>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                        <script>
                            var name = 'world';
                            console.log(name);
                        </script>
                    `,
            }}
        />
    </Container>
)
