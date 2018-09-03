const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: '' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  } else if (node.extension === 'html') {
    const slug = createFilePath({ node, getNode, basePath: 'notebook' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  } else {
    undefined
  }

}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile {
          edges {
            node {
              relativePath
              extension
              publicURL,
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allFile.edges.filter(function( item ) {
        if (item.node.extension === 'html') {
          return item
        }
      }).forEach(({ node }) => {
        createPage({
          path: node.relativePath.replace(node.extension, '').replace('.', ''),
          component: path.resolve('./src/templates/blog-post-html.js'),
          context: {
            rPath: node.relativePath,
          }
        })
      })
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}