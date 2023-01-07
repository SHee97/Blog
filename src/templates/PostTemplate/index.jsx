import { graphql } from 'gatsby';

import PageTemplate from '../PageTemplate';
import PostHeader from 'components/Post/PostHeader';
import PostContent from 'components/Post/PostContent';

import * as styles from './postTemplate.module.scss';

const PostTemplate = ({
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html,
            frontmatter: { title, date },
          },
        },
      ],
    },
  },
}) => {
  return (
    <PageTemplate>
      <section className={styles.postTemplate}>
        <PostHeader title={title} date={date} />
        <PostContent html={html} />
      </section>
    </PageTemplate>
  );
};

export default PostTemplate;

export const getPostData = graphql`
  query ($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
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
  }
`;
