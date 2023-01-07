import { useStaticQuery, graphql } from 'gatsby';

import Profile from './Profile/index';

import * as styles from './sidebar.module.scss';
import CategoryList from './CategoryList/index';

const Sidebar = () => {
  const {
    allCategories: { edges },
    profileImage: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(graphql`
    query {
      allCategories: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
        edges {
          node {
            frontmatter {
              categories
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
  `);

  return (
    <aside className={styles.sidebar}>
      <Profile profileImage={gatsbyImageData} />
      <CategoryList posts={edges} />
    </aside>
  );
};

export default Sidebar;
