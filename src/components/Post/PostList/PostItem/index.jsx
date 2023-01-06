import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './postItem.module.scss';

const PostItem = ({
  post: {
    node: {
      fields: { slug },
      frontmatter: {
        title,
        date,
        summary,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  },
}) => {
  return (
    <Link className={styles.postItemWrapper} to={slug}>
      <GatsbyImage className={styles.thumbnail} image={gatsbyImageData} alt='Post thumbnail' />

      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.categoryWrapper}>
        {categories.map((category) => (
          <div className={styles.category}>{category}</div>
        ))}
      </div>
    </Link>
  );
};

export default PostItem;
