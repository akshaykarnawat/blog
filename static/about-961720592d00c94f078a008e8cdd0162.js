import React from "react"
import Container from "../components/container"


export default class HTML extends React.Component {
    render() {
      return (
        <html {...this.props.htmlAttributes}>
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600" rel="stylesheet"></link>
            {this.props.headComponents}
          </head>
          <body {...this.props.bodyAttributes}>
            {this.props.preBodyComponents}
            <div
              key={`body`}
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
          </body>
          <script
                dangerouslySetInnerHTML={{
                    __html: `
                                var name = 'world';
                                console.log(name);
                            `,
                }}
            />
        </html>
      )
    }
  }
