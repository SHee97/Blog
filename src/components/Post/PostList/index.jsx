import { useStaticQuery, graphql } from 'gatsby';

import PostItem from './PostItem';

import * as styles from './postList.module.scss';

const PostList = ({ count }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              summary
              date(formatString: "YYYY.MM.DD")
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
  `);

  return (
    <section className={styles.postListWrapper}>
      <div className={styles.header}>
        <h2>최근 포스팅</h2>
        <div className={styles.dropdown}>최신순</div>
      </div>
      <div className={styles.postList}>
        {edges.slice(0, count).map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
