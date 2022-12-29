import { graphql } from 'gatsby';

import PageTemplate from '../templates/PageTemplate';
import ContentTemplate from '../templates/ContentTemplate';
import PostList from 'components/Post/PostList';

import { page } from './index.module.scss';
import '../styles/index.scss';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <main className={page}>
      <PageTemplate posts={edges}>
        <ContentTemplate>
          <PostList posts={edges} count={9} />
        </ContentTemplate>
      </PageTemplate>
    </main>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 768)
              }
            }
          }
        }
      }
    }
  }
`;
