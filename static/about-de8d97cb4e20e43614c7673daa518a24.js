import React from "react"
import Container from "../components/container"

export default () => {
    return (
        <Container>
            <p>A simple blog built using gatsbyjs.</p>
            <div style={{height: '500px', width: '250px', background: 'white'}}
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
        </Container>
    )
}
