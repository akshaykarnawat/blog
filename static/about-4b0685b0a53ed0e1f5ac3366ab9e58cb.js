import React from "react"
import Container from "../components/container"

export default () => {
    retun (
        <Container>
            <p>A simple blog built using gatsbyjs.</p>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                                var name = 'world';
                                console.log(name);
                            `,
                }}
            />
        </Container>
    )
}
