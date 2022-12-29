import { graphql, Link } from 'gatsby';

import PostList from 'components/Post/PostList';

import * as styles from './404.module.scss';

const NotFoundPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <main className={styles.page}>
      <span className={styles.message}>해당 페이지를 찾을 수 없습니다.</span>
      <Link className={styles.toMain} to='/'>
        메인으로
      </Link>
      <div className={styles.postListWrapper}>
        <PostList posts={edges} count={3} />
      </div>
    </main>
  );
};

export default NotFoundPage;

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
