import { graphql } from 'gatsby';

import PageTemplate from '../templates/PageTemplate';
import PostTemplate from '../templates/PostTemplate';

const PostPage = ({
  data: {
    allPosts,
    thisPost,
    profileImage: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  return (
    <PageTemplate posts={allPosts.edges} profileImage={gatsbyImageData}>
      <PostTemplate post={thisPost.edges[0]} />
    </PageTemplate>
  );
};

export default PostPage;

export const getPostListByTwoType = graphql`
  query getPostListByTwoType($slug: String) {
    allPosts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
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
    thisPost: allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    profileImage: file(name: { eq: "profile_test" }) {
      childImageSharp {
        gatsbyImageData(width: 150, height: 150)
      }
    }
  }
`;
