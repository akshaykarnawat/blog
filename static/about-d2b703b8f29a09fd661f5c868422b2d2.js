import React from "react"
import Container from "../components/container"

export default () => {
    return (
        <Container>
            <p>A simple blog built using gatsbyjs.</p>
            <br/><br/>
            {/* add placed below */}
            <center>
                <div style={{height: '250px', width: '300px'}}
                    dangerouslySetInnerHTML={{
                        __html: `   
                        <script type="text/javascript">
                        ( function() {
                            if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
                            var unit = {"calltype":"async[2]","publisher":"akarnawat","width":300,"height":250,"sid":"Chitika Default"};
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
        </Container>
    )
}
