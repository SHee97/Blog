/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        styles: path.resolve(__dirname, 'src/styles'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        pages: path.resolve(__dirname, 'src/pages'),
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  const PostTemplateComponent = path.resolve(__dirname, 'src/pages/PostPage.jsx');

  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    };

    createPage(pageOptions);
  };

  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage);
};
